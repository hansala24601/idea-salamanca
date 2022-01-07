// contiene los itemjs
import React from 'react'
import Item from './Item'

const ItemList = (props) => {
    return (
        <div>
            {props.items.map(it => <Item key={it.id} id={it.id} title={it.title} price={it.price} pictureUrl={it.pictureUrl}></Item> )}
        </div>
    )
}

export default ItemList
