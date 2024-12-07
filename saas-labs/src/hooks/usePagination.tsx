import { useState } from "react";

interface IUsePaginationProps<T> {
  rawData: T[];
  itemsPerPage: number;
}

const usePagination = <T,>(props: IUsePaginationProps<T>) => {
  const { itemsPerPage, rawData } = props;

  const [currentPage, setCurrentPage] = useState(1);

  const totalNumberOfPages = Math.ceil(rawData.length / itemsPerPage);

  const paginatedData = rawData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalNumberOfPages) {
      setCurrentPage(page);
    }
  };

  const isNextPageAvailable = currentPage < totalNumberOfPages;
  const isPrevPageAvailable = currentPage > 1;

  const goToNextPage = () => goToPage(currentPage + 1);
  const goToPrevPage = () => goToPage(currentPage - 1);

  return {
    currentPage,
    totalNumberOfPages,
    isNextPageAvailable,
    isPrevPageAvailable,
    paginatedData,
    goToNextPage,
    goToPrevPage,
  };
};

export { usePagination };
