/* Old but loved these codes

console.log('Loaded!');

//change the text of the main-text div

var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

//making madi move

var img = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px'
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
    
}

*/

//Counter Code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
     //make a req to counter endpoint
     
     //capture the response and store it in a variable
     
     //render the variable in the correct span
     counter = counter + 1;
     var span = document.getElementById('count');
     span.innerHTML = counter.toString();
};