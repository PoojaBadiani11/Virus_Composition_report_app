import React, { useState } from "react";
import "./subsequencecheck.css";

const Subsequence = () => {
  // States
  const [n, setn] = useState();
  const [virus, setvirus] = useState();
  const b = [];
  const result = [];

  const InputComponent = () => {
    let element = [];

    for (let k = 0; k < n; k++) {
      element.push(
          <input
            key={k}
            className="inputelement"
            type="text"
            placeholder="Enter blood"
            onBlur={(e) => {
              b.push(e.target.value);
            }}
          ></input>
      );
    }
    return element;
  };

  // Function to check if B
  // is v subsequence of string b

  function checkforSubsequence(V, B) {
    console.log(B);
    
   

    // Push the characters of
    // B into the stack
    var v = [];

    // Push the characters of
    // B into the stack

    B.map((res) => {
      for (var i = 0; i < res.length; i++) {
        v.push(res[i]);
      }

      // Traverse the string V in reverse
      for (var j = V.length - 1; j >= 0; j--) {
        // If the stack is empty
        if (v.length === 0) {
          result.push("POSITIVE");
          return;
        }

        // if V[i] is same as the
        // top of the stack
        if (V[j] === v[v.length - 1]) {
          // Pop the top of stack
          v.pop();
        }
      }
      // Stack s is empty
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
      {/* {result.map((result) => (
        <div id="result">{result}</div>
      ))} */}
    
    </>
  );
};

export default Subsequence;
