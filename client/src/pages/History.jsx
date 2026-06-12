import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await API.get(
        "/recommendations/history"
      );

      setHistory(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg">

          <h1 className="text-4xl font-bold text-center mb-2">
            📜 Recommendation History
          </h1>

          <p className="text-center text-gray-600 mb-8">
            View all your previous gemstone recommendations
          </p>

          {loading ? (
            <div className="text-center py-10">
              Loading...
            </div>
          ) : history.length === 0 ? (
            <div className="text-center py-10">
              <h2 className="text-2xl font-semibold">
                No Recommendations Yet
              </h2>

              <p className="text-gray-500 mt-2">
                Generate your first gemstone recommendation from the Dashboard.
              </p>
            </div>
          ) : (
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="p-3">
                    Zodiac
                  </th>

                  <th className="p-3">
                    Gemstone
                  </th>

                  <th className="p-3">
                    Purpose
                  </th>

                  <th className="p-3">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {history.map((item) => (
                  <tr
                    key={item._id}
                    className="text-center border-b"
                  >
                    <td className="p-3">
                      {item.zodiac}
                    </td>

                    <td className="p-3 font-semibold text-indigo-600">
                      {item.gemstone}
                    </td>

                    <td className="p-3">
                      {item.purpose}
                    </td>

                    <td className="p-3">
                      {new Date(
                        item.createdAt
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

        </div>
      </div>
    </>
  );
}

export default History;