/* eslint-disable no-unused-vars */
import React from "react";

const useCurrencyFormatter = (number, country) => {

  console.log(number);

  const formatCurrency = () => {
    if (number !== "number") {
      alert("Please pass in a number");
      return;
    } else {
      const format = new Intl.NumberFormat(country, {
        style: "currency",
        currency: "GHC",
      }).format(number);

      console.log(format);

      return format;
    }
  };
  return formatCurrency;
};

export default useCurrencyFormatter;
