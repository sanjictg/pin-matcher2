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
const submitBtn=document.getElementById('submit').addEventListener('click',function(){
generateValue=document.getElementById('random-number').value;
inputValue=document.getElementById('display').value;
if(generateValue==inputValue){
document.getElementById('right').style.display='block';
}
else{
document.getElementById ('wrong').style.display='block';
decreaseBtn=document.getElementById('tryleft').innerHTML;
decreaseNum=parseInt(decreaseBtn);
decreaseBtnNew=decreaseNum-1;
document.getElementById('tryleft').innerHTML=decreaseBtnNew;

}


document.getElementById('display').value='';

})
