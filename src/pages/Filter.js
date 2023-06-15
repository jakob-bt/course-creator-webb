import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { applyCategory, resetFilter } from "../reducers/courseReducer";

const Filter = () => {
  const dispatch = useDispatch();

  const Apply = (event) => {
    dispatch(applyCategory(event.target.value))
  };

  const Reset = () => {
    dispatch(resetFilter())
  }

  return (
    <div>
        <section className="header">
        <h1>Category Filter</h1>
        <Link id="exit" to={`/`}>&#10005;</Link>
        </section>
        <section className="list">
        <button value="Mentality" onClick={(event) => Apply(event)}>
        Mentality
      </button>
      <button value="Software tutorials" onClick={(event) => Apply(event)}>
        Software Tutorials
      </button>
      <button onClick={() => Reset()}>
        Reset filter
      </button>
        </section>
    </div>
  );
};

export default Filter;
