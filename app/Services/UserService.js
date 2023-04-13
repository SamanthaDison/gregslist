import { appState } from "../AppState.js"

class UserService {
    logout() {
        appState.user = ''
    }
    login(input) {
        appState.user = input
    }

}

export const userService = new UserService()

