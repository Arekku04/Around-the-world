import { DataProvider } from "./context/DataContext";
import Nav from "./Nav";
import Body from "./Body";
import CountryDetail from "./CountryDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  /* TODO:
  - Implement dark mode toggle
  */
  return (
    <>
      <DataProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="About/:countryName" element={<CountryDetail />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
