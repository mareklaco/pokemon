import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types'

/**
 * Jeden pokemon
 *
 * Dostane data jedneho pomemona, toho zobrazi.
 */
class Pokemon extends PureComponent {

  static propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
    }).isRequired
  }

  render() {
    const {pokemon} = this.props
    return (
      <div className="Pokemon">
        Pokemon<br/>
        name: {pokemon.name}<br/>
        imageUrl: {pokemon.imageUrl}<br/>
      </div>
    )
  }
}

export default Pokemon
