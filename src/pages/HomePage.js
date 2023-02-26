import "../App.css";
import Header from "../components/Header";
import Listings from "../components/Listings";

function HomePage() {
  return (
    <div className="App">
        <Header />
        <div class="pl-20 pt-10">
          <Listings />

        </div>
    </div>
  );
}

export default HomePage;
