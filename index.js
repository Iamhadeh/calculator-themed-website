

var btnOpenBracket = document.getElementById("open-bracket")
btnOpenBracket.innerHTML = "("

btnCloseBracket = document.getElementById("close-bracket")
btnCloseBracket.innerHTML = ")"
btnPercentage = document.getElementById("%")
btnPercentage.innerHTML = "%"
btnAC = document.getElementById("AC")
btnAC.innerHTML = "AC"

sevenBtn = document.getElementById("7")
sevenBtn.innerHTML = "7"
eightBtn = document.getElementById("8")
eightBtn.innerHTML = "8"
nineBtn = document.getElementById("9")
nineBtn.innerHTML = "9"
divideBtn = document.getElementById("÷")
divideBtn.innerHTML = "÷" 

sixBtn = document.getElementById("6")
sixBtn.innerHTML = "6"
fiveBtn = document.getElementById("5")
fiveBtn.innerHTML = "5"
fourBtn = document.getElementById("4")
fourBtn.innerHTML = "4"
xBtn = document.getElementById("x")
xBtn.innerHTML = "x"


threeBtn = document.getElementById("3")
threeBtn.innerHTML = "3"
twoBtn = document.getElementById("2")
twoBtn.innerHTML = "2"
oneBtn = document.getElementById("1")
oneBtn.innerHTML = "1"
minusBtn = document.getElementById("minus")
minusBtn.innerHTML = "-"

zeroBtn = document.getElementById("0")
zeroBtn.innerHTML = "0"
dotBtn = document.getElementById("dot")
dotBtn.innerHTML = "."
equalsBtn = document.getElementById("equals")
equalsBtn.innerHTML = "="
plusBtn = document.getElementById("plus")
plusBtn.innerHTML = "+"


inputForm = document.getElementById("box")



inputSpace = document.getElementById("inputSpace");


btnOpenBracket.addEventListener( "click",  function () {
    return inputSpace.value += "(" + " ";
});

btnCloseBracket.addEventListener( "click",  function () {
    return inputSpace.value += ")" + " ";

});

// equalsBtn.innerHTML = <a href="./about.html"></a>;



equalsBtn.addEventListener('click', function () {
    return equalsBtn.onclick = '<a href="./about.html"></a>'
});




// btnOpenBracket.addEventListener ("click", function () {
//     console.log("completed");
// });






