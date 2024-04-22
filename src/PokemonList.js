import React from 'react'

const PokemonList = ({ pokemon }) => {
    return (
        <div>
            {pokemon.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
}

export default PokemonList