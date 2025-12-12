export const Card = ({ data }) => {
  const { countryName, capital, population, interestingFact } = data;
  return (
    <div className="rounded-[45px] border-2 border-gray-700 bg-gradient-to-br from-[#080509] via-[#1a171c] to-[#080509] p-6 max-w-sm">
      <p className="font-bold text-xl pb-2">{countryName}</p>

      <p className="pb-2">
        Capital : <span className="text-gray-300">{capital}</span>
      </p>
      <p className="pb-2">
        Population :{" "}
        <span className="text-gray-300">{population.toLocaleString()}</span>
      </p>
      <p className="pb-2">
        Interesting Fact :{" "}
        <span className="text-gray-300">{interestingFact}</span>
      </p>
    </div>
  );
};
