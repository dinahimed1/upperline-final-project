//WHEN HAMMER COLLIDES WITH TYPEWRITER
const player = document.querySelector('#player');
const typewriter = document.querySelector('#typewriter');
// const hammer = document.querySelector('#hammer');
let hammerSound = document.querySelector('#hammersound');
let hammerStriker = document.querySelector('#hammerStriker');


hammerStriker.addEventListener('collide', function(e) {
    // console.log('player has collided with typewriter #' + e.detail.body.id);

    console.log(this);

    // e.detail.target.el;  // Original entity (playerEl).
    // e.detail.body.el;    // Other entity, which playerEl touched.
    // e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
    // e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
});

function disappear() {
    console.log("typewriter is touched");
    // console.log('Player has collided with body #' + e.detail.body.id);
    // typewriter.innerHTML = `<a-entity gblock="https://poly.google.com/view/2SmAWPS6_mH" ></a-entity>`
}


// WHEN SPACE KEY IS PRESSED, rotate the hammer
//SPACE BAR HAS A VALUE OF 32, IDK WHY

document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
        //console.log("it works");
        hammerStriker.emit('swing');

        // // AUDIO HERE
        hammerSound.play();


    }
}


// gets the value of the rotation and gets the x value
// tracking from 85 to 90 degreees


//  gets position of typewriter and hammer
var typePositionString = typewriter.getAttribute("position");
// when value comes out as a string, it splits the string 
// converts mini strings to a number
var typePositionArray = typePositionString.split(" ");
var typePositionX = Number(typePositionArray[0]);
var typePositionZ = Number(typePositionArray[2]);


var hammerRotation;
var hammerRotationX;
var hammerPosition;
var playerPosition;

// making the function below get called every one-tenth of a second
setInterval(monitorRotation, 100);

function monitorRotation() {
    hammerRotation = hammerStriker.getAttribute("rotation");
    // did not have to convert out of string, can use .x
    hammerRotationX = hammerRotation.x

    if (hammerRotationX > 85) {
        playerPosition = player.getAttribute("position");
        //variables hold the position of each 
        var playerPositionX = playerPosition.x
        var playerPositionY = playerPosition.y
        var playerPositionZ = playerPosition.z

        // accounts for hammer being a little away from the player
        var hammerX = Math.round(playerPositionX + 1.5);
        var hammerZ = Math.round(playerPositionZ - 4);
        
        // debugging code below
        console.log("--------");
        console.log("typePositionX " + typePositionX)
        console.log("typePositionZ " + typePositionZ)
        console.log("hammerX " + hammerX)
        console.log("hammerZ " + hammerZ)
        
        // typewriter disapears when any condition of both if statements are true 
        // makes sure if either position of the typewriter matches with the hammer
        if ((typePositionX == hammerX) || (typePositionX == hammerX + 1) || (typePositionX == hammerX - 1)) {
            if ((typePositionZ == hammerZ) || (typePositionZ == hammerZ + 1) || (typePositionZ == hammerZ - 1)) {
                console.log("hit")
                typewriter.setAttribute("visible", "false");
                movetypewriter()
            }
        }
    }
}

// makes the typewriter reappear in a diff location
function movetypewriter(){
    typewriter.setAttribute("visible", "true");
    var newX = Math.random() * 4;
    var newZ = Math.random() * 4;
    console.log(newX);
    console.log(newZ);
    typewriter.setAttribute("position", `${newX} 0 ${newZ}`)
}



