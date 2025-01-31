const SemesterFilter = ({ selectedSemester, onSemesterChange, studentSemester }) => {
  const handleSemesterChange = (e) => {
    const newSemester = e.target.value
    if (newSemester !== "all" && Number.parseInt(newSemester) !== studentSemester) {
      alert(
        "Advertencia: Estás viendo cursos de un semestre diferente al tuyo. Recuerda que solo puedes matricular cursos de tu semestre actual.",
      )
    }
    onSemesterChange(newSemester)
  }

  return (
    <div className="mb-4">
      <label htmlFor="semesterFilter" className="form-label">
        Filtrar por semestre:
      </label>
      <select id="semesterFilter" className="form-select" value={selectedSemester} onChange={handleSemesterChange}>
        <option value="all">Todos los semestres</option>
        <option value="1">Semestre 1</option>
        <option value="2">Semestre 2</option>
        <option value="3">Semestre 3</option>
        <option value="4">Semestre 4</option>
      </select>
    </div>
  )
}

export default SemesterFilter



