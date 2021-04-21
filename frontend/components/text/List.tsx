import React from 'react';

interface Props {
  items: string[];
  fontColor: string;
}

const List: React.FunctionComponent<Props> = ({ items, fontColor = 'black' }) => (
  <ul className="list">
    {items.map((item) => (
      <li className={`list__item font-color-${fontColor}`}>{item}</li>
    ))}
  </ul>
);

export { List };
