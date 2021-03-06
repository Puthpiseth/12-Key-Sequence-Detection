const pressed = [];
const secretCode = "piseth"

window.addEventListener('keyup', (e) => {
    // console.log(e.key); //shows what keys user have pressed
    pressed.push(e.key); //whenever someone presses one of these items, we're gonna push it into an array
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) { //check if this array contains the secretCode we're looking for
        cornify_add(); //when you type the word from secretCode('wesbos), it will add unicorns/rainbows/random stuff to the screen
    }
    // console.log(pressed);
});