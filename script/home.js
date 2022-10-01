/**
 * TODO 
 */

function homeLoaded(){
const zoomElement = document.getElementById("welcome_txt");
const zoomElement2 = document.getElementById("estd_txt");
const zoomElement3 = document.getElementById("hero_animation");
const zoomElement4 = document.getElementById("logo_container");
let zoom = 1;
const ZOOM_SPEED = 0.02;

document.addEventListener("wheel", function(e) {  
    
    if(e.deltaY > 0){    
        if(zoom > 0.0){
        zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  
        zoomElement2.style.transform = `scale(${zoom*0.5})`;  
        zoomElement2.style.opacity = `${zoom}`;  
        zoomElement3.style.transform = `scale(4) translateY(${16*(1-zoom)}%)`
        zoomElement4.style.transform = `translateY(${720*(1-zoom)}%)`;
    } 
}else{    
    if(zoom < 1.0){
        zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;  
        zoomElement2.style.transform = `scale(${zoom*0.5})`;
        zoomElement2.style.opacity = `${zoom}`;  
        zoomElement3.style.transform = `scale(4) translateY(${16*(1-zoom)}%)`
        zoomElement4.style.transform = `translateY(${720*(1-zoom)}%)`;
    }
}

});

}

function setSrc(src){
    document.getElementById("gallery_preview").setAttribute("src",src);
}

function navigateGallery(){
    document.querySelector("#link_Gall a").click();
}

function getBoarders(){
    var date = new Date();
    var time_in_millis = date.getTime();
    fetch("https://script.google.com/macros/s/AKfycbzwBwYZhCzkLSKQg5Qk8T1cucUnj5bssNfZhrzOljLpDg5Isv_Vk6b8uPx3beU8Dm42/exec" ,
    {method: 'GET'},
    (response) => {
        return response.text()
    })
    .then((out) => {
        out.text().then((text) => {
            data = JSON.parse(text);
            for(const key in data){
                if(key=="last_modified"){
                    let date_mod = new Date(data[key]).toLocaleDateString(); 
                    document.getElementById("last_updated").innerHTML = "Last Updated: " + date_mod;
                }else{
                document.querySelector("#BoardersTable tbody").innerHTML += 
                `<tr>
                <td>${key}.</td>
                <td>${data[key].room}</td>
                <td>${data[key].name}</td>
                <td>${data[key].roll}</td></tr>`;
            }
            }

            document.getElementById("fetching_status").innerHTML = "Fetched in " + (new Date().getTime() - time_in_millis) + "ms at " + new Date().toLocaleTimeString();
            document.getElementById("fetching_status").style.color = "var(--light2)";

        })
    })

}

function popOut(src , text){
    document.getElementById("gallery_preview").style.display = "block";
    document.querySelector("#gallery_preview #inner_image").setAttribute("src",src);
    document.getElementById("gallery_preview_text").innerHTML = text;
}

function closePopOut(){
    document.getElementById("gallery_preview").style.display = "none";
}

function show_admin(id){
    document.querySelectorAll(".admins").forEach((element) => {
        element.style.display = "none";
    });
    document.querySelectorAll(".tags > span").forEach((element) => {
        element.classList.remove("selected");
    });
    document.getElementById(id+"_span").classList.toggle("selected")
    document.getElementById(id).style.display = "flex";
}