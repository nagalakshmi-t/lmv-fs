// Side Nav
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}
 // model 

 var modal = document.getElementById('id01');

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function (event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

// Form Submission

    var form = document.getElementById('my-form');
        form.addEventListener("submit", e => {
        e.preventDefault();
            fetch(form.action, {
                method: "POST",
                body: new FormData(document.getElementById("my-form")),
            }).then(
                response => response.json()
            ).then((html) => {
                alert('submit Succesfully')
            // console.log("form");
            });
        });
