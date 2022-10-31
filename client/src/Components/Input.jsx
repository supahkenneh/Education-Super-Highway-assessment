export const Input = ({ handleInput, inputValue }) => {
  return (
    <input
      type='text'
      value={inputValue}
      className='p-2 rounded-md w-[500px] text-2xl'
      onChange={(e) => {
        handleInput(e.target.value);
      }}
    />
  );
};
