import { Box, Container } from "@mui/material";

import Header from "../../organisms/Header";
import CustomerTable from "../../organisms/CustomerTable";
import Pagination from "../../organisms/Pagination";

import SearchBar from "../../molecules/SearchBar";
import HeaderActions from "../../molecules/HeaderActions";

import type { Customer } from "../../../utils/interface";

interface DashboardTemplateProps {
  customers: Customer[];
  search: string;
  onSearch: (value: string) => void;

  sortBy: keyof Customer;
  sortOrder: "asc" | "desc";
  onSort: (column: keyof Customer) => void;
}

function DashboardTemplate({
  customers,
  search,
  onSearch,
  sortBy,
  sortOrder,
  onSort,
}: DashboardTemplateProps) {
  const handleSort = (column: string | number | symbol) => {
    onSort(column as keyof Customer);
  };

  return (
    <>
      <Header />

      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <SearchBar
            value={search}
            onChange={onSearch}
          />

          <HeaderActions />
        </Box>

        <CustomerTable
          customers={customers}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSort={handleSort}
        />

        <Pagination />
      </Container>
    </>
  );
}

export default DashboardTemplate;


