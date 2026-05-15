<<<<<<< HEAD
import MovieCard from '@/components/MovieCard';

const movies = [
  {
    id: 1,
    title: 'Interstellar',
    price: 45,
    image:
      'https://picsum.photos/300/400?random=1',
  },
  {
    id: 2,
    title: 'Batman',
    price: 50,
    image:
      'https://picsum.photos/300/400?random=2',
  },
  {
    id: 3,
    title: 'Inception',
    price: 55,
    image:
      'https://picsum.photos/300/400?random=3',
  },
];

function HomePage() {
  return (
    <section
      style={{
        padding: '2rem 0',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        <h1
          style={{
            fontSize: '4rem',
            marginBottom: '1rem',
          }}
        >
          CineSoilerS
        </h1>

        <p
          style={{
            color: '#d1d5db',
          }}
        >
          Las mejores películas en un solo lugar.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
        }}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
=======
function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">CineSpoilerS</h1>
    </div>
  )
}

export default HomePage
>>>>>>> feature/evidencias-naomi
