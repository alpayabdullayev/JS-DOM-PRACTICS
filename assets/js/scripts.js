let h1 = document.getElementById('cagir');
let box = document.querySelector('.box2'); 
let body = document.querySelector('body')
let info = document.querySelector('.info')

let allBox = document.querySelectorAll('.box')

let btn = document.createElement('button')
btn.style.color = 'red'
btn.textContent = 'click'

// console.log(allBox);

body.append(btn)

btn.onclick = () =>{
    let addStrings = prompt("please add element")
    let div = document.createElement('div')
    div.textContent= addStrings
    div.classList.add("kvadrat");
    div.style.marginTop = '20px'
    div.onclick = () =>{
        div.classList.toggle('aktiv')
    }
    body.append(div)

}

h1.onclick = () => {
    // alert('salam');
    h1.style.color = 'red';
    h1.classList.add('active');
}

box.addEventListener("click", function() { 
    box.classList.toggle("active");
});



allBox.forEach(box => {
    box.onclick = () =>{
        console.log(`${box.innerText}`);
    }
});


