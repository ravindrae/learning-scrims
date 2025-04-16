const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

let password1El = document.getElementById("password-one")
let password2El = document.getElementById("password-two")
let length = 15

function generatePasswords() {
    let password1 = generateSecurePassword(length)
    let password2 = generateSecurePassword(length)

    password1El.textContent = password1
    password2El.textContent = password2
}

function generateSecurePassword(length) {
    let password = ""
    for(let i = 0;i < length;i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        password = password + characters[randomIndex]
    }

    return password
}

function copyPassword1ToClipboard() {
    navigator.clipboard.writeText(password1El.textContent)
    alert("Copied!")
}

function copyPassword2ToClipboard() {
    navigator.clipboard.writeText(password2El.textContent)
    alert("Copied!")
}