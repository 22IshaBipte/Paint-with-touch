var mouse_Event =""
var last_position_of_X, last_position_of_Y

canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

color="black"
width_of_line=1

canvas.addEventListener("mousedown" , myMouseDown)
function myMouseDown(){
    mouse_Event="mousedown"
    color=document.getElementById("color").value
    width=document.getElementById("width").value

}

canvas.addEventListener("mouseup" , myMouseUp)
function myMouseUp(){
    mouse_Event="mouseup"
}

canvas.addEventListener("mouseleave" , myMouseLeave)
function myMouseLeave(){
    mouse_Event="mouseleave"
}

canvas.addEventListener("mousemove" , myMouseMove)
function myMouseMove(e){
    current_position_of_mouseX=e.clientX-canvas.offsetLeft
    current_position_of_mouseY=e.clientY-canvas.offsetTop
    if(mouse_Event=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=width_of_line
        ctx.moveTo(last_position_of_X,last_position_of_Y)
        ctx.lineTo(current_position_of_mouseX,current_position_of_mouseY)
        ctx.stroke()
    }

    last_position_of_X=current_position_of_mouseX
    last_position_of_Y=current_position_of_mouseY
}

function clearCanvas(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}

var width= screen.width
console.log(width)

new_width=screen.width-70
new_height=screen.height-300

if(screen.width<992){
  canvas.width=new_width
  canvas.height=new_height
  document.body.style.overflow="hidden"  
}

canvas.addEventListener("touchstart" , start)
function start(e){
    color= document.getElementById("color").value
    width_of_line=document.getElementById("width").value
    last_position_of_X= e.touches[0].clientX-canvas.offsetLeft
    last_position_of_Y=e.touches[0].clientY-canvas.offsetTop
}
canvas.addEventListener("touchmove", my_touchmove);




function my_touchmove(e) {

    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of  and y coordinates = ");
        console.log("x = " + last_position_of_X + "y = " + last_position_of_Y);
        ctx.moveTo(last_position_of_X, last_position_of_Y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
    

    last_position_of_X = current_position_of_touch_x;
    last_position_of_Y = current_position_of_touch_y;
}

