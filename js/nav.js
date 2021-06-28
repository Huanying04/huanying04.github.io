var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page);

switch (page) {
    case "index.html":
    default:
        document.getElementById('nav-home-btn').classList.add('active');
        break;
    case "artworks.html":
        document.getElementById('nav-artworks-btn').classList.add('active');
        break;
    case "faith.html":
        document.getElementById('nav-faith-btn').classList.add('active');
        break;
    case "about.html":
        document.getElementById('nav-about-btn').classList.add('active');
        break;
}