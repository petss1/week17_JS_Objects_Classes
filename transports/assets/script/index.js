const form=document.querySelector(".container");
const submitBtn=document.getElementById("submitBtn");
const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const ageInput=document.getElementById("age");
const genderInputs=document.getElementsByName("gender");
const professionSelect=document.getElementById("profession");
const passwordInput=document.getElementById("password");
const consentCheckbox=document.getElementById("consent");

function validateForm(){
    let isValid=true;

    const nameError=document.getElementById("nameError");
    if(nameInput.value.length<2 || nameInput.value.length>20 || !/^[A-Za-z ]+$/.test(nameInput.value)){
        nameError.textContent="Имя должно содержать только латинские буквы, пробелы и длина должна быть от 2 до 20 символов";
        nameError.style.display="block";
        isValid=false;
    } else{
        nameError.style.display="none";
    }

    const emailError=document.getElementById("emailError");
    if(!/\S+@\S+\.\S+/.test(emailInput.value)){
        emailError.textContent="Введите корректный email";
        emailError.style.display="block";
        isValid=false;
    } else{
        emailError.style.display="none";
    }

    const ageError=document.getElementById("ageError");
    if(ageInput.value<1 || ageInput.value>130){
        ageError.textContent="Возраст должен быть от 1 до 130 лет";
        ageError.style.display="block";
        isValid=false;
    } else{
        ageError.style.display="none";
    }

    const professionError=document.getElementById("professionError");
    if (!professionSelect.value){
        professionError.textContent="Выберите профессию";
        professionError.style.display="block";
        isValid=false;
    } else{
        professionError.style.display="none";
    }

    const passwordError=document.getElementById("passwordError");
    if(passwordInput.value.length<8 || !/[A-Z]/.test(passwordInput.value) || !/[a-z]/.test(passwordInput.value) || !/\d/.test(passwordInput.value)){
        passwordError.textContent="Пароль должен содержать минимум 8 символов, одну заглавную букву, одну строчную букву и одну цифру";
        passwordError.style.display="block";
        isValid=false;
    } else{
        passwordError.style.display="none";
    }

    const consentError=document.getElementById("consentError");
    if(!consentCheckbox.checked){
        consentError.textContent="Вы должны согласиться с обработкой персональных данных";
        consentError.style.display="block";
        isValid=false;
    } else{
        consentError.style.display="none";
    }

    submitBtn.disabled=!isValid;
    return isValid;
}

form.addEventListener("input", validateForm);
form.addEventListener("change", validateForm);

nameInput.addEventListener("focus", ()=> {
  const nameError=document.getElementById("nameError");
  nameError.style.display="none";
});
nameInput.addEventListener("blur", validateForm);

emailInput.addEventListener("focus", ()=> {
  const emailError=document.getElementById("emailError");
  emailError.style.display="none";
});
emailInput.addEventListener("blur", validateForm); 

ageInput.addEventListener("focus", ()=> {
  const ageError=document.getElementById("ageError");
  ageError.style.display="none"; 
});
ageInput.addEventListener("blur", validateForm); 

professionSelect.addEventListener("focus", ()=>{
  const professionError=document.getElementById("professionError");
  professionError.style.display="none"; 
});
professionSelect.addEventListener("blur", validateForm);

passwordInput.addEventListener("focus", ()=> {
  const passwordError=document.getElementById("passwordError");
  passwordError.style.display="none";
});
passwordInput.addEventListener("blur", validateForm);

consentCheckbox.addEventListener("focus", ()=> {
  const consentError=document.getElementById("consentError");
  consentError.style.display="none"; 
});
consentCheckbox.addEventListener("blur", validateForm); 

form.addEventListener("submit",function(event){
  event.preventDefault();
  if (validateForm()){
    console.log({
          name: nameInput.value,
          email: emailInput.value,
          age: ageInput.value,
          gender: document.querySelector("input[name='gender']:checked").value,
          profession: professionSelect.value,
          password: passwordInput.value,
      });
    form.reset();
    submitBtn.disabled=true;
  }
});