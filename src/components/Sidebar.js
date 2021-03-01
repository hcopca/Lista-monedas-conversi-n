import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    const getCurrencies = async () => {
      const res = await axios.get("https://api.exchangeratesapi.io/latest");
      const data = await res.data.rates;
      const arrData = Object.keys(data);
      setCurrencies(arrData);
    };
    getCurrencies();
  }, []);
  return (
    <div>
      <p class="italic ...">MONEDAS DISPONIBLES</p>
      <ul>
        {currencies.map((e, i) => {
          return (
            <li>
              <Link key={i} to={`/${e}`}>
                {e}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
