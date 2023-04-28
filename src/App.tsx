import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import Investment from "./outlets/investment/Investment";
import MainPage from "./pages/mainPage/MainPage";

function App() {
  const router = createBrowserRouter(
    [
      {
        // it renders this element
        element: <Navigate to={"/dashboard/investment"} />,
        // when the URL matches this segment
        path: "/",
      },
      {
        // it renders this element
        element: <MainPage />,
        // when the URL matches this segment
        path: "dashboard",
        children: [
          {
            path: "investment",
            element: <Investment />,
          },
          {
            path: "*",
            element: <div>100</div>,
          },
        ],
      },
    ],
    { basename: "/React-cms-website-v1" }
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
