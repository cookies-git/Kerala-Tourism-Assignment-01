function validateFn()
{

    valid= true;

    const fname=document.getElementById("inputFname");                           
    const Sname=document.getElementById("inputSname");
    const Addr=document.getElementById("inputAddress");
    // const CounC=document.getElementById("inputCountrycode");
    const ph=document.getElementById("ph");
    const ccname=document.getElementById("CountryN");
    // const ccode=document.getElementById("inputCountrycode");
    const Pass1=document.getElementById("passwordsignup");
    const Pass2=document.getElementById("passwordsignupc");
    // const checkb=document.getElementById("gridCheck");
    const checkb = document.getElementById('gridCheck');

    let regExpWeak1 = /[a-zA-Z]/;
    let regExpMedium2 = /\d+/;
    let regExpStrong3 = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
    let regExpMobile = /^(\d{10}|(\d{3})\.(\d{3})\.(\d{4})|(\d{3})\s(\d{3})\s(\d{4})|(\d{3})-(\d{3})-(\d{4}))$/;

    // fname

    if( fname.value.trim() === '') {
        
        setErrorFor(fname, 'First Name cannot be blank');
        valid = false;
    }else {
    setSuccessFor(fname,'');

    }


    // fname end

    // Sname 

    if( Sname.value.trim() === '') {
        
        setErrorFor(Sname, 'Second Name cannot be blank');
        valid = false;
    }else {
    setSuccessFor(Sname,'');

    }

    // Sname end

    //EMAIL

    if(Addr.value.trim() === '') {
        valid = false;
        setErrorFor(Addr, 'Email cannot be blank');
    } else if (!isEmail(Addr.value.trim())) {
        setErrorFor(Addr, 'Not a valid email');
        valid = false;

    } 
    else {
        setSuccessFor(Addr," ");
    }


    //EMAIL END

    //MOBILE

    if(ph.value.trim() === '') {
        
        valid = false;
        setErrorFor(ph, 'Phone number cannot be blank');
    } else if (ph.value.trim().match(regExpMobile)) {
        setSuccessFor(ph, '');
    } 
    else {
            setErrorFor(ph,"Invalid number");
            valid = false;
    }


    //MOBILE END

    //pass1

    if(Pass1.value.trim() === '') {
        setErrorFor(Pass1, 'Password cannot be blank');
        valid = false;
    }
    else if(Pass1.value.trim().length >= 10 && Pass1.value.match(regExpWeak1) && Pass1.value.match(regExpMedium2) && Pass1.value.match(regExpStrong3)){
    setSuccessFor(Pass1," ");
    }
    else{
        setErrorFor(Pass1," ");
        valid = false;
    }

//pass1 end
//pass2

    if(Pass2.value.trim() === '') {
        setErrorFor(Pass2, 'Password cannot be blank');
        valid = false;
    } else if(Pass1.value !== Pass2.value) {
        setErrorFor(Pass2, 'Passwords does not match');
        valid = false;
    } else{
        setSuccessFor(Pass2,"");
    
    }

    //check box
    
    if(checkb.checked==false){
        setErrorFor(checkb, 'You must accept our privacy policy & terms and condtions');
        valid = false;
    } else{
        setSuccessFor(checkb,"");
    }
    //check end

    // if(dropdown.selectedIndex==0){
    //     setErrorFor(ccname, 'Select your Country Name');
    //     valid = false;
    // } else{
    //     setSuccessFor(ccname,"");
    // }




//pass2 end

    return valid;

}




//trigger strat
function trigger()

{
const indicator = document.querySelector(".indicator");
const s = document.getElementById("passwordsignup")
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
  


