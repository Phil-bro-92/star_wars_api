import { useState, useEffect } from "react";
import Header from "../components/Header";
import Selector from "../components/Selector";
import PeopleList from "../components/PeopleList";
import PlanetList from "../components/PlanetList";
import SpeciesList from "../components/SpeciesList";
import VehiclesList from "../components/VehiclesList";
import StarshipList from "../components/StarshipList";
import PersonDetail from "../components/PersonDetail";
import PlanetDetail from "../components/PlanetDetail";
import SpeciesDetail from "../components/SpeciesDetail";
import VehicleDetail from "../components/VehicleDetail";
import StarshipDetail from "../components/StarshipDetail";

const StarWarsBox = () => {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [species, setSpecies] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [starships, setStarships] = useState([]);
  const [selectedStarship, setSelectedStarship] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    fetchPeople();
    fetchPlanets();
    fetchSpecies();
    fetchVehicles();
    fetchStarships();
  }, []);

  const fetchPeople = () => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => setPeople(data.results));
  };
  const fetchPlanets = () => {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((data) => setPlanets(data.results));
  };
  const fetchSpecies = () => {
    fetch("https://swapi.dev/api/species/")
      .then((response) => response.json())
      .then((data) => setSpecies(data.results));
  };
  const fetchVehicles = () => {
    fetch("https://swapi.dev/api/vehicles/")
      .then((response) => response.json())
      .then((data) => setVehicles(data.results));
  };
  const fetchStarships = () => {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((data) => setStarships(data.results));
  };
  const getSelectedCategory = (category) => {
    switch (category) {
      case "0":
        setSelectedCategory(people);
        break;
      case "1":
        setSelectedCategory(planets);
        break;
      case "2":
        setSelectedCategory(species);
        break;
      case "3":
        setSelectedCategory(vehicles);
        break;
      case "4":
        setSelectedCategory(starships);
        break;
      default:
        setSelectedCategory([]);
        break;
    }
  };

  const getPerson = (person) => {
    setSelectedPerson(people[person]);
  };

  const getPlanet = (planet) => {
    setSelectedPlanet(planets[planet]);
  };

  const getSpecies = (spec) => {
    setSelectedSpecies(species[spec]);
  };

  const getVehicle = (vehicle) => {
    setSelectedVehicle(vehicles[vehicle]);
  };

  const getStarship = (starship) => {
    setSelectedStarship(starships[starship]);
  };

  const resetSelected = () => {
    setSelectedPerson(null);
    setSelectedPlanet(null);
    setSelectedSpecies(null);
    setSelectedVehicle(null);
    setSelectedStarship(null);
  };
  return (
    <>
      <Header />
      {people && planets && species && vehicles && starships ? (
        <Selector
          getSelectedCategory={getSelectedCategory}
          resetSelected={resetSelected}
        />
      ) : null}
      <img
        src="https://media.istockphoto.com/id/516212038/photo/group-of-five-various-lego-star-wars-mini-characters-isolated.jpg?s=612x612&w=0&k=20&c=38SKOIrx0xothXPgwLU0YedcNzTY4TZsQP-nDw2kL5g="
        alt="Star Wars Lego Characters"
      />

      {selectedCategory === people && !selectedPerson ? (
        <PeopleList people={selectedCategory} getPerson={getPerson} />
      ) : null}
      {selectedCategory === planets && !selectedPlanet ? (
        <PlanetList planets={selectedCategory} getPlanet={getPlanet} />
      ) : null}
      {selectedCategory === species && !selectedSpecies ? (
        <SpeciesList species={selectedCategory} getSpecies={getSpecies} />
      ) : null}
      {selectedCategory === vehicles && !selectedVehicle ? (
        <VehiclesList vehicles={selectedCategory} getVehicle={getVehicle} />
      ) : null}
      {selectedCategory === starships && !selectedStarship ? (
        <StarshipList starships={selectedCategory} getStarship={getStarship} />
      ) : null}
      {selectedPerson ? <PersonDetail person={selectedPerson} /> : null}
      {selectedPlanet ? <PlanetDetail planet={selectedPlanet} /> : null}
      {selectedSpecies ? <SpeciesDetail species={selectedSpecies} /> : null}
      {selectedVehicle ? <VehicleDetail vehicle={selectedVehicle} /> : null}
      {selectedStarship ? <StarshipDetail starship={selectedStarship} /> : null}
    </>
  );
};

export default StarWarsBox;
