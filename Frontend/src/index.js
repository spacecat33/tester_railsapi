let editMode = false;

document.addEventListener("DOMContentLoaded", function() {

    // const form = document.querySelector('form'); //this will grab first form on page
    const form = document.getElementById("comment-form")  //this will grab specific form with the noted id/specific selector.
    console.log(form);

    form.addEventListener("submit", handleSubmit) //note that the more event listeners slows the site down

    addClickToButtons();
    addClickMeButton();
})

function handleSubmit(event) {
        event.preventDefault();   //this prevents the default refresh behaviour and allows the input to be persisted
        console.log(event);
        // const input = event.target[0];
        // const comment = input.value;    //OR INSTEAD OF THIS LINE AND LINE ABOVE, CAN PUT:
        const commentInput = document.getElementById("new-comment");
        if (!!editMode) {  //double bolean means we have current commentDiv that we're currently editing
            editMode.children[0].innerText = commentInput.value;
            document.getElementById('submit-comment').value = "Submit"
            editMode = false;
        } else {
             addComment(commentInput.value);             
        }
       
        commentInput.value = "";

}

function addComment (comment) {
    const commentsDiv = document.getElementById("comments-container");
    const commentDiv = document.createElement('div');
    const commentSpan = document.createElement('span');
    const deleteImage = document.createElement('span');
    const space = document.createElement('br');
    const editButton = document.createElement('button');


    commentSpan.innerText = comment;
    deleteImage.innerHTML = "     &#9747; Click to delete"; //NOTE that innerText and innerComment won't work here and instead show string instead of image
    deleteImage.className = "trash";

    editButton.innerText = "Edit me"
    editButton.addEventListener("click", handleEditButton)

    deleteImage.addEventListener("click", (event) => {
        event.target.parentElement.remove();
    })

    // add fetch() function here to backend database in order to persist user entries
    // note you can use nodeexpress, mongodb or pythonbackend with JS frontend but it'll always be separate/on a different server

    commentDiv.append(commentSpan, editButton, deleteImage, space);
    commentsDiv.append(commentDiv);

    //alternative but with possible security issue
    //commentsDiv.innerHTML += `<span>${comment}</span><br>`
}



function handleEditButton(event) {
    const commentDiv = event.target.parentElement;
    let comment = commentDiv.children[0].innerText;
    const submitButton = document.getElementById('submit-comment');
    const input = document.getElementById('new-comment');
    input.value = comment;
    submitButton.value = "Edit";
    editMode = commentDiv;
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

function addClickMeButton() {
    const button = document.getElementById("my-button");
    button.addEventListener("click", callback()) //always need a function to be added here

}

function callback(){
    console.log("hi")
    return function() {
        console.log("hello")
    }
}

function fetchComments(){
   //fetch all comments from backend db

   fetch("http://localhost:3000/api/v1/comments", {
        method: POST, 
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"  
        },
        body: JSON.stringify({
            name: nameInput.value
        })
    }
//    .then(res => res.json())
//    .then(data => {
//     console.log(data)
//     let h1 = document.querySelector('header h1')
//     h1.textContent = data.name
//    })
   
//    render comments to #comments-container
}