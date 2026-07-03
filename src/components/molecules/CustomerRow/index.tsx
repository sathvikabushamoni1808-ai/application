import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import CheckBox from "../../atoms/CheckBox";
import Status from "../../atoms/Status";

import type { Customer } from "../../../utils/interface";

interface CustomerRowProps {
  customer: Customer;
}

function CustomerRow({ customer }: CustomerRowProps) {
  return (
    <TableRow hover>

      <TableCell>
        <CheckBox />
      </TableCell>

      <TableCell>{customer.id}</TableCell>

      <TableCell>{customer.name}</TableCell>

      <TableCell>{customer.email}</TableCell>

      <TableCell>
        <Status status={customer.status} />
      </TableCell>

      <TableCell>{customer.duration}</TableCell>

      <TableCell>{customer.agent}</TableCell>

    </TableRow>
  );
}

export default CustomerRow;