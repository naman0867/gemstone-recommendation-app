import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-indigo-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">
        🔮 Humara Pandit
      </h1>

      <div className="flex gap-4">
        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/history">
          History
        </Link>

        <button onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;