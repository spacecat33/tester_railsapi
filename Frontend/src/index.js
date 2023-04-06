document.addEventListener("DOMContentLoaded", function() {

const form = document.querySelector('form');
console.log(form);

form.addEventListener("submit", (event) => {
        event.preventDefault();   //this prevents the default refresh behaviour and allows the input to be persisted
        console.log(event);
        const input = event.target[0];
        const comment = input.value;
        console.log(comment);
    })
})