/*==================================================================
    [ animation aside ]*/
const section = document.getElementsByTagName("section")[0],
  aside = document.getElementsByTagName("aside")[0];

aside.style.display = "none";

section.addEventListener("animationend", () => {
  aside.style.display = "initial";
  aside.classList.add("fadeInRight");
});

/*==================================================================
    [ password eye ]*/

const passwordEye = document.getElementById("password-eye"),
  inputPassword = document.querySelector("input[type=password]");

passwordEye.addEventListener("click", () => {
  if (passwordEye.classList.contains("fa-eye-slash")) {
    passwordEye.classList.remove("fa-eye-slash");
    passwordEye.classList.add("fa-eye");
    inputPassword.setAttribute("type", "text");
  } else {
    passwordEye.classList.remove("fa-eye");
    passwordEye.classList.add("fa-eye-slash");
    inputPassword.setAttribute("type", "password");
  }
});

/*==================================================================
    [ show error message ]*/

const buttonSubmit = document.querySelector(".btn");

buttonSubmit.addEventListener("submit", (event) => {
  /**
   * * Here comes the Validation logic or an ApI from the Server
   * * I will assume that there is an Error when clicking
   */
  event.preventDefault();
  alert(`                                    FEHLER!!!!!                
        Ungültiger Benutzername oder Passwort nicht korrekt.`);
  location.reload();
});