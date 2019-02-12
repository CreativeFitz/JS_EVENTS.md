// document.querySelector("section").innerHTML = "<input id=inputbox type=text> Enter some text!";
// document.querySelector("p").innerHTML += "<article id=box1></article>";
// document.querySelector("p").innerHTML += "<article id=box2></article>";
// const inputField = document.getElementById("inputbox");
// const outputBox1 = document.getElementById("box1");
// const outputBox2 = document.getElementById("box2");
// inputField.addEventListener("keyup", function(event){
//     outputBox1.innerHTML = event.target.value
// });
// inputField.addEventListener("keyup", function(event){
//     outputBox2.innerHTML = event.target.value
// });

document.querySelector("#activate-flight").addEventListener("click", function(event){
    document.querySelector("#flight").classList.remove("disabled");
    document.querySelector("#flight").classList.add("enabled");
});
document.querySelector("#activate-mindreading").addEventListener("click", function(event){
    document.querySelector("#mindreading").classList.remove("disabled");
    document.querySelector("#mindreading").classList.add("enabled");
});
document.querySelector("#activate-xray").addEventListener("click", function(event){
    document.querySelector("#xray").classList.remove("disabled");
    document.querySelector("#xray").classList.add("enabled");
});
document.querySelector("#activate-all").addEventListener("click", function(event){
    document.querySelectorall(".power").classList.remove("disabled");
    document.querySelectorall(".power").classList.add("enabled");
})