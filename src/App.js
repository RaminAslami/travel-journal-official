import "./App.css";
import Navbar from "./Components/Navbar";
import LocationCard from "./Components/LocationCard";
import data from "./data";

function App() {
  const LocationData = data.map((info) => {
    return (
      <LocationCard
        title={info.title}
        location={info.location}
        googleMapsUrl={info.googleMapsUrl}
        startDate={info.startDate}
        endDate={info.endDate}
        description={info.description}
        imageUrl={info.imageUrl}
      ></LocationCard>
    );
  });

  return (
    <div className="App">
      <Navbar></Navbar>
      {LocationData}
    </div>
  );
}

export default App;
