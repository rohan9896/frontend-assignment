import { IProjectsStatsItem } from "../../models";
import styles from "./index.module.css";

interface ITableProps {
  tableData: IProjectsStatsItem[];
  isLoading: boolean;
}

const Table = (props: ITableProps) => {
  const { tableData, isLoading } = props;

  return (
    <table role="table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage funded</th>
          <th>Amount pledged</th>
        </tr>
      </thead>
      <tbody>
        {isLoading && (
          <tr role="row">
            <td colSpan={3} role="cell" className={styles.loadingCell}>
              Loading...
            </td>
          </tr>
        )}
        {!isLoading && tableData.length === 0 && (
          <tr role="row">
            <td colSpan={3} role="cell" className={styles.loadingCell}>
              No Data Available...
            </td>
          </tr>
        )}
        {!isLoading &&
          tableData.length > 0 &&
          tableData.map((item) => {
            return (
              <tr role="row" key={item["s.no"]}>
                <td role="cell">{item["s.no"] + 1}.</td>
                <td role="cell">{item["percentage.funded"]}</td>
                <td role="cell">{item["amt.pledged"]}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export { Table };
