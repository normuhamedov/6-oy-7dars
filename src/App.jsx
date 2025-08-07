import { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { Context } from "./context/Context"
import Sidebar from "./components/Sidebar/Sidebar"
import { dashboardRouteList } from "./hooks/useRoute"
import "./App.css"
import { Login, Register } from "./pages/Login"
import SideRight from "./components/SideRight/SideRight"

function App() {
  const { token } = useContext(Context)

  if (token) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar />
        <main className="flex-1 border-l border-r">
          <Routes>
            {dashboardRouteList.map((route) => (
              <Route key={route.id} path={route.path} element={route.element}>
                {route.children?.map((child, index) => (
                  <Route key={index} path={child.path} element={child.element} />
                ))}
              </Route>
            ))}
          </Routes>
        </main>
        <SideRight/>
      </div>
    )
  } else {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    )
  }
}

export default App