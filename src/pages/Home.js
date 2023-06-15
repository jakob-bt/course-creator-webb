import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import img1 from "../images/img1.png";

const Home = () => {
  const courses = useSelector((state) => state);
  return (
    <div>
      <section className="header">
        <h1>All Courses</h1>
        {/*gave this an ID, for CSS purposes*/}
        <Link to={`/filter`} id="filterButton">
          Filter
        </Link>
      </section>
      <section className="list">
        <img src={img1} alt="Take your skill to the next level." />
        <p>What do you want to learn today?</p>
        {courses.map((course) => (
          <div className="content" key={course.id}>
            <img src={course.thumbnail} alt="Test course." />
            <Link to={`/course/${course.id}`}>{course.name}</Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
