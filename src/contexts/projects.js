import React, { useReducer, createContext, useContext } from "react";
const inintialProjects = [
  {
    id: 1,
    category: "Front-end",
    type: "side",
    title: "개발팀 랜딩 페이지",
    stack: ["HTML", "CSS", "Javascript", "Jquery", "AWS", "PHP"],
    summary: "개발팀을 소개하고 견적 등의 문의가 가능한 랜딩페이지",
    desc:
      "HTML, CSS, Javascript, Jquery로 퍼블리싱 하였고, phpMailer를 이용해 문의 메일 기능을 추가, Server와 도메인은 AWS의 EC2와 Route53을 사용하였습니다.",
    thumbnail: "images/project/stevelabs_thumbnail.png",
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
    type: "side",
    title: "COAL 코로나 알리미",
    stack: ["PHP", "MySql", "AWS", "Firebase", "HTML", "CSS", "Javascript"],
    summary: "코로나 확진자 정보와 푸시알림을 보내주는 앱",
    desc:
      "코로나 초기 질병관리본부에서 제공하는 확진자 동선 등을 한눈에 보여주고 이동경로 2km안으로 들어오면 주의하라는 푸시알림을 보내주는 어플로 AWS EC2(Amazon Linux)에 PHP7.2, MySql5.6으로 세팅했습니다. 안드로이드 1인과 서버2인으로 저는 주로 확진자 동선과 공지사항, 진료소 API를 담당해 제작했습니다.",
    thumbnail: "images/project/coal_thumbnail.png",
    image: [
      "coal01",
      "coal02",
      "coal03",
      "coal04",
      "coal05",
      "coal06",
      "coal07",
      "coal08",
      "coal09",
      "coal10",
      "coal11",
    ],
    velog:
      "https://velog.io/@yoonvelop/%EB%92%A4%EB%8A%A6%EC%9D%80-%EC%BD%94%EC%95%8C%EC%BD%94%EB%A1%9C%EB%82%98-%ED%8F%90%EB%A0%B4-%EC%95%8C%EB%A6%AC%EB%AF%B8-%EA%B0%9C%EB%B0%9C-%ED%9B%84%EA%B8%B0",
  },
  {
    id: 3,
    category: "Front-end",
    type: "side",
    title: "Simple Youtube",
    stack: ["React.js", "PostCSS"],
    summary: "Youtube의 간단한 기능( 인기동영상, 검색 )만을 구현",
    desc:
      "Youtube Data API를 이용해서 인기동영상 25개를 출력하고 검색 기능만을 구현한 간단한 Youtube clone coding",
    thumbnail: "images/project/youtube_thumbnail.png",
    image: ["youtube01", "youtube02", "youtube03"],
    demo: "https://yoonvelop.github.io/youtube-simple/",
    github: "https://github.com/yoonvelop/youtube-simple",
  },
  {
    id: 4,
    category: "Back-end",
    type: "company",
    title: "Aiinz API",
    stack: ["PHP", "MySql", "AWS", "Bootstrap", "Javascript"],
    summary: "SNS 커뮤니티 앱과 관리자 페이지 개발 ",
    desc:
      "개발 서버를 세팅 후 기존 Java RestfulAPI를 PHP로 변경하고, 추가 게시글 기능 API를 개발했습니다. 사용자와 게시글을 관리하는 관리자 페이지도 추가로 개발하였습니다.",
    thumbnail: "images/project/aiinz_thumbnail.png",
    image: [
      "aiinz01",
      "aiinz02",
      "aiinz03",
      "aiinz04",
      "aiinz05",
      "aiinz06",
      "aiinz07",
    ],
    demo: "https://play.google.com/store/apps/details?id=com.codberg.aiinz",
  },
  {
    id: 5,
    category: "Front-end",
    type: "company",
    title: "nCube 회사 랜딩 페이지",
    stack: ["HTML", "CSS", "Javascript", "JQuery", "AWS"],
    summary: "블록체인 회사 이념 및 소개를 보여주는 랜딩 페이지 제작 ",
    desc:
      "HTML,CSS,Javascript,JQuery를 사용해 퍼블리싱 하였고 AWS로 서버 세팅 후 배포 하였습니다.",
    thumbnail: "images/project/ncube_thumbnail.png",
    image: ["ncube01", "ncube02", "ncube03", "ncube04", "ncube05", "ncube06"],
    demo: "http://ncube.world/",
  },
  {
    id: 6,
    category: "Front-end",
    type: "company",
    title: "가상화폐 거래소",
    stack: ["HTML", "CSS", "Javascript", "JQuery", "PHP", "MySql", "AWS"],
    summary: "블록체인 가상화폐 거래소 페이지 제작 ",
    desc:
      "전반적인 pc화면 퍼블리싱과 회원기능, 고객센터, 상장문의 등의 백엔드 기능 개발을 하였고 AWS로 서버 세팅 하였습니다.",
    thumbnail: "images/project/genesis_thumbnail.png",
    image: [
      "genesis01",
      "genesis02",
      "genesis03",
      "genesis04",
      "genesis05",
      "genesis06",
    ],
    demo: "https://genesis-ex.com/",
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
