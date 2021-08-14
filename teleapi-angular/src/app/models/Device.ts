import UserPlan from "./UserPlan";
class Device {
    id: number;
    device_name: string;
    phone_number: string;
    userplan: UserPlan;
    
    constructor(id = 0, device_name = '', phone_number = '', userplan = new UserPlan()) {
        this.id = id;
        this.device_name = device_name;
        this.phone_number = phone_number;
        this.userplan = userplan;
    }
}
export default Device;
