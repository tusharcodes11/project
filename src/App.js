import "./App.css"
import Pages from "./components/pages/Pages"
import Home from "./components/home/Home"
import Footer from "./components/common/footer/Footer"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Contact from "./components/contact/Contact"
function App() {
  return <><Pages />
    <About />

    <Services />
    <Contact />
    <Footer/>
    <Home />

  </>
}

export default App
