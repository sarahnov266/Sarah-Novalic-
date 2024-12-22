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