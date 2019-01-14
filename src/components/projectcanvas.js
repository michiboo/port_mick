import React from "react"


class Pcanvas extends React.Component{

    componentDidMount (){
        var c = this.refs.canvas;
        var ctx = c.getContext("2d");
        
        var xcor = 100;
        
        
        var interval = setInterval(() => {
            ctx.clearRect(0, 0, c.width, c.height);
            
            ctx.beginPath();
            ctx.arc(xcor, 160, 50, 0, 2 * Math.PI);
            ctx.stroke();
            xcor += 10;
            if(xcor > 1100){

                clearInterval(interval);
            }
          //  ctx.globalCompositeOperation = 'destination-out'

          
          
        }, 100);



    }



    render() {
        return(
          
            <canvas ref="canvas" width={1200} height={210} />
           
          
        )
      }
    }
    export default Pcanvas


