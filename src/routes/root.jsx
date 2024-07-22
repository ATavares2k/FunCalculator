import { useState } from "react";

export default function Root() {
  const [result] = useState(0);
  const [countsBeingProcessed] = useState("1 x 1");

  return (
    <>
      <div>
        <th className="flex flex-row">
          <tr>This</tr>
          <tr>is</tr>
          <tr>the </tr>
          <tr>navbar</tr>
          <tr>will</tr>
          <tr>stay</tr>
          <tr>
            i will delete later from here obviously and add a litle touch with
            react router :p
          </tr>
        </th>
      </div>
      <div className="flex h-screen justify-center items-center">
        <div className="container border-4 overflow-hidden border-stone-200  bg-orange-500 rounded-xl h-[400px] w-[250px]">
          <div className="bg-stone-200 flex text-gray-800 font-bold py-2 px-4 justify-end">
            {result}
          </div>
          <div className="bg-stone-200 flex justify-end text-gray-800 font-bold py-2 px-4">
            {countsBeingProcessed}
          </div>
          {/* buttons div */}
          <div>
            <div className="">
              <button className="buttonStyle">7</button>
              <button className="buttonStyle">8</button>
              <button className="buttonStyle">9</button>
            </div>
            <div className="">
              <button className="buttonStyle">4</button>
              <button className="buttonStyle">5</button>
              <button className="buttonStyle">6</button>
            </div>
            <div className="">
              <button className="buttonStyle">1</button>
              <button className="buttonStyle">2</button>
              <button className="buttonStyle">3</button>
            </div>
            <div className="">
              <button className="buttonStyle">0</button>
              <button className="buttonStyle">.</button>
              <button className="buttonStyle">=</button>
            </div>
            <div className="flex flex-col">
              <button className="buttonStyle">+</button>
              <button className="buttonStyle">-</button>
              <button className="buttonStyle">x</button>
              <button className="buttonStyle">/</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
