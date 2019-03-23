
import React, { Component, Children } from "react"
import { AutoRotatingCarousel,Slide } from 'material-auto-rotating-carousel';
//const Slide = require('./Slide').default;
const { red, blue, green } = require('@material-ui/core/colors');
const Button = require('@material-ui/core/Button').default;

class caro extends React.Component{


  


    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        
    }
    

    render() {
        return(
<div style={{ position: 'relative', width: '100%', height: 500 }}>
  <Button onClick={() => this.setState({ open: true })}>Open carousel</Button>
  <AutoRotatingCarousel
    label='Find out more'
    open={this.state.open}
    onClose={() => this.setState({ open: false })}
    style={{ position: 'absolute' }}
  >
  {this.props.children}
   <Slide
      media={<img src='https://picsum.photos/200' />}
      mediaBackgroundStyle={{ backgroundColor: red[400] }}
      style={{ backgroundColor: red[600] }}
      title='This is a very cool feature'
      subtitle='Just using this will blow your mind.'
    />
    <Slide
      media={<img src='https://picsum.photos/200' />}
      mediaBackgroundStyle={{ backgroundColor: blue[400] }}
      style={{ backgroundColor: blue[600] }}
      title='Ever wanted to be popular?'
      subtitle='Well just mix two colors and your are good to go!'
    />
    <Slide
      media={<img src='https://picsum.photos/200' />}
      mediaBackgroundStyle={{ backgroundColor: green[400] }}
      style={{ backgroundColor: green[600] }}
      title='May the force be with you'
      subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
    />
  </AutoRotatingCarousel>
</div>
        )
}
}  export default caro
