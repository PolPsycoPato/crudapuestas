import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import HomeJugadores from './components/HomeJugadores';
import CreateJugador from './components/CreateJugador';

function JugadoresElement() {
  let { idjugadores } = useParams();
  return <HomeJugadores idjugadores={idjugadores} />;
}

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeJugadores />} />
          <Route path="/create" element={<CreateJugador />} />
          <Route path="/jugadores/:idjugadores" element={<JugadoresElement />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
