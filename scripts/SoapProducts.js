store.cartContent = store.cartContent || [];
store.save();

function Soap(name, quantity, price, campaign) {
    this.Name = name;
    this.Quantity = quantity;
    this.Price = price;
    this.Campaign = campaign;
}

function buy(e) {

    let antal = e + "Antal";
    let pris = e + "Price";
    let kampanj = e + "Kampanj";

    let quantity = document.getElementById(antal).value;
    let price = document.getElementById(pris).innerHTML;
    let campaign = document.getElementById(kampanj).value;

    let soap = new Soap(e, quantity, price, campaign);

    store.cartContent.push(soap);
    store.save();
}