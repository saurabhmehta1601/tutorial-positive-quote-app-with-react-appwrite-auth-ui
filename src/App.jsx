import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SigninPage from "./pages/SigninPage"
import SignupPage from "./pages/SignupPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SigninPage />} />
      <Route path="/sign-up" element={<SignupPage />} />
    </Routes>
  )
}

export default App
