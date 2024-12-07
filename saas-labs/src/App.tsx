import { useEffect, useState } from "react";
import { Table } from "./components/table";
import { IProjectsStatsItem } from "./models";
import { usePagination } from "./hooks/usePagination";
import { API_URL } from "./constants";
import { Paginate } from "./components/paginate";

function App() {
  const [data, setData] = useState<IProjectsStatsItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    paginatedData,
    goToNextPage,
    goToPrevPage,
    isNextPageAvailable,
    isPrevPageAvailable,
    totalNumberOfPages,
    currentPage,
  } = usePagination({
    itemsPerPage: 5,
    rawData: data,
  });

  const fetchData = async () => {
    setIsLoading(true);
    setData([]);
    try {
      const responseData = await fetch(API_URL);
      const jsonData = await responseData.json();
      setData(jsonData);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Project Data</h1>
      <div style={{ padding: "1rem" }}>
        <Table tableData={paginatedData} isLoading={isLoading} />
      </div>
      <Paginate
        currentPage={currentPage}
        totalNumberOfPages={totalNumberOfPages}
        isPrevPageAvailable={isPrevPageAvailable}
        isNextPageAvailable={isNextPageAvailable}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
      />
    </div>
  );
}

export default App;
