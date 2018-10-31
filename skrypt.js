var cyfra = [];
var tablica = [];

function przycisk(jaki) {
    d = document.getElementById("display");
    if (d.innerHTML == "0") {
        d.innerHTML = jaki;
        cyfra.push = (jaki);
    } else {
        cyfra = d.innerHTML;
        d.innerHTML = d.innerHTML + jaki;
        cyfra.push = (jaki);
    }
    
 //   alert(jaki);
}

function czyscCE(){
    d = document.getElementById("display");
    d.innerHTML = 0;
}

var a;
var b;
var dz;
function dzialanie(jakie) {
    d = document.getElementById("display");
    a = parseFloat(d.innerHTML.replace(",","."));
    dz = jakie;
    czyscCE();
}

function rownasie() {
    d = document.getElementById("display");
    b =  parseFloat(d.innerHTML.replace(",","."));
    
    if (dz == "+"){
        c = a + b;
    }
    
    if (dz == "-"){
        c = a - b;
    }
    
    if (dz == "*"){
        c = a * b;
    }
    
    if (dz == "/"){
        if (b == 0) {
            alert("Nie można dzielić przez 0");
        } else {
            c = a / b;
        }       
    }
    
    d.innerHTML = c.toString().replace(".",",");
    
}

function przecinek(){
    d = document.getElementById("display");
    
    if (d.innerHTML.indexOf(",") == -1) {
        d.innerHTML = d.innerHTML + ",";
    } else {
        alert("Może być tylko 1 przecinek");
    }    
}

function znak(){
    d = document.getElementById("display");
    //zamienić tekst na liczbę
    //
    d.innerHTML = d.innerHTML * -1;
    
    
}

function czyscC(){
    d = document.getElementById("display");
    d.innerHTML=0;
    a = 0;
    b = 0;
    dz = 0;
}

function cofnij(){
    d = document.getElementById("display");
    text = d.innerHTML;
    l = text.length;
    
    //alert(text2);
    
    if (l == 1) {
        text2 = "0";
    }else {
        text2 = text.substr(0,l-1);
    }
    d.innerHTML = text2;
    
/*    
 //   przycisk(jaki)
    //cyfra.pop();
    d=document.getElementById("display");
    var tablica;
    if (cyfra.length == 0) {
        d.innerHTML=0;
    } else {
        d.innerHTML=null;
        //cyfra.pop();
        for (let i=0; i<cyfra.length; i++) {
    //        x = cyfra[i]
    //        tablica.push(x);
            d.innerHTML= d.innerHTML + cyfra[i];
        //d.innerHTML = d.innerHTML + cyfra[i];
 //   console.log('licznik pętli: ' + i);
  //  console.log('element: ' + tab[i]); //tab[0], tab[1]...
        }
       
 //      d.innerHTML=null;
 //   for (let j=0; j<=tablica.length; j++) {
  //      d.innerHTML = d.innerHTML + tablica[j];
  //  } 
        
      
        
    } 
    
   // d.innerHTML = null;
 //   for (let i=0; i<cofanie.length; i++) {
  //      d.innerHTML = d.innerHTML + cofanie[i];
  //  }
  //  cyfra[] = cofanie[];
    //alert
   // alert(cyfra.length);
    
    //cyfra = [];
   // alert(x);
   // d=document.getElementById("display");
    
   // d.innerHTML = 0;
    
 //   test = cyfra.join();
 //   alert(test);*/
}

var lista = [];
function liczbadodaj() {
    d = document.getElementById("display");
    a = parseFloat(d.innerHTML.replace(",","."));
    lista.push(a);
    czyscCE();
}

function listaczysc() {
    lista = [];
    czyscCE();
}

function listasum() {
    w = 0;
    for(i=0; i<lista.length; i++){
        w += lista[i];
    }
    d = document.getElementById("display");
    d.innerHTML = w.toString().replace(".",",");
}

function listasrednia() {
    w = 0;
    for(i=0; i<lista.length; i++){
        w += lista[i];
    }
    w = w / lista.length;
    d = document.getElementById("display");
    d.innerHTML = w.toString().replace(".",",");
}