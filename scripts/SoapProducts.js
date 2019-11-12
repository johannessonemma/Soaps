store.cartContent = store.cartContent || [];
store.save();

function Soap(name, quantity, price) {
    this.Name = name;
    this.Quantity = quantity;
    this.Price = price;
}

function buy(e) {

    let antal = e + "Antal";
    let pris = e + "Price";

    let quantity = document.getElementById(antal).value;
    let price = document.getElementById(pris).innerHTML;

    let soap = new Soap(e, quantity, price);

    store.cartContent.push(soap);
    store.save();
}