import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Layout from './Components/Layout'
import Blog from './Pages/Blog'
import NotFound from './Pages/NotFOund'
import Post from './Pages/Post'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/blog/:id" element={<Post/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
