import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Main from "./components/Main"
import Program from "./components/program"
import About from "./components/about"
import Projects from "./components/projects"
function App() {
  

  return (
    // Start of Navbar
    <div className = 'w-full h-screen bg-gray-200'>
    <Navbar logo="D.A" />
    <Main />
    <Projects />
    <About />
    <Program />
    <Footer />
</div>


 
  )
}

export default App
