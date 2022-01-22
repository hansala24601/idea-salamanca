
import {useState, createContext} from 'react'

export const CarritoContexto = createContext({
    list: []
})

export function CarritoContextoProvider(props) {


    const [idCompra, setIdCompra] = useState("")

    const [usuario, setUsuario] = useState({

            name: 'USUARIO',
            phone: 123456789,
            email: 'mail@mail.com'

    })





    // aqui guardo el estado del array del carrito
    const [carrito, setCarrito] = useState([])

    //aqui guardo el estado del valor total
    const [totalGuardado, setTotalGuardado] = useState(0)

    // funcion que gestiona el añadido de elementos en el el carrito
    const addToCarrito = (elem) => {

        setIdCompra(""); // borro la id de operacion anterior

      //añade el numero de elementos nuevos al total
      setTotalGuardado(totalGuardado+elem.cantidad);

      //si ya esta lo borro y lo vuelvo a incluir con el nuevo total
      if(isInCarrito(elem.producto)) 
      {
        const resultado =carrito.find(e => e.producto === elem.producto);
        console.log("esta ya en el carro "+resultado.producto);
        
        resultado.cantidad=resultado.cantidad+elem.cantidad;

        carrito.splice(props.producto, 1);
        carrito.push(resultado);
      }
      else
      {
        setCarrito( (prevCarrito) => {
              return prevCarrito.concat(elem)
          })
      }
    }

    // funcion que gestiona el borrado de elementos del array del carrito
    const removeFromCarrito = (id) => {

      console.log("eliminando "+id);

      //recalculo el total
      const resultado =carrito.find(e => e.producto === id);
      setTotalGuardado(totalGuardado-resultado.cantidad);

      //lo quito del carrito
      setCarrito(prevCarrito => {
            return prevCarrito.filter(e => e.producto !== id);
        });
    }

    const isInCarrito = (id) => {
        return carrito.some( elem => elem.producto === id )
    }

    //funcion que borra todos los elementos del carrito
    function clearList() {
        setTotalGuardado(0);
        setCarrito([])
    }


    const compraRegistro = (id) => {

        setIdCompra(id);

        clearList();

    }





    const context = {
        list: carrito,
        total: totalGuardado,
        usuario: usuario,
        idCompra: idCompra,
        compraRegistro: compraRegistro,
        addElem: addToCarrito,
        removeElem: removeFromCarrito,
        isInCarrito: isInCarrito,
        clearList: clearList
    }

    return (
        <CarritoContexto.Provider value={context}>
            {props.children}
        </CarritoContexto.Provider>
    )
}
