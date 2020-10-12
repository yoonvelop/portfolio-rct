import React, { useReducer, createContext, useContext } from "react";
const inintialProjects = [
  {
    id: 1,
    category: "Front-end",
    title: "개발팀 랜딩 페이지",
    stack: ["HTML", "CSS", "Javascript", "Jquery", "AWS"],
    summary: "프로젝트 소개",
    desc: "프로젝트 소개~~~",
    thumbnail: "../images/project/stevelabs_thumbnail.png",
    image: [
      "stevelabs01",
      "stevelabs02",
      "stevelabs03",
      "stevelabs04",
      "stevelabs05",
    ],
    demo: "http://stevelabs.co/",
  },
  {
    id: 2,
    category: "Back-end",
    title: "COAL 코로나 알리미",
    stack: ["PHP", "MySql", "AWS", "Firebase", "HTML", "CSS", "Javascript"],
    summary: "프로젝트 소개",
    desc: "프로젝트 소개~~~",
    thumbnail: "../images/project/stevelabs_thumbnail.png",
    image: [
      "stevelabs01",
      "stevelabs02",
      "stevelabs03",
      "stevelabs04",
      "stevelabs05",
      "stevelabs06",
    ],
  },
];

function projectReducer(state, action) {
  switch (action.type) {
    case "FILTER":
      return state.filter((project) => project.category === action.category);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const ProjectStateContext = createContext();
const ProjectDispatchContext = createContext();

export function ProjectProvider({ children }) {
  const [state, dispatch] = useReducer(projectReducer, inintialProjects);
  return (
    <ProjectStateContext.Provider value={state}>
      <ProjectDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectDispatchContext.Provider>
    </ProjectStateContext.Provider>
  );
}

export function useProjectState() {
  return useContext(ProjectStateContext);
}

export function useProjectDispatch() {
  return useContext(ProjectDispatchContext);
}
