function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active');
}

function validateForm() {
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email');
    const message = document.getElementById('message').value.trim();
    const password = document.getElementById('password')
    
    //provjera firstname
    function validateFirstName(){
        if(firstname.length!=0)
        return true
        else{
            //firstname.style.borderTop=' 1px solid red'
            return false
        }
    }
    
    firstyn=validateFirstName()
    //console.log(firstyn)
    
    //provjera lastname
    function validateLastName(){
        if(lastname.length!=0)
        return true
        else
        return false
    }
    
    lastyn=validateLastName()
    
    //provjera emaila
    function validateEmail(){
        atyn=false
        dotyn=false
        for(let i=0;i<email.value.length;i++){
            if(email.value[i]=="@")
            atyn=true
            if(email.value[i]==".")
            dotyn=true
        }
        if(atyn==true && dotyn==true)
        return true
        else
        return false
    }
    
    emailyn=validateEmail()
    //console.log(emailyn)
    
    //provjera passworda
    function validatepassword(){
        upperyn=false
        loweryn=false
        numberyn=false
        passLength=false
        
        for(let i=0;i<password.value.length;i++){
            if((password.value[i]>= "A") && (password.value[i]<= "Z"))
            upperyn=true
            if(password.value[i]>="1" && password.value[i]<="9")
            numberyn=true
            if(password.value[i]>="a" && password.value[i]<="z")
            loweryn=true
            if(password.value.length>=8)
            passLength=true;
        }
        if(upperyn==true && loweryn==true && numberyn==true && passLength==true)
        return true
        else
        return false
    }
    
    passyn=validatepassword()
    //console.log(passyn)
    
    //provjera message
    function validateMessage(){
        if(message.length!=0)
        return true
        else
        return false
    }
    
    messageyn=validateMessage()


    if (firstyn && lastyn && emailyn && passyn && messageyn) {
        //submitForm();
        //const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        //modal.show();
        toastr.success('Uspjesna registracija', 'Success');
    } else {
        toastr.warning('Neuspjesna registracija, ispuni polja ispravno', 'Warning');
    }
}

function checkIndicator(){
    const password = document.getElementById('password')
    upperyn=false
    loweryn=false
    numberyn=false
    passLength=false
        
    for(let i=0;i<password.value.length;i++){
        if(password.value[i]>= "A" && password.value[i]<= "Z")
            upperyn=true
        if(password.value[i]>="1" && password.value[i]<="9")
            numberyn=true
        if(password.value[i]>="a" && password.value[i]<="z")
            loweryn=true
        if(password.value.length>=8)
            passLength=true;
    }
    if(upperyn==true && loweryn==true && numberyn==true && passLength==true)
    {
        indicator=document.getElementById('indicator')
        indicator.innerHTML="STRONG"
        indicator.style.color='green'
    }
    else{
        indicator=document.getElementById('indicator')
        indicator.innerHTML="WEAK"
        indicator.style.color='red'
    }
}

function velicinaFonta(velFont){
    let arrayTranslate=document.getElementsByClassName('translate')
    
    for(let i=0;i<arrayTranslate.length;i++){
        arrayTranslate[i].style.fontSize=velFont+'px'
    }
}


document.getElementById('accordion').style.display="none"
function accordion(){
    document.getElementById('accordion').style.display="block"
}

function accordionHide(){
    document.getElementById('accordion').style.display="none"
}

velicinaFonta(16);

    /*document.getElementById('translate2').style.fontSize=velFont+'px'
    document.getElementById('translate3').style.fontSize=velFont+'px'
    document.getElementById('translate4').style.fontSize=velFont+'px'
    document.getElementById('translate5').style.fontSize=velFont+'px'
    document.getElementById('translate6').style.fontSize=velFont+'px'
    document.getElementById('translate7').style.fontSize=velFont+'px'
    document.getElementById('translate8').style.fontSize=velFont+'px'
    document.getElementById('translate9').style.fontSize=velFont+'px'
    document.getElementById('translate10').style.fontSize=velFont+'px'
    document.getElementById('translate11').style.fontSize=velFont+'px'
    document.getElementById('translate12').style.fontSize=velFont+'px'
    document.getElementById('translate13').style.fontSize=velFont+'px'
    document.getElementById('translate14').style.fontSize=velFont+'px'
    document.getElementById('translate15').style.fontSize=velFont+'px'
    //document.getElementById('translate16').style.fontSize=velFont+'px'
    document.getElementById('translate17').style.fontSize=velFont+'px'
    document.getElementById('translate18').style.fontSize=velFont+'px'
    document.getElementById('translate19').style.fontSize=velFont+'px'
    document.getElementById('translate20').style.fontSize=velFont+'px'
    document.getElementById('translate21').style.fontSize=velFont+'px'
    document.getElementById('translate22').style.fontSize=velFont+'px'
    document.getElementById('translate23').style.fontSize=velFont+'px'*/

//console.log('harisss');

/*  
function submitForm() {
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',K
    body: JSON.stringify({
    firstname: document.getElementById('firstname').value,
    lastname: document.getElementById('lastname').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));
}
*/