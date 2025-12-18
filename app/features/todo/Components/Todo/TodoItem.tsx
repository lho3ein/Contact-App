"use client";

import { useTodoContext } from "@/Components/Context/TodoContext";
import DeleteBtn from "./DeleteBtn";
import EditButton from "./Editbutton";

export default function TodoItem() {
  const { Todos, isLoading } = useTodoContext();

  return (
    <>
      {isLoading ? (
        <tr>
          <td>Loading...</td>
        </tr>
      ) : (
        Todos?.map((item) => (
          <tr
            key={item.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <th
              scope="row"
              className="md:px-6 px-4 py-3 md:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.id}
            </th>
            <td className="md:px-6 px-4 py-3 md:py-4">
              {item.firstname + " " + item.lastname}
            </td>
            <td className="md:px-6 pr-2 py-3 md:py-4 text-center">
              {item.phonenumber}
            </td>

            <td className="md:px-6 px-4 py-3 md:py-4 text-sm flex flex-row gap-1 text-white">
              <DeleteBtn item={item} />
              <EditButton item={item} />
            </td>
          </tr>
        ))
      )}
    </>
  );
}
