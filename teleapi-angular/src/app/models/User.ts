import UserPlan from "./UserPlan";

class User {

    id: number;
    username: String;
    password: String;
    // Added .....UserPlan
    userPlans: Array<UserPlan>;

    constructor(id = 0, username = '', password = '', userPlans = []) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.userPlans = userPlans;
    }

}
export default User;