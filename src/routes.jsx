import NewsPage from "./components/NewsPage";

export const navRoutes = [
  {
    pathname: "/",
    state: { apiFilter: "non-category", value: null },
    component: NewsPage,
  },
  {
    pathname: "/politica",
    linkname: "Política",
    state: { apiFilter: "category", value: 1 },
    component: NewsPage,
  },
  {
    pathname: "/internacionales",
    linkname: "Internacionales",
    state: { apiFilter: "category", value: 2 },
    component: NewsPage,
  },
  {
    pathname: "/tecnologia",
    linkname: "Tecnología",
    state: { apiFilter: "category", value: 3 },
    component: NewsPage,
  },
  {
    pathname: "/espectaculos",
    linkname: "Espectáculos",
    state: { apiFilter: "category", value: 4 },
    component: NewsPage,
  },
  {
    pathname: "/deportes",
    linkname: "Deportes",
    state: { apiFilter: "category", value: 5 },
    component: NewsPage,
  },
  {
    pathname: "/diseño",
    linkname: "Diseño",
    state: { apiFilter: "category", value: 6 },
    component: NewsPage,
  },
];
