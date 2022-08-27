const menubtn = document.querySelector(".menubtn")
const options = document.querySelector(".options");
const burger = document.querySelector(".burger");
const cross = document.querySelector(".cross");

const socialmedia = document.querySelector(".socialmedia");
const facebookLink = document.querySelector("#facebookLink")
const twiterLink = document.querySelector("#twiterLink")
const instaLink = document.querySelector("#instaLink")

const soundtracks = document.querySelector("#soundtracks");

if (window.innerWidth < 800) {
    
    burger.classList.toggle("hidden");
    
    if (window.location.href == "https://katherine-j-c-s.github.io/joan_proyect/index.html") {
        console.log("esto es home")
        soundtracks.width = 600;
    }
    else{
        facebookLink.style.color = "black";
        twiterLink.style.color = "black";
        instaLink.style.color = "black";
        console.log()
    }
}
menubtn.addEventListener("click", function() {
    console.log("hizo click")
    burger.classList.toggle("hidden");
    cross.classList.toggle("hidden");
    options.classList.toggle("show-options");
    socialmedia.classList.toggle("show-options");
})
