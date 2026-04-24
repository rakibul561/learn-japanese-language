'use client';

export default function LessonGrid({ lessons, onSelectLesson }) {
    return (
        <div className="grid">
            {lessons.map((lesson) => (
                <div key={lesson.id} className="card" onClick={() => onSelectLesson(lesson.id)}>
                    <span className="lesson-num">Lesson {lesson.id}</span>
                    <h3>{lesson.title}</h3>
                    <p>{lesson.data.length}টি শব্দ</p>
                    <button className="btn-primary">শিখুন (Start)</button>
                </div>
            ))}
        </div>
    );
}
