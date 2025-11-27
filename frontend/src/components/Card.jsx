import React, { useState, useEffect } from 'react';
import axios from 'axios';
import pokemonlogo from "../assets/ball.png"

const PokemonFetcher = () => {
    const [cardData, setCardData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const getalldata = async () => {
        try {
            const res = await axios.get('http://localhost:5000/v1/pokemon/');
            const pokemonList = res.data.data;

            if (!pokemonList || pokemonList.length === 0) {
                console.log('No data found');
                setError('No Pokémon data was returned from the API.');
                setCardData([]);
            } else {
                setCardData([pokemonList]);
            }
        } catch (err) {
            console.error('Error fetching data:', err);
            setError('Failed to fetch Pokémon data. Is the server running?');
        } finally {
            setLoading(false);
        }
    };
    console.log(cardData)


    useEffect(() => {
        getalldata();
    }, []);


    if (loading) {
        return <p>Loading Pokémon data...</p>;
    }

    if (error) {
        return <p className='text-red-400'>Error: {error}</p>;
    }

    if (!cardData || cardData.length === 0) {
        return <p>No Pokémon cards available to display.</p>;
    }

    return (
        <div>
            <div className=''>
                <ul>
                    {cardData.map((pokemon, index) => (
                        <div className='bg-green-500 w-60 h-60 flex flex-col gap-8 rounded-xl p-1'>
                            <div className='flex justify-end text-white font-semibold' key={index}>##{pokemon._id}</div>
                            <div className='flex justify-center'>
                                <img className='w-12 flex justify-center' alt="pokemon" src={pokemonlogo} />
                                {/* <img src="" alt="">{pokemon.thumbnail}</img> */}
                            </div>
                            <div className='bg-white h-full rounded-xl'>
                                <h2 className='font-bold text-green-500 flex justify-center'>Bulbasur</h2>
                                <div className='flex justify-around mt-5'>
                                    <label className='rounded-3xl text-white justify-center flex bg-green-500 p-2 font-bold w-20 text-sm'>Grass</label>
                                    <label className='rounded-3xl text-white justify-center flex bg-purple-500 p-2 font-bold w-20 text-sm'>Poison</label>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>

            {/* <h1>Pokémon Cards</h1>
            <ul>
                {cardData.map((pokemon) => (
                    <div className='bg-green-500 w-full h-full'>
                        <li key={pokemon.id || pokemon.name}>
                            {pokemon.name}
                        </li>
                    </div>
                ))}
            </ul> */}
        </div>
    );
};

export default PokemonFetcher;
