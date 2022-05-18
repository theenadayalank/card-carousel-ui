import { useState } from 'react';

import CardCarousel from '../../Components/CardCarousel';
import CreateCard from '../../Components/CreateCard';
import CardDetailsEdit from '../../Components/CardDetailsEdit';
import Modal from '../../Components/common/Modal';

import creditCardList from '../../Constants/creditCardList';

import './styles.scss';

function Home() {

  const [cards, setCards] = useState([...creditCardList]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);
  

  const handleCreditCardClick = (card) => {
    console.log('card clicked', card);
    setSelectedCardData(card);
    setShowModal(true);
  }


  const onCardSaveHandler = (slideData, type) => {
    console.log('card data saved', slideData, type)
  }

  const onCreateButtonClickHandler = (event) => {
    setShowModal(true);
  }

  const closeModalHandler = () => {
    console.log('clicked outside');
    setShowModal(false)
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
          <Modal title="Create Virtual Card" onClose={closeModalHandler}>
            <CardDetailsEdit selectedCardData={selectedCardData}/>
          </Modal>
        }
      </section>
    </main>
  );
}

export default Home;
