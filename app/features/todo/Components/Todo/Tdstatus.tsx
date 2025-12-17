"use client";

import { postt } from "@/Components/Context/TodoContext";

export default function TdStatus({ Todo }: { Todo: postt }) {
  return (
    <td className="md:px-6 px-4 py-3 md:py-4 text-center">
      {Todo.status ? "✅" : "❌"}
    </td>
  );
}
