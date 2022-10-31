export const Result = ({ result }) => {
  const [longitude, latitude] = result?.features[0]?.center;
  const address = result?.features[0]?.place_name;

  return (
    <div className='bg-slate-50 p-7 rounded-md shadow-lg w-1/4 mr-3 my-3'>
      <header className='flex content-center justify-start'>
        <h2 className='text-xl font-bold'>Address:</h2>
        <div className='self-center text-lg'>{address}</div>
      </header>
      <section className="flex justify-around my-3">
        <div>
          <h2 className="text-xl font-semibold">Longitude:</h2>
          <div className="text-lg">{longitude}</div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Latitude:</h2>
          <div className="text-lg">{latitude}</div>
        </div>
      </section>
    </div>
  );
};
