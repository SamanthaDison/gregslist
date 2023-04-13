import { appState } from "../AppState.js"

class UserService {
    login(input) {
        appState.user = input
    }

}

export const userService = new UserService()

