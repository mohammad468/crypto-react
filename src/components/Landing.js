import React, { useState, useEffect } from "react";

// *API
import { getCoin } from "../services/api";

const Landing = () => {
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      console.log(data);
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <h1>hello World!</h1>
    </div>
  );
};

export default Landing;
