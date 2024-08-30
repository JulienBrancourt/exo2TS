import { Order } from "./order.js";

export class OrderManager {
	orders: Order[];

	constructor(orders: Order[] = []) {
		this.orders = orders;
	}

	addOrder(order: Order): void {
		this.orders.push(order);
	}

	getOrderById(id: number): Order | undefined {
		return this.orders.find((order) => order.id === id);
	}

	updateOrderStatus(
		id: number,
		status: "en attente" | "expédiée" | "livrée"
	): void {
		const order = this.getOrderById(id);
		if (order) {
			order.status = status;
		} else {
			console.log("Commande introuvable.");
		}
	}

	listOrdersByStatus(status: "en attente" | "expédiée" | "livrée"): Order[] {
		return this.orders.filter((order) => order.status === status);
	}

	removeOrder(id: number): void {
		const index = this.orders.findIndex((order) => order.id === id);

		if (index !== -1) {
			this.orders.splice(index, 1);
			console.log(`Commande n°${id} supprimée.`);
		} else {
			console.log(`Commande n°${id} inexistante.`);
		}
	}
}
