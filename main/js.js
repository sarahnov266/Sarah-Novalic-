//za prijevod;
localStorage.clear();
localStorage.setItem("jezik","engleski");
document.getElementById('eng').style.borderBottom = "2px solid red";

function prijevod(ime){
    if(ime=='engleski'){
        localStorage.clear();
        localStorage.setItem("jezik","engleski");
        document.getElementById('eng').style.borderBottom = "2px solid red";
        document.getElementById('bos').style.borderBottom = "none";
        document.getElementById('prijevod1').innerHTML="SWEET DREAMS";
        document.getElementById('prijevod2').innerHTML="GIFTS";
        document.getElementById('prijevod3').innerHTML="ABOUT US";
        document.getElementById('prijevod4').innerHTML="CONTACT";
        document.getElementById('prijevod5').innerHTML="BOYS CLOTHES";
        document.getElementById('prijevod6').innerHTML="GIRLS CLOTHES";
        document.getElementById('prijevod7').innerHTML="Santas little helpers";
        document.getElementById('prijevod8').innerHTML="This year's Christmas collection";
        document.getElementById('prijevod9').innerHTML="Boys clothes";
        document.getElementById('prijevod10').innerHTML="Girls clothes";
        document.getElementById('prijevod11').innerHTML="Sweet dreams";
        document.getElementById('prijevod12').innerHTML="Soft and timeless nightwear";
        document.getElementById('prijevod13').innerHTML="The gift shop";
        document.getElementById('prijevod13').innerHTML="Foundations Of The Web Development";
        document.getElementById('prijevod13').innerHTML="Sarah Novalić";
    }
    else{
        localStorage.clear();
        localStorage.setItem("jezik","bosanski");
        document.getElementById('bos').style.borderBottom = "2px solid red";
        document.getElementById('eng').style.borderBottom = "none";
        document.getElementById('prijevod1').innerHTML="SLATKI SNOVI";
        document.getElementById('prijevod2').innerHTML="POKLONI";
        document.getElementById('prijevod3').innerHTML="O NAMA";
        document.getElementById('prijevod4').innerHTML="KONTAKT";
        document.getElementById('prijevod5').innerHTML="MUSKA ODJECA";
        document.getElementById('prijevod6').innerHTML="ZENSKA ODJECA";
        document.getElementById('prijevod7').innerHTML="Santini mali pomagaci";
        document.getElementById('prijevod8').innerHTML="Ovogodisnja bozicna cestitka";
        document.getElementById('prijevod9').innerHTML="Muska odjeca";
        document.getElementById('prijevod10').innerHTML="Zenska odjeca";
        document.getElementById('prijevod11').innerHTML="Slatki snovi";
        document.getElementById('prijevod12').innerHTML="Soft and timeless nightwear";
        document.getElementById('prijevod13').innerHTML="The gift shop";
        document.getElementById('prijevod13').innerHTML="Razvojna fondacija";
        document.getElementById('prijevod13').innerHTML="Sarah Novalić";
    }
}

function velicinaFonta(broj){
    document.body.style.fontSize=broj+'px';
    console.log(broj); 
}