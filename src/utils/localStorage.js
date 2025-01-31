export const saveMatricula = (studentId, courses) => {
    const matricula = {
      studentId,
      courses,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem(`matricula_${studentId}`, JSON.stringify(matricula))
  }
  
  export const getMatricula = (studentId) => {
    const matricula = localStorage.getItem(`matricula_${studentId}`)
    return matricula ? JSON.parse(matricula) : null
  }
  
  