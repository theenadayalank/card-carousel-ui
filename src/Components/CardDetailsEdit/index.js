import {useState} from 'react';

import CreditCard from "../CreditCard";


import creditCardColorList from './../../Constants/creditCardColorList';

import './styles.scss';

const CardDetailsEdit = (props) => {
    const { selectedCardData } = props;

    console.log('111', selectedCardData);

    const [cardName, setCardName] = useState(selectedCardData.name);
    const [cardExpiry, setCardExpiry] = useState(selectedCardData.expiry);
    const [cardColor, setCardColor] = useState({
        color: selectedCardData.color,
    });


    const onCardNameChangeHandler = (event) => {
        setCardName(event.target.value);
    }

    const onCardColorChangeHandler = (color) => {
        setCardColor(color);
    }

    const onCardExpiryChangeHandler = (event) => {
        setCardExpiry(event.target.value);
    }

    return (
        <section className="creditcard-edit">
            <CreditCard 
                data={selectedCardData} 
            />
            <section className="color-palette">
                {creditCardColorList.map((color, index) => {
                   return (
                        <div 
                            key={`color-palette-${index}`} 
                            className="color-palette--item" 
                            style={{backgroundColor: color.background}}
                        >

                        </div>
                   )
                   
                })}
            </section>
            <section>
                <button className="creditcard-edit--button">Confirm</button>
            </section>
        </section>
    )
}

export default CardDetailsEdit;