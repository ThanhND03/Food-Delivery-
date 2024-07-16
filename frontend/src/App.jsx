import React, { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import { Route, Routes } from "react-router-dom"
import { publicRoutes } from "./Routes"
import Footer from "./components/Footer/Footer"
import LoginPopup from "./components/LoginPopup/LoginPopup"

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></> }
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
