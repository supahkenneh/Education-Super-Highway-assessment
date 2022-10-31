import { Result } from './Result';

export const ResultList = ({ searchData }) => {
  return (
    <div className='flex pl-10'>
      {searchData.length ? (
        searchData.map((searchResult, i) => {
          return <Result result={searchResult} key={i} />;
        })
      ) : (
        <div className='flex text-2xl'>
          No results yet, start adding addresses
        </div>
      )}
    </div>
  );
};
