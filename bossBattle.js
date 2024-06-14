let butoon = document.querySelector(".hawkButton");
let shot = document.querySelector(".shot");

function changeImage(){
    let img = document.getElementById('hawk');
    img.src = 'Screen Shot 2024-06-13 at 10.13.42 PM.png';
    let word = document.getElementById('word');
    word.src = '69ad190c22aa8283eb47ee68323f2f8c.png';
    shot.play();
};

function addimageOne() {
    let img = document.createElement("img");
    img.src = "https://64.media.tumblr.com/13b93f0fd46d7a1eda4d04905b8c6299/fdede3fa4bc27e95-3b/s400x600/44b0460cb3e4dd457cbdae3fe876801f697803f5.gif";
    let class_name = "gif";
    img.setAttribute("class", class_name);
    document.getElementById("main").appendChild(img);
};
function addimageTwo() {
    let img = document.createElement("img");
    img.src = "a85cd79f911cf7fe46cc4ade0059de2c.png";
    let class_name = "gif";
    img.setAttribute("class", class_name);
    document.getElementById("main").appendChild(img);
    img.height = 40;
    img.width = 450;
};
butoon.addEventListener("click", function toggleButton() {
    document.getElementById("button").className = 'show'; 
});
