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
        const commentInput = document.getElementById("new-comment");
        addComment(commentInput.value);
        commentInput.value = "";

}

function addComment (comment) {
    const commentsDiv = document.getElementById("comments-container");
    const commentDiv = document.createElement('div');
    const commentSpan = document.createElement('span');
    const deleteButton = document.createElement('span');
    const space = document.createElement('br');

    commentSpan.innerText = comment;
    deleteButton.innerHTML = "     &#9747; Click to delete"; //NOTE that innerText and innerComment won't work here and instead show string instead of image
    deleteButton.className = "trash";

    deleteButton.addEventListener("click", (event) => {
        event.target.parentElement.remove();
    })

    // add fetch() function here to backend database in order to persist user entries
    // note you can use nodeexpress, mongodb or pythonbackend with JS frontend but it'll always be separate/on a different server

    commentDiv.append(commentSpan, deleteButton, space);
    commentsDiv.append(commentDiv);

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