import { appState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { carsService } from "../Services/CarsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawCars() {
    let cars = appState.cars
    let template = ''
    cars.forEach(c => template += c.CardTemplate)
    setHTML('cars', template)
}

function _drawActive() {
    let car = appState.car
    setHTML('modalGuts', car.ActiveTemplate)
}

export class CarsController {
    constructor () {
        _drawCars()
        appState.on('car', _drawActive)
    }

    setActive(carId) {
        carsService.setActive(carId)
    }

    setCarForm() {
        setHTML('modalGuts', Car.CarForm())
    }

    create() {
        window.event.preventDefault()
        const form = window.event.target
        const formData = getFormData(form)
        carsService.create(formData)
        // @ts-ignore
        form.reset()
        // @ts-ignore
        bootstrap.Modal.getOrCreateInstance('#modal').hide()
    }

}