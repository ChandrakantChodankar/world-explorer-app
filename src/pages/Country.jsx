import { useEffect, useState } from "react";
import { getCountryData } from "../api/postApi";
import { CountryCard } from "../components/Layout/CountryCard";
import { Loader } from "../components/UI/Loader";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const searchCountry = (country) => {
    if (!search) return true;
    return country.name.common.toLowerCase().includes(search);
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  if (isLoading) return <Loader />;

  return (
    <main className="max-w-7xl mx-auto px-4">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-8">
        {filterCountries.length > 0 ? (
          filterCountries.map((curCountry) => (
            <CountryCard
              key={curCountry.cca3 || curCountry.name.common}
              data={curCountry}
            />
          ))
        ) : (
          <li className="col-span-full text-center text-gray-400 py-12">
            No countries found matching your criteria
          </li>
        )}
      </ul>
    </main>
  );
};

