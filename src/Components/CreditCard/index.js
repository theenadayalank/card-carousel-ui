import spenmoLogo from './../../Assets/Images/spenmo-logo.png';
import mastercardLogo from './../../Assets/Images/mastercard-logo.svg';

import './styles.scss';

function CreditCard (props) {
    const { data } = props;    
    return (
        <section className="card" style={{backgroundColor: data.background}}>
            <img src={spenmoLogo} className="card--logo" alt={data.name} />
            <div className="card--name">
                {data.name}
            </div>
            <div className="card--digits">
                **** **** **** {data.digits}
            </div>
            <section>
                <div className="card--expiry-text">Expiry</div>
                <div className="card--expiry-value">
                    {data.expiry}
                </div>
            </section>

            <img src={mastercardLogo} className="card--master-card-logo" alt="Mastercard Logo" />
        </section>
    )
}

export default CreditCard;