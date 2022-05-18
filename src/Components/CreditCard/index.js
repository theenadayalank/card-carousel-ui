import spenmoLogo from './../../Assets/Images/spenmo-logo.png';
import mastercardLogo from './../../Assets/Images/mastercard-logo.svg';

import creditCardColorList from '../../Constants/creditCardColorList';

import './styles.scss';

function CreditCard (props) {
    const {
        cardId,
        cardName,
        cardNumber,
        cardExpiry,
        cardColor,
        editMode,
        onCardNameChangeHandler,
        onCardExpiryChangeHandler,
        handleCreditCardClick
    } = props;

    const creditCardBackground = (creditCardColorList.find(color => color.id === cardColor) || {} ).background;
    
    return (
        <section 
            className="card" 
            style={{backgroundColor: creditCardBackground}} 
            onClick={() => handleCreditCardClick && handleCreditCardClick(cardId)}
        >
            <img src={spenmoLogo} className="card--logo" alt={cardName} />

            <div className="card--name">
                {
                    editMode ? <input type="text" className='input-box' value={cardName} onChange={onCardNameChangeHandler} placeholder="Enter Name" /> : cardName
                }
            </div>

            <div className="card--digits">
                {
                    editMode ? '' : `**** **** **** ${cardNumber}`
                }
            </div>

            <section>
                <div className="card--expiry-text">Expiry</div>
                <div className="card--expiry-value">
                    {
                        editMode ? <input type="text" className='input-box' value={cardExpiry} onChange={onCardExpiryChangeHandler} placeholder="MM/YY" /> : cardExpiry
                    }
                </div>
            </section>

            <img src={mastercardLogo} className="card--master-card-logo" alt="Mastercard Logo" />
        </section>
    )
}

export default CreditCard;