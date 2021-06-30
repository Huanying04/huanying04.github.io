var path = window.location.pathname;
var page = path.split("/").pop().split("\.")[0];
console.log(page);

switch (page) {
    case "index":
    default:
        document.getElementById('nav-home-btn').classList.add('active');
        break;
    case "artworks":
        document.getElementById('nav-artworks-btn').classList.add('active');
        break;
    case "faith":
        document.getElementById('nav-faith-btn').classList.add('active');
        break;
    case "about":
        document.getElementById('nav-about-btn').classList.add('active');
        break;
}