
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route, Form } from "react-router-dom"
import Auth from "./Login"
import { 
BrowserRouter as Router,
Switch,
Link
} from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./Login";
import MainScreen from "./components/MainScreen";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Forgot-pass" element={<ForgotPassword />} />
        <Route path="/MainScreen" element={<MainScreen />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App