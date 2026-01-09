import React from "react";

const courses = [
  {
    title: "React Fundamentals",
    description: "Learn the basics of React including components and state.",
    difficulty: "Beginner",
    chapters: 12,
    credits: 32
  },
  {
    title: "Advanced JavaScript Patterns",
    description: "Deep dive into modern JS patterns and best practices.",
    difficulty: "Advanced",
    chapters: 12,
    credits: 60
  },
  {
    title: "Node.js Backend Development",
    description: "Build scalable backend applications using Node.js.",
    difficulty: "Intermediate",
    chapters: 10,
    credits: 45
  },
  {
    title: "Python Data Science",
    description: "Analyze data using Pandas, NumPy and ML models.",
    difficulty: "Intermediate",
    chapters: 15,
    credits: 75
  },
  {
    title: "CSS Grid & Flexbox",
    description: "Master modern CSS layouts.",
    difficulty: "Beginner",
    chapters: 6,
    credits: 24
  },
  {
    title: "DevOps with Docker & Kubernetes",
    description: "Containerization and orchestration fundamentals.",
    difficulty: "Advanced",
    chapters: 14,
    credits: 70
  }
];

const Courses = () => {
  return (
    <div className="courses-container">
      <h1>Course Catalog</h1>
      <p>Discover and enroll in courses to advance your skills</p>

      <input
        type="text"
        placeholder="Search courses by title or description..."
      />

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h2>{course.title}</h2>
            <p>{course.description}</p>

            <div className="course-meta">
              <span>Difficulty: {course.difficulty}</span>
              <span>Chapters: {course.chapters}</span>
              <span>Credits: {course.credits}</span>
            </div>

            <button>
              {course.difficulty === "Beginner"
                ? "Continue Learning"
                : "Enroll Now"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
