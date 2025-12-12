import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-20 max-w-7xl mx-auto p-8 py-16">
      <div className="order-2 lg:order-1 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Explore the World, One Country at a Time.
        </h1>

        <div className="space-y-4 text-gray-300 text-base lg:text-lg leading-relaxed mb-8">
          <p>
            The world is a diverse, ever-changing place filled with people,
            ideas, nature, and stories, where beauty and struggle coexist.
          </p>

          <p>
            It grows through moments of joy, conflict, discovery, and
            connection, shaped by countless choices and experiences.
          </p>
          <p>
            Every day adds new chapters to our shared future, reminding us how
            deeply intertwined our lives and hopes truly are.
          </p>
        </div>

        <NavLink
          to="/country"
          className="inline-flex items-center gap-3 self-start bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors group"
        >
          Explore here
          <FaLongArrowAltRight className="group-hover:translate-x-1 transition-transform" />
        </NavLink>
      </div>

      <div className="order-1 lg:order-2 flex items-center justify-center">
        <img
          src="/images/world.png"
          alt="Illustration of world map"
          className="w-full max-w-lg h-auto object-contain"
        />
      </div>
    </section>
  );
};
