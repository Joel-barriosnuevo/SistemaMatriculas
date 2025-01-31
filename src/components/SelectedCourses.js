import React from "react"

const SelectedCourses = ({ courses, onRemove, onConfirm }) => {
  const totalCredits = courses.reduce((sum, course) => sum + course.creditos, 0)

  return (
    <div className="selected-courses">
      <h2>Cursos Seleccionados</h2>
      {courses.map((course) => (
        <div key={course.id}>
          <span>
            {course.nombre} ({course.creditos} créditos)
          </span>
          <button onClick={() => onRemove(course.id)}>Eliminar</button>
        </div>
      ))}
      <p>Total de créditos: {totalCredits}</p>
      <button onClick={onConfirm} disabled={courses.length === 0}>
        Confirmar Matrícula
      </button>
    </div>
  )
}

export default SelectedCourses




