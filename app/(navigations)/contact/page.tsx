"use client";
import FormAddTodo from "@/app/features/todo/Components/Todo/FormAddTodo";
import TableTodo from "@/app/features/todo/Components/Todo/TableTodo";
export default function Todo() {
  return (
    <div>
      <FormAddTodo />
      <div className="relative container mx-auto overflow-x-auto mt-16">
        <TableTodo />
      </div>
    </div>
  );
}
