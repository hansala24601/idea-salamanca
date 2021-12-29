import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';


    const GetId = () => {

    const {id} = useParams();


    return (
        <div> {id} 
            <ItemListContainer id={id} />    
        </div>
    )
}

export default GetId

