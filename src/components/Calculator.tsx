import {
  FaPlus,
  FaMinus,
  FaEquals,
  FaDivide,
  FaPlusMinus,
  FaXmark,
  FaDeleteLeft,
  FaC,
} from "react-icons/fa6";

import "./calculator.css";

export const Calculator = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[360px] rounded-xl border-4 border-indigo-800 bg-blue-300 p-3 shadow-lg">
        <div
          data-testid="CalcResult"
          className="rounded-md mb-4 bg-indigo-700 text-blue-200 text-4xl text-end px-3 py-4"
        >
          0
        </div>

        <div className="grid grid-cols-5 gap-2">
          {["7", "8", "9"].map((n) => (
            <button
              key={n}
              data-testid={`Calc${n}`}
              className="calc-btn number"
            >
              {n}
            </button>
          ))}
          <button data-testid="CalcPlusMinus" className="calc-btn operator">
            <FaPlusMinus />
          </button>
          <button data-testid="CalcDelete" className="calc-btn operator">
            <FaDeleteLeft size={24} />
          </button>

          {["4", "5", "6"].map((n) => (
            <button
              key={n}
              data-testid={`Calc${n}`}
              className="calc-btn number"
            >
              {n}
            </button>
          ))}
          <button data-testid="CalcMultiply" className="calc-btn operator">
            <FaXmark />
          </button>
          <button data-testid="CalcDivider" className="calc-btn operator">
            <FaDivide />
          </button>

          {["1", "2", "3"].map((n) => (
            <button
              key={n}
              data-testid={`Calc${n}`}
              className="calc-btn number"
            >
              {n}
            </button>
          ))}

          <button data-testid="CalcRest" className="calc-btn operator">
            <FaMinus />
          </button>
          <button
            data-testid="CalcEquals"
            className="row-span-2 calc-btn equals"
          >
            <FaEquals size={16} />
          </button>

          <button data-testid="CalcClear" className="calc-btn clear">
            <FaC />
          </button>
          <button className="calc-btn number">0</button>
          <button data-testid="CalcPoint" className="calc-btn number">
            .
          </button>
          <button data-testid="CalcSum" className="calc-btn operator">
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};
