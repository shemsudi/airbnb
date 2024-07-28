import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./root.jsx";
import NewRealeased from "./pages/realesedFeaures.jsx";

import { Provider } from "react-redux";
import store from "./redux/store.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <h1 className="flex justify-center items-center  font-bold">
        Here is some images of icons
      </h1>
    ),
    children: [
      {
        path: "/icons",
        element: (
          <main className="pt-2 grid grid-flow-row -z-50 overflow-hidden">
            <h1 className="text-center font-bold">
              Here is some images of icons
            </h1>
          </main>
        ),
      },
      {
        path: "/places",
        element: (
          <h1 className="text-center font-bold">
            Here is some images of places
          </h1>
        ),
      },
    ],
  },
  {
    path: "/s/experiences/online",
    element: (
      <h1 className="text-center font-bold">Here is some of experiences</h1>
    ),
  },

  {
    path: "/release/features",
    element: <NewRealeased />,
  },
  {
    path: "/guest/messages",
    element: <NewRealeased />,
  },
  {
    path: "/notifications",
    element: <NewRealeased />,
  },
  {
    path: "/trips/v1",
    element: <NewRealeased />,
  },
  {
    path: "/whilsts",
    element: <NewRealeased />,
  },
  {
    path: "/account_settings",
    element: <NewRealeased />,
  },
  {
    path: "/host/homes",
    element: <NewRealeased />,
  },
  {
    path: "/giftcards",
    element: <NewRealeased />,
  },

  {
    path: "/help",
    element: <NewRealeased />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
