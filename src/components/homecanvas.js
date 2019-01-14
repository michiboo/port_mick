import React from "react"

class Canvas extends React.Component {
    componentDidMount() {
      const canvas = this.refs.canvas;
      const ctx = canvas.getContext("2d");
     
      const textu = this.props.text;
      
     fadeOut( canvas, ctx, 'I am programmer',210,75);

      //wait(3000);
    //ctx.clearRect(210,75,canvas.width,canvas.height);


     setTimeout(
      function() {
        fadeOut(canvas, ctx, textu, 210,75);
    }, 2000); 
      
    
     //fadeOut(canvas, ctx, this.props.text, 210,100);
    
    //   canvas.addEventListener('mousemove', function(evt) {
    //     var mousePos = getMousePos(canvas, evt);
    //     var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    //     writeMessage(canvas, message);
    //   }, false);
    }

 

//https://codepen.io/gschier/pen/jkivt 
  
//640 :425

    render() {
      return(
        
          <canvas ref="canvas" width={600} height={210} />
         
        
      )
    }
  }
  export default Canvas



  function writeMessage(canvas, message) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = '18pt Calibri';
    context.fillStyle = 'black';
    context.fillText(message, 10, 25);
  }
  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  function fadeOut(canvas,ctx,text,xc,yc) {
    
    
      var alpha = 1.0,   // full opacity
      interval = setInterval(function () {
          //canvas.width = canvas.width; // Clears the canvas
          ctx.clearRect(xc-30,yc-30,canvas.width, 50);
          ctx.font = "40px Courier";
          ctx.fillStyle = "rgba(255, 255, 255, " + alpha + ")";
          ctx.fillText(text, xc, yc);
          alpha = alpha - 0.1; // decrease opacity (fade out)
          if (alpha < 0) {
            
            ctx.clearRect(xc-30,yc-30,canvas.width, 50);
            //canvas.width = canvas.width; 
            clearInterval(interval);
          }
      }, 100); 
    
    
    
   
        
}

function wait(ms) {
  var start = Date.now(),
      now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}