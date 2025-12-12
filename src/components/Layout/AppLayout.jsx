import { Outlet } from "react-router-dom";
import { Footer } from "../UI/Footer";
import { Header } from "../UI/Header";

export const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
