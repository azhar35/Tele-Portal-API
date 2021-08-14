class User {

    id: number;
    username: String;
    password: String;

    constructor(id = 0, username = '', password = '') {
        this.id = id;
        this.username = username;
        this.password = password;
    }

}
export default User;