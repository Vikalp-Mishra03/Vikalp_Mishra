import React from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Days from "./components/Days"
import Work from "./components/Work"
// import Contact from "./components/Contact"
// import { Toaster } from "react-hot-toast"
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Days />
      <Work />
      {/* <Contact /> */}
      {/* <Toaster /> */}
      <Footer />
    </>
  )
}

export default App
