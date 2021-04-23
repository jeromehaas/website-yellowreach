import React, { useState, useEffect } from 'react';
import { H3, H4, P } from 'components/text/Text';

const reviews = [
  {
    id: 1,
    quote: 'Spannend war, dass wir beim Design mitbestimmen konnten. Ausserdem legten wir Wert auf einen Schweizer Lieferanten. Das garantiert uns auch die langjährige Nachlieferung',
    author: 'Jérôme Haas',
    title: 'Frontend Developer',
  },
  {
    id: 2,
    quote: 'Unsere Wünsche und Anliegen wurden kundennah berücksichtigt. Die hohe Zufriedenheit der Mitarbeitenden, die den Tragekomfort loben, bestätigt den Entscheid, die Arcmedia AG als Partner zu wählen.',
    author: 'Max Muster',
    title: 'Fullstack Developer',
  },
  {
    id: 3,
    quote: 'Wir fühlten uns bereits bei der Erstberatung komplett verstanden, denn wir konnten problemlos unsere sehr individuellen Bedürfnisse anbringen und nachhaltig abdecken.',
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
