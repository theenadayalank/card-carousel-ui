import {useEffect, useState} from 'react';

import CreditCard from "../CreditCard";

import randomInteger from '../../Utils';
import creditCardColorList from '../../Constants/creditCardColorList';

import './styles.scss';

const CardDetailsEdit = (props) => {
    const { selectedCardData, onCardSaveHandler, type } = props;

    const [cardName, setCardName] = useState(selectedCardData.name || '');
    const [cardNumber] = useState(selectedCardData.number || randomInteger(1000, 9999));
    const [cardExpiry, setCardExpiry] = useState(selectedCardData.expiry || '');
    const [cardColor, setCardColor] = useState(selectedCardData.background || creditCardColorList[0].id);
    const [isDisabled, setIsDisabled] = useState(true);


    useEffect(() => {
        if(cardName === selectedCardData.name && cardExpiry === selectedCardData.expiry && cardColor === selectedCardData.background) {
            setIsDisabled(true);
        } else {
            let isDisabled = false;
            if(cardName === '' || cardExpiry === '' || cardColor === '') {
                isDisabled = true;
            }

            if(!isValidExpiryTime(cardExpiry)) {
                isDisabled = true;
            }

            setIsDisabled(isDisabled);
        }
    }, [cardName, cardExpiry, cardColor, selectedCardData]);

    const isValidExpiryTime = (cardExpiry) => {
        const expiryTime = cardExpiry.split('/');
        const month = expiryTime[0] || '';
        const year = expiryTime[1] || '';

        if(month.length !== 2 || year.length !== 2) {
            return false;
        }

        if(isNaN(Number(month)) || isNaN(Number(year))) {
            return false;
        }

        if(month < 1 || month > 12) {
            return false;
        }

        if(year < 1 || year > 99) {
            return false;
        }

        return true;
    }

    const onCardNameChangeHandler = (event) => {
        setCardName(event.target.value);
    }

    const onCardColorChangeHandler = (color) => {
        setCardColor(color);
    }

    const onCardExpiryChangeHandler = (event) => {
        setCardExpiry(event.target.value);
    }

    const onSaveButtonClickHandler = () => {
        if(isDisabled) return;
        
        let cardData = {
            name: cardName,
            digits: cardNumber,
            expiry: cardExpiry,
            background: cardColor,
        };

        if(type === 'edit') {
            cardData.id = selectedCardData.id;
        }

        onCardSaveHandler(cardData, type);
    }

    return (
        <section className="creditcard-edit">
            <CreditCard 
                editMode={true}
                cardName={cardName}
                cardNumber={cardNumber}
                cardExpiry={cardExpiry}
                cardColor={cardColor}
                onCardNameChangeHandler={onCardNameChangeHandler}
                onCardExpiryChangeHandler={onCardExpiryChangeHandler}
            />
            <section className="color-palette">
                {creditCardColorList.map((color, index) => {
                   return (
                        <div 
                            key={`color-palette-${index}`} 
                            className={`color-palette--item ${color.id === cardColor ? 'selected' : ''}`}
                            style={{backgroundColor: color.background}}
                            onClick={() => onCardColorChangeHandler(color.id)}
                        ></div>
                    );
                })}
            </section>
            <section>
                <button 
                    className={`creditcard-edit--button ${isDisabled ? 'disabled' : ''}`}
                    onClick={onSaveButtonClickHandler}
                >
                    Confirm
                </button>
            </section>
        </section>
    )
}

export default CardDetailsEdit;