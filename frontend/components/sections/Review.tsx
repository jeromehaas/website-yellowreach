import React, { useState, useEffect } from 'react';
import { H3, H4, P } from 'components/text/Text';

const reviews = [
  {
    id: 1,
    quote: 'We already felt completely understood during the initial consultation, as we were able to easily address and sustainably cover our very individual needs.',
    author: 'Edward Eddingson',
    title: 'Frontend Developer',
  },
  {
    id: 2,
    quote: 'It was exciting that we could have a say in the design. We also attached importance to a Swiss supplier. This also guarantees us many years of subsequent delivery.',
    author: 'Max Muster',
    title: 'Fullstack Developer',
  },
  {
    id: 3,
    quote: 'Our wishes and concerns were taken into account in a customer-oriented manner. The high level of satisfaction of the employees, who praise the comfort of use, confirms the decision to choose yellowreach as the service for sending emails.',
    author: 'Heinz Hütter',
    title: 'Project Owner',
  },

];

interface Props { }

const Review: React.FunctionComponent<Props> = () => {

  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    counter === reviews.length - 1 ? setCounter(0) : setCounter(counter + 1);
  };

  return (
    <div id="review" className="section">
      <div className="section__wrapper review__wrapper background-color-grey" onClick={updateCounter}>
        <H3 className="review__title" textAlign="center">Reviews</H3>
        <P className="review__quote" textAlign="center">{reviews[counter].quote}</P>
        <H4 className="review__author" textAlign="center">{reviews[counter].author}</H4>
        <P className="review__company" textAlign="center">{reviews[counter].title}</P>
      </div>
    </div>
  );
};

export { Review };
