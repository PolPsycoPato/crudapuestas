import React, { Component } from "react";
import NavbarJugadores from "./NavbarJugadores";
import Global from "../Global";
import axios from "axios";
import DeleteJugador from "./DeleteJugador";
import { NavLink } from "react-router-dom";

export default class HomeJugadores extends Component {
  url = Global.urlJugadores;
  state = {
    jugadores: [],
    idJugador: -1,
    bandera: false,
  };

  loadJugadores = () => {
    var solicitud = "api/Jugadores";
    axios.get(this.url + solicitud).then((respuesta) => {
      this.setState({ jugadores: respuesta.data });
    });
  };

  componentDidMount = () => {
    this.loadJugadores();
  };

  componentDidUpdate = () => {
    if (this.state.bandera == true) {
      this.loadJugadores();
    }
  };
  render() {
    return (
      <>
        <NavbarJugadores />

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  idJugador{" "}
                </th>
                <th scope="col" class="px-6 py-3">
                  nombre
                </th>
                <th scope="col" class="px-6 py-3">
                  posicion
                </th>
                <th scope="col" class="px-6 py-3">
                  imagen
                </th>
                <th scope="col" class="px-6 py-3">
                  pais
                </th>
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.jugadores.map((valor, index) => {
                return (
                  <>
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {valor.idJugador}
                      </th>
                      <td class="px-6 py-4">{valor.nombre}</td>
                      <td class="px-6 py-4">{valor.posicion}</td>
                      <td class="px-6 py-4">
                        <img src={valor.imagen} className="h-10 w-10" />
                      </td>
                      <td class="px-6 py-4">{valor.pais}</td>
                      <td class="px-6 py-4 ">
                        <NavLink
                          to="/UpdateJugador/"
                          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                        >
                          UPDATE
                        </NavLink>
                        <br />
                        <button
                          className="inline-block bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-200"
                          onClick={() => {
                            console.log(valor.idJugador);
                            this.setState({
                              idJugador: valor.idJugador,
                              bandera: true,
                            });
                          }}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>

        {this.state.idJugador !== -1 && (
          <DeleteJugador idJugador={this.state.idJugador} />
        )}
      </>
    );
  }
}
