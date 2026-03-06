import "./Home.scss";
import MovieCard from "../components/movieCard";

const Home = () => {
  return (
    <div className="container">
      <div className="head">
        <div className="title">오즈 시네마</div>
      </div>
      <div className="body">
        <MovieCard />
      </div>
    </div>
  );
};

export default Home;
