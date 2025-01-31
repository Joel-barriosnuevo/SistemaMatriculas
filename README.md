 ### MODO DE USO:
 1. iniciar sesion con los Ids: 101, 102,103,104
 (103 es el estudiante no matriculado).

 2. se seleccionan los cursos disponibles en su semestre, sera facil por el filtro de cursos.

 3. se procede a confirmar la matricula.

 4. por ultimo ya cuando este confirmada la matricula se descargara un pdf.

 ###  QUE SE HIZO? COMO FUE SU DESARROLLO:

1. **Tecnología principal**: **React** como framework principal debido a su eficiencia en la creación de interfaces interactivas y su capacidad para gestionar el estado de la aplicación de forma sencilla.

2. **Gestión del estado**: Pensé en la mejor forma de manejar el estado de la aplicación y resolví que **los hooks de React (useState y useEffect)** eran la opción más adecuada.

3. **Autenticación y autorización**: **sistema de autenticación basado en el ID de estudiante** para asegurar que solo los alumnos matriculados pudieran acceder al sistema. Me enfoqué en simular un entorno real donde la matrícula es restringida, asegurando que solo los usuarios autorizados pudieran interactuar con la plataforma.  

4. **Filtrado de cursos**: Reflexioné sobre cómo mejorar la experiencia del usuario y resolví que la mejor manera era **permitir el filtrado de cursos por semestre**. Esto facilita la búsqueda de materias relevantes y optimiza el flujo de selección de cursos. Sin embargo, también pensé en la flexibilidad del usuario, por lo que mantuve la opción de ver todos los cursos en caso de que quisieran planificar semestres futuros.  

5. **Restricciones de matrícula**: Me encontré con el desafío de establecer reglas para la matrícula y decidí implementar **validaciones** que impidieran a los estudiantes inscribirse en cursos de otros semestres o superar el límite de créditos permitidos. Esto no solo ayuda a mantener la coherencia del sistema, sino que también refleja las normas reales de una institución académica.  

6. **Persistencia de datos**: Al evaluar cómo manejar la información del usuario, resolví que utilizar **localStorage** era una solución efectiva para simular la persistencia de datos entre sesiones del navegador. Pensé en integrar una base de datos en el backend, pero considerando la fase actual del proyecto, esta solución permitía una experiencia más fluida sin necesidad de una infraestructura más compleja.  

7. **Generación de PDF**: Me anticipé a la necesidad de que los estudiantes tuvieran un comprobante de su matrícula, así que decidí implementar la **generación de un PDF** con la librería `jsPDF`. De esta manera, los usuarios pueden descargar un documento oficial que les sirva como constancia.  

8. **Diseño responsivo**: Pensé en la accesibilidad de la aplicación y decidí que debía ser funcional tanto en dispositivos móviles como en computadoras de escritorio. Para ello, resolví usar **Bootstrap**, lo que me permitió crear un diseño flexible y adaptativo sin necesidad de desarrollar estilos personalizados desde cero.  

9. **Confirmación de matrícula**: Reflexioné sobre la experiencia del usuario y decidí que antes de finalizar la matrícula, debía haber una confirmación para evitar errores. Implementé un **modal de confirmación**, lo que da a los estudiantes la oportunidad de revisar sus selecciones antes de proceder, reduciendo así posibles equivocaciones.  

10. **Modularidad del código**: Desde el inicio, pensé en la importancia de mantener un código limpio y escalable. Resolví dividir la aplicación en **componentes reutilizables** como `CourseList`, `CourseCard` y `SelectedCoursesList`. De esta manera, logré una mejor organización del código y facilitando futuras modificaciones y expansiones del sistema.  

11. **Manejo de errores**: Consideré que la aplicación debía brindar retroalimentación inmediata a los usuarios cuando cometieran errores. Por ello, resolví **agregar alertas y mensajes de error** para situaciones como intentar inscribirse en cursos no permitidos o exceder el límite de créditos. Esto mejora la experiencia de usuario al proporcionar información clara y en tiempo real.  

12. **Simulación de datos**: Para evitar depender de un backend en esta etapa del desarrollo, decidí utilizar **archivos JSON** para simular la base de datos de estudiantes y cursos. Esto me permitió probar la funcionalidad del sistema sin necesidad de configurar servidores, logrando un desarrollo más ágil y adaptable a futuras integraciones con bases de datos reales.  
