import React, { useContext, useEffect } from "react";
import Course from "../components/Course";
import "../courses.css";
import CourseSearch from "../components/CourseSearch";
import { CoursesContext } from "../contexts/CoursesContext";

export default function Courses() {
  const { getCourses, filteredList, loading, serverError } =
    useContext(CoursesContext);

  useEffect(() => {
    getCourses();
  }, []);
  if (loading || filteredList.length == 0) {

    return (
      <>
        <CourseSearch />{" "}
        <div className="courses ">
          Betöltés folyamatban, vagy nincs kurzus!

        </div>
      </>
    );
  }
  return (
    <>
      <CourseSearch />
      <div className="courses">
        {filteredList.map((course) => {
          return <Course course={course} key={course.id} />;
        })}
      </div>
    </>
  );
}