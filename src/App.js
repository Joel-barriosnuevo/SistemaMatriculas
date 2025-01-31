import { useState, useEffect } from "react"
import Login from "./components/Login"
import NotEnrolled from "./components/NotEnrolled"
import CourseList from "./components/CourseList"
import SemesterFilter from "./components/SemesterFilter"
import SelectedCoursesList from "./components/SelectedCoursesList"
import ConfirmationModal from "./components/confimacionModal"
import { generatePDF } from "./utils/pdfGenerator"
import { saveMatricula, getMatricula } from "./utils/localStorage"
import coursesData from "./data/courses.json"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [student, setStudent] = useState(null)
  const [selectedSemester, setSelectedSemester] = useState("all")
  const [courses, setCourses] = useState(coursesData)
  const [selectedCourses, setSelectedCourses] = useState([])
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)
  const [selectedCredits, setSelectedCredits] = useState(0)
  const [showNotEnrolled, setShowNotEnrolled] = useState(false)

  useEffect(() => {
    if (student) {
      setSelectedSemester(student.semestre.toString())
      const savedMatricula = getMatricula(student.id)
      if (savedMatricula) {
        setSelectedCourses(savedMatricula.courses)
      }
    }
  }, [student])

  useEffect(() => {
    if (selectedSemester === "all") {
      setCourses(coursesData)
    } else {
      setCourses(coursesData.filter((course) => course.semestre === Number.parseInt(selectedSemester)))
    }
  }, [selectedSemester])

  useEffect(() => {
    const totalCredits = selectedCourses.reduce((sum, course) => sum + course.creditos, 0)
    setSelectedCredits(totalCredits)
  }, [selectedCourses])

  const handleLogin = (studentData) => {
    setIsLoggedIn(true)
    setStudent(studentData)
  }

  const handleNotEnrolled = (studentData) => {
    setStudent(studentData)
    setShowNotEnrolled(true)
  }

  const handleBackToLogin = () => {
    setStudent(null)
    setShowNotEnrolled(false)
  }

  const selectCourse = (course) => {
    if (selectedCourses.some((c) => c.id === course.id)) {
      return
    }
    if (course.semestre !== student.semestre) {
      alert("No puedes seleccionar cursos de otros semestres.")
      return
    }
    const totalCredits = selectedCredits + course.creditos
    if (totalCredits > student.creditosPermitidos) {
      alert("No puedes seleccionar este curso. Excederías tu límite de créditos.")
      return
    }
    setSelectedCourses([...selectedCourses, course])
  }

  const removeCourse = (courseId) => {
    setSelectedCourses(selectedCourses.filter((c) => c.id !== courseId))
  }

  const handleConfirmMatricula = () => {
    setShowConfirmationModal(true)
  }

  const handleFinalConfirmation = () => {
    saveMatricula(student.id, selectedCourses)
    generatePDF(student, selectedCourses)
    alert("Matrícula confirmada con éxito! Se ha guardado y se ha descargado un PDF con tu matrícula.")
    setShowConfirmationModal(false)
  }

  const handleDownloadPDF = () => {
    generatePDF(student, selectedCourses)
    alert("Se ha descargado un PDF con tu matrícula.")
  }

  if (!isLoggedIn && !showNotEnrolled) {
    return <Login onLogin={handleLogin} onNotEnrolled={handleNotEnrolled} />
  }

  if (showNotEnrolled) {
    return <NotEnrolled student={student} onBack={handleBackToLogin} />
  }

  return (
    <div className="app-container">
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#051C2C" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Sistema de Matriculación
          </a>
          {student && (
            <span className="navbar-text">
              Bienvenido, {student.nombre} | Semestre: {student.semestre} | Créditos seleccionados: {selectedCredits} /{" "}
              {student.creditosPermitidos}
            </span>
          )}
        </div>
      </nav>

      <div className="container mt-4">
        <h1 className="text-center mb-4">Cursos Disponibles</h1>

        <SemesterFilter
          selectedSemester={selectedSemester}
          onSemesterChange={setSelectedSemester}
          studentSemester={student.semestre}
        />

        <div className="row">
          <div className="col-md-8">
            <CourseList
              courses={courses}
              selectedCourses={selectedCourses}
              onSelectCourse={selectCourse}
              onRemoveCourse={removeCourse}
            />
          </div>
          <div className="col-md-4">
            <SelectedCoursesList
              selectedCourses={selectedCourses}
              onRemoveCourse={removeCourse}
              onConfirm={handleConfirmMatricula}
            />
          </div>
        </div>
      </div>

      <ConfirmationModal
        show={showConfirmationModal}
        courses={selectedCourses}
        onConfirm={handleFinalConfirmation}
        onCancel={() => setShowConfirmationModal(false)}
        onDownloadPDF={handleDownloadPDF}
      />
    </div>
  )
}

export default App

