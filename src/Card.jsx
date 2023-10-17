import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";
const Card = ({ country }) => {
  Card.propTypes = {
    country: PropTypes.object,
  };
  const { setCountryInfo } = useContext(DataContext);
  const navigate = useNavigate();
  const { officialName, population, continents, capital, flags } = country;

  const handleNavigate = (countryName) => {
    console.log("clicked!");
    setCountryInfo(country);
    navigate(`/About/${countryName}`);
  };

  return (
    <>
      <div
        className="flex justify-center sm:mb-10 xl:w-[21.2%] cursor-pointer"
        onClick={() => handleNavigate(officialName)}>
        <div className="flex flex-col bg-white dark:bg-[#2B3743] xl:w-full lg:w-[80%] md:w-[80%] sm:w-[85%] rounded-md shadow-lg hover:shadow-xl dark:hover:shadow-white/5 ">
          <img src={flags} alt="flag" className="rounded-t-md w-full h-full" />
          <div className="text-black dark:text-white flex flex-col items-start px-8 py-7">
            <span className="font-bold mb-5">{officialName}</span>
            <div className="flex font-bold mb-2">
              Population:{" "}
              <span className="font-light ml-2">
                {population.toLocaleString()}
              </span>
            </div>
            <div className="flex font-bold mb-2">
              Region: <span className="font-light ml-2">{continents}</span>
            </div>
            <div className="flex font-bold mb-2">
              Capital: <span className="font-light ml-2">{capital}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
