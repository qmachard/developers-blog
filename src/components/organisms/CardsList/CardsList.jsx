import React from "react";
import * as PropTypes from "prop-types";

import './CardsList.scss';

/**
 * CardsList Component
 */
class CardsList extends React.PureComponent {
  render() {
    const { title, children } = this.props;

    return (
      <section className="cards-list">
        <h1 className="cards-list_title title-1">{title}</h1>
        <ul className="row">
          {React.Children.map(children, card => (
            <li className="cards-list_item col-xs-12 col-sm-6 col-lg-4">
              {card}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

CardsList.propTypes = {
  title: PropTypes.string.isRequired,
};

CardsList.defaultProps = {};

export default CardsList;
