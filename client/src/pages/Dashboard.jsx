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

      <div className="min-h-screen bg-gray-100 p-10">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">

          <h1 className="text-4xl font-bold text-center mb-2">
            🔮 Humara Pandit
          </h1>

          <p className="text-center text-gray-600 mb-8">
            Get personalized gemstone recommendations based on your birth date and purpose.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block mb-2 font-medium">
                Birth Date
              </label>

              <input
                type="date"
                value={birthDate}
                onChange={(e) =>
                  setBirthDate(e.target.value)
                }
                className="w-full border p-3 rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Purpose
              </label>

              <select
                value={purpose}
                onChange={(e) =>
                  setPurpose(e.target.value)
                }
                className="w-full border p-3 rounded"
                required
              >
                <option value="">
                  Select Purpose
                </option>

                <option value="career">
                  Career
                </option>

                <option value="wealth">
                  Wealth
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
              className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700"
            >
              {loading
                ? "Generating..."
                : "Get Recommendation"}
            </button>
          </form>

          {result && (
            <div className="mt-10 border rounded-xl p-6 shadow bg-gray-50 text-center">

              <img
                src={
                  gemstoneImages[
                    result.gemstone
                  ]
                }
                alt={result.gemstone}
                className="w-52 h-52 object-cover rounded-lg mx-auto mb-4"
              />

              <h2 className="text-3xl font-bold text-indigo-600">
                {result.gemstone}
              </h2>

              <p className="mt-3 text-lg">
                <strong>
                  Zodiac:
                </strong>{" "}
                {result.zodiac}
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