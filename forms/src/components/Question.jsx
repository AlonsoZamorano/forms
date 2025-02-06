import { useState } from "react";

const Question = ({ question, onSubmit }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    onSubmit(answer);
    setAnswer(""); // Limpiar el input después de enviar
  };

  return (
    <div className="p-4 border rounded-lg shadow-md mb-4">
      <p className="text-lg font-semibold">{question}</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="border p-2 rounded w-full my-2"
        placeholder="Tu respuesta..."
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Enviar
      </button>
    </div>
  );
};

export default Question;