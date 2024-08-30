import { Customer } from "./customer.js";
import { OrderItem } from "./orderItem.js";

export interface Order {
	id: number;
	customer: Customer;
	items: OrderItem[];
	status: "en attente" | "expédiée" | "livrée";
}
