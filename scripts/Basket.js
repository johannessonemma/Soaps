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

        document.getElementById(x).addEventListener("click", function () {
            removeItem(this);
        });

        netto += (c[x].Quantity * c[x].Price);

        quantity = c[x].Quantity;
        price = c[x].Price;
    }

    prisvisning();
}

function prisvisning() {
    
    document.getElementById("nettoPris").innerText = netto;

    moms = 0.25 * netto;
    document.getElementById("moms").innerText = moms;

    if (netto < 1000) {
        frakt = 200;
    } else {
        frakt = 0;
    }

    document.getElementById("frakt").innerText = frakt;
    
    brutto = (netto + moms + frakt);
    document.getElementById("bruttoPris").innerText = brutto;
}

function removeItem(x) {
    var c = store.cartContent;

    var nyttId = x.id;
    store.cartContent.splice(nyttId, 1);
    store.save();

    var id = "li" + nyttId;
    var li = document.getElementById(id);
    li.setAttribute("style", "display:none;");

    netto = 0;

    beraknaNetto();

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