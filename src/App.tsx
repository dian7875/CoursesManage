import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header"
import Form from "./components/Form";
import Table from "./components/Table"
import './App.css'
import CourseProvider from "./Context/CourseProvider"

function App() {
  return (
    <Router>
      <CourseProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </CourseProvider>
    </Router>
  );
}

export default App;