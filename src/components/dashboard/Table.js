import DashboardBtn from "./DashboardBtn";

const Table = ({
  pName,
  date,
  client,
  price,
  children,
  btnContent,
  btnBgColor,
}) => {
  return (
    <tr>
      <td>{pName}</td>
      <td>{date}</td>
      <td>{client}</td>
      <td>{price}</td>
      <td className="flex">{children}</td>
      <td>
        <DashboardBtn content={btnContent} bgColor={btnBgColor} />
      </td>
    </tr>
  );
};

export default Table;
