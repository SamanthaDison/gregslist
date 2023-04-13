import { generateId } from "../Utils/generateId.js"

export class Car {
    constructor(data) {
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
          <div class="rounded elevation-5 selectable" data-bs-toggle="modal" data-bs-target="#carModal" onclick="app.carsController.setActive('${this.id}')">
            <img class="rounded-top car-img"
              src="${this.img}"
              alt="${this.make, this.model}">
            <div class="d-flex justify-content-between p-2">
              <p>${this.make, this.model}</p>
              <p>$${this.price}</p>
            </div>
          </div>
        </div>`
    }


    get ActiveTemplate() {
        return `
            <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${this.make, this.model}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <section class="row">
            <div class="col-12 col-md-6">
              <img class="img-fluid" src="${this.img}" alt="${this.make, this.model}">
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

}