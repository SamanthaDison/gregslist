import { appState } from "../AppState.js"
import { Car } from "../Models/Car.js"
import { Pop } from "../Utils/Pop.js"
import { saveState } from "../Utils/Store.js"


function _saveCars() {
    saveState('cars', appState.cars)
}

class CarsService {
    delete(carId) {
        const cars = appState.cars
        const carIndex = cars.findIndex(c => c.id == carId)

        if (carIndex == -1) {
            Pop.error('No car was found with that ID')
            return
        }

        cars.splice(carIndex, 1)

        appState.emit('cars')
    }

    create(formData) {
        const car = new Car(formData)
        appState.cars.push(car)
        _saveCars()
        appState.emit('cars')
    }

    setActive(carId) {
        let car = appState.cars.find(c => c.id == carId)
        appState.car = car
    }

}

export const carsService = new CarsService()