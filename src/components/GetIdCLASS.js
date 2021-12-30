import { useParams } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';

import React, { useEffect , useState} from 'react'


    const GetId = () => {

        

    const [idProd, setIdProd] = useState([])

    const {id} = useParams();

    console.log("GetId- pasando el valor "+id);

    //setIdProd(id);

    //const [loading, setLoading]=useState(true);

    //setLoading(false);
    
    return (
        <div> {id} 
            <ItemListContainer id={id} />    
        </div>
    )
}

export default GetId

