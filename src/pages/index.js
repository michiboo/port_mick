import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Canvas from "../components/homecanvas.js"
import Pcanvas from "../components/projectcanvas.js"

export default () => <div >
<Layout>
<div>
<img src="img.svg" alt="my img"></img>
<Canvas text= "I am Micky Chan"/>
</div>

<Header headerText="Hi I am Micky, and I do programming"/>


<p> Take a Look at some of my projects! </p>

<Pcanvas> </Pcanvas>


</Layout>

</div>
