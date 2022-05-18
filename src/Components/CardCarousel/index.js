import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import CreditCard from '../CreditCard';
import './styles.scss';

function CardCarousel({cards}) {

    if(!Array.isArray(cards) || cards.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            <MdKeyboardArrowLeft className="slider--arrow slider--arrow-left" />
            <MdKeyboardArrowRight className="slider--arrow slider--arrow-right" />
            <div className="slider--container">
                {cards.map((card, index) => {
                        return (
                            <CreditCard data={card} index={index} key={`card-${index}`}/>
                        )
                    }
                )}
            </div>

        </section>
    )
}

export default CardCarousel;