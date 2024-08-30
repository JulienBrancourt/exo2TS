export class OrderManager {
    constructor(orders = []) {
        this.orders = orders;
    }
    addOrder(order) {
        this.orders.push(order);
    }
    getOrderById(id) {
        return this.orders.find((order) => order.id === id);
    }
    updateOrderStatus(id, status) {
        const order = this.getOrderById(id);
        if (order) {
            order.status = status;
        }
        else {
            console.log("Commande introuvable.");
        }
    }
    listOrdersByStatus(status) {
        return this.orders.filter((order) => order.status === status);
    }
    removeOrder(id) {
        const index = this.orders.findIndex((order) => order.id === id);
        if (index !== -1) {
            this.orders.splice(index, 1);
            console.log(`Commande n°${id} supprimée.`);
        }
        else {
            console.log(`Commande n°${id} inexistante.`);
        }
    }
}
