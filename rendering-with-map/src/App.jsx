import './App.css'
import ListRender from './Components/ListRender'
import ArrayofObj from './Components/ArrayofObj'
import NavbarWithDropdown from './Components/NavbarWithDropdown'
import BlogCards from './Components/BlogCard'

function App() {
  return (
    <>
    <div id="Navbar" >
     <NavbarWithDropdown />
     </div>
    <div id="simpleListRender" style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}>
      <h2>Simple List Render</h2>
     <ListRender />
     </div>
    <div id="ArrayofObj" style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}>
      <h2>Array of Objects Render</h2>
     <ArrayofObj />
     </div>
    <div id="BlogCards">
      <h2>Blog Cards</h2>
     <BlogCards />
     </div>
    </>
  )
}

export default App
