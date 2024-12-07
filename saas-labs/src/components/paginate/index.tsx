interface IPaginateProps {
  currentPage: number;
  totalNumberOfPages: number;
  isPrevPageAvailable: boolean;
  isNextPageAvailable: boolean;
  goToPrevPage: () => void;
  goToNextPage: () => void;
}

const Paginate = (props: IPaginateProps) => {
  const {
    currentPage,
    totalNumberOfPages,
    isPrevPageAvailable,
    isNextPageAvailable,
    goToPrevPage,
    goToNextPage,
  } = props;

  return (
    <div className="flex flex-justify-center flex-align-center flex-gap-1">
      <button disabled={!isPrevPageAvailable} onClick={goToPrevPage}>
        Prev
      </button>
      <span>
        Page {currentPage} of {totalNumberOfPages} pages
      </span>
      <button disabled={!isNextPageAvailable} onClick={goToNextPage}>
        Next
      </button>
    </div>
  );
};

export { Paginate };
