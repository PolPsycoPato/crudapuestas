import React, { Component } from 'react'
import Navbar from './Navbar'
 
import axios from 'axios';
 
export default class EditarJugadores extends Component {
 
  url="https://apiapuestas.azurewebsites.net";
  cajanombre=React.createRef()
  cajaPosicion=React.createRef();
  cajaImagen=React.createRef();
  cajaFecha=React.createRef();
  cajaPais=React.createRef();
  cajaIdequipo=React.createRef();
 
  state= {
    jugador:{},
    idequipo:-1
  }
 
  loadJugador=() =>{
 
     let request="/api/Jugadores/"+this.props.idjugadores;
 
 
     axios.get(this.url+request).then(response =>{
             
      this.setState({
        jugador:response.data
      })
     
     })
    }
 
    componentDidMount=()=>{
      this.loadJugador();
    }
 
    editarJugador=(e)=>{
 
      e.preventDefault();
 
       let request="/api/Jugadores/"+this.props.idjugadores+"/"+this.state.jugador.idEquipo;
 
       
     let jugadores= {
        nombre:this.cajanombre.current.value,
        posicion:this.cajaPosicion.current.value,
        imagen:this.cajaImagen.current.value,
        fechaNacimiento: this.cajaFecha.current.value,
        pais:this.cajaPais.current.value,
        idEquipo: parseInt(this.cajaIdequipo.current.value)
 
     }
console.log(jugadores)
     axios.put(this.url+request,jugadores).then(response =>{
 
      console.log(response.data +"editado")
 
     })
 
    }
 
  render() {
    return (
      <>
             <Navbar/>
             <div className='m-10 p-4'>
           
              <form class="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-4">Editar de Jugador</h2>
     
     
          <div>
            <label for="nombre" class="block text-gray-700 font-medium mb-1">Nombre</label>
            <input type="text" id="nombre" name="nombre" defaultValue={this.state.jugador.nombre}
                   class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" ref={this.cajanombre}/>
          </div>
     
         
          <div>
            <label for="posicion" class="block text-gray-700 font-medium mb-1">Posición</label>
            <input type="text" id="posicion" name="posicion"
                   class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" ref={this.cajaPosicion}
                   defaultValue={this.state.jugador.posicion} />
          </div>
     
       
          <div>
            <label for="imagen" class="block text-gray-700 font-medium mb-1">URL de Imagen</label>
            <input type="url" id="imagen" name="imagen"
                  defaultValue={this.state.jugador.imagen}
                   class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" ref={this.cajaImagen}/>
          </div>
     
         
          <div>
            <label for="fechaNacimiento" class="block text-gray-700 font-medium mb-1">Fecha de Nacimiento</label>
            <input type="text" id="fechaNacimiento" name="fechaNacimiento" defaultValue={this.state.jugador.fechaNacimiento}
         
                   class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" ref={this.cajaFecha}/>
          </div>
     
         
          <div>
            <label for="pais" class="block text-gray-700 font-medium mb-1">País</label>
            <input type="text" id="pais" name="pais"  defaultValue={this.state.jugador.pais}
                   class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" ref={this.cajaPais}/>
          </div>
     
       
          <div>
            <label for="idEquipo" class="block text-gray-700 font-medium mb-1">ID del Equipo</label>
            <input type="number" id="idEquipo" name="idEquipo" defaultValue={this.state.jugador.idEquipo}
                   class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" ref={this.cajaIdequipo}/>
          </div>
     
       
          <div class="pt-4">
            <button onClick={
              this.editarJugador
            }
                    class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
              Editar Jugador
            </button>
          </div>
        </form>
         
             </div>
      </>
    )
  }
}