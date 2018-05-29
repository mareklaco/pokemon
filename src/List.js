import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types'

/**
 * Klikaci zoznam pokemonov
 *
 * Dostane zoznam pokemonov, meno aktualne zvoleneho pokemona a onClick handler.
 * Zobrazi klikaci zoznam pokemonov, a posle hore meno kliknuteho pokemona.
 */
class List extends PureComponent {

  static propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    onClick: PropTypes.func.isRequired,
    selectedPokemnonName: PropTypes.string,
  }

  render() {
    const {list} = this.props
    return (
      <ul className="List">
        {list.map(p => (
          <li
            key={p.name}
            onClick={() => this.props.onClick(p.name)}
            className={"List__Item" + (p.name === this.props.selectedPokemnonName) ? 'List__Item--selected' : ''}
          >
            {(p.name === this.props.selectedPokemnonName) ? '[X] ' : '[ ] '}
            {p.name}
          </li>
        ))}
      </ul>
    )
  }
}

export default List
