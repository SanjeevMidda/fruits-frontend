import React, { useState } from 'react'

function Fruit({img, name, color, quantity}) {

    const [flipCard, setFlipCard] = useState(true);

    function turnCard(){
        setFlipCard(!flipCard);
    }

  return (
    <div className="fruitContainer" onClick={turnCard}>
        {flipCard? 
            <img src={img} alt="" /> :
            <>
                <h3><span>NAME: </span>{name}</h3>
                <h3><span>COLOR: </span>{color}</h3>
                <h3><span>QUANTITY: </span>{quantity}</h3>
            </>
        }
    </div>
  )
}

export default Fruit