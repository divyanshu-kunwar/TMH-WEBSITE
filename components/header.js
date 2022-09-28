const navigations = {
        'Home' : "./pages/home.html",
        'Administration':"./pages/admin.html",
        'Facilities':"./pages/facilities.html",
        'Boarders':"./pages/boarders.html",
        'Event & Achievements':"./pages/events.html",
        'Gallery':"./pages/gallery.html",
        'Contact Us':"./pages/contact.html",
}
const title = "Transit Men's Hostel"

let links =`<img src="../media/closeIcon.svg" class="close_icon" id="close_icon" onclick=toggle_sidebar() />`
let content = ""
window.addEventListener("DOMContentLoaded", () => {
  
  fetch("./components/header.html")
  .then(function (response) {
    return response.text()
  })
  .then(function (out) {
    content = out
    for (const key in navigations) {
      links += `<span class="header_link" id="link_${key.slice(0,4)}"><a onclick=rendernewPage("${key.split(" ")[0]}","${navigations[key]}","link_${key.slice(0,4)}")>${key}</a></span>`
    }
    document.querySelector("header").innerHTML = content
    document.getElementById("header_linksContainer").innerHTML += links
    document.getElementById("header_title").innerHTML = title
    rendernewPage("Home",navigations[Object.keys(navigations)[0]] ,  "link_Home")
    toggle_sidebar() 
  });


});

function toggle_sidebar(){
    document.getElementById("header_linksContainer").classList.toggle("hide_sidebar")
    document.getElementById("header_linksContainer").classList.toggle("show_sidebar")
}


function rendernewPage(key,page , link_id){
    fetch(page)
    .then(function (response) {
        return response.text()
        })
        .then(function (out) {
            document.querySelector("Main").innerHTML = out
            colorLink(link_id)
            document.title = key + "-TMH"
            toggle_sidebar()
        })
}

function colorLink(link_id){
    let links = document.querySelectorAll(".header_link a")
    links.forEach(link => {
        link.style.color = "var(--gray)"
        link.style.borderBottom = "none"
    });
    document.querySelector(`#${link_id} a`).style.color = "var(--light4)"
    document.querySelector(`#${link_id} a`).style.borderBottom = "2px solid var(--light4)"
}