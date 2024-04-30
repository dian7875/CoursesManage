import Table from "./components/Table";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditCourse from "./pages/edit/EditCourse";
import DetailsCourse from "./pages/details/DetailsCourse";
import Form from "./components/Form";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Table />} />
            <Route path="/create" element={<Form />} />
            <Route path="/edit/:courseId" element={<EditCourse />} />
            <Route path="/view/:courseId" element={<DetailsCourse />} />
         
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
