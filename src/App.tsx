import Table from "./components/Table"
import './App.css'
import Header from "./components/Header"
import CourseProvider from "./Context/CourseProvider"
function App() {


  return (
    <>
    <CourseProvider>
      <Header />
      <Table />
      </CourseProvider>
    </>
  )
}

export default App
