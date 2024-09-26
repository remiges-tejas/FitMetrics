import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const FileUpload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataExists, setDataExists] = useState(false); // Track if data exists

  useEffect(() => {
    const checkExistingData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/bmi/results");
        if (typeof response.data !== "string") {
          setDataExists(true); // Data exists if response is not a string
        }
      } catch (error) {
        console.error("Error checking existing data:", error);
      }
    };

    checkExistingData();
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate file selection
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    setLoading(true); // Start loading

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:8080/api/bmi/upload", formData);
      alert("File uploaded successfully!"); // Show success message
      onFileUpload(); // Notify parent component to fetch results
      setFile(null); // Reset file input after upload
      setDataExists(true); // Set dataExists to true after successful upload
    } catch (error) {
      if (error.response && error.response.data) {
        alert(`Error: ${error.response.data}`); // Show error message from backend
      } else {
        alert("Error uploading file. Please try again.");
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleDeleteData = async () => {
    try {
      const response = await axios.delete("http://localhost:8080/api/bmi/delete");
      alert(response.data); // Show the response message
      onFileUpload(); // Notify parent component to refresh results
      setDataExists(false); // Set dataExists to false after deletion
    } catch (error) {
      console.error("Error deleting data:", error);
      alert("Error deleting data. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-lg font-bold mb-4">Upload CSV File</h2>
        <input type="file" onChange={handleFileChange} className="mb-4" />
        <button
          type="submit"
          className={`w-full bg-teal-600 hover:bg-coral text-white font-bold py-2 px-4 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading} // Disable button if loading
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
      
      {loading && (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-teal-600"></div>
        </div>
      )}
      
      {dataExists ? (
        <div>
          <p className="text-green-500">Status: BMI Data Available</p>
          <p className="text-green-500 mt-2 mb-4">Click below to view data!</p>
          <div className="flex space-x-6">
            <Link to="/bmidata">
              <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded shadow hover:bg-gray-200 transition duration-300 hover:text-black">
                View Data
              </button>
            </Link>
            <button
              onClick={handleDeleteData}
              className="bg-red-600 text-white font-semibold py-2 px-4 rounded shadow hover:bg-gray-200 transition duration-300 hover:text-black"
            >
              Reset Data
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-red-500">Status: BMI Data Not Available</p>
          <p className="text-red-500 mt-2 mb-4">Please Upload File! (.csv file required)</p>
          <Link to="/bmidata">
            <button disabled className="bg-green-300 text-white font-semibold py-2 px-4 rounded shadow">
              View Data
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FileUpload;