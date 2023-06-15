import img2 from "../images/img2.png";
import img3 from "../images/img3.jpg";

const initialState = [
  {
    id: 1,
    category: "Mentality",
    name: "What is expected of you as a video editor",
    thumbnail: img2,
    description: "Example description.",
    videos: {
      intro: "https://www.youtube.com/watch?v=h95mvdf2gmo",
    },
  },
  {
    id: 2,
    category: "Software tutorials",
    name: "Adobe Premiere Masterclass.",
    thumbnail: img3,
    description: "Example description.",
    videos: {
      intro: "https://www.youtube.com/watch?v=V5sENw2C97s",
    },
  },
];
const initialiseState = () => {
  if (localStorage.getItem("courses") === null) {
    localStorage.setItem("courses", JSON.stringify(initialState));
  } else {
    return;
  }
};

initialiseState();

const courseReducer = (
  state = JSON.parse(localStorage.getItem("courses")),
  action
) => {
  switch (action.type) {
    case "FILTER":
      return JSON.parse(localStorage.getItem("courses")).filter(
        (course) => course.category === action.payload.category
      );
    case "RESET":
      return JSON.parse(localStorage.getItem("courses"));
    default:
      return state;
  }
};

export const applyCategory = (category) => {
  return {
    type: "FILTER",
    payload: {
      category,
    },
  };
};

export const resetFilter = () => {
  return {
    type: "RESET",
  };
};

export default courseReducer;
