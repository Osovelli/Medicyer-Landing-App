import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Loader2
} from 'lucide-react';


export const Table = ({
  columns,
  data,
  pagination,
  onPageChange,
  onSort,
  isLoading = false,
  showSearch = true,
  searchPlaceholder = 'Search...',
  onSearch,
  emptyMessage = 'No data available',
  className = '',
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState(null);

  // Reset to page 1 when search term changes (for client-side search)
  useEffect(() => {
    if (onSearch) {
      // API-driven search - debounce the search
      const timer = setTimeout(() => {
        onSearch(searchTerm);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      // Client-side search - reset to page 1
      setCurrentPage(1);
    }
  }, [searchTerm, onSearch]);

  // Client-side search
  const filteredData = useMemo(() => {
    if (onSearch || !searchTerm) return data;

    return data.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm, onSearch]);

  // Client-side sorting
  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  // Client-side pagination
  const clientPagination = useMemo(() => {
    if (pagination) return pagination; // Use API-driven pagination if available

    const itemsPerPage = 10;
    const totalItems = sortedData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    return {
      currentPage,
      totalPages,
      totalItems,
      itemsPerPage,
    };
  }, [sortedData.length, currentPage, pagination]);

  const paginatedData = pagination
    ? data
    : sortedData.slice(
        (currentPage - 1) * clientPagination.itemsPerPage,
        currentPage * clientPagination.itemsPerPage
      );

  const handleSort = (key) => {
    const newDirection = sortConfig?.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction: newDirection });
    onSort?.(key, newDirection);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    onPageChange?.(newPage);
  };

  const getStatusStyle = (status) => {
    const baseStyle = "px-3 py-1 rounded-full text-xs font-medium";
    switch (status?.toLowerCase()) {
      case 'successful':
      case 'completed':
      case 'delivered':
        return `${baseStyle} bg-green-100 text-green-800`;
      case 'pending':
      case 'on going':
        return `${baseStyle} bg-orange-100 text-orange-800`;
      case 'failed':
      case 'cancelled':
        return `${baseStyle} bg-red-100 text-red-800`;
      default:
        return `${baseStyle} bg-gray-100 text-gray-800`;
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Search Bar */}
      {showSearch && (
        <div className="flex justify-between items-center">
          <div className="relative w-full md:w-[500px]">
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="w-full bg-white pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  onClick={() => column.sortable && handleSort(column.key)}
                  className={`px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider ${
                    column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''
                  }`}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.label}</span>
                    {column.sortable && sortConfig?.key === column.key && (
                      <span className="text-gray-400">
                        {sortConfig.direction === 'asc' ? (
                          <ChevronUp size={14} />
                        ) : (
                          <ChevronDown size={14} />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {isLoading ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-12 text-center">
                  <div className="flex items-center justify-center space-x-2 text-gray-500">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Loading...</span>
                  </div>
                </td>
              </tr>
            ) : paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-12 text-center text-gray-500">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              paginatedData.map((item, index) => (
                <tr
                  key={item.id || index}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-700"
                    >
                      {column.render ? (
                        column.render(item[column.key], item)
                      ) : column.key === 'status' ? (
                        <span className={getStatusStyle(item[column.key])}>
                          {item[column.key]}
                        </span>
                      ) : (
                        item[column.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {clientPagination.totalPages > 0 && (
        <div className="flex items-center justify-between px-2 py-4">
          <div className="text-sm text-gray-600">
            Showing{' '}
            <span className="font-medium">
              {pagination ? (pagination.currentPage - 1) * pagination.itemsPerPage + 1 : (currentPage - 1) * clientPagination.itemsPerPage + 1}
            </span>{' '}
            to{' '}
            <span className="font-medium">
              {pagination
                ? Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems)
                : Math.min(currentPage * clientPagination.itemsPerPage, clientPagination.totalItems)
              }
            </span>{' '}
            of{' '}
            <span className="font-medium">
              {pagination ? pagination.totalItems : clientPagination.totalItems}
            </span>{' '}
            Results
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(clientPagination.currentPage - 1)}
              disabled={clientPagination.currentPage === 1}
              className="flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={16} className="mr-1" />
              Previous
            </button>
            <span className="text-sm text-gray-600 px-2">
              Page {clientPagination.currentPage} of {clientPagination.totalPages}
            </span>
            <button
              onClick={() => handlePageChange(clientPagination.currentPage + 1)}
              disabled={clientPagination.currentPage === clientPagination.totalPages}
              className="flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;