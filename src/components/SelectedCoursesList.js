const SelectedCoursesList = ({ selectedCourses, onRemoveCourse, onConfirm }) => {
    const totalCredits = selectedCourses.reduce((sum, course) => sum + course.creditos, 0)
  
    return (
      <div className="card">
        <div className="card-header bg-primary text-white">Cursos Seleccionados</div>
        <ul className="list-group list-group-flush">
          {selectedCourses.map((course) => (
            <li key={course.id} className="list-group-item d-flex justify-content-between align-items-center">
              {course.nombre} ({course.creditos} créditos)
              <button className="btn btn-sm btn-danger" onClick={() => onRemoveCourse(course.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <div className="card-footer">
          <p>Total de créditos: {totalCredits}</p>
          <button className="btn btn-success w-100" onClick={onConfirm} disabled={selectedCourses.length === 0}>
            Confirmar Matrícula
          </button>
        </div>
      </div>
    )
  }
  
  export default SelectedCoursesList
  
  