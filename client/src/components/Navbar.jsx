import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold text-white">
            🔮 Humara Pandit
          </h1>

          <p className="text-indigo-100 text-sm">
            Personalized Gemstone Recommendations
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link
            to="/dashboard"
            className="text-white hover:text-indigo-200 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/history"
            className="text-white hover:text-indigo-200 transition"
          >
            History
          </Link>

          <button
            onClick={logout}
            className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
          >
            Logout
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;