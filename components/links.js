const Data = {
  DownloadLinks: {
    "Hostel Withdrawl Form": "media/documents/hostel_withdrawal.pdf",
    "Medical Claim Form": "media/documents/medical_claim.pdf",
    "Tezpur University Hostel Rules": "media/documents/hostel_rule.pdf",
    "Hostel Accomodation Form": "media/documents/hostel_accommodation.pdf",
  },
  ImportantLinks: {
    "Tezpur University - Home page": "http://www.tezu.ernet.in/",
    "Central Library": "http://www.tezu.ernet.in/Library/",
    "TU News & Notifications": "http://www.tezu.ernet.in/newsfeeds.html",
    "Bus Timing": "http://www.tezu.ernet.in/bus_time/NOTICE_1256.pdf",
    "Holiday List": "http://www.tezu.ernet.in/notice/2021/December/HOLIDAY_LIST_2022.pdf",
    "Academic Calendar": "http://www.tezu.ernet.in/academic/2022/July/Autumn_Semester_Acdemic%20_Calender_2022.pdf",
    "Student Webmail": "http://webmail.tezu.ernet.in/src/login.php",
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
        <li><a href=${Data.DownloadLinks[key]} target="_blank" >${key}</a>
    </li></div>`;
  });
    document.getElementById("DownloadLinks").innerHTML += content;

    content = ""
    Object.keys(Data.ImportantLinks).forEach((key) => {
        content += `<div class="link">
        <li><a href=${Data.ImportantLinks[key]} target="_blank" >${key}</a>
    </li></div>`;
    });
    document.getElementById("ImportantLinks").innerHTML += content;
}
