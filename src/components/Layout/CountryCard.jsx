import { NavLink } from "react-router-dom";

export const CountryCard = ({ data }) => {
  const { flags, name, population, region, capital } = data;
  return (
    <li className="rounded-[45px] border-2 border-gray-700 bg-gradient-to-br from-[#080509] via-[#1a171c] to-[#080509] p-6 max-w-sm">
      <div className="flex items-center justify-center mb-4">
        <img
          src={flags.svg}
          alt={flags.alt || `Flag of ${name.common}`}
          className="h-32 w-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="font-bold text-2xl pb-3 truncate">{name.common}</h3>

        <dl className="space-y-2 text-sm">
          <div>
            <dt className="inline">Capital:</dt>
            <dd className="inline font-bold">{capital[0] || "N/A"}</dd>
          </div>

          <div>
            <dt className="inline">Region: </dt>
            <dd className="inline font-bold">{region}</dd>
          </div>

          <div>
            <dt className="inline">Population: </dt>
            <dd className="inline font-bold">{population.toLocaleString()}</dd>
          </div>
        </dl>

        <NavLink to={`/country/${name.common}`}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm mt-4 w-full">
            Read More
          </button>
        </NavLink>
      </div>
    </li>
  );
};
