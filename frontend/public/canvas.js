let canvas = document.querySelector('canvas');


const c = canvas.getContext('2d'); //c for context
let color = "#"+((1<<24)*Math.random()|0).toString(16); //to get random colors


let maxRadius =2;
/* let minRadius = 2; */

let colorArray = [
    '#053BA6',
    '#E0C2A6',
    '#0B0D1D',
    '#C7788D',
    '#A7E5FA',
];


canvas.width = window.innerWidth; 
canvas.height = window.innerHeight; /* for some reasons i needed this otherwise the first load of the page wouldn't look great */

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth; //we want to make sure this is recalled everytime the window is resized so that it doesn't stay small for example
    canvas.height = window.innerHeight;

    init(); /* we are recalling this function which we created below */
})

//let's create now more circles
function Circle(x, y, dx, dy, radius) { //we create a js object (function)
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    //we then create a method (draw) within our object because we don't have a way to draw our circles yet. we set it as a function
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
       /*  c.strokeStyle = color;
        c.stroke(); */
        c. fillStyle = this.color; // we wrote this.color here and set it outside of draw but in thr Circle properties above because otherwise because this.draw is recalled all the time in update we would have had lots of color for each circles updating all the time. therefore we put this property outside of draw
        c.fill(); //we are filling with color
    }
    //we want to make sure that we first draw the circles and then we change their properties with update
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) { // (x+radius)we want the circle and not its diameter to hit the end of the window
            this.dx = -this.dx;
        }
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) { // (x+radius)we want the circle and not its diameter to hit the end of the window
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }

}

var circleArray = [];
//let's create lots of circles
function init() { // this is to make sure that everytime we resize the window the circles automatically fill up the screen and nt slowly fill up the empty size of the screen that has just been expanded
    
    circleArray = []; //we needed to set the beginning of the function to start always with an empty array because otherwise all the time we resize the window we start the init function that generate all the time hundreds of circles to push within the array therefore the screen would be full of circles making the process slow and allowing crashes

    for (var i = 0; i < 35; i++) {
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * (innerWidth - radius * 2) + radius;//initial position
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5)*2.5; //setting the x velocity. with the math random -0.5 we set the random direciton and with 7 we set the actual velocity
        var dy = (Math.random() - 0.5)*2.5; //because math random goes from 0 to 1 if we subtract 0.5 we are gonna be having a value between -0.5 and 0.5 which means both positive and negative which means we are giving a random positive and negative velocity (so, if you refresh, sometimes it is quick and sometimes it is slow)
        circleArray.push(new Circle(x, y, dx, dy, radius));
        
    }
}

//let's animate the circle
function animate () {
    requestAnimationFrame(animate); //by adding animate as an argument in this function we are gonna create a loop considering that the latter is actually an argument itself for animation. this is kind of refreshing all the time so as to create more and more circles. 
    c.clearRect(0, 0, innerWidth, innerHeight); //we actually want to remove (clear and not fill anymore) the previous circle so as to give the idea that the circle is moving and not just replicating along the x. and that's applying it everywhere from 0 to the whole height and width of the page so as to remove (after creating them) all the circle one by one after they have been shown

    //so far the 100 circles exists but they are not drawn therefore we create this for loop within the animate function:
    for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update(); //we are recalling here indipendetly each of the circles we created above. each of them have an update within it (see in console log within the browser) which we are recalling here with .update
    }

}
init(); /* we need to call the function to generate it */
animate(); //the above is only going to work if i recall the function here outside the curly braces
