import React from "react";
import { createRoot } from "react-dom/client";
import Home from "@/views/Home.jsx";
import "@/styles/index.css";
import { MantineProvider } from "@mantine/core";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "@/views/ErrorPage.jsx";
import ClassRoomNotes from "./views/ClassroomNotes";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  {
    path: "/class-notes",
    element: <ClassRoomNotes />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
