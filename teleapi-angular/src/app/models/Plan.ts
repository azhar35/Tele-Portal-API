class Plan {
    id: number;
    max_devices: number;
    price: number;

    constructor(id = 0, max_devices = 0, price = 0) {
        this.id = id;
        this.max_devices = max_devices;
        this.price = price;
    }
    
}
export default Plan;