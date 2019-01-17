import React from "react"


class Pcanvas extends React.Component{

    componentDidMount (){


        window.requestAnimFrame = (function(callback) {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
            function(callback) {
              window.setTimeout(callback, 1000/60);
            };
          })();
    
          var c = this.refs.canvas;
          var ctx = c.getContext("2d");
          var xcor = 100;
          var angle= 0;
          var endang = 2 * Math.PI;

setTimeout(function() {
        var startTime = (new Date()).getTime();
          animate( c , ctx, xcor,angle,endang);
        }, 1000);



      
        // var interval = setInterval(() => {
          
        //     ctx.clearRect(0, 0, c.width, c.height);
        //    // ctx.translate(xcor,160);
            
        //     ctx.beginPath();
        //     ctx.moveTo(xcor, 150);
        //     ctx.lineTo(xcor+30, 180);
        //     ctx.arc(xcor, 150, 30, angle, endang);
        //     ctx.stroke();
        //     angle += 0.1;
        //     endang += 0.1;
        //    // 
          
        //    ctx.rotate(0.01*Math.PI/180);
        //     xcor += 10;
        //     velocity -= 10;
        //     if(xcor > 1100){

        //         clearInterval(interval);
        //     }
          //  ctx.globalCompositeOperation = 'destination-out'

          
          
    //    }, velocity);



    }



    render() {
        return(
          
            <canvas ref="canvas" width={1200} height={210} />
           
          
        )
      }
    }
    export default Pcanvas


function animate( c , ctx, xcor,angle,endang){
    ctx.clearRect(0, 0, c.width, c.height);
    // ctx.translate(xcor,160);
     
     ctx.beginPath();
     ctx.moveTo(xcor, 150);
     ctx.lineTo(xcor, 150);
     ctx.arc(xcor, 150, 30, angle, endang);
     ctx.stroke();
     angle += 0.1;
     endang += 0.1;
    // 
   
    ctx.rotate(0*Math.PI/180);
    
   
     if(xcor > 1100){
    
        window.requestAnimFrame(function(){
            backcollision(c,ctx,xcor-1,angle,endang);

         })
            return;
     
        
    
        
    

         
     }else{
        window.requestAnimFrame(function(){
            animate(c,ctx,xcor+1,angle,endang);

         })
         
     }

}

function backcollision(c, ctx, xcor,angle,endang){
    
   

    ctx.clearRect(0, 0, c.width, c.height);
    // ctx.translate(xcor,160);
     ctx.beginPath();
     ctx.moveTo(xcor, 150);
     ctx.lineTo(xcor, 150);
     ctx.arc(xcor, 150, 30, angle, endang);
     ctx.stroke();
     angle -= 0.1;
     endang -= 0.1;
    ctx.rotate(0*Math.PI/180);
    xcor -= 1;


    //for(; t > 0; t --){

        if(xcor < 1000){
            return;
        }

       else{ window.requestAnimFrame(function(){
            backcollision(c, ctx, xcor,angle,endang)
    }
    )
}
   // }
    }

