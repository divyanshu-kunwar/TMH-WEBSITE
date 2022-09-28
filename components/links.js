const Data = {
  DownloadLinks: {
    "Hostel Withdrawl Form": "",
    "Medical Claim Form": "",
    "Railway Concession Form": "",
    "Boarder Certificate Form": "",
    "Tezpur University Hostel Rules": "",
    "Hostel Accomodation Form": "",
  },
  ImportantLinks: {
    "Tezpur University - Home page": "",
    "Central Library": "",
    "TU News & Notifications": "",
    "Bus Timing": "",
    "Holiday List": "",
    "Academic Calendar": "",
    "Student Webmail": "",
  },
};

window.addEventListener("DOMContentLoaded", () => {
  fetch("./components/links.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (out) {
      document.querySelector("#LinksContainer").innerHTML = out;

      addLinks();
    });
});

function addLinks() {
    content = ""
  Object.keys(Data.DownloadLinks).forEach((key) => {
    content += `<div class="link">
        <li><a href=${Data.DownloadLinks[key]}>${key}</a>
    </li></div>`;
  });
    document.getElementById("DownloadLinks").innerHTML += content;

    content = ""
    Object.keys(Data.ImportantLinks).forEach((key) => {
        content += `<div class="link">
        <li><a href=${Data.ImportantLinks[key]}>${key}</a>
    </li></div>`;
    });
    document.getElementById("ImportantLinks").innerHTML += content;
}
