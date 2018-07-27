

//WHEN HAMMER COLLIDES WITH TYPEWRITER
const player = document.querySelector('#player');
const typewriter = document.querySelector('#typeWriter');
const hammer = document.querySelector('#hammer');
let hammerSound = document.querySelector('#hammersound');
let hammerStriker = document.querySelector('#hammerStriker');

player.addEventListener('collide', function (e) {
    console.log('player has collided with typewriter #' + e.detail.body.id);

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

document.body.onkeyup = function(e){
    if (e.keyCode == 32){
         //console.log("it works");
         hammerStriker.emit('hit');
        
    }
}

// // AUDIO HERE
// hammer.addEventListener("click", e=> {
//     console.log("clicked!")
//     hammerSound.play()
// })


// gets the value of the rotation and gets the x value
// tracking from 85 to 90 degreees
var hammerRotation;
var hammerRotationX;
function monitorRotation(){
    hammerRotation= hammerStriker.getAttribute("rotation");
    hammerRotationX= hammerRotation.x
    //console.log(hammerRotationX);
    //console.log("test");
    if (hammerRotationX > 85){
        console.log("hit")
    }
}

setInterval(monitorRotation, 100)






