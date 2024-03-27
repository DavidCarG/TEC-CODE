import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from '@/views/Home.jsx';
import '@mantine/core/styles.css';
import * as Mantine from '@mantine/core';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '@/views/ErrorPage.jsx';
import ClassRoomNotes from './views/ClassroomNotes';
import '@mantine/carousel/styles.css';
import './output.css';
const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <ErrorPage /> },
  {
    path: '/class-notes',
    element: <ClassRoomNotes />,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Mantine.MantineProvider>
      <RouterProvider router={router} />
    </Mantine.MantineProvider>
  </React.StrictMode>,
);
