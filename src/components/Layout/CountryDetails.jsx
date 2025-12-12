import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndividualData } from "../../api/postApi";
import { Loader } from "../UI/Loader";
import { ErrorPage } from "../../pages/ErrorPage";

export const CountryDetails = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState();

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        setIsLoading(true);
        const res = await getCountryIndividualData(id);

        if (res.status === 200 && res.data?.[0]) {
          setCountry(res.data[0]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountryDetails();
  }, [id]);

  if (isLoading) return <Loader />;

  return (
    <section className="max-w-6xl mx-auto m-10 px-4">
      <div className="rounded-3xl border-2 border-gray-700 bg-gradient-to-br from-[#080509] via-[#1a171c] to-[#080509] p-8 md:p-12">
        {country && (
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex items-center justify-center">
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-4">
              <h1 className="font-bold text-3xl md:text-4xl mb-6">
                {country.name.official}
              </h1>

              <dl className="space-y-3 text-gray-200">
                <div>
                  <dt className="inline font-semibold">
                    Native Names:
                    <dd className="inline">
                      {Object.keys(country.name.nativeName)
                        .map((name) => country.name.nativeName[name].common)
                        .join(", ")}
                    </dd>
                  </dt>
                </div>

                <div>
                  <dt className="inline font-semibold">Capital: </dt>
                  <dd className="inline">{country.capital?.[0] || "N/A"}</dd>
                </div>

                <div>
                  <dt className="inline font-semibold">Population: </dt>
                  <dd className="inline">
                    {country.population.toLocaleString()}
                  </dd>
                </div>

                <div>
                  <dt className="inline font-semibold">Region: </dt>
                  <dd className="inline">{country.region}</dd>
                </div>

                <div>
                  <dt className="inline font-semibold">Sub Region: </dt>
                  <dd className="inline">{country.subregion}</dd>
                </div>

                <div>
                  <dt className="inline font-semibold">Top Level Domain: </dt>
                  <dd className="inline">{country.tld[0]}</dd>
                </div>

                <div>
                  <dt className="inline font-semibold">Currency: </dt>
                  <dd className="inline">
                    {Object.keys(country.currencies)
                      .map((money) => country.currencies[money].name)
                      .join(", ")}
                  </dd>
                </div>

                <div>
                  <dt className="inline font-semibold">Languages: </dt>
                  <dd className="inline">
                    {Object.values(country.languages).join(", ")}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <NavLink to="/country">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Back to Countries
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
