import type { Movie } from '@/types/Movie';

interface Props {
  movie: Movie;
}

function MovieCard({ movie }: Props) {
  return (
    <article
      style={{
        backgroundColor: '#1f2937',
        borderRadius: '12px',
        overflow: 'hidden',
        padding: '1rem',
      }}
    >
      <img
        src={movie.image}
        alt={movie.title}
        style={{
          width: '100%',
          borderRadius: '8px',
          marginBottom: '1rem',
        }}
      />

      <h3>{movie.title}</h3>

      <p
        style={{
          margin: '0.5rem 0',
          color: '#60a5fa',
        }}
      >
        S/ {movie.price}
      </p>

      <button
        style={{
          width: '100%',
          padding: '0.8rem',
          border: 'none',
          borderRadius: '8px',
          backgroundColor: '#2563eb',
          color: 'white',
        }}
      >
        Comprar
      </button>
    </article>
  );
}

export default MovieCard;