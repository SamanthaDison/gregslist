import { generateId } from "../Utils/generateId.js"

export class Car {
    constructor (data) {
        this.id = data.id || generateId()
        this.make = data.make
        this.model = data.model
        this.img = data.img
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.color = data.color
    }


    get CardTemplate() {
        return `
          <div class="col-12 col-md-4 my-3">
          <div class="rounded elevation-5 selectable" data-bs-toggle="modal" data-bs-target="#modal" onclick="app.carsController.setActive('${this.id}')">
            <img class="rounded-top car-img"
              src="${this.img}"
              alt="${this.make + ' ' + this.model}">
            <div class="d-flex justify-content-between p-2">
              <p>${this.make + ' ' + this.model}</p>
              <p>$${this.price}</p>
            </div>
          </div>
        </div>`
    }


    get ActiveTemplate() {
        return `
            <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${this.make + ' ' + this.model}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <section class="row">
            <div class="col-12 col-md-6">
              <img class="img-fluid" src="${this.img}" alt="${this.make + ' ' + this.model}">
            </div>
            <div class="col-12 col-md-6">
              <p >${this.description}</p>
              <div class="d-flex justify-content-around">
                <p>$${this.price}</p>
                <p>${this.year}</p>
              </div>
            </div>
          </section>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>`
    }

    static CarForm() {
        return `
        <form onsubmit="app.carsController.create()">
        <div class="modal-body">
          <div class="row">
            <div class="mb-2 col-4">
              <label for="make">Make</label>
              <input type="text" name="make" id="make" class="form-control">
            </div>
            <div class="mb-2 col-4">
              <label for="model">Model</label>
              <input type="text" name="model" id="model" class="form-control" required minlength="3" maxlength="10"
                placeholder="Toyota">
            </div>
            <div class="mb-2 col-4">
              <label for="year">Year</label>
              <input type="number" name="year" id="year" class="form-control" required min="2020" max="3000"
                value="2023">
            </div>
            <div class="mb-2 col-12">
              <label for="img">Image URL</label>
              <input type="url" name="img" id="img" class="form-control" required
                placeholder="please enter a url for an image...">
            </div>
            <div class="mb-2 col-12">
              <label for="description">Description</label>
              <input type="text" name="description" id="description" class="form-control" maxlength="50">
            </div>
            <div class="mb-2 col-6">
              <label for="color">Color</label>
              <input type="color" name="color" id="color" class="form-control" required value="#4747ff">
            </div>
            <div class="mb-2 col-6">
              <label for="price">Price</label>
              <input type="number" name="price" id="price" class="form-control" required min="1">
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-secondary">Create Car</button>
        </div>
      </form>
        `
    }

}