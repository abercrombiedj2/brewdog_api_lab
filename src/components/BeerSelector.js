import React from 'react';

const BeerSelector = ({beers, onBeerSelected}) => {

    const handleChange = function(event){
        onBeerSelected(beers[event.target.value])
    }

    const beerOptions = beers.map((beer, index) => {
        return <option value={index} key={index}>{beer.name}</option>
    })

    return(
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Select a beer</option>
            {beerOptions}
        </select>
    )

}

export default BeerSelector;