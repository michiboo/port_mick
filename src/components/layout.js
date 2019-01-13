import React from "react"
import "./layout.css"
import Navlink from "./navlink.js"
import Navbar from "./navbar.js"
import PageTransition from 'gatsby-plugin-page-transitions';


export default ({ children }) =>( 
<html>
   
<Navbar>
    <Navlink link="#Home"/>
    <Navlink link="#whatIdo" />
    <Navlink link="#project" />
    <Navlink link="#contact"/>  
</Navbar>

 <PageTransition>
<div>{children}</div>
</PageTransition>
</html>
)