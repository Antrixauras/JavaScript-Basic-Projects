var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

hole.addEventListener('animationiteration', () => {
    var random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
    counter++;
});

setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500 - characterTop);
    if ((characterTop > 480) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
        alert("Game over. Score: " + (counter - 1));
        character.style.top = 100 + "px";
        counter = 0;
    }
}, 10);

function jump() {
    jumping = 1;
    let jumpcount = 0;
    var jumpinterval = setInterval(function() {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((characterTop > 6)&&(counter<15)) {
            character.style.top = (characterTop - 4) + "px";
        }
        if (jumpcount > 20) {
            clearInterval(jumpinterval);
            jumping = 0;
            jumpcount = 0;
        }
        jumpcount++;
    }, 10);
}

