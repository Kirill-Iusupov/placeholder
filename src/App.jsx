import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PostsPage from "./pages/PostsPage"
import PhotosPage from "./pages/PhotosPage"
import TodosPage from "./pages/TodosPage"



function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PostsPage/>} />
        <Route path="/photos" element={<PhotosPage />}/>
        <Route path="/todos" element={<TodosPage />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
