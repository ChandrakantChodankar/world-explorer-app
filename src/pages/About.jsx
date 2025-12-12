import { Card } from "../components/UI/Card";
import countryData from "../api/countryData.json";
export const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-8">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-8">
        Here are the Interesting Facts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {countryData.map((curData) => {
          return <Card key={curData.id} data={curData} />;
        })}
      </div>
    </div>
  );
};
