import React, { useState, useEffect } from "react";

const App = () => {
  const [, setApiData] = useState(null); // Fixed the useState usage
  const [formField, setFormField] = useState({
    currencyOne: "ADA",
    currencyTwo: "BNB",
  });
  const [amountOne, setAmountOne] = useState(0);
  const [rate, setRate] = useState(1);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setApiData((prevData) => ({ ...prevData, ...data }));
        setRate(
          data.rates[formField.currencyTwo] / data.rates[formField.currencyOne]
        );
      })
      .catch((error) => console.error("Error fetching API data:", error));
  }, [formField.currencyOne, formField.currencyTwo, setApiData]);

  const handleAmountChange = (e, setAmount) => {
    const value = e.target.value;
    setAmount(value);
  };

  const handleSwap = () => {
    setFormField({
      currencyOne: formField.currencyTwo,
      currencyTwo: formField.currencyOne,
    });
  };

  return (
    <div>
      <div>
        <select
          id="currency-one"
          value={formField.currencyOne}
          onChange={(e) =>
            setFormField({ ...formField, currencyOne: e.target.value })
          }
        >
          <option value="ADA">ADA</option>
          <option value="BNB">BNB</option>
          <option value="611">611</option>
          <option value="ABC">ABC</option>
          <option value="ACP">ACP</option>
          <option value="ACT">ACT</option>
          <option value="ACT">ACT</option>
        </select>
        <input
          className="text-center"
          type="number"
          id="amount-one"
          placeholder="0"
          value={amountOne}
          onChange={(e) => handleAmountChange(e, setAmountOne)}
        />
      </div>
      <div className="swap-rate-container flex items-center">
        <button
          className="btn bg-blue-500 text-white px-4 py-2 rounded"
          id="swap"
          onClick={handleSwap}
        >
          Swap
        </button>
      </div>
      <div className="currency flex items-center">
        <select
          id="currency-two"
          value={formField.currencyTwo}
          onChange={(e) =>
            setFormField({ ...formField, currencyTwo: e.target.value })
          }
        >
          <option value="ADA">ADA</option>
          <option value="BNB">BNB</option>
          <option value="611">611</option>
          <option value="ABC">ABC</option>
          <option value="ACP">ACP</option>
          <option value="ACT">ACT</option>
          <option value="ACT">ACT</option>
          <option value="ADL">ADL</option>
          <option value="ADX">ADX</option>
          <option value="ADZ">ADZ</option>
          <option value="AE">AE</option>
          <option value="AGI">AGI</option>
          <option value="AIB">AIB</option>
          <option value="AIDQC">AIDQC</option>
          <option value="AIDOC">AIDOC</option>
          <option value="AION">AION</option>
          <option value="AIR">AIR</option>
          <option value="ALT">ALT</option>
          <option value="AMB">AMB</option>
          <option value="AMM">AMM</option>
          <option value="AMM">AMM</option>
          <option value="ANT">ANT</option>
          <option value="APC">APC</option>
          <option value="APPC">APPC</option>
          <option value="APPC">APPC</option>
          <option value="ARC">ARC</option>
          <option value="ARCT">ARCT</option>
          <option value="ARDR">ARDR</option>
          <option value="ARK">ARK</option>
          <option value="ARN">ARN</option>
          <option value="ASAFE2">ASAFE2</option>
          <option value="AST">AST</option>
          <option value="ATB">ATB</option>
          <option value="ATM">AURS</option>
          <option value="AVAX">AVAX</option>
          <option value="AVT">AVT</option>
          <option value="AVT">AVT</option>
          <option value="BAR">BAR</option>
          <option value="BASH">BASH</option>
          <option value="BAT">BAT</option>
          <option value="BAY">BAY</option>
          <option value="BBP">BBP</option>
          <option value="BCD">BCD</option>
          <option value="BCH">BCH</option>
          <option value="BCN">BCN</option>
          <option value="BCPT">BCPT</option>
          <option value="BEE">BEE</option>
          <option value="BIO">BIO</option>
          <option value="BLC">BLC</option>
          <option value="BCPT">BCPT</option>
          <option value="BEE">BEE</option>
          <option value="BIO">BIO</option>
          <option value="BLC">BLC</option>
          <option value="BLOCK">BLOCK</option>
          <option value="BLU">BLU</option>
          <option value="BLZ">BLZ</option>
          <option value="BLZ">BLZ</option>
          BAR : 2.635 BASH : 0.0056 BAT : 0.235253 BAY : 0.0644 BBP : 0.0005 BCD
          : 0.122883 BCH : 252.244097 BCN : 0.000206 BCPT : 0.001615 BEE :
          0.000001 BIO : 0.0008 BLC : 0.072132 BLOCK : 0.18 BLU : 0.00054 BLZ :
          0.274472 BMC : 0.001634 BNB : 229.277937 BNT : 0.811689 BOST : 0.048
          BQ : 0.00007775 BQX : 2.720931 BRD : 0.00645 BRIT : 0.03 BT1 : 0 BT2 :
          0 BTC : 41352.189386 BTCA : 0.00036 BTCS : 0.01201 BTCZ : 0.000141 BTG
          : 17.2836 BTLC : 9 BTM : 0.078282 BTM* : 0.122609 BTQ : 0.01 BTS :
          0.006193 BTX : 0.040369 BURST : 0.017348
        </select>
        <input
          className="text-center"
          type="number"
          id="amount-two"
          placeholder="0"
          value={(amountOne * rate).toFixed(2) || ""}
          readOnly
        />
      </div>
    </div>
  );
};

export default App;
