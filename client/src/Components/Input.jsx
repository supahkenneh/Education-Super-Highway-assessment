export const Input = ({ handleInput, inputValue }) => {
  return (
    <input
      type='text'
      value={inputValue}
      onChange={(e) => {
        handleInput(e.target.value);
      }}
    />
  );
};
