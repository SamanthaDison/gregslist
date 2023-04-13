import { appState } from "../AppState.js";
import { userService } from "../Services/UserService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawUser() {
    let user = appState.user
    if (!user) return
    setHTML('login', `Welcome ${}`)
}

export class UserController {
    constructor() {
        appState.on('user', _drawUser)
    }

    async login() {
        let input = await Pop.prompt("Enter your name")
        // console.log(input);
        if (!input) {
            Pop.error("get gud")
            return
        }
        userService.login(input)
    }


}