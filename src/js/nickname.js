export default class Validator {
    constructor(userName) {
        this.userName = userName
    }
    validateUsername() {
            return /^[a-z]+[a-z-_\d{0,3}]*[a-z]+$/i.test(this.userName);
    }
}