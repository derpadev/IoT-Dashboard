import { Navigate, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="">
      <section>
        <div className="flex flex-col justify-center min-h-screen items-center space-y-4">
          <h1 className="text-6xl font-extrabold text-white text-center">
            Welcome to SmartSpace <br /> Your Real-Time IoT Dashboard
          </h1>
          <p className="text-2xl text-white font-normal text-center max-w-7xl mt-2">
            Monitor your environment in real time. SmartSpace shows temperature,
            air quality, and occupancy through a clean, interactive dashboard
            built with modern web technologies.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-700 px-6 py-2.5 rounded-lg hover:bg-blue-800 text-white font-semibold active:scale-105 mt-8"
          >
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
};
