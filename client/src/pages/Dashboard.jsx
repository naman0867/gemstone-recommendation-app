import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

const gemstoneImages = {
  Ruby: "/images/ruby.jpg",
  Emerald: "/images/emerald.jpg",
  Diamond: "/images/diamond.jpg",
  Pearl: "/images/pearl.jpg",
  "Blue Sapphire": "/images/blue-sapphire.jpg",
  "Yellow Sapphire": "/images/yellow-sapphire.jpg",
  "Red Coral": "/images/red-coral.jpg",
};

function Dashboard() {
  const [birthDate, setBirthDate] = useState("");
  const [purpose, setPurpose] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await API.post(
        "/recommendations",
        {
          birthDate,
          purpose,
        }
      );

      setResult(res.data.data);
    } catch (error) {
      console.log(error);
      alert("Failed to get recommendation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-gray-100 py-10 px-4">

        <div className="max-w-3xl mx-auto">

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h1 className="text-4xl font-bold text-center text-indigo-600">
              🔮 Humara Pandit
            </h1>

            <p className="text-center text-gray-600 mt-3 mb-8">
              Discover personalized gemstone recommendations based on your birth date and life goals.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label className="block font-medium mb-2">
                  Birth Date
                </label>

                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) =>
                    setBirthDate(e.target.value)
                  }
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Purpose
                </label>

                <select
                  value={purpose}
                  onChange={(e) =>
                    setPurpose(e.target.value)
                  }
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  required
                >
                  <option value="">
                    Select Purpose
                  </option>

                  <option value="career">
                    Career Growth
                  </option>

                  <option value="wealth">
                    Wealth & Prosperity
                  </option>

                  <option value="education">
                    Education
                  </option>

                  <option value="health">
                    Health
                  </option>

                  <option value="relationships">
                    Relationships
                  </option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
              >
                {loading
                  ? "Generating..."
                  : "Get Recommendation"}
              </button>
            </form>

          </div>

          {result && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8 text-center">

              <h2 className="text-2xl font-bold mb-6 text-indigo-600">
                Your Recommended Gemstone
              </h2>

              <img
                src={gemstoneImages[result.gemstone]}
                alt={result.gemstone}
                className="w-64 h-64 object-cover rounded-xl mx-auto shadow-md"
              />

              <h3 className="text-3xl font-bold mt-6">
                {result.gemstone}
              </h3>

              <p className="mt-3 text-lg">
                <strong>Zodiac Sign:</strong> {result.zodiac}
              </p>

              <p className="mt-4 text-gray-700">
                {result.explanation}
              </p>

            </div>
          )}

        </div>

      </div>
    </>
  );
}

export default Dashboard;