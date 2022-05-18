import { useState } from 'react';
import CardCarousel from '../../Components/CardCarousel';
import CreateCard from '../../Components/CreateCard';

import creditCardList from '../../Constants/creditCardList';

import './styles.scss';

function Home() {
  const [cards, setCards] = useState([...creditCardList]);
  return (
    <section className='home'>
      <h3 className='home--title'>Cards</h3>
      <section className='home--cards-container'>
        <CreateCard />
        <CardCarousel cards={cards}/>
      </section>
    </section>
  );
}

export default Home;
