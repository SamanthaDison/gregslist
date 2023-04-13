import { Car } from "./Models/Car.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  cars = [
    new Car({ make: 'Toyota', model: 'Camry', img: 'https://s1.cdn.autoevolution.com/images/news/gallery/mr-regular-reviews-the-seven-seat-1993-toyota-camry-wagon-v6_8.jpg', year: 1993, price: 1000, description: "ole' reliable", color: '#45e7f0' }),
    new Car({ make: 'Toyota', model: 'Camry', img: 'https://images.unsplash.com/photo-1588440983028-d53e24fa96cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', year: 1993, price: 1000, description: "ole' reliable", color: '#45e7f0' })
  ]

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
