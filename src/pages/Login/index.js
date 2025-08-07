import { lazy } from "react"
import Register from "./Register"

const Login = lazy(() => new Promise((resolve) => {
    return setTimeout(() => resolve(import("./Login")), 1500)
}))

export {Login, Register}