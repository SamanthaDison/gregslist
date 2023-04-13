import { appState } from "../AppState.js"

class CarsService {
    setActive(carId) {
        let car = appState.cars.find(c => c.id == carId)
        appState.car = car
    }


}

export const carsService = new CarsService()