import React, { Component } from "react";
import NavbarJugadores from "./NavbarJugadores";
import Global from "../Global";
import axios from "axios";

export default class DeleteJugador extends Component {
  url = Global.urlJugadores;

  eliminarJugador = () => {
    let solicitud = "api/Jugadores/" + this.props.idJugador;

    axios.delete(this.url + solicitud).then((respuesta) => {
      console.log(
        "El jugador con id: " + this.props.idJugador + " ha sido eliminado"
      );
    });
  };

  componentDidMount = () => {
    this.eliminarJugador();
  };

  render() {
    return <NavbarJugadores />;
  }
}
