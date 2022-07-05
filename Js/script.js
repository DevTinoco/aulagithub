const p1={
    name:"Violão Clássico",
    price: "R$15.000,00",
    quantity: 3

}

const Produto = function(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;

}

const p2 = new Produto("Violão Turibio Santos", 10.000, 2 );
