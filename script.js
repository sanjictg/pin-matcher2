//Random Number Generate
const generateBtn = document.getElementById("generate-pin");
generateBtn.addEventListener("click", function(){
const randomNumber = document.getElementById("random-number").value;
const randomAmount = parseFloat(randomNumber);
let randomNewAmount = Math.floor(Math.random (randomAmount) * 9999)+1000;
while (randomNewAmount>9999){
    randomNewAmount = Math.floor(Math.random (randomAmount) * 9999)+1000;
}
document.getElementById("random-number").value = randomNewAmount;
});



//Input Numbers in Display
let inputDisplay=document.getElementById('display');
function display(num){
inputDisplay.value+=num;
}


//ClearButton
let clearBtn=document.getElementById('clear').addEventListener('click',function(){
inputDisplay.value='';
})

//Backspace
let backSpace=document.getElementById('backspace').addEventListener('click',function(){
const inputDisplay = document.getElementById('display').value;
document.getElementById('display').value = inputDisplay.substr(0, inputDisplay.length - 1);
})
//Pin Matcher
function result() {
    let Verify = document.getElementById('random-number').value
    let submit = document.getElementById('CalDisplay').value

    if (Verify == submit) {
        document.getElementById('Match').style.display = "block";
        document.getElementById('NotMatch').style.display = "none";
    } else {
        document.getElementById('Match').style.display = "none";
        document.getElementById('NotMatch').style.display = "block";
    }
    negative = document.getElementById('negative').innerText--;
    totalMaine = parseInt(negative);
    document.getElementById('negative').value = totalMaine;
    if (totalMaine == !0) {
        document.getElementById('NotMatch').style.display = "none";
        document.getElementById('Match').style.display = "none";
        document.getElementById('submit').disabled = true;
        document.getElementById('try').style.display = "block";
    }
}