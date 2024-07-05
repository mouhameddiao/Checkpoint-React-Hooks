import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css';
import { FaFilm } from 'react-icons/fa';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: '24H CHRONO',
      description: 'Cette série raconte les aventures de Jack bauer ( kiefer Sutherland ) un agent de la cellule antiterroriste de los angeles qui lutte contre des actes de terrorisme sur le territoire américain ...  24 heures chrono est une série totalement originale et novatrice qui a marquer histoire de la télévision dans les ...',
      posterURL: 'https://media.ouest-france.fr/v1/pictures/MjAyMTAxMmVmMWIxOTI4Mjk1ZmJkZGM4OTlhYmYwZWVkMTY5Zjk?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=914703c9ee085cc6dda5a33eefd1ae62f8c58f94b074be761695b5f27af41ba5',
      rating: 5,
    },
    {
      title: 'Young Sheldon',
      description: "La série est une préquelle dérivée de The Big Bang Theory qui se déroule à la fin des années 80 et au début des années 90 et suit l'enfant prodige Sheldon Cooper alors qu'il grandit avec sa famille dans l'est du Texas. Iain Armitage incarne Sheldon, aux côtés de Zoe Perry, Lance Barber, Montana Jordan, Raegan Revord et Annie Potts.",
      posterURL: 'https://m.media-amazon.com/images/I/710LgznyPxL.__AC_SX300_SY300_QL70_ML2_.jpg',

      rating: 4,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const addMovie = () => {
    const newMovie = {
      title: 'Game Of Thrones',
      description: 'Game of Thrones suit un grand nombre de personnages et des arcs narratifs entrelacés. Il se déroule principalement sur le continent fictif de Westeros, divisé en Sept Royaumes et en terres situées à l’extrême Nord au-delà du « Mur », un énorme mur de glace fortifié.',
      posterURL: 'https://www.hollywoodreporter.com/wp-content/uploads/2023/08/230822_GOTRPG_GTM_WebsiteKeyArt_NoLogo_1080x1080-copy.jpg?w=1296&h=730&crop=1&resize=681%2C383',
      rating: 3,
    };
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= (filterRating || 0)
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1><FaFilm /> Movie App</h1>
        <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
        <button onClick={addMovie}>Add Movie</button>
        <MovieList movies={filteredMovies} />
      </header>
    </div>
  );
};

export default App;
