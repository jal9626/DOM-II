// Your code goes here

let button = document.querySelectorAll('.btn');
button[0].addEventListener('mouseover', (event) => {
    button[0].textContent = 'SIGN ME UP FOOL!';
    button[0].style.color = 'red';    
})

button[0].addEventListener('mouseleave', (event) => {
    button[0].textContent = 'Sign Me Up';
    button[0].style.color = 'white';
})

button[1].addEventListener('mouseover', (event) => {
    button[1].textContent = 'SIGN ME UP FOOL!';
    button[1].style.color = 'red';    
})

button[1].addEventListener('mouseleave', (event) => {
    button[1].textContent = 'Sign Me Up';
    button[1].style.color = 'white';
})

button[2].addEventListener('mouseover', (event) => {
    button[2].textContent = 'SIGN ME UP FOOL!';
    button[2].style.color = 'red';    
})

button[2].addEventListener('mouseleave', (event) => {
    button[2].textContent = 'Sign Me Up';
    button[2].style.color = 'white';
})

let navUnfixed = document.querySelector('.mainNavigation');
console.log(navUnfixed);

let images = document.querySelectorAll('img');
images[0].addEventListener('wheel', (event) => {
    images[0].style.position = 'fixed';
    images[0].style.width = '20%';
})

window.addEventListener('load', (event) => {
    console.log('All resources finished loading');
})


