import Plan from "./Plan";
import User from "./User";

class UserPlan {
    id: number;
    user: User;
    plan: Plan;

    constructor(id = 0, user = new User(), plan = new Plan()) {
        this.id = id;
        this.user = user;
        this.plan = plan;
    }
}
export default UserPlan;