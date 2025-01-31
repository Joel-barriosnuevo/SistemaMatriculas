import React from "react"
import CourseCard from "./CourseCard"

const CourseList = ({ courses, selectedCourses, onSelectCourse, onRemoveCourse }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {courses.map((course) => (
        <div key={course.id} className="col">
          <CourseCard
            course={course}
            isSelected={selectedCourses.some((c) => c.id === course.id)}
            onSelect={onSelectCourse}
            onRemove={onRemoveCourse}
          />
        </div>
      ))}
    </div>
  )
}

export default CourseList



