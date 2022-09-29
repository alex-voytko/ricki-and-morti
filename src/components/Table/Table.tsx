interface TableProps {
  tableHead: string[];
  tableBody: { [key: string]: string | number }[];
}

function Table({ tableHead, tableBody }: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          {tableHead.map((item: string) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableBody.map((item) => (
          <tr key={item.name}>
            {Object.keys(item).map((key) => (
              <td key={item[key]}>{item[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
