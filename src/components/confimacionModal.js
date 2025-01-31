
const ConfirmationModal = ({ show, courses, onConfirm, onCancel, onDownloadPDF }) => {
  if (!show) {
    return null
  }

  const totalCredits = courses.reduce((sum, course) => sum + course.creditos, 0)

  return (
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirmar Matrícula</h5>
            <button type="button" className="btn-close" onClick={onCancel}></button>
          </div>
          <div className="modal-body">
            <h6>Cursos seleccionados:</h6>
            <ul className="list-group mb-3">
              {courses.map((course) => (
                <li key={course.id} className="list-group-item d-flex justify-content-between align-items-center">
                  {course.nombre}
                  <span className="badge bg-primary rounded-pill">{course.creditos} créditos</span>
                </li>
              ))}
            </ul>
            <p className="fw-bold">Total de créditos: {totalCredits}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Cancelar
            </button>
            <button type="button" className="btn btn-primary" onClick={onConfirm}>
              Confirmar Matrícula
            </button>
            <button type="button" className="btn btn-info" onClick={onDownloadPDF}>
              Descargar PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal

