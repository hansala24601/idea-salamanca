import { useParams } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';

import React, { useEffect , useState} from 'react'
import { render } from '@testing-library/react';

    const GetId = () => {

    //const [idProd, setIdProd] = useState([])

    const {id} = useParams();

    console.log("pasando el valor "+id);

render();
    

    return (
        <div> {id} 
            <ItemListContainer id={id} />    
        </div>
    )
}

export default GetId

