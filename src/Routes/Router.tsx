import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Table from "../components/Table";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <Header/>
          <Outlet />
        </>
      ),
      children: [
        {
          index: true,
          element: <Table />,
        }
      ],
    },
  ]);
  
  export default Routes;
  