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
        <div className="container border-4 overflow-hidden border-bgGray  bg-bgGray rounded-xl h-[400px] w-[250px]">
          <div className="bg-bgGray flex text-resultColor font-bold py-2 px-4 justify-end">
            {result}
          </div>
          <div className="bg-bgGray flex justify-end text-countsBeingProcessedColor font-bold py-2 px-4">
            {countsBeingProcessed}
          </div>
          {/* buttons div */}
          <div>
            <div className="space-x-5">
              <button className="buttonStyle text-[30px]">7</button>
              <button className="buttonStyle text-[30px]">8</button>
              <button className="buttonStyle text-[30px]">9</button>
              <button className="buttonStyle text-[30px]">+</button>
            </div>
            <div className="space-x-5">
              <button className="buttonStyle text-[30px]">4</button>
              <button className="buttonStyle text-[30px]">5</button>
              <button className="buttonStyle text-[30px]">6</button>
              <button className="buttonStyle text-[30px]">-</button>
            </div>
            <div className="space-x-5">
              <button className="buttonStyle text-[30px]">1</button>
              <button className="buttonStyle text-[30px]">2</button>
              <button className="buttonStyle text-[30px]">3</button>
              <button className="buttonStyle text-[30px]">x</button>
            </div>
            <div className="space-x-5">
              <button className="buttonStyle  text-[30px]">0</button>
              <button className="buttonStyle  text-[30px]">.</button>
              <button className="buttonStyle  text-[30px]">=</button>
              <button className="buttonStyle  text-[30px]">/</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
