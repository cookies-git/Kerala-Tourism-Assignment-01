function validateFn()
{

    valid= true;

    const sigpass=document.getElementById("Sigpass");                           
    const sigemail=document.getElementById("SigEmail");

    let regExpWeak1 = /[a-zA-Z]/;
    let regExpMedium2 = /\d+/;
    let regExpStrong3 = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
    

    if(sigemail.value.trim() === '') {
        valid = false;
        setErrorFor(sigemail, 'Email cannot be blank');
    } else if (!isEmail(sigemail.value.trim())) {
        setErrorFor(sigemail, 'Not a valid email');
        valid = false;

    } 
    else {
        setSuccessFor(sigemail," ");
    }


    if(sigpass.value.trim() === '') {
        setErrorFor(sigpass, 'Password cannot be blank');
        valid = false;
    }
    else if(sigpass.value.trim().length >= 10 && sigpass.value.match(regExpWeak1) && sigpass.value.match(regExpMedium2) && sigpass.value.match(regExpStrong3)){
    setSuccessFor(sigpass," ");
    }
    else{
        setErrorFor(sigpass," ");
        valid = false;
    }


    return valid;


}


//trigger strat
function trigger()

{
const indicator = document.querySelector(".indicator");
const s = document.getElementById("Sigpass")
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

    if(s.value != ""){
    indicator.style.display = "block";
    indicator.style.display = "flex";
    if(s.value.length <= 7 && (s.value.match(regExpWeak) || s.value.match(regExpMedium) || s.value.match(regExpStrong)))no=1;
    if(s.value.length >= 8 && ((s.value.match(regExpWeak) && s.value.match(regExpMedium)) || (s.value.match(regExpMedium) && s.value.match(regExpStrong)) || (s.value.match(regExpWeak) && s.value.match(regExpStrong))))no=2;
    if(s.value.length >= 10 && s.value.match(regExpWeak) && s.value.match(regExpMedium) && s.value.match(regExpStrong))no=3;
    if(no==1){
      weak.classList.add("active");
      text.style.display = "block";
      text.textContent = "Weak Password";
      text.classList.add("weak");
    }
    if(no==2){
      medium.classList.add("active");
      text.textContent = "Medium Password";
      text.classList.add("medium");
    }else{
      medium.classList.remove("active");
      text.classList.remove("medium");
    }
    if(no==3){
      weak.classList.add("active");
      medium.classList.add("active");
      strong.classList.add("active");
      text.textContent = "Strong Password";
      text.classList.add("strong");
    }else{
      strong.classList.remove("active");
      text.classList.remove("strong");
    }

        
  }else{
    indicator.style.display = "none";
    text.style.display = "none";
  }

}

    //trgger end






















 
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-co error';
    small.innerText = message;
  }
  
  function setSuccessFor(input,message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-co success';
    small.innerText = message;
    
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
  
