document.addEventListener("DOMContentLoaded", function() {

// const form = document.querySelector('form'); //this will grab first form on page
const form = document.getElementById("comment-form")  //this will grab specific form with the noted id/specific selector.
console.log(form);

form.addEventListener("submit", handleSubmit) //note that the more event listeners slows the site down

addClickToButtons();
})

function handleSubmit(event) {
        event.preventDefault();   //this prevents the default refresh behaviour and allows the input to be persisted
        console.log(event);
        // const input = event.target[0];
        // const comment = input.value;    //OR INSTEAD OF THIS LINE AND LINE ABOVE, CAN PUT:
        const comment = document.getElementById("new-comment").value;
        console.log(comment);
        addComment(comment)
}

function addComment (comment) {
    const commentsDiv = document.getElementById("comments-container");
    const commentSpan = document.createElement('span');
    const horseHead = document.createElement('span');
    const space = document.createElement('br');

    commentSpan.innerText = comment;
    horseHead.innerHTML = "     &#10004;" //NOTE that innerText and innerComment won't work here and instead show string instead of image
    
    commentsDiv.append(commentSpan, horseHead, space);

    //alternative but with possible security issue
    //commentsDiv.innerHTML += `<span>${comment}</span><br>`
}

function addClickToButtons() {
    const parent = document.getElementById("helicopter-parent");
    parent.addEventListener("click", (event) => {
        // alert("I was clicked");
        console.dir(event.target)
        switch (event.target.dataset.name) {
            case "alert":
                alert("I was clicked");
                break;

            case "log":
                console.log("I was clicked");
                break;

            case "error":
                console.error("I was clicked");
                break;
        
            default:
                console.warn("Something else was clicked");
                break;
        }
    })
}