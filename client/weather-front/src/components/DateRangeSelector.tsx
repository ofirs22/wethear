// DateRangeSelector.tsx
import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

interface DateRangeSelectorProps {
  startDate: Dayjs;
  endDate: Dayjs;
  onStartDateChange: (date: Dayjs) => void;
  onEndDateChange: (date: Dayjs) => void;
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <DatePicker
        label="Start Date"
        value={startDate}
        onChange={(newValue) => newValue && onStartDateChange(newValue)}
      />
      <DatePicker
        label="End Date"
        value={endDate}
        onChange={(newValue) => newValue && onEndDateChange(newValue)}
      />
    </div>
  </LocalizationProvider>
);

export default DateRangeSelector;
