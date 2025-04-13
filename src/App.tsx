import "./App.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Router";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>

      <Toaster />
      <RouterProvider router={Routes} />

    </>
  );
}

export default App;
