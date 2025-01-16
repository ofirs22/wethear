import React, { useEffect, useState } from "react";
import { Dayjs } from "dayjs";
import dayjs from "dayjs"; // Correct import
import DateRangeSelector from "./components/DateRangeSelector";
import ChartComponent from "./components/Chart";
import Loader from "./components/Loader";

// Define the History interface
export interface History {
  date: string;
  minTemp: number;
  maxTemp: number;
}



const App: React.FC = () => {
  //if start date is in localStorage initialize start date with the data, otherwise use the default of 30 days ago
  const [startDate, setStartDate] = useState<Dayjs>(localStorage.getItem('start_date') ? dayjs(localStorage.getItem("start_date")) : dayjs().subtract(30, "day") );
  //if end date is in localStorage initialize end date with the data, otherwise use today
  const [endDate, setEndDate] = useState<Dayjs>(localStorage.getItem('end_date') ? dayjs(localStorage.getItem("end_date")) : dayjs());
  const [historyData, setHistoryData] = useState<History[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Validation function to ensure dates are valid
  const validateDateRange = (): boolean => {
    console.log(dayjs())
    const yesterday = dayjs().subtract(1, "day");

    // Check if any date is today or in the future
    if (startDate.isAfter(yesterday, "day") || endDate.isAfter(yesterday, "day")) {
      setErrorMessage("Dates cannot be today or in the future.");
      return false;
    }

    // Check if the start date is after the end date
    if (startDate.isAfter(endDate)) {
      setErrorMessage("Start date cannot be after the end date.");
      return false;
    }

    // Clear any previous error
    setErrorMessage(null);
    return true;
  };

  // Function to fetch history data
  const fetchHistory = async () => {
    
    if (!validateDateRange()) {
      return; // Do not proceed if validation fails
    }
    //after dates passed validation, set localStorage with with dates values
    localStorage.setItem("start_date", startDate.format("YYYY-MM-DD"));
    localStorage.setItem("end_date", endDate.format("YYYY-MM-DD"));
    setLoading(true); // Show loader
    try {
      //Prepare the body
      const payload = {
        start_date: startDate.format("YYYY-MM-DD"),
        end_date: endDate.format("YYYY-MM-DD"),
      };
      //Make API call to backend
      const response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      //check if response is fine
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data: History[] = await response.json();
      setHistoryData(data);
    } catch (error) {
      console.error("Failed to fetch history:", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

    // Load dates from localStorage on app initialization
    useEffect(() => {
      const savedStartDate = localStorage.getItem("start_date");
      const savedEndDate = localStorage.getItem("end_date");
      //If values exist in localStorage save them in state
      if (savedStartDate) {
        setStartDate(dayjs(savedStartDate));
      }
  
      if (savedEndDate) {
        setEndDate(dayjs(savedEndDate));
      }
    }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Time Range Chart with History</h1>

      {/* Date Range Selector */}
      <DateRangeSelector
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />

      {/* Error Message */}
      {errorMessage && (
        <div style={{ color: "red", marginBottom: "10px" }}>
          <strong>{errorMessage}</strong>
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={fetchHistory}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Submit
      </button>

      {/* Loader */}
      {loading ? <Loader /> : <ChartComponent historyData={historyData} />}
    </div>
  );
};

export default App;
