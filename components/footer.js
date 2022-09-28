window.addEventListener("DOMContentLoaded", () => {
    fetch("./components/footer.html")
    .then(function (response) {
        return response.text()
    })
    .then(function (out) {
        document.querySelector("Footer").innerHTML = out
    })
})