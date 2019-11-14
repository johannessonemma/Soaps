var netto = 0;
var moms;
var frakt;
var rabatt;
var brutto;  

var quantity;
var price;

var kampanj;

var soap;

window.onload = function () {
    var quantity2;
    var c = store.cartContent;
    var ul = document.getElementById("OrderList");
    for (var x = 0; x < c.length; x++) {
        console.log("i for-loopen");

        var li = document.createElement('li');
        ul.appendChild(li);
        var button = document.createElement("BUTTON");
        var t = document.createTextNode("Ta bort");
        button.appendChild(t);

        quantity2 = c[x].Quantity;

        if (c[x].Quantity >= 3) {
            c[x].Quantity = c[x].Quantity - c[x].Campaign;

            console.log("working?");

        }


        li.innerHTML = li.innerHTML + c[x].Name + ",\t" + quantity2 + ",\r" + c[x].Price + ",\r" + "Totalt: " + (c[x].Quantity * c[x].Price) + "kr";
        li.appendChild(button);

        var y = "li" + x;
        li.setAttribute("id", y);

        button.setAttribute("id", x);

        console.log("setter" + x);
        document.getElementById(x).addEventListener("click", function () {
            removeItem(this);
        });
        console.log("efter" + x);

        netto += (c[x].Quantity * c[x].Price);

        console.log("q" + c[x].Quantity);
        console.log("p" + c[x].Price);

        quantity = c[x].Quantity;
        price = c[x].Price;

    }

    prisvisning();

    console.log(netto);
    console.log(c);

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

    if (netto < 1000) {
        frakt = 200;
    } else {
        frakt = 0;
    }

    document.getElementById("frakt").innerText = frakt;

    console.log("frakt" + frakt);
    
    
    brutto = (netto + moms + frakt);
    document.getElementById("bruttoPris").innerText = brutto;
}

function removeItem(x) {
    var c = store.cartContent;

    var nyttId = x.id;
    //x = (x-1);
    console.log(nyttId + "hämtar");
    store.cartContent.splice(nyttId, 1);
    store.save();


    var id = "li" + nyttId;
    var li = document.getElementById(id);
    console.log(li);
    li.setAttribute("style", "display:none;");

    console.log("gammalt netto" + netto);

    netto = 0;

    beraknaNetto();
    console.log("nytt netto" + netto);

    prisvisning();

}

function beraknaNetto() {

    var c = store.cartContent;

    if (c.length > 0) {
        for (var x = 0; x < c.length; x++) {
            netto += (c[x].Quantity * c[x].Price);
        }
    } else {
        netto = 0;
    }
}