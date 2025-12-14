// src/routes.tsx
import { type RouteObject } from "react-router-dom";
import Layout from "./Layout";
import Thoughts from "./pages/Thoughts";
import BlogPost from "./pages/BlogPost";
import HomePage from "./pages/HomePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "thoughts",
        element: <Thoughts />,
      },
      {
        path: "thoughts/:slug",
        element: <BlogPost />,
      },
    ],
  },
];

export default routes;
