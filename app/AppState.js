import { Car } from "./Models/Car.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({
      make: 'Toyota',
      model: 'Camry',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhU86FK-V8ZtC4FAErsxRsQn9buejSzkraBFb8aMcWZ5jdK2ETSGQctK4gVTFR5XnEOQ&usqp=CAU',
      year: 1993,
      price: 1000,
      creatorName: 'Sam',
      description: "ole' reliable",
      color: '#45e7f0'
    }),
    new Car({
      make: 'Mazda',
      model: 'Miata',
      img: 'https://images.unsplash.com/photo-1630053849995-f119f1daba32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      year: 1996,
      price: 4000,
      description: "coolest car",
      color: '#105a77'
    }),
    new Car({
      make: 'Mazda',
      model: 'Miata',
      img: 'https://images.unsplash.com/photo-1552615526-40e47a79f9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1276&q=80',
      year: 1995,
      price: 3000,
      description: "teriyaki boyz",
      color: '#858ba5'
    }),
    new Car({
      make: 'Mazda',
      model: 'Miata',
      img: 'https://images.unsplash.com/photo-1610884447640-42b8ec61a933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80',
      year: 1994,
      price: 3500,
      description: "only accepting offers from cool dudes",
      color: '#921937'
    }),
  ]

  /** @type {import('./Models/Car').Car|null} */
  car = null

  //  REVIEW do we do just a string here? or should we have an entire object and name is a property?
  user = ''

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
