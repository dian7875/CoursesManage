import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header"
import Form from "./components/Form";
import Table from "./components/Table"
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;