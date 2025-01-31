export const validateCourseSelection = (course, student, selectedCourses) => {
    if (course.semestre !== student.semestre) {
      return "El curso no corresponde al semestre actual del estudiante."
    }
  
    if (course.matriculados >= course.limiteCupos) {
      return "No hay cupos disponibles para este curso."
    }
  
    const totalCredits = selectedCourses.reduce((sum, c) => sum + c.creditos, 0) + course.creditos
    if (totalCredits > student.creditosPermitidos) {
      return "Excede el límite de créditos permitidos."
    }
  
    return null
  }
  
  