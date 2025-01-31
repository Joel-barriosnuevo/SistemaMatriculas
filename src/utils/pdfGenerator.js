import jsPDF from "jspdf"
import "jspdf-autotable"

export const generatePDF = (student, courses) => {
  const doc = new jsPDF()

  doc.setFontSize(18)
  doc.text("Comprobante de Matrícula", 14, 22)

  doc.setFontSize(12)
  doc.text(`Estudiante: ${student.nombre}`, 14, 30)
  doc.text(`ID: ${student.id}`, 14, 38)
  doc.text(`Semestre: ${student.semestre}`, 14, 46)

  doc.autoTable({
    startY: 60,
    head: [["Código", "Nombre del Curso", "Créditos"]],
    body: courses.map((course) => [course.codigo, course.nombre, course.creditos]),
    foot: [["", "Total de Créditos", courses.reduce((sum, course) => sum + course.creditos, 0)]],
  })

  const totalPages = doc.internal.getNumberOfPages()

  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    doc.setFontSize(10)
    doc.text(`Página ${i} de ${totalPages}`, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 10)
  }

  doc.save(`matricula_${student.id}.pdf`)
}

