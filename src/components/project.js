import React from "react"
import Button from '@material-ui/core/Button';
class project extends React.Component {




    render() {
        return(
          <div style={{'text-align':'left',display: 'inline-block'}}>
            <h3 > {this.props.name} </h3>
            <p> {this.props.desc}  </p>
            <Button  href={this.props.link} size="small">{this.props.linkdesc}</Button>
            </div>
        )
      }
    
    
    }



    export default project