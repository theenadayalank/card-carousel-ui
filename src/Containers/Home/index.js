import { useState } from 'react';

import CardCarousel from '../../Components/CardCarousel';
import CreateCard from '../../Components/CreateCard';
import CardDetailsEditModal from '../../Components/CardDetailsEditModal';
import Modal from '../../Components/Common1/Modal';

import creditCardList from '../../Constants/creditCardList';

import './styles.scss';

function Home() {

  const [cards, setCards] = useState([...creditCardList]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState({});
  const [type, setType] = useState('');
  

  const handleCreditCardClick = (cardId) => {
    const cardData = cards.find(card => card.id === cardId);
    setType('edit');
    setSelectedCardData(cardData);
    setShowModal(true);
  }


  const onCardSaveHandler = (cardData, type) => {
    if(type === 'edit') {
      const cardIndex = cards.findIndex(card => card.id === cardData.id);
      cards[cardIndex] = cardData;
    } else if (type === 'create') {
      cards.push({
        ...cardData,
        id: Math.random()
      });
    }
    setCards([...cards]);
    setSelectedCardData({});
    setShowModal(false);
  }

  const onCreateButtonClickHandler = () => {
    setType('create');
    setSelectedCardData({});
    setShowModal(true);
  }

  return (
    <main className='home'>
      <h3 className='home--title'>Cards</h3>
      <section className='home--cards-container'>
        <CreateCard 
          onCreateButtonClickHandler={onCreateButtonClickHandler}
        />
        <CardCarousel 
          cards={cards} 
          handleCreditCardClick={handleCreditCardClick}
        />
        {showModal && 
          <Modal title="Create Virtual Card" onClose={() => setShowModal(false)}>
            <CardDetailsEditModal 
              type={type}
              selectedCardData={selectedCardData}
              onCardSaveHandler={onCardSaveHandler}
            />
          </Modal>
        }
      </section>
    </main>
  );
}

export default Home;
