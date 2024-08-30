import { OrderManager } from "./orderManager.js";
console.log("coucou");
function createCustomer(id, nom, email) {
    return {
        id: id,
        name: nom,
        email: email
    };
}
function createProduct(id, name, price, stock) {
    return {
        id: id,
        name: name,
        price: price,
        stock: stock
    };
}
function createOrderItem(product, quantity) {
    return {
        product: product,
        quantity: quantity
    };
}
function createOrder(id, client, articles, statut) {
    return {
        id: id,
        customer: client,
        items: articles,
        status: statut,
    };
}
function calculateTotal(order) {
    let prixParProduit;
    let prixtotal = 0;
    order.items.forEach((item) => {
        const quantity = item.quantity;
        const price = item.product.price;
        prixParProduit = quantity * price;
        prixtotal += prixParProduit;
    });
    return prixtotal;
}
let client1 = createCustomer(1, "machin", "machin@mail.fr");
let client2 = createCustomer(2, "truc", "truc@mail.fr");
let client3 = createCustomer(3, "bidule", "bidule@mail.fr");
let produit1 = createProduct(1, "mon 1er produit", 25, 100);
let produit2 = createProduct(2, "mon 2ème produit", 50, 200);
let produit3 = createProduct(3, "mon 3ème produit", 75, 150);
let produit4 = createProduct(4, "mon 4ème produit", 100, 50);
let produit5 = createProduct(5, "mon 5ème produit", 200, 30);
let orderitem1 = createOrderItem(produit1, 12);
let orderitem2 = createOrderItem(produit2, 5);
let orderitem3 = createOrderItem(produit3, 8);
let orderitem4 = createOrderItem(produit4, 3);
let order1 = createOrder(1, client1, [orderitem1], "en attente");
let order2 = createOrder(2, client2, [orderitem2, orderitem3], "livrée");
let order3 = createOrder(3, client3, [orderitem4], "expédiée");
console.log(client1);
console.log(produit1);
console.table(order3);
let calculOrder2 = calculateTotal(order2);
console.log(calculOrder2);
const orderManager = new OrderManager([order1, order2]);
console.log("Order Manager:", orderManager);
console.log(orderManager.getOrderById(1));
orderManager.updateOrderStatus(1, "livrée");
console.log(orderManager.listOrdersByStatus("livrée"));
orderManager.removeOrder(2);
console.log(orderManager.orders);
