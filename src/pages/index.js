import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Layout from "../components/layout"



export default () => <div >
<Layout>
<Header headerText="I am Micky Chan"/>

<h1>Hello I am Micky! </h1>

<p> This is my website</p>

<Link to="/contact/"> Contact </Link>

<img src="https://source.unsplash.com/random/400x200" alt="" />
</Layout>

</div>
