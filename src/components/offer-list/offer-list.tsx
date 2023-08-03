import {useState} from 'react';
import {Offer} from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
offers: Offer[];
}

function OfferList({offers}: OfferListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentCard, setCurrentCard] = useState('');

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <OfferCard key={offer.id} offer={offer} onMouseOver={() => setCurrentCard(offer.id)} onMouseLeave={() => setCurrentCard('')}/>)
      }
    </div>
  );
}

export default OfferList;
