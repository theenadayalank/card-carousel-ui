import { useRef, useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import CreditCard from '../CreditCard';
import './styles.scss';

const SCROLLER_SIZE = 500;

function CardCarousel(props) {
    const { cards, handleCreditCardClick }  = props;
    const scrollerRef = useRef(null);
    const [disabled, setDisabled]  = useState('left');
    
    if(!Array.isArray(cards) || cards.length <= 0) {
        return null;
    }

    const handleArrowClick = (SCROLLER_SIZE) => {
        let { scrollLeft, clientWidth, scrollWidth } = scrollerRef.current;
        let scrollerValue = scrollLeft;
        scrollerValue += SCROLLER_SIZE;
        scrollerRef.current.scrollLeft = scrollerValue;
        toggleScrollBtnVisiblity(scrollerValue, clientWidth, scrollWidth);
    }

    function toggleScrollBtnVisiblity(scrollerValue, clientWidth, scrollWidth) {
        if (scrollerValue <= 0) {
          setDisabled('left');
        } else if (scrollerValue + clientWidth >= scrollWidth) {
          setDisabled('right');
        } else {
          setDisabled('');
        }
    }

    return (
        <section className="slider">
            <MdKeyboardArrowLeft 
                className={`slider--arrow slider--arrow-left ${disabled === 'left' ? 'disabled': ''}`} 
                onClick={() => handleArrowClick(-SCROLLER_SIZE)}
            />
            <MdKeyboardArrowRight 
                className={`slider--arrow slider--arrow-right ${disabled === 'right' ? 'disabled': ''}`} 
                onClick={() => handleArrowClick(SCROLLER_SIZE)}
            />
            <div 
                className="slider--container"
                ref={scrollerRef}
            >
                {cards.map((card, index) => {
                        return (
                            <CreditCard 
                                key={`card-${index}`}
                                cardName={card.name}
                                cardNumber={card.digits}
                                cardExpiry={card.expiry}
                                cardColor={card.background}
                                handleCreditCardClick={handleCreditCardClick}
                            />
                        )
                    }
                )}
            </div>

        </section>
    )
}

export default CardCarousel;