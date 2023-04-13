import { appState } from "../AppState.js"
import { Car } from "../Models/Car.js"
import { saveState } from "../Utils/Store.js"


function _saveCars() {
    saveState('cars', appState.cars)
}

class CarsService {
    create(formData) {
        const car = new Car(formData)
        appState.cars.push(car)
        // _saveCars()
        appState.emit('cars')
    }
    setActive(carId) {
        let car = appState.cars.find(c => c.id == carId)
        appState.car = car
    }


}

export const carsService = new CarsService()