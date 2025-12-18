import TodoItem from "./TodoItem";

export default function TableTodo() {
  return (
    <table className="w-[70%] mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="lg:px-6 px-4 py-3">
            ID
          </th>
          <th scope="col" className="lg:px-6 px-4 py-3">
            Full Name
          </th>
          <th scope="col" className="lg:px-2 pr-2 py-3 text-center">
            Phone Number
          </th>

          <th scope="col" className="lg:px-2 md:w-28 px-4 py-3 text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <TodoItem />
      </tbody>
    </table>
  );
}
