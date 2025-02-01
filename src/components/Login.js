import { useState } from "react"
import students from "../data/students.json"

const Login = ({ onLogin, onNotEnrolled }) => {
  const [studentId, setStudentId] = useState("")
  const [error, setError] = useState("")

  // Get the base URL for GitHub Pages
  const baseUrl = "/SistemaMatriculas"

  const handleSubmit = (e) => {
    e.preventDefault()
    const student = students.find((s) => s.id === studentId)
    if (student) {
      if (student.matriculado) {
        onLogin(student)
      } else {
        onNotEnrolled(student)
      }
    } else {
      setError("ID de estudiante no válido. Por favor, intente de nuevo.")
    }
  }

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${baseUrl}/background.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white rounded shadow p-4" style={{ width: "400px" }}>
        <div className="text-center mb-4">
          <img
            src={`${baseUrl}/logo_exia.png`}
            alt="EXIA Logo"
            className="img-fluid"
            style={{ height: "35px", marginBottom: "10px" }}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="ID de estudiante"
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Acceder
          </button>
          <div className="text-center mb-3">
            <a href="#" className="text-primary btn btn-light w-100">
              ¿Olvidó su ID?
            </a>
          </div>
          <button type="button" className="btn btn-light w-100 mb-3">
            Entrar como persona invitada
          </button>
        </form>
        <div className="d-flex justify-content-between align-items-center small text-muted">
          <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle p-0 text-muted mx-2"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Español - Internacional (es)
            </button>
            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  English
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Français
                </a>
              </li>
            </ul>
          </div>
          <a href="#" className="text-primary">
            Aviso de Cookies
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login

