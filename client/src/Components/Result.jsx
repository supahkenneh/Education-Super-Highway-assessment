export const Result = ({ result }) => {
  console.log(result);
  const [longitude, latitude] = result.features[0].center;
  const address = result.features[0].place_name;
  return (
    <div>
      <div>
        <h2>Address:</h2>
        <div>{address}</div>
      </div>
      <div>
        <h4>Longitude:</h4>
        <div>{longitude}</div>
      </div>
      <div>
        <h4>Latitude:</h4>
        <div>{latitude}</div>
      </div>
    </div>
  );
};
