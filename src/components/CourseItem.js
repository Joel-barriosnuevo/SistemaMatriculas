import React from "react"

const CourseItem = ({ course, onSelect, isSelected }) => {
  const availableSpots = course.limiteCupos - course.matriculados

  return (
    <div className="course-item">
      <h3>{course.nombre}</h3>
      <p>Código: {course.codigo}</p>
      <p>Créditos: {course.creditos}</p>
      <p>Cupos disponibles: {availableSpots}</p>
      <button onClick={() => onSelect(course)} disabled={isSelected || availableSpots === 0}>
        {isSelected ? "Seleccionado" : "Seleccionar"}
      </button>
    </div>
  )
}

export default CourseItem;

