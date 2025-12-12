export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  setCountries,
  countries,
}) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const sortCountries = (order) => {
    const sorted = [...countries].sort((a, b) => {
      return order === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sorted);
  };

  return (
    <section className="flex max-md:flex-col gap-4 md:justify-between p-8">
      <div className="flex-1 max-w-md">
        <label htmlFor="country-search" className="sr-only">
          Search Countries
        </label>
        <input
          id="country-search"
          type="text"
          placeholder="Search countries..."
          value={search}
          onChange={handleSearch}
          className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => sortCountries("asc")}
          className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
          aria-label="Sort ascending"
        >
          Asc
        </button>

        <button
          onClick={() => sortCountries("desc")}
          className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
          aria-label="Sort descending"
        >
          Desc
        </button>
      </div>

      <div className="shrink-0">
        <label htmlFor="region-filter" className="sr-only">
          Filter by Region
        </label>
        <select
          id="region-filter"
          value={filter}
          onChange={handleFilter}
          className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
