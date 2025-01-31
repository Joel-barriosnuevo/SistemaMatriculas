const NotEnrolled = ({ student, onBack }) => {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="bg-white rounded shadow p-4" style={{ width: "400px" }}>
          <h2 className="text-center mb-4">No Matriculado</h2>
          <p className="text-center">Lo sentimos, {student.nombre}. No estás matriculado para este período académico.</p>
          <p className="text-center">Por favor, contacta con la oficina de registro para más información.</p>
          <button onClick={onBack} className="btn btn-primary w-100 mt-3">
            Volver al Inicio
          </button>
        </div>
      </div>
    )
  }
  
  export default NotEnrolled
  
  