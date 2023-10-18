import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import { useEffect } from "react";
import { useContext } from "react";
import DataContext from "./context/DataContext";
const Body = () => {
  const {
    countries,
    windowWidth,
    setWindowWidth,
    chunkSize,
    setChunkSize,
    searchValue,
    setSearchValue,
    filteredOutput,
    setFilteredOutput,
  } = useContext(DataContext);

  useEffect(() => {
    const handleWidthResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleChunkSize = (width) => {
      return width >= 1440
        ? setChunkSize(4)
        : width >= 1000
        ? setChunkSize(3)
        : width >= 600
        ? setChunkSize(2)
        : setChunkSize(1);
    };
    window.addEventListener("resize", handleWidthResize);

    handleChunkSize(windowWidth);

    return () => {
      window.removeEventListener("resize", handleWidthResize);
      window.removeEventListener("changeChunk", handleChunkSize);
    };
  }, [windowWidth, searchValue, setChunkSize, setWindowWidth]);

  useEffect(() => {
    setFilteredOutput(countries);
  }, [countries, setFilteredOutput]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const filteredValues = countries.filter((country) => {
      return (
        country.officialName
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        country.continents[0].toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setFilteredOutput(filteredValues);
  };

  /* Optional challenge */
  /* - Add a slider component that controls the number of population
       then display the countries with corresponding range of populations */

  const chunkArray = (array, chunkSize) => {
    return Array.from(
      { length: Math.ceil(array.length / chunkSize) },
      (_, index) =>
        array.slice(index * chunkSize, index * chunkSize + chunkSize)
    );
  };

  const chunks = chunkArray(filteredOutput, chunkSize);

  return (
    <>
      <div className="bg-[#FAFAFA] dark:bg-[#202D36]">
        <div className=" xl:px-32 md:px-10 sm:px-6 xl:py-10 sm:py-5 flex flex-col xl:flex-row items-start ">
          <div className="relative flex items-left xl:w-1/2 ">
            <input
              type="text"
              className="w-full rounded-md dark:text-white dark:bg-[#2B3743] p-5 pl-12 shadow-md"
              placeholder="Search"
              onChange={(e) => handleSearch(e)}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 ">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-black dark:text-gray-400"
              />
            </div>
          </div>
          <button
            className="xl:w-[15%] lg:w-[20%] md:w-[40%] sm:w-[55%] bg-white dark:bg-[#2B3743] text-black dark:text-gray-400 px-8 py-5 rounded-md mt-5 
        xl:mt-0 xl:ml-auto text-left flex items-center justify-between shadow-md">
            <span className="text-sm">Filter by Region</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <div className="flex-col items-center py-8 px-10">
          {chunks.map((chunk, index) => (
            <div
              key={index}
              className="flex justify-center xl:mb-16 xl:space-x-8">
              {chunk.map((country) => (
                <Card key={country.id} country={country} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
