import { NavLink } from "react-router-dom"

export default function SidebarLink({ to, icon: Icon, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-4 px-4 py-3 text-xl hover:bg-gray-200 rounded-full transition-colors ${
          isActive ? "font-bold" : ""
        }`
      }
    >
      <Icon className="w-7 h-7" />
      <span>{children}</span>
    </NavLink>
  )
}

