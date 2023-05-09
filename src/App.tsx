import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Sales from "./outlets/sales/Sales";
import Investment from "./outlets/investment/Investment";
import MainPage from "./pages/mainPage/DashboardMainPage";
import Sellers from "./outlets/sellers/Sellers";
import CustomerTable from "./components/table/CustomerTable";

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
            path: "",
            element: <Investment />,
          },
          {
            path: "investment",
            element: <Investment />,
          },
          {
            path: "sales",
            element: <Sales />,
          },
          {
            path: "sellers",
            element: <Sellers />,
          },
          {
            path: "*",
            element: <Investment />,
          },
        ],
      },
      {
        element: <MainPage />,
        path: "/customers",
        children: [
          {
            path: "",
            element: <CustomerTable />,
          },
        ],
      },
      {
        element: <MainPage />,
        path: "/notifications",
      },
      {
        element: <MainPage />,
        path: "/setting",
      },
      {
        element: <MainPage />,
        path: "/account",
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
