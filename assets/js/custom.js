$(document).ready(function() {

  $("main#spapp > section").height($(document).height() - 60);

  var app = $.spapp({pageNotFound : 'error_404'}); // initialize

  // define routes
  app.route({
    view: 'view_1',
    onCreate: function() { 
      //za prijevod;
//localStorage.clear();
//localStorage.setItem("velFont","16px");
//document.getElementById('eng').style.borderBottom = "2px solid red";

function velicinaFonta(velFont){
  let arrayTranslate=document.getElementsByClassName('translate')
  
  for(let i=0;i<arrayTranslate.length;i++){
      arrayTranslate[i].style.fontSize=velFont+'px'
  }
}

velicinaFonta(16)
//console.log('yeeeee');

/*function velicinaFonta(broj){
  document.body.style.fontSize=broj+'px';
  console.log(broj); 
}*/

document.getElementById('accordion').style.display="none"
function accordion(){
  document.getElementById('accordion').style.display="block"
}

function accordionHide(){
  document.getElementById('accordion').style.display="none"
}


// Use your own OpenWeatherMap API Key below
// const apiKey = '{{OpenWeatherMap_API_KEY_HERE}};'

const weatherContainer = document.getElementById("weather");
const city = document.getElementById("city");
const error = document.getElementById('error');

const units = 'imperial'; //can be imperial or metric
let temperatureSymobol = units == 'imperial' ? "°F" : "°C";

async function fetchWeather() {
  try {
      weatherContainer.innerHTML = '';
      error.innerHTML = '';
      city.innerHTML = '';

      const cnt = 1; // Ograničavamo rezultat na 1
      const cityInputtedByUser = document.getElementById('cityInput').value;

      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInputtedByUser}&appid=${'3fce2be04616001b89401d732879beea'}&units=${units}&cnt=${cnt}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      // Provjera grešaka
      if (data.cod === '400' || data.cod === '404') {
          error.innerHTML = `Not valid city. Please input another city`;
          return;
      }

      // Dohvat samo prvog vremenskog podatka
      const hourlyWeatherData = data.list[0];
      if (hourlyWeatherData) {
          const weatherDescriptionDiv = createWeatherDescription(hourlyWeatherData);
          weatherContainer.appendChild(weatherDescriptionDiv);
      }

      // Prikaz imena grada
      city.innerHTML = `Weather for ${data.city.name}`;

  } catch (error) {
      console.log(error);
      error.innerHTML = `An error occurred while fetching the weather data.`;
  }
}


function convertToLocalTime(dt) {

  // Create a new Date object by multiplying the Unix timestamp by 1000 to convert it to milliseconds
  // Will produce a time in the local timezone of user's computer
  const date = new Date(dt * 1000);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours() % 12 || 12).padStart(2, '0'); // Convert 24-hour to 12-hour format
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const period = date.getHours() >= 12 ? 'PM' : 'AM'; // Determine AM/PM

  // Formatted date string in the format: YYYY-MM-DD hh:mm:ss AM/PM
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${period}`;

}

function createWeatherDescription(weatherData) {
  const { main, dt } = weatherData;

  const description = document.createElement("div");
  const convertedDateAndTime = convertToLocalTime(dt);

  // '2023-11-07 07:00:00 PM'
  description.innerHTML = `
      <div class = "weather_description">${main.temp}${temperatureSymobol} - ${convertedDateAndTime.substring(10)} - ${convertedDateAndTime.substring(5, 10)} </div>
  `;
  return description;
}



     },
    onReady: function() { 

     }
  });

  app.route({view: 'view_2', load: 'view_2.html', 
    onCreate: function() {
      function velicinaFonta(velFont){
        let arrayTranslate=document.getElementsByClassName('translate')
        
        for(let i=0;i<arrayTranslate.length;i++){
            arrayTranslate[i].style.fontSize=velFont+'px'
        }
    }
    //setTimeout(()=>{
        velicinaFonta(16);
    //},2000);
    
    //console.log('harisss');
    
    
    document.getElementById('accordion').style.display="none"
    function accordion(){
        document.getElementById('accordion').style.display="block"
    }
    
    function accordionHide(){
        document.getElementById('accordion').style.display="none"
    }
    }
  });
  
  app.route({
    view: 'view_3', load: 'view_3.html',
    onCreate: function() {
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
    }
  });

  app.route({
    view: 'view_4', load: 'view_4.html',
    onCreate: function(){
        console.log('helooo');

document.getElementById('glavni').style.display='block';
document.getElementById('viewMore').style.display='none';

function povecajSliku(broj){
    if(broj==1)
    {
        document.getElementById('glavni').style.display='none';
        document.getElementById('viewMore').style.display='flex';

        // 1. Kreiranje img elementa
        const imgElement = document.createElement('img');

        // 2. Postavljanje atributa
        imgElement.src = 'card1-photo.webp';
        imgElement.width = 550; // Širina u pikselima
        imgElement.id = 'dodati';

        // 3. Dohvatanje roditeljskog elementa
        const container = document.getElementById('slika');

        // 4. Dodavanje img elementa u DOM
        container.appendChild(imgElement);
    }
    else if(broj==2)
    {
        document.getElementById('glavni').style.display='none';
        document.getElementById('viewMore').style.display='flex';

        // 1. Kreiranje img elementa
        const imgElement = document.createElement('img');

        // 2. Postavljanje atributa
        imgElement.src = 'card2-photo.webp';
        imgElement.width = 550; // Širina u pikselima
        imgElement.id = 'dodati';

        // 3. Dohvatanje roditeljskog elementa
        const container = document.getElementById('slika');

        // 4. Dodavanje img elementa u DOM
        container.appendChild(imgElement);
    }
    else if(broj==3)
    {
        document.getElementById('glavni').style.display='none';
        document.getElementById('viewMore').style.display='flex';

        // 1. Kreiranje img elementa
        const imgElement = document.createElement('img');

        // 2. Postavljanje atributa
        imgElement.src = 'card3-photo.webp';
        imgElement.width = 550; // Širina u pikselima
        imgElement.id = 'dodati';

        // 3. Dohvatanje roditeljskog elementa
        const container = document.getElementById('slika');

        // 4. Dodavanje img elementa u DOM
        container.appendChild(imgElement);
    }
    else if(broj==4)
    {
        document.getElementById('glavni').style.display='none';
        document.getElementById('viewMore').style.display='flex';

        // 1. Kreiranje img elementa
        const imgElement = document.createElement('img');

        // 2. Postavljanje atributa
        imgElement.src = 'card4-photo.webp';
        imgElement.width = 550; // Širina u pikselima
        imgElement.id = 'dodati';

        // 3. Dohvatanje roditeljskog elementa
        const container = document.getElementById('slika');

        // 4. Dodavanje img elementa u DOM
        container.appendChild(imgElement);
    }
    else if(broj==5)
    {
        document.getElementById('glavni').style.display='none';
        document.getElementById('viewMore').style.display='flex';

        // 1. Kreiranje img elementa
        const imgElement = document.createElement('img');

        // 2. Postavljanje atributa
        imgElement.src = 'card5-photo.webp';
        imgElement.width = 550; // Širina u pikselima
        imgElement.id = 'dodati';

        // 3. Dohvatanje roditeljskog elementa
        const container = document.getElementById('slika');

        // 4. Dodavanje img elementa u DOM
        container.appendChild(imgElement);
    }
    else if(broj==6)
    {
        document.getElementById('glavni').style.display='none';
        document.getElementById('viewMore').style.display='flex';

        // 1. Kreiranje img elementa
        const imgElement = document.createElement('img');

        // 2. Postavljanje atributa
        imgElement.src = 'card6-photo.webp';
        imgElement.width = 550; // Širina u pikselima
        imgElement.id = 'dodati';

        // 3. Dohvatanje roditeljskog elementa
        const container = document.getElementById('slika');

        // 4. Dodavanje img elementa u DOM
        container.appendChild(imgElement);
    }
    else if(broj==7)
    {
        document.getElementById('glavni').style.display='none';
        document.getElementById('viewMore').style.display='flex';

        // 1. Kreiranje img elementa
        const imgElement = document.createElement('img');

        // 2. Postavljanje atributa
        imgElement.src = 'card7-photo.webp';
        imgElement.width = 550; // Širina u pikselima
        imgElement.id = 'dodati';

        // 3. Dohvatanje roditeljskog elementa
        const container = document.getElementById('slika');

        // 4. Dodavanje img elementa u DOM
        container.appendChild(imgElement);
    }else if(broj==8)
    {
        document.getElementById('glavni').style.display='none';
        document.getElementById('viewMore').style.display='flex';

        // 1. Kreiranje img elementa
        const imgElement = document.createElement('img');

        // 2. Postavljanje atributa
        imgElement.src = 'card8-photo.webp';
        imgElement.width = 550; // Širina u pikselima
        imgElement.id = 'dodati';

        // 3. Dohvatanje roditeljskog elementa
        const container = document.getElementById('slika');

        // 4. Dodavanje img elementa u DOM
        container.appendChild(imgElement);
    }else if(broj==9)
    {
        document.getElementById('glavni').style.display='none';
        document.getElementById('viewMore').style.display='flex';

        // 1. Kreiranje img elementa
        const imgElement = document.createElement('img');

        // 2. Postavljanje atributa
        imgElement.src = 'card9-photo.webp';
        imgElement.width = 550; // Širina u pikselima
        imgElement.id = 'dodati';

        // 3. Dohvatanje roditeljskog elementa
        const container = document.getElementById('slika');

        // 4. Dodavanje img elementa u DOM
        container.appendChild(imgElement);
    }else if(broj==10)
    {
        document.getElementById('glavni').style.display='none';
        document.getElementById('viewMore').style.display='flex';

        // 1. Kreiranje img elementa
        const imgElement = document.createElement('img');

        // 2. Postavljanje atributa
        imgElement.src = 'card10-photo.webp';
        imgElement.width = 550; // Širina u pikselima
        imgElement.id = 'dodati';

        // 3. Dohvatanje roditeljskog elementa
        const container = document.getElementById('slika');

        // 4. Dodavanje img elementa u DOM
        container.appendChild(imgElement);
    }
    else if(broj==11)
    {
        document.getElementById('glavni').style.display='none';
        document.getElementById('viewMore').style.display='flex';

        // 1. Kreiranje img elementa
        const imgElement = document.createElement('img');

        // 2. Postavljanje atributa
        imgElement.src = 'card11-photo.webp';
        imgElement.width = 550; // Širina u pikselima
        imgElement.id = 'dodati';

        // 3. Dohvatanje roditeljskog elementa
        const container = document.getElementById('slika');

        // 4. Dodavanje img elementa u DOM
        container.appendChild(imgElement);
    }
    else if(broj==12)
    {
        document.getElementById('glavni').style.display='none';
        document.getElementById('viewMore').style.display='flex';

        // 1. Kreiranje img elementa
        const imgElement = document.createElement('img');

        // 2. Postavljanje atributa
        imgElement.src = 'card12-photo.webp';
        imgElement.width = 550; // Širina u pikselima
        imgElement.id = 'dodati';

        // 3. Dohvatanje roditeljskog elementa
        const container = document.getElementById('slika');

        // 4. Dodavanje img elementa u DOM
        container.appendChild(imgElement);
    }
    else if(broj==13)
    {
        document.getElementById('glavni').style.display='none';
        document.getElementById('viewMore').style.display='flex';

        // 1. Kreiranje img elementa
        const imgElement = document.createElement('img');

        // 2. Postavljanje atributa
        imgElement.src = 'card13-photo.webp';
        imgElement.width = 550; // Širina u pikselima
        imgElement.id = 'dodati';

        // 3. Dohvatanje roditeljskog elementa
        const container = document.getElementById('slika');

        // 4. Dodavanje img elementa u DOM
        container.appendChild(imgElement);
    }
    else if(broj==14)
    {
        document.getElementById('glavni').style.display='none';
        document.getElementById('viewMore').style.display='flex';

        // 1. Kreiranje img elementa
        const imgElement = document.createElement('img');

        // 2. Postavljanje atributa
        imgElement.src = 'card14-photo.webp';
        imgElement.width = 550; // Širina u pikselima
        imgElement.id = 'dodati';

        // 3. Dohvatanje roditeljskog elementa
        const container = document.getElementById('slika');

        // 4. Dodavanje img elementa u DOM
        container.appendChild(imgElement);
    }
    else if(broj==15)
    {
        document.getElementById('glavni').style.display='none';
        document.getElementById('viewMore').style.display='flex';

        // 1. Kreiranje img elementa
        const imgElement = document.createElement('img');

        // 2. Postavljanje atributa
        imgElement.src = 'card15-photo.webp';
        imgElement.width = 550; // Širina u pikselima
        imgElement.id = 'dodati';

        // 3. Dohvatanje roditeljskog elementa
        const container = document.getElementById('slika');

        // 4. Dodavanje img elementa u DOM
        container.appendChild(imgElement);
    }
    else if(broj==16)
    {
        document.getElementById('glavni').style.display='none';
        document.getElementById('viewMore').style.display='flex';

        // 1. Kreiranje img elementa
        const imgElement = document.createElement('img');

        // 2. Postavljanje atributa
        imgElement.src = 'card16-photo.webp';
        imgElement.width = 550; // Širina u pikselima
        imgElement.id = 'dodati';

        // 3. Dohvatanje roditeljskog elementa
        const container = document.getElementById('slika');

        // 4. Dodavanje img elementa u DOM
        container.appendChild(imgElement);
    }
}

function smanjiSliku(){
    document.getElementById('glavni').style.display='block';
    document.getElementById('viewMore').style.display='none';
    document.getElementById('dodati').remove();
}

function klik(){
    toastr.success('Akcija je uspješno završena!', 'Uspjeh');
}



//////////////

let data=[
    {
       "description1" : "Kids red shirt with embroidery.",
       "prize1" : "25KM"
    },
 
    {
       "description2" : "Baby red shirt with embroidery.",
       "prize2" : "20KM"
    },
    
    {
       "description3" : "Kids red shirt with embroidery.",
       "prize3" : "25KM"
    },
 
    {
       "description4" : "Baby red shirt with embroidery.",
       "prize4" : "20KM"
    },
    
    {
       "description5" : "Kids red shirt with embroidery.",
       "prize5" : "25KM"
    },
 
    {
       "description6" : "Baby red shirt with embroidery.",
       "prize6" : "20KM"
    },
    
    {
       "description7" : "Kids red shirt with embroidery.",
       "prize7" : "25KM"
    },
 
    {
       "description8" : "Baby red shirt with embroidery.",
       "prize8" : "20KM"
    },
    
    {
       "description9" : "Kids red shirt with embroidery.",
       "prize9" : "25KM"
    },
 
    {
       "description10" : "Baby red shirt with embroidery.",
       "prize10" : "20KM"
    },
    
    {
       "description11" : "Kids red shirt with embroidery.",
       "prize11" : "25KM"
    },
 
    {
       "description12" : "Baby red shirt with embroidery.",
       "prize12" : "20KM"
    },
    
    {
       "description13" : "Kids red shirt with embroidery.",
       "prize13" : "25KM"
    },
 
    {
       "description14" : "Baby red shirt with embroidery.",
       "prize14" : "20KM"
    },
    
    {
       "description15" : "Kids red shirt with embroidery.",
       "prize15" : "25KM"
    },
 
    {
       "description16" : "Baby red shirt with embroidery.",
       "prize16" : "20KM"
    }
 ]

//////////////
//prikazi json
//function prikaziJSON(){
    /*fetch('description.json')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        downloadData(data);
        
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });*/
//}






function velicinaFonta(velFont){
    let arrayTranslate=document.getElementsByClassName('translate')
    
    for(let i=0;i<arrayTranslate.length;i++){
        arrayTranslate[i].style.fontSize=velFont+'px'
    }
}

downloadData(data)
velicinaFonta(16);

document.getElementById('accordion').style.display="none"
function accordion(){
    document.getElementById('accordion').style.display="block"
}

function accordionHide(){
    document.getElementById('accordion').style.display="none"
}
    }
    });

    app.route({
        view: 'view_5', load: 'view_5.html',
        onCreate: function(){
            console.log('helooo');

    document.getElementById('glavni').style.display='block';
    document.getElementById('viewMore').style.display='none';

    function povecajSliku(broj){
        if(broj==1)
        {
            document.getElementById('glavni').style.display='none';
            document.getElementById('viewMore').style.display='flex';

            // 1. Kreiranje img elementa
            const imgElement = document.createElement('img');

            // 2. Postavljanje atributa
            imgElement.src = 'card1-photo.webp';
            imgElement.width = 550; // Širina u pikselima
            imgElement.id = 'dodati';

            // 3. Dohvatanje roditeljskog elementa
            const container = document.getElementById('slika');

            // 4. Dodavanje img elementa u DOM
            container.appendChild(imgElement);
        }
        else if(broj==2)
        {
            document.getElementById('glavni').style.display='none';
            document.getElementById('viewMore').style.display='flex';

            // 1. Kreiranje img elementa
            const imgElement = document.createElement('img');

            // 2. Postavljanje atributa
            imgElement.src = 'card2-photo.webp';
            imgElement.width = 550; // Širina u pikselima
            imgElement.id = 'dodati';

            // 3. Dohvatanje roditeljskog elementa
            const container = document.getElementById('slika');

            // 4. Dodavanje img elementa u DOM
            container.appendChild(imgElement);
        }
        else if(broj==3)
        {
            document.getElementById('glavni').style.display='none';
            document.getElementById('viewMore').style.display='flex';

            // 1. Kreiranje img elementa
            const imgElement = document.createElement('img');

            // 2. Postavljanje atributa
            imgElement.src = 'card3-photo.webp';
            imgElement.width = 550; // Širina u pikselima
            imgElement.id = 'dodati';

            // 3. Dohvatanje roditeljskog elementa
            const container = document.getElementById('slika');

            // 4. Dodavanje img elementa u DOM
            container.appendChild(imgElement);
        }
        else if(broj==4)
        {
            document.getElementById('glavni').style.display='none';
            document.getElementById('viewMore').style.display='flex';

            // 1. Kreiranje img elementa
            const imgElement = document.createElement('img');

            // 2. Postavljanje atributa
            imgElement.src = 'card4-photo.webp';
            imgElement.width = 550; // Širina u pikselima
            imgElement.id = 'dodati';

            // 3. Dohvatanje roditeljskog elementa
            const container = document.getElementById('slika');

            // 4. Dodavanje img elementa u DOM
            container.appendChild(imgElement);
        }
        else if(broj==5)
        {
            document.getElementById('glavni').style.display='none';
            document.getElementById('viewMore').style.display='flex';

            // 1. Kreiranje img elementa
            const imgElement = document.createElement('img');

            // 2. Postavljanje atributa
            imgElement.src = 'card5-photo.webp';
            imgElement.width = 550; // Širina u pikselima
            imgElement.id = 'dodati';

            // 3. Dohvatanje roditeljskog elementa
            const container = document.getElementById('slika');

            // 4. Dodavanje img elementa u DOM
            container.appendChild(imgElement);
        }
        else if(broj==6)
        {
            document.getElementById('glavni').style.display='none';
            document.getElementById('viewMore').style.display='flex';

            // 1. Kreiranje img elementa
            const imgElement = document.createElement('img');

            // 2. Postavljanje atributa
            imgElement.src = 'card6-photo.webp';
            imgElement.width = 550; // Širina u pikselima
            imgElement.id = 'dodati';

            // 3. Dohvatanje roditeljskog elementa
            const container = document.getElementById('slika');

            // 4. Dodavanje img elementa u DOM
            container.appendChild(imgElement);
        }
        else if(broj==7)
        {
            document.getElementById('glavni').style.display='none';
            document.getElementById('viewMore').style.display='flex';

            // 1. Kreiranje img elementa
            const imgElement = document.createElement('img');

            // 2. Postavljanje atributa
            imgElement.src = 'card7-photo.webp';
            imgElement.width = 550; // Širina u pikselima
            imgElement.id = 'dodati';

            // 3. Dohvatanje roditeljskog elementa
            const container = document.getElementById('slika');

            // 4. Dodavanje img elementa u DOM
            container.appendChild(imgElement);
        }else if(broj==8)
        {
            document.getElementById('glavni').style.display='none';
            document.getElementById('viewMore').style.display='flex';

            // 1. Kreiranje img elementa
            const imgElement = document.createElement('img');

            // 2. Postavljanje atributa
            imgElement.src = 'card8-photo.webp';
            imgElement.width = 550; // Širina u pikselima
            imgElement.id = 'dodati';

            // 3. Dohvatanje roditeljskog elementa
            const container = document.getElementById('slika');

            // 4. Dodavanje img elementa u DOM
            container.appendChild(imgElement);
        }else if(broj==9)
        {
            document.getElementById('glavni').style.display='none';
            document.getElementById('viewMore').style.display='flex';

            // 1. Kreiranje img elementa
            const imgElement = document.createElement('img');

            // 2. Postavljanje atributa
            imgElement.src = 'card9-photo.webp';
            imgElement.width = 550; // Širina u pikselima
            imgElement.id = 'dodati';

            // 3. Dohvatanje roditeljskog elementa
            const container = document.getElementById('slika');

            // 4. Dodavanje img elementa u DOM
            container.appendChild(imgElement);
        }else if(broj==10)
        {
            document.getElementById('glavni').style.display='none';
            document.getElementById('viewMore').style.display='flex';

            // 1. Kreiranje img elementa
            const imgElement = document.createElement('img');

            // 2. Postavljanje atributa
            imgElement.src = 'card10-photo.webp';
            imgElement.width = 550; // Širina u pikselima
            imgElement.id = 'dodati';

            // 3. Dohvatanje roditeljskog elementa
            const container = document.getElementById('slika');

            // 4. Dodavanje img elementa u DOM
            container.appendChild(imgElement);
        }
        else if(broj==11)
        {
            document.getElementById('glavni').style.display='none';
            document.getElementById('viewMore').style.display='flex';

            // 1. Kreiranje img elementa
            const imgElement = document.createElement('img');

            // 2. Postavljanje atributa
            imgElement.src = 'card11-photo.webp';
            imgElement.width = 550; // Širina u pikselima
            imgElement.id = 'dodati';

            // 3. Dohvatanje roditeljskog elementa
            const container = document.getElementById('slika');

            // 4. Dodavanje img elementa u DOM
            container.appendChild(imgElement);
        }
        else if(broj==12)
        {
            document.getElementById('glavni').style.display='none';
            document.getElementById('viewMore').style.display='flex';

            // 1. Kreiranje img elementa
            const imgElement = document.createElement('img');

            // 2. Postavljanje atributa
            imgElement.src = 'card12-photo.webp';
            imgElement.width = 550; // Širina u pikselima
            imgElement.id = 'dodati';

            // 3. Dohvatanje roditeljskog elementa
            const container = document.getElementById('slika');

            // 4. Dodavanje img elementa u DOM
            container.appendChild(imgElement);
        }
        else if(broj==13)
        {
            document.getElementById('glavni').style.display='none';
            document.getElementById('viewMore').style.display='flex';

            // 1. Kreiranje img elementa
            const imgElement = document.createElement('img');

            // 2. Postavljanje atributa
            imgElement.src = 'card13-photo.webp';
            imgElement.width = 550; // Širina u pikselima
            imgElement.id = 'dodati';

            // 3. Dohvatanje roditeljskog elementa
            const container = document.getElementById('slika');

            // 4. Dodavanje img elementa u DOM
            container.appendChild(imgElement);
        }
        else if(broj==14)
        {
            document.getElementById('glavni').style.display='none';
            document.getElementById('viewMore').style.display='flex';

            // 1. Kreiranje img elementa
            const imgElement = document.createElement('img');

            // 2. Postavljanje atributa
            imgElement.src = 'card14-photo.webp';
            imgElement.width = 550; // Širina u pikselima
            imgElement.id = 'dodati';

            // 3. Dohvatanje roditeljskog elementa
            const container = document.getElementById('slika');

            // 4. Dodavanje img elementa u DOM
            container.appendChild(imgElement);
        }
        else if(broj==15)
        {
            document.getElementById('glavni').style.display='none';
            document.getElementById('viewMore').style.display='flex';

            // 1. Kreiranje img elementa
            const imgElement = document.createElement('img');

            // 2. Postavljanje atributa
            imgElement.src = 'card15-photo.webp';
            imgElement.width = 550; // Širina u pikselima
            imgElement.id = 'dodati';

            // 3. Dohvatanje roditeljskog elementa
            const container = document.getElementById('slika');

            // 4. Dodavanje img elementa u DOM
            container.appendChild(imgElement);
        }
        else if(broj==16)
        {
            document.getElementById('glavni').style.display='none';
            document.getElementById('viewMore').style.display='flex';

            // 1. Kreiranje img elementa
            const imgElement = document.createElement('img');

            // 2. Postavljanje atributa
            imgElement.src = 'card16-photo.webp';
            imgElement.width = 550; // Širina u pikselima
            imgElement.id = 'dodati';

            // 3. Dohvatanje roditeljskog elementa
            const container = document.getElementById('slika');

            // 4. Dodavanje img elementa u DOM
            container.appendChild(imgElement);
        }
    }

    function smanjiSliku(){
        document.getElementById('glavni').style.display='block';
        document.getElementById('viewMore').style.display='none';
        document.getElementById('dodati').remove();
    }

    function klik(){
        toastr.success('Akcija je uspješno završena!', 'Uspjeh');
    }



    //////////////

    let data=[
        {
            "description1" : "Kids red shirt with embroidery.",
            "prize1" : "25KM"
        },
        
        {
            "description2" : "Baby red shirt with embroidery.",
            "prize2" : "20KM"
        },
        
        {
            "description3" : "Kids red shirt with embroidery.",
            "prize3" : "25KM"
        },
        
        {
            "description4" : "Baby red shirt with embroidery.",
            "prize4" : "20KM"
        },
        
        {
            "description5" : "Kids red shirt with embroidery.",
            "prize5" : "25KM"
        },
        
        {
            "description6" : "Baby red shirt with embroidery.",
            "prize6" : "20KM"
        },
        
        {
            "description7" : "Kids red shirt with embroidery.",
            "prize7" : "25KM"
        },
        
        {
            "description8" : "Baby red shirt with embroidery.",
            "prize8" : "20KM"
        },
        
        {
            "description9" : "Kids red shirt with embroidery.",
            "prize9" : "25KM"
        },
        
        {
            "description10" : "Baby red shirt with embroidery.",
            "prize10" : "20KM"
        },
        
        {
            "description11" : "Kids red shirt with embroidery.",
            "prize11" : "25KM"
        },
        
        {
            "description12" : "Baby red shirt with embroidery.",
            "prize12" : "20KM"
        },
        
        {
            "description13" : "Kids red shirt with embroidery.",
            "prize13" : "25KM"
        },
        
        {
            "description14" : "Baby red shirt with embroidery.",
            "prize14" : "20KM"
        },
        
        {
            "description15" : "Kids red shirt with embroidery.",
            "prize15" : "25KM"
        },
        
        {
            "description16" : "Baby red shirt with embroidery.",
            "prize16" : "20KM"
        }
        ]

    //////////////
    //prikazi json
    //function prikaziJSON(){
        /*fetch('description.json')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            downloadData(data);
            
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });*/
    //}






    function velicinaFonta(velFont){
        let arrayTranslate=document.getElementsByClassName('translate')
        
        for(let i=0;i<arrayTranslate.length;i++){
            arrayTranslate[i].style.fontSize=velFont+'px'
        }
    }

    downloadData(data)
    velicinaFonta(16);

    document.getElementById('accordion').style.display="none"
    function accordion(){
        document.getElementById('accordion').style.display="block"
    }

    function accordionHide(){
        document.getElementById('accordion').style.display="none"
    }
        }
        });

  // run app
  app.run();

});



      //za prijevod;
//localStorage.clear();
//localStorage.setItem("velFont","16px");
//document.getElementById('eng').style.borderBottom = "2px solid red";

function velicinaFonta(velFont){
    let arrayTranslate=document.getElementsByClassName('translate')
    
    for(let i=0;i<arrayTranslate.length;i++){
        arrayTranslate[i].style.fontSize=velFont+'px'
    }
}

velicinaFonta(16)
//console.log('yeeeee');

/*function velicinaFonta(broj){
    document.body.style.fontSize=broj+'px';
    console.log(broj); 
}*/

document.getElementById('accordion').style.display="none"
function accordion(){
    document.getElementById('accordion').style.display="block"
}

function accordionHide(){
    document.getElementById('accordion').style.display="none"
}


// Use your own OpenWeatherMap API Key below
// const apiKey = '{{OpenWeatherMap_API_KEY_HERE}};'

const weatherContainer = document.getElementById("weather");
const city = document.getElementById("city");
const error = document.getElementById('error');

const units = 'imperial'; //can be imperial or metric
let temperatureSymobol = units == 'imperial' ? "°F" : "°C";

async function fetchWeather() {
    try {
        weatherContainer.innerHTML = '';
        error.innerHTML = '';
        city.innerHTML = '';

        const cnt = 1; // Ograničavamo rezultat na 1
        const cityInputtedByUser = document.getElementById('cityInput').value;

        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInputtedByUser}&appid=${'3fce2be04616001b89401d732879beea'}&units=${units}&cnt=${cnt}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        // Provjera grešaka
        if (data.cod === '400' || data.cod === '404') {
            error.innerHTML = `Not valid city. Please input another city`;
            return;
        }

        // Dohvat samo prvog vremenskog podatka
        const hourlyWeatherData = data.list[0];
        if (hourlyWeatherData) {
            const weatherDescriptionDiv = createWeatherDescription(hourlyWeatherData);
            weatherContainer.appendChild(weatherDescriptionDiv);
        }

        // Prikaz imena grada
        city.innerHTML = `Weather for ${data.city.name}`;

    } catch (error) {
        console.log(error);
        error.innerHTML = `An error occurred while fetching the weather data.`;
    }
}


function convertToLocalTime(dt) {

    // Create a new Date object by multiplying the Unix timestamp by 1000 to convert it to milliseconds
    // Will produce a time in the local timezone of user's computer
    const date = new Date(dt * 1000);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours() % 12 || 12).padStart(2, '0'); // Convert 24-hour to 12-hour format
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const period = date.getHours() >= 12 ? 'PM' : 'AM'; // Determine AM/PM

    // Formatted date string in the format: YYYY-MM-DD hh:mm:ss AM/PM
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${period}`;

}

function createWeatherDescription(weatherData) {
    const { main, dt } = weatherData;

    const description = document.createElement("div");
    const convertedDateAndTime = convertToLocalTime(dt);

    // '2023-11-07 07:00:00 PM'
    description.innerHTML = `
        <div class = "weather_description">${main.temp}${temperatureSymobol} - ${convertedDateAndTime.substring(10)} - ${convertedDateAndTime.substring(5, 10)} </div>
    `;
    return description;
}
