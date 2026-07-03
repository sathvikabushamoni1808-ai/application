import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";

import CustomerRow from "../../molecules/CustomerRow";

import type { Customer } from "../../../utils/interface";

interface CustomerTableProps {
  customers: Customer[];

  sortBy: keyof Customer;

  sortOrder: "asc" | "desc";

  onSort: (column: keyof Customer) => void;
}

function CustomerTable({
  customers,
  sortBy,
  sortOrder,
  onSort,
}: CustomerTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table>

        <TableHead>

          <TableRow>

            <TableCell />

            <TableCell>
              <TableSortLabel
                active={sortBy === "id"}
                direction={sortOrder}
                onClick={() => onSort("id")}
              >
                ID
              </TableSortLabel>
            </TableCell>

            <TableCell>
              <TableSortLabel
                active={sortBy === "name"}
                direction={sortOrder}
                onClick={() => onSort("name")}
              >
                Lead Name
              </TableSortLabel>
            </TableCell>

            <TableCell>Email</TableCell>

            <TableCell>
              <TableSortLabel
                active={sortBy === "status"}
                direction={sortOrder}
                onClick={() => onSort("status")}
              >
                Status
              </TableSortLabel>
            </TableCell>

            <TableCell>Duration</TableCell>

            <TableCell>Agent</TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {customers.map((customer) => (
            <CustomerRow
              key={customer.id}
              customer={customer}
            />
          ))}

        </TableBody>

      </Table>
    </TableContainer>
  );
}

export default CustomerTable;