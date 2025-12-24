"use client";
import FormAddTodo from "@/app/features/todo/Components/Todo/FormAddTodo";
import TableTodo from "@/app/features/todo/Components/Todo/TableTodo";
export default function Todo() {
  return (
    <div>
      <FormAddTodo />
      <div className="relative container mx-auto overflow-x-auto mt-16">
        <div className="mx-auto w-[70%]">
          <div className="flex items-center cursor-text w-52 lg:w-72 pl-2 lg:pl-0">
            <label htmlFor="sinput" className="cursor-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="text-gray-400 w-5 h-6 u aa as cg ph sc axp"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </label>
            <input
              id="sinput"
              type="search"
              className="ml-1 font-medium text-sm text-slate-700 dark:text-gray-300 dark:bg-gray-800 w-full h-full focus:outline-none"
              placeholder="Search..."
            />
          </div>
          <TableTodo />
        </div>
      </div>
    </div>
  );
}
