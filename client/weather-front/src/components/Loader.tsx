// Loader.tsx
import React from "react";
import { CircularProgress } from "@mui/material";

const Loader: React.FC = () => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
    <CircularProgress />
  </div>
);

export default Loader;
