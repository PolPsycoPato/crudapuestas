import React, { Component } from "react";
import NavbarJugadores from "./NavbarJugadores";
import axios from "axios";
export default class CreateJugador extends Component {
  url = "https://apiapuestas.azurewebsites.net";
  cajaNombre = React.createRef();
  cajaPosicion = React.createRef();
  cajaImagen = React.createRef();
  cajaFecha = React.createRef();
  cajaPais = React.createRef();
  cajaIdequipo = React.createRef();


  
  createJugadores = (e) => {
    e.preventDefault();
    let request = "/api/Jugadores";

    let jugadores = {
      nombre: this.cajaNombre.current.value,
      posicion: this.cajaPosicion.current.value,
      imagen: this.cajaImagen.current.value,
      fechaNacimiento: this.cajaFecha.current.value,
      pais: this.cajaPais.current.value,
      idEquipo: parseInt(this.cajaIdequipo.current.value),
    };
    axios.post(this.url + request, jugadores).then((response) => {
      console.log(response.data);
      window.location.href = "http://localhost:3000/";
    });
  };

  render() {
    return (
      <>
        <NavbarJugadores />
        <div className="m-10 p-4">
          <form class="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4">
            <h2 class="text-2xl font-bold text-center text-gray-800 mb-4">
              Registro de Jugador
            </h2>

            <div>
              <label for="nombre" class="block text-gray-700 font-medium mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Antoine Griezmann"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ref={this.cajaNombre}
              />
            </div>

            <div>
              <label
                for="posicion"
                class="block text-gray-700 font-medium mb-1"
              >
                Posición
              </label>
              <input
                type="text"
                id="posicion"
                name="posicion"
                placeholder="Delantero"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ref={this.cajaPosicion}
              />
            </div>

            <div>
              <label for="imagen" class="block text-gray-700 font-medium mb-1">
                URL de Imagen
              </label>
              <input
                type="url"
                id="imagen"
                name="imagen"
                placeholder="https://img.a.transfermarkt.technology/portrait/header/125781-1719928503.jpg"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ref={this.cajaImagen}
              />
            </div>

            <div>
              <label
                for="fechaNacimiento"
                class="block text-gray-700 font-medium mb-1"
              >
                Fecha de Nacimiento
              </label>
              <input
                type="text"
                id="fechaNacimiento"
                name="fechaNacimiento"
                placeholder="23/02/1999"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ref={this.cajaFecha}
              />
            </div>

            <div>
              <label for="pais" class="block text-gray-700 font-medium mb-1">
                País
              </label>
              <input
                type="text"
                id="pais"
                name="pais"
                placeholder="Francia"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ref={this.cajaPais}
              />
            </div>

            <div>
              <label
                for="idEquipo"
                class="block text-gray-700 font-medium mb-1"
              >
                ID del Equipo
              </label>
              <input
                type="number"
                id="idEquipo"
                name="idEquipo"
                placeholder="4"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ref={this.cajaIdequipo}
              />
            </div>

            <div class="pt-4">
              <button
                onClick={this.createJugadores}
                class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Guardar Jugador
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
