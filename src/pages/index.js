import React, { Component } from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Canvas from "../components/homecanvas.js"
import Pcanvas from "../components/projectcanvas.js"
import ScrollableAnchor from 'react-scrollable-anchor'
import { SocialIcon } from 'react-social-icons';
import Project from "../components/project.js"

const fadedname = [{ txt: 'NLP' }, { txt: 'Neural Network' }, {txt: 'Machine translation'}];
export default () => 
<Layout>

<div id="top">

<div style={{ margin:'auto', backgroundImage:'linear-gradient(black, grey);' }} >
<img src="img.svg" alt="my img"></img>


<Canvas text= {fadedname}/>

<SocialIcon url="http://facebook.com/mickyc2" />
<SocialIcon url="https://www.linkedin.com/in/micky-chan-bb9437137" />
<SocialIcon url="https://github.com/michiboo" />
<SocialIcon url="mailto:chanmickyyun@gmail.com" />
<Header headerText="Hi I am Micky, and I do programming"/>
</div>


</div>
<ScrollableAnchor id={'project'}>
<p> Take a Look at some of my projects! </p>
</ScrollableAnchor>

<Pcanvas> </Pcanvas>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
{/* <Simplecard header="Blog" techstack="python"  body="A web app" link="https://bitbucket.org/drickweed/flask_blog/src/master/"/>  */}
 <div style={{'text-align':'left',   display: 'flex', 'justify-content': 'space-between'}} >
<Project name="Web blog" desc="A simple web blog made with flask" linkdesc="learn more"/>
<Project name="Web blog" desc="A simple web blog made with flask"  linkdesc="learn more"/>
<Project name="Web blog" desc="A simple web blog made with flask"  linkdesc="learn more"/>
</div>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<ScrollableAnchor id={'certification'} >
<p>  <b> Certification </b> </p>
</ScrollableAnchor>
<div style={{   display: 'flex', 'justify-content': 'space-between'}} >
<Project name="Google Cloud Certified Associate Cloud Engineer 2018-2020" desc="I Have experience in deploying, maintaince application on GCP"
linkdesc="click to see the cert!"
link="https://www.credential.net/d4s7wqvt?key=7dd87b96b278bdd3394a805980da3f33159beaf7938014fd10439b37ac77962a&_ga=2.80565663.989114524.1545335667-1731512996.1545335667"/>


</div>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<ScrollableAnchor id={'experience'} >
<p> <b> Experience </b> </p>
</ScrollableAnchor>
<div> Accenture Internship: SAP ABAP

<p>2018/11 - Present</p>
</div>





<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<ScrollableAnchor id={'Education'} >
<p> <b> Education </b> </p>
</ScrollableAnchor>
<div> Lativan universities of life science and technologies: Bsc Information technology 
<p>2016/09 - Present</p>
</div>



</Layout>


