
import {useState, createContext} from 'react'                               // importamos las fuincionas necesarias para trabajar con contexto

export const CarritoContexto = createContext({                              // creamos un contexto con nuestra lista de elementos del carrito (tiene que ser "export" para poder usarse desde este elemento)
    list: []
})

export function CarritoContextoProvider(props) {


    const [idCompra, setIdCompra] = useState("")                            // aquí guardamos el valor del ID de la última compra para poder mostrarlo desde fuera del carrito



    const [usuario, setUsuario] = useState({                                // datos del usuario por defecto

            name: 'USUARIO',
            phone: 123456789,
            email: 'mail@mail.com'

    })





    // aqui guardo el estado del array del carrito
    const [carrito, setCarrito] = useState([])

    //aqui guardo el estado del valor total
    const [totalGuardado, setTotalGuardado] = useState(0)

    // funcion que gestiona el añadido de elementos en el carrito
    const addToCarrito = (elem) => {

        // borro la id de operacion anterior
        setIdCompra(""); 

        //añade el numero de elementos nuevos al total
        setTotalGuardado(totalGuardado+elem.cantidad);

        //si ya esta lo borro y lo vuelvo a incluir con el nuevo total (incremento el que había)
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
            // como no estaba lo incluyo

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


    // función que indica si un elemento (a través de su ID) está o no está en el carrito
    const isInCarrito = (id) => {
        return carrito.some( elem => elem.producto === id )
    }


    //funcion que borra todos los elementos del carrito
    function clearList() {
        setTotalGuardado(0);
        setCarrito([])
    }


    // función que nos sirve para, una vez recibida la  ID de respuesta de compra, guardarla para mostrarla luego y borrar el carrito
    const compraRegistro = (id) => {

        setIdCompra(id);

        clearList();
    }


    // variable donde almacenamos las funciones y variables del contexto (todo lo definido más arriba)
    const context = {
        list: carrito,                      // el array con los datos del carrito
        total: totalGuardado,               // el total de la compra
        usuario: usuario,                   // los datos del usuario
        idCompra: idCompra,                 // el ID que nos devuelven de la compra realizada
        compraRegistro: compraRegistro,     // función que al recibir la ID de compra limpia el carrito 
        addElem: addToCarrito,              // función para añadir elementos al carrito
        removeElem: removeFromCarrito,      // función que elimina objetos del carrito
        isInCarrito: isInCarrito,           // función que indica si un elemento ya está en el carrito
        clearList: clearList                // función que limpia el carrito
    }

    // enviamos el contexto y se lo propagamos a todos los hijos de esos elementos
    return (
        <CarritoContexto.Provider value={context}>
            {props.children}
        </CarritoContexto.Provider>
    )
}
