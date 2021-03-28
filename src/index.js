const contactTab = document.getElementById("contact") 
function alertUser() {
    alert("You are now leaving the website")
} 

contactTab.addEventListener("click", alertUser) 

const homeButton = document.getElementById("hero") 
function alertNav() {
    alert("home")
} 

homeButton.addEventListener("click", alertNav) 