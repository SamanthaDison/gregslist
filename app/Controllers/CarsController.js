import { appState } from "../AppState.js";
import { carsService } from "../Services/CarsService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawCars() {
    let cars = appState.cars
    let template = ''
    cars.forEach(c => template += c.CardTemplate)
    setHTML('cars', template)
}

function _drawActive() {
    let car = appState.car
    setHTML('active', car.ActiveTemplate)
}

export class CarsController {
    constructor() {
        _drawCars()
        appState.on('car', _drawActive)
    }


    setActive(carId) {
        carsService.setActive(carId)
    }

}