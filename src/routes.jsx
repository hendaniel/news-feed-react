import News from "./containers/News";

export const navRoutes = [
  {
    pathname: "/",
    linkname: "Inicio",
    state: { apiFilter: "non-category", value: null },
    component: News,
  },
  {
    pathname: "/politica",
    linkname: "Política",
    state: { apiFilter: "category", value: 1 },
    component: News,
  },
  {
    pathname: "/internacionales",
    linkname: "Internacionales",
    state: { apiFilter: "category", value: 2 },
    component: News,
  },
  {
    pathname: "/tecnologia",
    linkname: "Tecnología",
    state: { apiFilter: "category", value: 3 },
    component: News,
  },
  {
    pathname: "/espectaculos",
    linkname: "Espectáculos",
    state: { apiFilter: "category", value: 4 },
    component: News,
  },
  {
    pathname: "/deportes",
    linkname: "Deportes",
    state: { apiFilter: "category", value: 5 },
    component: News,
  },
  {
    pathname: "/diseño",
    linkname: "Diseño",
    state: { apiFilter: "category", value: 6 },
    component: News,
  },
];
