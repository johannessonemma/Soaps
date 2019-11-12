console.log("Funkar!");

let arraySoaps = [];

function Soap(name, quantity, price){
    this.Name = name;
    this.Quantity = quantity;
    this.Price = price;
}

function buy(e) {
    console.log("Buyknapp Funkar!");

    console.log(e);

    let antal = e + "Antal";
    let pris = e + "Price";

    console.log(antal);

    let quantity = document.getElementById(antal).value;
    let price = document.getElementById(pris).innerHTML;

    console.log(quantity);

    let soap = new Soap(e, quantity, price);

    console.log(soap);

    arraySoaps.push(soap);

    console.log(arraySoaps);
}

function goToCart(){                    //ta bort??
    let obj = { a: arraySoaps}

    localStorage.setItem("soapnyckel", JSON.stringify(obj));

    window.location.replace("Basket.cshtml");
}