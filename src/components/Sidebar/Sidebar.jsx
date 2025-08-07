import { Home, Hash, Bell, Mail, Bookmark, ClipboardList, User, MoreHorizontal } from "lucide-react"
import SidebarLink from "./SidebarLink"
import { useState, useEffect } from "react"

export default function Sidebar() {
  const navigation = [
    { name: "Home", to: "/", icon: Home },
    { name: "Explore", to: "/explore", icon: Hash },
    { name: "Notifications", to: "/notifications", icon: Bell },
    { name: "Messages", to: "/messages", icon: Mail },
    { name: "Bookmarks", to: "/bookmarks", icon: Bookmark },
    { name: "Lists", to: "/lists", icon: ClipboardList },
    { name: "Profile", to: "/profile", icon: User },
    { name: "More", to: "/more", icon: MoreHorizontal },
  ]

  const [user, setUser] = useState(null)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  return (
    <div className="w-[275px] h-screen px-2">
      <div className="flex flex-col h-full">
        <div className="p-4">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-500" fill="currentColor">
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
          </svg>
        </div>

        <nav className="space-y-1">
          {navigation.map((item) => (
            <SidebarLink key={item.name} to={item.to} icon={item.icon}>
              {item.name}
            </SidebarLink>
          ))}
        </nav>

        <button className="mt-4 bg-blue-500 text-white rounded-full px-6 py-3 text-lg font-bold hover:bg-blue-600 transition-colors">
          Tweet
        </button>

        {user && (
          <div className="mt-auto mb-4">
            <button className="flex items-center w-full p-3 rounded-full hover:bg-gray-200 transition-colors">
              <img src="/placeholder.svg?height=40&width=40" alt="Profile" className="w-10 h-10 rounded-full" />
              <div className="ml-3 text-left">
                <div className="font-bold">{user.name}</div>
                <div className="text-gray-500">{user.phone}</div>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

