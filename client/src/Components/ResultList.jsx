import { Result } from './Result';

export const ResultList = ({ searchData }) => {
  return (
    <>
      {searchData ? (
        searchData.map((searchResult, i) => {
          return <Result result={searchResult} key={i} />;
        })
      ) : (
        <div>No results yet, start adding addresses</div>
      )}
    </>
  );
};
