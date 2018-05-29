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
      <div className="List">
        List<br/>
        {list.map(p => p.name).join(', ')}
      </div>
    )
  }
}

export default List
