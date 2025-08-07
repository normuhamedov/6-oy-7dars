import Explore from "./Explore"
import Notification from "./Notification"
import Messages from "./Messages"
import Bookmarks from "./Bookmarks"
import Lists from "./Lists"
import Profile from "./Profile"
import More from "./More"
import { lazy } from "react"

const Home = lazy(() => new Promise((resolve) => {
    return setTimeout(() => resolve(import("./Home")), 1500)
}))

export {Home, Explore, Notification, Messages, Bookmarks, Lists, Profile, More}