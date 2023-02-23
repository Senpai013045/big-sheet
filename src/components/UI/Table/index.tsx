import {useMemo} from "react";

type RenderAbles = string | number | boolean | null | undefined;

export type RowData = Record<string, RenderAbles>;

interface TableProps {
  data: RowData[];
}

export const Table = ({data}: TableProps) => {
  const headers = useMemo(() => {
    const firstRow = data[0];
    if (!firstRow) return [];
    return Object.keys(firstRow);
  }, [data]);

  return (
    <table className="w-full border-collapse border border-ui-dark">
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header} className="border border-ui-dark px-4 py-2 text-ui-dark font-bold">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map(header => (
              <td key={header} className="border border-ui-dark px-4 py-2 text-ui-dark">
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
