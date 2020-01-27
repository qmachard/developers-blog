import * as React from 'react';

import './CardsList.scss';

type CardsListProps = {
  title: string;
};

/**
 * CardsList Component
 */
export const CardsList: React.FC<CardsListProps> = ({ title, children }) => (
  <section className="cards-list">
    <h1 className="cards-list_title title-1">{title}</h1>
    <ul className="row">
      {React.Children.map(children, card => (
        <li className="cards-list_item col-xs-12 col-sm-6 col-lg-4">{card}</li>
      ))}
    </ul>
  </section>
);
