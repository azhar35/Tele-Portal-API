import Device from "./Device";
import Plan from "./Plan";
import User from "./User";

class UserPlan {
    id: number;
    user: User;
    plan: Plan;
    devices: Array<Device>;

    constructor(id = 0, user = new User(), plan = new Plan(), devices = []) {
        this.id = id;
        this.user = user;
        this.plan = plan;
        this.devices = devices;
    }
}
export default UserPlan;