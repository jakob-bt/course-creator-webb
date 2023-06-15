import img2 from "../images/img2.png";
import img3 from "../images/img3.jpg";

// set the initialstate, which then gets stored in localStorage,
// which acts as a 'default' state, so that we can access the full list regardless of the current state
const initialState = [
  {
    id: 1,
    category: "Mentality",
    name: "What is expected of you as a video editor",
    thumbnail: img2,
    bulletPoints: [
      "Learn about what your role in the workforce is.",
      "Get started off with the right mindset and expectations.",
    ],
    description: "Example description.",
    intro: "https://www.youtube.com/watch?v=h95mvdf2gmo",
    parts: [
      {
        name: "Roadmap to become a video editor",
        video: "https://www.youtube.com/watch?v=rQi16qqakuo",
      },
    ],
  },
  {
    id: 2,
    category: "Software tutorials",
    name: "Adobe Premiere Masterclass.",
    thumbnail: img3,
    description: "Example description.",
    bulletPoints: [
      "Learn about the different tools a video editor has at their disposal.",
      "Build your technical knowledge and learn the workflow.",
    ],
    intro: "https://www.youtube.com/watch?v=V5sENw2C97s",
    parts: [
      {
        name: "Adobe Premiere Pro Masterclass",
        video: "https://www.youtube.com/watch?v=8eDsvKwM40U",
      },
    ],
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
      // returns a mutated array based on user input
      return JSON.parse(localStorage.getItem("courses")).filter(
        (course) => course.category === action.payload.category
      );
    case "RESET":
      // wanted to return state, but couldn't get it to work correctly for some reason, even though
      // the value seems to be correctly defined if console logged.
      return JSON.parse(localStorage.getItem("courses"));
    default:
      // makes sure the page loads properly
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
