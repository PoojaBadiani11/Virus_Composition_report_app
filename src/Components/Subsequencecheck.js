import React, { useState } from "react";
import "./subsequencecheck.css";

const Subsequence = () => {
  // States
  const [n, setn] = useState();
  const [virus, setvirus] = useState();
  const b = [];
  const result = [];


  // function to generate inputs
  const InputComponent = () => {
    let element = [];

    if(n > 10){
      element.push(
        <h1>Enter Number Smaller than 10</h1>
      )
    }
    else{
      for (let k = 0; k < n; k++) {
        element.push(
            <input
              key={k}
              className="inputelement"
              type="text"
              placeholder="Enter Blood Composition"
              onBlur={(e) => {
                b.push(e.target.value);
              }}
            >
            </input>
        );
      }
    }
    return element;
  };

  // Function to check subsequence

  function checkforSubsequence(V, B) {
    // console.log(B);

    var v = [];

    B.map((res) => {
      for (var i = 0; i < res.length; i++) {
        v.push(res[i]);
      }

      for (var j = V.length - 1; j >= 0; j--) {
        //  empty
        if (v.length === 0) {
          result.push("POSITIVE");
          return;
        }

        if (V[j] === v[v.length - 1]) {
          // Pop first
          v.pop();
        }
      }
      // empty
      if (v.length === 0) result.push("POSITIVE");
      else {
          v = [] ; 
          result.push("NEGATIVE");
      }
    });
    return (
      document.getElementById("result").innerHTML = result + "<br>"  
    )
  }

  return (
    <>
    
      <input
        className="inputelement"
        type="text"
        placeholder="Enter consists of the virus"
        onChange={(e) => {
          setvirus(e.target.value);
        }}
      ></input>
      <input
        className="inputelement"
        type="number"
        placeholder="Enter number of people"
        onChange={(e) => {
          setn(e.target.value);
        }}
      ></input>
      <InputComponent />
      <button
        onClick={(e) => {
          checkforSubsequence(virus, b);
        }}
      >
        Generate Report
      </button>

      <hr />
      <div id="result"></div>
    </>
  );
};

export default Subsequence;
