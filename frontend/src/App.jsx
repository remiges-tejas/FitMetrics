import FileUpload from "./components/FileUpload";
import BmiResults from "./components/BmiResults";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [refreshKey, setRefreshKey] = useState(0); // State to force refresh

  const handleFileUpload = () => {
    setRefreshKey(prevKey => prevKey + 1); // Increment key to trigger refresh in BmiResults
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<FileUpload onFileUpload={handleFileUpload} />} />
          <Route path="/bmidata" element={<BmiResults key={refreshKey} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;