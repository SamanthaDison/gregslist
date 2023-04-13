import { appState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { carsService } from "../Services/CarsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

// function _drawCars() {
//     let cars = appState.cars
//     let template = ''
//     cars.forEach(c => template += c.CardTemplate)
//     setHTML('listings', template)
//     setHTML('createListing', Car.CreateCarButton())
// }


function _drawActive() {
    let car = appState.car
    setHTML('modalGuts', car.ActiveTemplate)
}

export class CarsController {
    constructor () {
        this.drawCars()
        appState.on('car', _drawActive)
        appState.on('cars', this.drawCars)
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
        formData.creatorName = appState.user
        carsService.create(formData)
        // @ts-ignore
        form.reset()
        // @ts-ignore
        bootstrap.Modal.getOrCreateInstance('#modal').hide()
    }
    drawCars() {
        let cars = appState.cars
        let template = ''
        cars.forEach(c => template += c.CardTemplate)
        setHTML('listings', template)
        setHTML('createListing', Car.CreateCarButton())
    }

    async delete(carId) {
        const userWantsToDeleteThisCar = await Pop.confirm("Do you want to delete this car?")

        if (userWantsToDeleteThisCar) {
            carsService.delete(carId)
            // @ts-ignore
            bootstrap.Modal.getOrCreateInstance('#modal').hide()
        }
    }

}