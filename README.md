
<div align="center">

  <h3 align="center">Ejemplo de tienda online en React</h3>

  <p align="center">
    Proyecto de fin de curso de una tienda online realizado para 
    <a href="https://www.coderhouse.es/"><strong>Coder house</strong></a>
  </p>
</div>



## Sobre el proyecto


Esta web parte del curso React de <a href="https://www.coderhouse.es/">Coder House</a>. Durante dicho curso se van enseñando las herramientas para poder ir conformando una tienda online y aquí se muestra dicho resultado.




### Tecnologías a utilizar

* React
* Javascript
* HTML
* CSS



### Herramientas utilizadas

Se han utilizado los siguientes recursos:


* [React.js](https://reactjs.org/): programación general
* [React router](https://reactrouter.com/): para la navegación
* [Firebase](https://firebase.google.com/): gestión de base de datos






### Prerequisitos

Básicamente para poder alojar la tienda necesitamos un servidor de <b>React</b>. Habremos de instalarlo tal y como se indica en su página. Así mismo habremos de instalar las librerías externas de <b>React router</b> (que utilizaremos para hacer la gestión de enrutamiento entre acciones) y de <b>Firebase</b> (que es para la gestión y almacenaje de los datos en la base de datos de Firebase).



### Navegación en la tienda

La navegación se realiza a través del siguiente esquema:


    - Brand
        ↳ Lista todos los productos
              ↳ Detalle del producto
                      ↳ Agregar -> Carrito de compra

    - Categoría
          ↳ Lista todos los productos de esa categoría
                ↳ Detalle del producto
                      ↳ Agregar -> Carrito de compra


    -> Carrito de compra
            ↳ Formulario de pedido
                ↳ Confirmación de compra

