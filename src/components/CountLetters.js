import React from "react";

const [inputValue, setInputValue] = useState("");

const handleInputChange = (event) => {
  const value = event.target.value;
  const newValue = value.replace(/[^a-zA-Zа-яА-Я]/g, ""); // Удаляем все символы, кроме букв

  setInputValue(newValue);
};

function CountLetters() {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your word"
      />
      <p>Your word count {inputValue.length} letters</p>
    </div>
  );
}

export default CountLetters;
