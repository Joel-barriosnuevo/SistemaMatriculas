import { useState, useEffect } from "react"
import coursesData from "../data/courses.json"
import studentData from "../data/student.json"
import { validateCourseSelection } from "../utils/validations"

export const useMatriculacion = () => {
  const [courses, setCourses] = useState([])
  const [student, setStudent] = useState(null)
  const [selectedCourses, setSelectedCourses] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    setCourses(coursesData)
    setStudent(studentData)
  }, [])

  const selectCourse = (course) => {
    const validationError = validateCourseSelection(course, student, selectedCourses)
    if (validationError) {
      setError(validationError)
      return
    }

    setSelectedCourses([...selectedCourses, course])
    setError(null)
  }

  const removeCourse = (courseId) => {
    setSelectedCourses(selectedCourses.filter((course) => course.id !== courseId))
  }

  const confirmMatricula = () => {
    localStorage.setItem("matricula", JSON.stringify(selectedCourses))
    alert("Matrícula confirmada y guardada en localStorage")
  }

  return {
    courses,
    student,
    selectedCourses,
    error,
    selectCourse,
    removeCourse,
    confirmMatricula,
  }
}

