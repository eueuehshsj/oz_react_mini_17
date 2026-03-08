import MovieCard from "../components/MovieCard";
import MovieData from "../data/movieListData.json";

const Home = () => {
  return (
    <div className="flex">
      <div className="flex flex-1 flex-wrap gap-4 p-4 overflow-auto">
        {MovieData.results && MovieData.results.length > 0 ? (
          MovieData.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>
      <div className="flex-1 bg-green"></div>
    </div>
  );
};

export default Home;
