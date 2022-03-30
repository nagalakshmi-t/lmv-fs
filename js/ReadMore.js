let noOfCharac = 290;
let contents = document.querySelectorAll(".contentloan");
// let service = document.querySelectorAll(".service_content");
contents.forEach(content => {
    if (content.textContent.length < noOfCharac) {
        content.nextElementSibling.style.display = "none";
    }
    else {
        let displayText = content.textContent.slice(0, noOfCharac);
        let moreText = content.textContent.slice(noOfCharac);
        content.innerHTML = `${displayText}
                
                <span class="dots" >...</span>
                <span class="hide more" >${moreText}</span>`;
                
    }
})



function readMore(btn) {
    let post = btn.parentElement;  
    let hi= post.querySelector(".dots").classList.toggle("hide");
    // let sercontainer = document.querySelector(".icons");
    if(hi){
        post.style="width:50%;height:auto;margin:auto;position:fixed;top:30%;left:25%;overflow:auto;z-index:100; "; 
        // bg.style = "width:100%;height:100%;"
        // sercontainer.style = "filter:blur(2px)";
        
    }
    else{
        post.style = "width:100%;";
        // sercontainer.style = "filter:blur(0px)";
    }
    
  post.querySelector(".more").classList.toggle("hide");

    btn.textContent == "Read More" ? btn.textContent
        = "Read Less" : btn.textContent = "Read More";
}
