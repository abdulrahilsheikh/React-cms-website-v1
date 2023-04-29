import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Comapny from "./outlets/company/Comapny";
import Investment from "./outlets/investment/Investment";
import MainPage from "./pages/mainPage/MainPage";

function App() {
  const router = createBrowserRouter(
    [
      {
        // it renders this element
        element: <MainPage />,
        // when the URL matches this segment
        path: "/",
        children: [
          {
            path: "",
            element: <Investment />,
          },
        ],
      },
      {
        // it renders this element
        element: <MainPage />,
        // when the URL matches this segment
        path: "/dashboard",
        children: [
          {
            path: "investment",
            element: <Investment />,
          },
          {
            path: "company",
            element: <Comapny />,
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
