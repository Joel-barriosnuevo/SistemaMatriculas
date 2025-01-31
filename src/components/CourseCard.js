import React from "react"

const CourseCard = ({ course, isSelected, onSelect, onRemove }) => {
  const availableSpots = course.limiteCupos - course.matriculados

  return (
    <div className={`card h-100 ${isSelected ? "border-primary" : ""}`}>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{course.nombre}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{course.codigo}</h6>
        <p className="card-text">
          <strong>Semestre:</strong> {course.semestre}
          <br />
          <strong>Créditos:</strong> {course.creditos}
          <br />
          <strong>Cupos disponibles:</strong> {availableSpots}
        </p>
        <div className="mt-auto">
          {isSelected ? (
            <button className="btn btn-outline-danger w-100" onClick={() => onRemove(course.id)}>
              Eliminar del horario
            </button>
          ) : (
            <button className="btn btn-primary w-100" onClick={() => onSelect(course)} disabled={availableSpots === 0}>
              {availableSpots === 0 ? "Sin cupos" : "Agregar al horario"}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CourseCard

