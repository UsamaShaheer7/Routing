import React from "react";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Contact from "../pages/Contact";
export const routes = Object.freeze({
  ROUTE_HOME: "/",
  ROUTE_DETAILS: "/details",
  ROUTE_CONTACT: "/contact",
});

export const AllRoutes = [
  {
    path: routes.ROUTE_HOME,
    page: <Home />,
  },
  {
    path: routes.ROUTE_DETAILS,
    page: <Details />,
  },
  {
    path: routes.ROUTE_CONTACT,
    page: <Contact />,
  },
];
