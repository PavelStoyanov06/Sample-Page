const pass = "gaming"
let lock_img = document.getElementById("lock_img")


function func(){
    var response = prompt("Enter pass!")
    if(response != pass) {
        alert("Wrong password!")
    }else{
        alert("You would be correct good sir!")
        lock_img.remove()  
    } 
}