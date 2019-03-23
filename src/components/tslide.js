import React from "react";
import { Slide } from 'material-auto-rotating-carousel';


const { red } = require('@material-ui/core/colors');


export default props =>(

<Slide>
media={<img src='https://picsum.photos/200' />}
mediaBackgroundStyle={{ backgroundColor: red[400] }}
style={{ backgroundColor: red[600] }}
title={props.title}
subtitle={props.subtitle}
</Slide>

)
