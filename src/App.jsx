import { useCallback, useEffect, useState } from "react";
import "./App.css";
import BGimg from "../static/17455.jpg";
import CurrencyInput from "./component/CurrencyInput";
import CurrencyOutput from "./component/CurrencyOutput";

function App() {
  const [fromCurrency, setFromCurrency] = useState("inr");
  const [toCurrency, setToCurrency] = useState("pkr");
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const currency = "usd";
  const [value, setValue] = useState({});
  useEffect(() => {
    console.log("API called", currency);
    let url =
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-02/v1/currencies/usd.json";

    fetch(url)
      .then((response) => response.json())
      .then((currencyData) => {
        setValue(currencyData["usd"]);
      });
  }, [currency]);

  useEffect(() => {
    const handleConversion = () => {
      const val = Number(value[toCurrency] / value[fromCurrency]);

      console.log("It came here", toCurrency, fromCurrency, fromAmount, val);
      if (val) setToAmount((fromAmount * val).toFixed(2));
    };
    handleConversion();
  }, [fromAmount, fromCurrency, toCurrency, value]);
  useEffect(() => {
    console.log(fromCurrency);
  }, [fromCurrency]);
  useEffect(() => {
    console.log(toCurrency);
  }, [toCurrency]);
  const currList = Object.keys(value);
  const swapFromTo = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${BGimg})` }}
    >
      <div
        className="text-black font-mono bg-gradient-to-r from-cyan-500 to-blue-500
        text-center rounded-3xl border-y border-x"
      >
        <CurrencyInput
          head={"From"}
          currency={fromCurrency}
          amount={fromAmount}
          currencyOptions={currList}
          onCurrencyChange={setFromCurrency}
          onFromAmountChange={setFromAmount}
        />

        <div>
          <button
            onClick={swapFromTo}
            className="text-l bg-blue-500 rounded-xl h-8 w-20 border-x border-y text-white overflow-y-auto"
          >
            Swap
          </button>
        </div>

        <CurrencyOutput
          head={"To"}
          currency={toCurrency}
          amount={toAmount}
          currencyOptions={currList}
          onCurrencyChange={setToCurrency}
        />
      </div>
    </div>
  );
}

export default App;
