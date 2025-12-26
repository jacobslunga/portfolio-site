import { type RouteObject } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFound";
// import Thoughts from "./pages/Thoughts";
// import BlogPost from "./pages/BlogPost";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // {
      //   path: "thoughts",
      //   element: <Thoughts />,
      // },
      // {
      //   path: "thoughts/:slug",
      //   element: <BlogPost />,
      // },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;
