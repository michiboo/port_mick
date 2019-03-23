import React from "react"
import { Link } from "gatsby"




export default props =>

<div>
<a style={{ color: 'black' }} href={props.link}>{props.link.substring(1) } </a>
</div>