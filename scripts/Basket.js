var arraySoap = [];
var nyArray = [];

var netto = 0;                                     
var moms;
var frakt;
var rabatt;
var brutto;  

var quantity;
var price;

var kampanj;

var soap;

window.onload = function(){

    var arraySoap = JSON.parse(localStorage.getItem("soapnyckel"));
    nyArray = arraySoap.a;                                     
    
    var ul = document.getElementById("OrderList");              
    for (var x=0; x < nyArray.length; x++)   {                                 
       console.log("i for-loopen");
       
        var li = document.createElement('li');
        ul.appendChild(li);
        var button = document.createElement("BUTTON");
        var t = document.createTextNode("Ta bort");
        button.appendChild(t);

        li.innerHTML = li.innerHTML + nyArray[x].Name + ",\t" + nyArray[x].Quantity + ",\r" + nyArray[x].Price +",\r" + "Totalt: " + (nyArray[x].Quantity * nyArray[x].Price)  + "kr" ;
        li.appendChild(button);

        var y = "li" + x;
        li.setAttribute("id", y);                   

        button.setAttribute("id", x);

        console.log("setter" + x);
        document.getElementById(x).addEventListener("click", function(){removeItem(this);});            
        console.log("efter" + x);
        
        netto += (nyArray[x].Quantity * nyArray[x].Price);      
        
        console.log("q" + nyArray[x].Quantity);
        console.log("p" + nyArray[x].Price);

        quantity = nyArray[x].Quantity;
        price = nyArray[x].Price;

    }

     prisvisning();

    console.log(netto);                                         
    console.log(nyArray);
   
}	

function prisvisning() {

    console.log("antal:" + quantity);
    console.log("netto före:" + netto);
    console.log("price före:" + price);

    // document.getElementById("kampanj").value = kampanj;

    // if(quantity >=  3 && id "kampanj" == 3){
    //     netto = (netto - price);
    // }
    console.log("netto efter:" + netto);

    
    
    document.getElementById("nettoPris").innerText = netto;

    moms = 0.25 * netto;
    document.getElementById("moms").innerText = moms;

    if(netto < 1000){
        frakt = 200;
    }
    else {
        frakt = 0;
    }

    document.getElementById("frakt").innerText = frakt;

    console.log("frakt" + frakt);
    
    
    brutto = (netto + moms + frakt);
    document.getElementById("bruttoPris").innerText = brutto;
}

function removeItem(x) {

    console.log(nyArray);

    var nyttId = x.id;
    //x = (x-1);
    console.log(nyttId + "hämtar");         
    nyArray.splice(nyttId, 1);                               
    console.log(nyArray);                               
    
    var id = "li" + nyttId;
    var li = document.getElementById(id);           
    console.log(li);
    li.setAttribute("style", "display:none;");             

    console.log("gammalt netto" + netto);
   
    netto = 0;

    beräknaNetto();
    console.log("nytt netto" + netto);

    prisvisning();

    var obj = { a: nyArray}						              
	localStorage.setItem("soapnyckel", JSON.stringify(obj)); 

}

function beräknaNetto(){
    
    
    console.log(nyArray);

    if(nyArray.length > 0) {
        for(var x=0; x < nyArray.length; x++){
           netto +=(nyArray[x].Quantity * nyArray[x].Price);
        }
    }
    else {
        netto = 0;
    }
}

// function payOrder() {               //ta bort??

//     var obj = { a: nyArray}						                //spara i localstorage igen.   a= property och värdet är arrayen. skapar först en variabel/objekt som har värde enligt arrayen
// 	localStorage.setItem("kaknyckel", JSON.stringify(obj));     // Omvandlar objektet ovan till en sträng, som jag sen stoppar in i localstorage.

// 	window.location.replace("Confirm.html");                    //skickas till Confirm-sidan 

// }