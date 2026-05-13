function HomePage() {
  return (
    <section
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: '1.5rem',
      }}
    >
      <h1
        style={{
          fontSize: '4rem',
        }}
      >
        CineSoilerS
      </h1>

      <p
        style={{
          fontSize: '1.2rem',
          maxWidth: '600px',
          color: '#d1d5db',
        }}
      >
        Descubre las mejores películas, colecciones y experiencias
        cinematográficas desde un solo lugar.
      </p>

      <button
        style={{
          padding: '1rem 2rem',
          border: 'none',
          borderRadius: '8px',
          backgroundColor: '#2563eb',
          color: 'white',
          fontSize: '1rem',
        }}
      >
        Explorar películas
      </button>
    </section>
  );
}

export default HomePage;