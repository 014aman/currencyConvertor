import React from "react";

function CurrencyOutput({
  head,
  currency,
  amount,
  currencyOptions,
  onCurrencyChange,
}) {
  const handleOnChange = (event) => {
    onCurrencyChange(event.target.value);
  };
  const abc = () => {};
  return (
    <div className="bg-gradient-to-r from-slate-100 to-slate-200  rounded-3xl  flex justify-between">
      <div className="text-black  font-mono ml-4 px-1 py-1">
        <label htmlFor="amount">{head} : </label>
        <input type="number" id="amount" onChange={abc} value={amount}></input>
      </div>

      <div className="text-black font-mono mr-4 px-1 py-1">
        <label htmlFor="currency">Currency Type : </label>
        <select
          id="currency"
          value={currency}
          onChange={handleOnChange}
          className="border border-gray-300 px-2 py-1 rounded-md"
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CurrencyOutput;
