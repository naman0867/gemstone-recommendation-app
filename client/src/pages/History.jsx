import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function History() {
  const [history, setHistory] = useState([]);

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
    }
  };

  return (
    <>
      <Navbar />

      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6">
          Recommendation History
        </h1>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">Zodiac</th>
              <th className="p-3">Gemstone</th>
              <th className="p-3">Purpose</th>
            </tr>
          </thead>

          <tbody>
            {history.map((item) => (
              <tr key={item._id}>
                <td className="p-3 border">
                  {item.zodiac}
                </td>

                <td className="p-3 border">
                  {item.gemstone}
                </td>

                <td className="p-3 border">
                  {item.purpose}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default History;