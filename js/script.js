const newsletterFrom = document.querySelector(".newsletter-form");
const inputUserMail = document.getElementById("user-email")
const inputErrorImg = document.querySelector(".email-input-absolute img");
const errorMsg = document.querySelector(".error-msg");

inputUserMail.addEventListener("keyup", ()=>{
    if(!inputUserMail.validity.valid){
        inputErrorImg.classList.add("active");
        errorMsg.classList.add("active");
    }
    if(inputUserMail.validity.valid){
        inputErrorImg.classList.remove("active");
        errorMsg.classList.remove("active");
    }
});

newsletterFrom.addEventListener("submit",(elementEvent)=>{
    if(!inputUserMail.validity.valid || inputUserMail.value === ""){
        inputErrorImg.classList.add("active");
        errorMsg.classList.add("active");
        elementEvent.preventDefault();
    }
})
