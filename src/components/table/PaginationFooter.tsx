const Item = ({ data }: any) => (
  <li>
    <a
      href="#"
      className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      {/* ... */}
      {data}
    </a>
  </li>
);

export const PaginationFooter = ({ totalPages, currentPage }: any) => {
  const temp = [];
  for (let i = 1; i < totalPages + 1; i++) {
    temp.push(i);
  }
  const List = [];
  for (let i of temp.slice(0, 3)) {
    List.push(<Item key={i} data={i} />);
  }
  for (let i of temp.slice(currentPage - 1, currentPage + 2)) {
    if (i > 3) {
      List.push(<Item key={i} data={i} />);
    } else {
      List.push(<Item key={i} data={"..."} />);
    }
  }
  for (let i of temp.slice(-3)) {
    List.push(<Item key={i} data={i} />);
  }
  return (
    <ul className="inline-flex items-stretch -space-x-px">
      <li>
        <span className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <span className="sr-only">Previous</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </li>
      {List}
      <li>
        <span className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <span className="sr-only">Next</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </li>
    </ul>
  );
};
