import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
export default() =>(
    
    <Layout>
    <div>
    <Link to="/">Home </Link>
    <Header headerText="Contact" />
    <p> send me a message! </p>
    
    
    </div>

    </Layout>

)