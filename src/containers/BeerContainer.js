import React, { useState, useEffect } from 'react';
import BeerDetail from '../components/BeerDetail';
import BeerSelector from '../components/BeerSelector';
import FavouriteBeers from '../components/FavouriteBeers';

const BeerContainer = () => {

    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);

    useEffect(() => {
        getBeers();
    }, []);

    const addToFavourites = function (beerToUpdate) {
        const updatedBeers = beers.map((beer) => {
            if (beer.name === beerToUpdate.name){
                beer.favourite = true;
            }
        return beer;
        })
        setBeers(updatedBeers);
    }

    const getBeers = function () {
        fetch('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(beers => setBeers(beers));
    }

    const onBeerSelected = function (beer) {
        setSelectedBeer(beer);
    }

    return (
        <div>
            <BeerSelector beers={beers} onBeerSelected={onBeerSelected} />
            <FavouriteBeers beers={beers} />
            {selectedBeer ? <BeerDetail beer={selectedBeer} addToFavourites={addToFavourites} /> : null}
        </div>
    )

}

export default BeerContainer;