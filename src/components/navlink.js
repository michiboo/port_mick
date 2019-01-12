import React from "react"
import { Link } from "gatsby"




export default props =>

<div>
<Link style={{ color: 'white' }} to={props.link}>{props.link.substring(1) } </Link>
</div>