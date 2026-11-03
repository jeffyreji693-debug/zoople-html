let username = "admin"
let password = 12345
// let password = 12345

let name = prompt("Enter username")
let pass = parseInt(prompt("Enter password"))

if (name===username && pass===password) {
  document.write("Login successful")
  alert("Login successful")
} else {
  alert("login failed")
}