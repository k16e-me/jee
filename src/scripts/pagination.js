export function _paginateLink(baseURL, current) {
  const url = new URL(baseURL); // Create a URL object with the base URL
  url.searchParams.set('page', current); // Update the 'page' query parameter

  return url.toString(); // Return the full URL as a string
}

export function _truncatesPagination(totalPages, currentPage) {
  const max = 5; // Maximum number of page links to display

  // If no ellipses are needed, return all pages as an array
  if (totalPages <= max) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const hasStartEllipsis = currentPage > max - 2;
  const hasEndEllipsis = currentPage < totalPages - (max - 2);

  // Handle case: Start ellipsis only
  if (hasStartEllipsis && !hasEndEllipsis) {
    return [
      1, // First page
      { text: '...' }, // Start ellipsis
      ...Array.from({ length: 3 }, (_, i) => totalPages - 3 + i), // Last 3 pages
    ];
  }

  // Handle case: End ellipsis only
  if (!hasStartEllipsis && hasEndEllipsis) {
    return [
      ...Array.from({ length: 3 }, (_, i) => i + 1), // First 3 pages
      { text: '...' }, // End ellipsis
      totalPages, // Last page
    ];
  }

  // Handle case: Both start and end ellipses
  return [
    1, // First page
    { text: '...' }, // Start ellipsis
    ...Array.from({ length: 3 }, (_, i) => currentPage - 1 + i), // Pages around current page
    { text: '...' }, // End ellipsis
    totalPages, // Last page
  ];
}