import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";
const CountryDetail = () => {
  const { countryInfo } = useContext(DataContext);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  //TODO:
  //Extra: Learn how to display the border countries
  return (
    <>
      <div className="flex flex-col xl:px-72 md:px-10 sm:px-6 xl:py-24 sm:py-5 dark:text-white text-black">
        <div
          className="dark:bg-[#2B3743] w-36 h-12 flex justify-center items-center xl:mb-24 sm:mb-16 shadow-md cursor-pointer dark:hover:shadow-white/5"
          onClick={() => handleNavigate()}>
          Back
        </div>
        <div className="flex lg:flex-row sm:flex-col xl:gap-28 lg:gap-8 md:items-center ">
          <div>
            <img
              src={countryInfo.flagsSvg}
              alt="flag"
              className="w-screen shadow-lg"
            />
          </div>
          <div className="w-max dark:text-white text-black py-10 ">
            <div className="flex font-extrabold xl:text-5xl sm:text-xl mb-10 ">
              {countryInfo.officialName}
            </div>
            <div className="flex md:flex-row flex-col xl:gap-64 lg:gap-10 md:gap-48 w-max ">
              <div>
                <div className="flex font-medium mb-5">
                  Common Name:
                  <span className="font-light ml-2">
                    {countryInfo.commonName}
                  </span>
                </div>
                <div className="flex font-medium mb-5">
                  Population:
                  <span className="font-light ml-2">
                    {countryInfo.population.toLocaleString()}
                  </span>
                </div>
                <div className="flex font-medium mb-5">
                  Region:
                  <span className="font-light ml-2">
                    {countryInfo.continents}
                  </span>
                </div>
                <div className="flex font-medium mb-5">
                  Subregion:
                  <span className="font-light ml-2">
                    {countryInfo.subregion}
                  </span>
                </div>
                <div className="flex font-medium mb-5">
                  Capital:
                  <span className="font-light ml-2">{countryInfo.capital}</span>
                </div>
              </div>
              <div>
                <div className="flex font-medium mb-5">
                  Top Level Domain:
                  <span className="font-light ml-2">{countryInfo.tld}</span>
                </div>
                <div className="flex font-medium mb-5">
                  Currencies:{" "}
                  <span className="font-light ml-2">
                    {Object.keys(countryInfo.currencies).join(", ")}
                  </span>
                </div>
                <div className="flex font-medium mb-5">
                  Languages:{" "}
                  <span className="font-light ml-2">
                    {Object.values(countryInfo.languages).join(", ")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
