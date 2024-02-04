let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let count = document.getElementById("count");
var number = 0;

plusBtn.addEventListener('click', () => {
    console.log('+ clicked');
    number++;
    count.innerHTML = number
    alert("you pressed plus")
}

) 

minusBtn.addEventListener('click', () => {
    console.log('- clicked');
    number--;
    count.innerHTML = number
    alert("you pressed minus")
}

) 
