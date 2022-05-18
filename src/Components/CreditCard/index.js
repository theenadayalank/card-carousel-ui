import spenmoLogo from './../../Assets/Images/spenmo-logo.png';
import mastercardLogo from './../../Assets/Images/mastercard-logo.svg';

import './styles.scss';
import creditCardColorList from '../../Constants/creditCardColorList';

function CreditCard (props) {
    const {
        cardId,
        cardName,
        cardNumber,
        cardExpiry,
        cardColor,
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
                {cardName}
            </div>
            <div className="card--digits">
                **** **** **** {cardNumber}
            </div>
            <section>
                <div className="card--expiry-text">Expiry</div>
                <div className="card--expiry-value">
                    {cardExpiry}
                </div>
            </section>

            <img src={mastercardLogo} className="card--master-card-logo" alt="Mastercard Logo" />
        </section>
    )
}

export default CreditCard;