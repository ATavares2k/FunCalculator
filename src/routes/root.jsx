import { useState } from "react";

export default function Root() {
  const [result] = useState(0);

  return (
    <div className="border-4 align-middle">
      <div className="container border-4 border-stone-200  bg-orange-500 rounded-xl w-[250px]">
        <div className="bg-stone-200  text-gray-800 font-bold py-2 px-4 mb-11">
          ${result}
        </div>
        <div>
          <button className="buttonStyle">0</button>
          <button className="buttonStyle">1</button>
          <button className="buttonStyle">2</button>
          <button className="buttonStyle">3</button>
          <button className="buttonStyle">4</button>
          <button className="buttonStyle">5</button>
          <button className="buttonStyle">6</button>
          <button className="buttonStyle">7</button>
          <button className="buttonStyle">8</button>
          <button className="buttonStyle">9</button>
        </div>
        <div>
          <button className="buttonStyle">+</button>
          <button className="buttonStyle">-</button>
          <button className="buttonStyle">x</button>
          <button className="buttonStyle">%</button>
        </div>
      </div>
    </div>
  );
}
