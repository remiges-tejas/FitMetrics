import { useState, useEffect } from "react";
import axios from "axios";

const BmiResults = () => {
  const [bmiResults, setBmiResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBmiResults = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get("http://localhost:8080/api/bmi/results");
      if (typeof response.data === "string") {
        // Handle message indicating no data
        setBmiResults([]);
      } else {
        setBmiResults(response.data);
      }
    } catch (error) {
      console.error("Error fetching BMI results:", error);
      alert("Error fetching BMI results.");
    } finally {
      setLoading(false); // Stop loading after fetching
    }
  };

  useEffect(() => {
    fetchBmiResults(); // Fetch results when component mounts or when refreshKey changes
  }, []); // Only run once on mount

  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-full mx-12 mt-10">
      <div className="my-3">
        <span className=" mr-5 underline text-lg font-bold mb-4 text-coral">
          BMI Results
        </span>
        <span className="text-teal-800">
          {" "}
          BMI STATUS :- -1 = UnderWeight | 0 = Normal | 1= OverWeight | 2= Obese
        </span>
      </div>

      {bmiResults.length === 0 ? (
        <p>No results available. Please upload a CSV file.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="border px-4 py-2 bg-teal-700 text-white">ID</th>
              <th className="border px-4 py-2 bg-teal-700 text-white">Name</th>
              <th className="border px-4 py-2 bg-teal-700 text-white">Phone</th>
              <th className="border px-4 py-2 bg-teal-700 text-white">
                Weight (kg)
              </th>
              <th className="border px-4 py-2 bg-teal-700 text-white">
                Height (cm)
              </th>
              <th className="border px-4 py-2 bg-green-700 text-white">BMI</th>
              <th className="border px-4 py-2 bg-green-700 text-white">
                BMI Status
              </th>
            </tr>
          </thead>
          <tbody>
            {bmiResults.map((result) => (
              <tr key={result.id}>
                <td className="border px-4 py-2">{result.id}</td>
                <td className="border px-4 py-2">{result.name}</td>
                <td className="border px-4 py-2">{result.phone}</td>
                <td className="border px-4 py-2">{result.weight}</td>
                <td className="border px-4 py-2">{result.height}</td>
                <td className="border px-4 py-2 text-coral font-semibold">
                  {result.bmi.toFixed(2)}
                </td>{" "}
                {/* Format to 2 decimal places */}
                <td className="border px-4 py-2 text-coral font-bold">
                  {result.bmiStatus}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BmiResults;
