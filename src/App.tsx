import Table from "./components/Table";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditCourse from "./pages/edit/EditCourse";
import DetailsCourse from "./pages/details/DetailsCourse";
import CreateCourse from "./pages/create/CreateCourse";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Table />} />
            <Route path="/create" element={<CreateCourse />} />
            <Route path="/edit/:id" element={<EditCourse />} />
            <Route path="/view/:id" element={<DetailsCourse />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
