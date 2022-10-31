export const Input = ({ handleInput }) => {
  return (
    <input
      type='text'
      onChange={(e) => {
        handleInput(e.target.value);
      }}
    />
  );
};
