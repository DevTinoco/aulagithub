const p1={
    name:"Violão Clássico",
    price: "R$15.000,00",
    quantity: 3

}

const Product = function(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;

}

const p2 = new Product("Violão Turibio Santos", 10.000, 2 );
