import { type RouteObject } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import WorkPage from "@/pages/WorkPage";
import ContactPage from "@/pages/ContactPage";
import ChatPage from "@/pages/ChatPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/work",
        element: <WorkPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
    ],
  },
];

export default routes;
