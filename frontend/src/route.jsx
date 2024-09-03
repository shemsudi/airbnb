import { createBrowserRouter } from "react-router-dom";
// routes
import ErrorPage from "./pages/errorPage.jsx";
import Root from "./root.jsx";
import NewRealeased from "./pages/realesedFeaures.jsx";
import Icons from "../src/components/Icons.jsx";
import HostHomes from "./pages/hostHomes.jsx";
import BecameAhost from "./pages/became-a-host.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Icons />,
      },
      {
        path: "/icons",
        element: <Icons />,
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
  { path: "host/homes", element: <HostHomes /> },
  { path: "/became-a-host", element: <BecameAhost /> },
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
    path: "/giftcards",
    element: <NewRealeased />,
  },

  {
    path: "/help",
    element: <NewRealeased />,
  },
]);

export default router;
