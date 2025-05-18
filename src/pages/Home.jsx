// src/pages/Home.jsx
import { useState } from 'react';
import TinderCard from 'react-tinder-card';

const dummyMovies = [
  { id: 1, title: 'Inception', genre: 'Sci-Fi' },
  { id: 2, title: 'Breaking Bad', genre: 'Crime' },
  { id: 3, title: 'Interstellar', genre: 'Sci-Fi' },
];

export default function Home() {
  const [movies, setMovies] = useState(dummyMovies);

  const onSwipe = (direction, movie) => {
    if (direction === 'right') {
      console.log(`✅ Added to watchlist: ${movie.title}`);
    } else if (direction === 'left') {
      console.log(`❌ Disliked: ${movie.title}`);
    }
  };

  const markWatched = (movieId) => {
    console.log(`👀 Watched: ${movieId}`);
  };

  const addToWatchlist = (movieId) => {
    console.log(`📌 Added to watchlist: ${movieId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      {movies.map((movie) => (
        <TinderCard
          key={movie.id}
          onSwipe={(dir) => onSwipe(dir, movie)}
          preventSwipe={['up', 'down']}
        >
          <div className="bg-white shadow-xl rounded-2xl p-6 w-72 h-96 flex flex-col justify-between mb-6">
            <h2 className="text-xl font-semibold text-center">{movie.title}</h2>
            <p className="text-center text-sm text-gray-500">{movie.genre}</p>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => markWatched(movie.id)}
                className="px-3 py-2 text-xs bg-gray-200 rounded-lg"
              >
                Watched
              </button>
              <button
                onClick={() => addToWatchlist(movie.id)}
                className="px-3 py-2 text-xs bg-purple-500 text-white rounded-lg"
              >
                + Watchlist
              </button>
            </div>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}
