import React, { useState, useEffect } from 'react';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('//rickandmortyapi.com/api/character');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCharacters(data.results); // Assuming 'results' contains the array of characters
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will run once after the initial render

  return (
    <div>
      <h2>Rick and Morty Characters</h2>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            {character.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;