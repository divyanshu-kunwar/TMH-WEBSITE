const Imagedata = {
    1:{
        caption:"Night View",
        src:"../media/18.jpeg",
        aspectRatio: '5/3'
    },
    2:{
        caption : "Main Entrance Of TMH",
        src:"../media/1.jpg",
        aspectRatio: '5/3'
    },
    3:{
        caption : "Spring Season",
        src:"../media/2.jpg",
        aspectRatio: '5/3'
    },
    4:{
        caption : "Night View As Seen From Hostel Room",
        src:"../media/3.jpeg",
        aspectRatio: '5/3'
    },
    5:{
        caption : "TMH",
        src:"../media/14.jpeg",
        aspectRatio: '5/3'
    },
    6:{
        caption:"Hostel Building As Viewed From HSS Dept. Road",
        src:"../media/16.jpeg",
        aspectRatio:'2/3'
    },
    7:{
        caption:"Outside Scenic view as seen from Hostel Room",
        src:"../media/10.jpeg",
        aspectRatio:'2/3'
    },
    8:{
        caption:"TMH Hostel Building Sorrounded By Flora",
        src:"../media/12.jpeg",
        aspectRatio:'2/3'
    },
    9:{
        caption:"TMH Hostel",
        src:"../media/15.jpeg",
        aspectRatio:'2/3'
    },
    10:{
        caption:"Janamashtami Celebration",
        src:"../media/5.jpeg",
        aspectRatio:'2/3'
    },
    11:{
        caption:"Janamashtami Celebration",
        src:"../media/9.jpeg",
        aspectRatio:'5/3'
    },
    12:{
        caption:"Hostel March Platoon 2020",
        src:"../media/19.jpg",
        aspectRatio:'5/3'
    },
    13:{
        caption:"TMH Kabaddi Team 2020",
        src:"../media/20.jpg",
        aspectRatio:'5/3'
    },
    14:{
        caption:"Republic Day Cycle Rally by TMH 2020",
        src:"../media/21.jpeg",
        aspectRatio:'5/3'
    },
    15:{
        caption:"Bihu Team TMH 2019",
        src:"../media/22.jpg",
        aspectRatio:'5/3'
    },

}

function getGallery(){
    let layout = '';
    for(const key in Imagedata){
        layout += `<div class="one-fifth" onclick="popOut('${Imagedata[key].src}','${Imagedata[key].caption}') ">
        <img src="${Imagedata[key].src}" style="aspect-ratio: ${Imagedata[key].aspectRatio}" />
        <h5>${Imagedata[key].caption}</h5>
        </div>`
    }
    document.getElementById("galleryview").innerHTML = layout
}

function getPopOutThumb(){

    let Layout = ''
    for(const key in Imagedata){
        Layout += `<div class="thumb" onclick="popOut('${Imagedata[key].src}','${Imagedata[key].caption}')">
            <img src="${Imagedata[key].src}" style="aspect-ratio: ${Imagedata[key].aspectRatio}" />
        </div>`;
    }

    document.getElementById("thumb_container").innerHTML = Layout

}