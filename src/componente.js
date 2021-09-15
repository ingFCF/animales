import React, {Component} from 'react'

/*
const Formulario = () =>{
  const generarTabla = () => {
    var j = document.getElementById('num').value
    var resulted = `<h4>La tabla de multiplicar del ${j} es :</h4><br>`
    for (let i = 1; i <= 10; i++) {
      resulted += `${j} X ${i} = ${j * i}<br>`
      
    }
    document.getElementById('result').innerHTML = resulted

  }
  return(
    <Fragment>
      <h2>Tablas de Multiplicar</h2>
      <input
      id = 'num'
      placeholder="Ingrese un número"
      type="number"
      name="numero"
      />
      <button
      onClick={generarTabla}
      >Mostrar</button>
      <div id="result"></div>
    </Fragment>
  )
}

export default Formulario
 

  //ES5
  var miComponent = React.createClass({
    propTypes: {...},
    getDefaultProps: {...},
    getInitialState: {...},
    render: function() {...}
  });

  //ES6
  class MiComponente extends React.Component {
    constructor(props) {
      super(props);
      this.state = {...};
    }

    render () {
      ...
    }
  }

  MiComponente.propTypes = {...};
  MiComponente.defaultProps = {...};

  //ES6 como función
  const miComponent = function({prop1, prop2}){
    return(

    )
  }

  const miComponent = ({prop1, prop2}) => (jsx);

  //ES7
  class MiComponente extends React.Component {
    static propTypes = {...}

    static defaultProps = {...}

    state = {...}

    constructor(props) {
      super(props);
    }

    render () {
      ...
    }
  }
*/


export default class Animal extends Component{

    oso = () => {

      var src = "https://ae01.alicdn.com/kf/HTB1CcnQh9_I8KJjy0Foq6yFnVXa1/Pel-cula-TED-2-10cm-en-caja-oso-de-peluche-Ted-BJD-figuras-en-miniatura-de.jpg_Q90.jpg_.webp"
    
      var imagen = document.getElementById('imagen')
      imagen?.setAttribute('src', src)      
      }

    perro = () => {

      var src = 'https://www.pngitem.com/pimgs/m/46-461984_how-to-draw-scooby-doo-scooby-doo-drawing.png'
    
      var imagen = document.getElementById('imagen')
      imagen?.setAttribute('src', src)      
      }

    tigre = () => {

      var src = 'https://respuestas.tips/wp-content/uploads/2014/02/tigger.jpg'
    
      var imagen = document.getElementById('imagen')
      imagen?.setAttribute('src', src)      
      }
    shark = () => {

      var src = 'https://i.pinimg.com/originals/ae/a1/e4/aea1e47a7a4d5e4bfa5783b763f77fd7.jpg'
    
      var imagen = document.getElementById('imagen')
      imagen?.setAttribute('src', src)      
      }

    lion = () => {

      var src = 'https://images.squarespace-cdn.com/content/v1/53daa37ce4b0f890bb843382/1542986795735-TAELIPIGDIFPQV7DUHZA/Rey-leon-comparaciones.jpg?format=1000w'
    
      var imagen = document.getElementById('imagen')
      imagen?.setAttribute('src', src)      
      }
      
  render(){
    return(
      <div className="container col-8">
        <div className="container">
        <h3 className=' text-center'>Cargan algo lento las imágenes...</h3>
        <button
          className="btn btn-warning m-5"
          onClick={this.oso}
        >Oso</button>
        <button
          className="btn btn-warning m-5"
          onClick={this.perro}
        >Perro</button>
        <button
          className="btn btn-warning m-5"
          onClick={this.tigre}
        >Tigre</button>
        <button
          className="btn btn-warning m-5"
          onClick={this.shark}
        >Tiburón</button>
        <button
          className="btn btn-warning m-5"
          onClick={this.lion}
        >León</button>

      <hr size="8"/>
      </div><div className="container col-6">
          <img id="imagen" width="500" height="300" src="" className='ml-5'/>
        </div></div>
    )
  }
    
}
