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
      <div class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Una mejor manera de calcular.
            </h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tipos de cambio de moneda
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Esta simple página te ayudará a saber el tipo de cambio de la
              moneda que desees conocer teniendo como base el dólar.
            </p>
          </div>
        </div>
        <ul>
          {currencies.map((e, i) => {
            return (
              <li
                width="40%"
                class="flex items-center px-4 py-2 text-gray-700 bg-blue-300 dark:bg-gray-700 dark:text-gray-300">
                <Link key={i} to={`/${e}`}>
                  {e}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
