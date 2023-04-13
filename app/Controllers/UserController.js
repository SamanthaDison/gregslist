import { appState } from "../AppState.js";
import { userService } from "../Services/UserService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawUser() {
    let user = appState.user
    if (!user) {
        setHTML('login', '<button class="btn btn-info" onclick="app.userController.login()">Login</button>')
        document.getElementById('createListing').querySelector('button').disabled = true
    }
    else {
        setHTML('login', `<h1>Welcome ${user}</h1> <button onclick="app.userController.logout()" class="btn btn-danger ms-3">Logout</button>`)
        document.getElementById('createListing').querySelector('button').disabled = false
    }
}

export class UserController {
    constructor () {
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

    async logout() {
        const userWantsToLogOut = await Pop.confirm('Log out?', '')

        if (userWantsToLogOut) {
            userService.logout()
        }
    }
}