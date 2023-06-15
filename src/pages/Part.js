import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { useState } from "react";

const Part = () => {
  // enables toggling between showing / not showing the video for the part
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };

  // grab the correct course data
  const courses = JSON.parse(localStorage.getItem("courses"));
  const id = useParams().id;
  const course = courses.find((course) => course.id == id);
  return (
    <div>
      <section className="header">
        <Link to={`/course/${course.id}`}>&#9001;</Link>
        <h1>Course Detail</h1>
      </section>
      <section className="list">
        {course.parts.map((part) => (
          <section key={part.name}>
            <button onClick={openModal}>
              <h2>{part.name}</h2>
              {modal ? <ReactPlayer url={part.video} /> : null}
            </button>
          </section>
        ))}
      </section>
    </div>
  );
};

export default Part;
