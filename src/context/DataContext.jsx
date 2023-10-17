import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/CountriesApi";

const DataContext = createContext({});

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [chunkSize, setChunkSize] = useState(4);
  const [searchValue, setSearchValue] = useState("");
  const [filteredOutput, setFilteredOutput] = useState([]);
  const [countryInfo, setCountryInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const countryName = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("all");
        setCountries(
          response.data.map((item) => ({
            officialName: item.name.official,
            commonName: item.name.common,
            population: item.population,
            continents: item.continents,
            subregion: item.subregion,
            capital: item.capital,
            tld: item.tld,
            currencies: item.currencies,
            languages: item.languages,
            flags: item.flags.png,
            flagsSvg: item.flags.svg,
          }))
        );
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  return (
    <DataContext.Provider
      value={{
        countries,
        windowWidth,
        setWindowWidth,
        chunkSize,
        setChunkSize,
        searchValue,
        setSearchValue,
        filteredOutput,
        setFilteredOutput,
        countryInfo,
        setCountryInfo,
        loading,
        setLoading,
        countryName,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
