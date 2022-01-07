import React from 'react'


const Contacto = () => {

    const onClickEnvio = (evt) =>{

        console.log("hola");

        console.log(evt); // dice el tipo de evento que es

    }



    const teclaVocales = (evt) =>{

        //console.log(evt.keyCode);

        console.log(evt.key);
        
        const invalidKeys= ['a', 'e', 'i', 'o', 'u'];

        if(invalidKeys.includes(evt.key))
        {
            evt.preventDefault();
        }




    }


    return (
        <div>
            <h2>Formulario de contacto</h2>

            <input onKeyDown={teclaVocales} type="text" />
            <br></br>
            <textarea></textarea>
            <br></br>
            <button onClick={onClickEnvio}>Enviar</button>
        </div>
    )
}

export default Contacto