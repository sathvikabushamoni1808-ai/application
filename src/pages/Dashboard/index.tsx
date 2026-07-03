import { useMemo, useState } from "react";

import DashboardTemplate from "../../components/templates/DashboardTemplate";
import { customers } from "../../data/customers";
import type { Customer } from "../../utils/interface";

function Dashboard() {
  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState<keyof Customer>("id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (column: keyof Customer) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const filteredCustomers = useMemo(() => {
    const filtered = customers.filter((customer) =>
      customer.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    return [...filtered].sort((a, b) => {
      const valueA = a[sortBy];
      const valueB = b[sortBy];

      if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
      if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;

      return 0;
    });
  }, [search, sortBy, sortOrder]);

  return (
    <DashboardTemplate
      customers={filteredCustomers}
      search={search}
      onSearch={setSearch}
      sortBy={sortBy}
      sortOrder={sortOrder}
      onSort={handleSort}
    />
  );
}

export default Dashboard;