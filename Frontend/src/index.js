document.addEventListener("DOMContentLoaded", function() {

// const form = document.querySelector('form'); //this will grab first form on page
const form = document.getElementById("comment-form")  //this will grab specific form with the noted id/specific selector.
console.log(form);

form.addEventListener("submit", handleSubmit)
})

function handleSubmit(event) {
        event.preventDefault();   //this prevents the default refresh behaviour and allows the input to be persisted
        console.log(event);
        // const input = event.target[0];
        // const comment = input.value;    //OR INSTEAD OF THIS LINE AND LINE ABOVE, CAN PUT:
        const comment = document.getElementById("new-comment").value
        console.log(comment);
    }
