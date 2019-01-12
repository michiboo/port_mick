import navbarStyles from "./navbar.module.css"
import React from 'react'
export default ({ children }) => (
    <div className={navbarStyles.container}>{children}</div>
  )