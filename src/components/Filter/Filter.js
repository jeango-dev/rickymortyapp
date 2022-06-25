import React from 'react';
import Gender from './category/Gender';
import Species from './category/Species';
import Status from './category/Status';

const Filter = ({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  const clear = () => {
    updateGender('');
    updateStatus('');
    updateSpecies('');
    updatePageNumber(1);
    window.location.reload(false);
  };
  return (
    <div className="mx-auto col-lg-6 col-8 mb-5">
      <div className="text-center text-light fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: 'pointer' }}
        onClick={clear}
        className="text-light text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="myaccordion w-100">
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
      </div>
    </div>
  );
};

export default Filter;