import "./App.css"
import { Routes, Route } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        //for all paths
        path="*"
        element={
          //Check if user is authorized first
          <Authorized>
            {/* ApplicationViews is the child component of Authorized */}
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  )
}
