"use client";
// import { columns } from "@/app/features/todo/Components/Todo/columns";
// import DeleteBtn from "@/app/features/todo/Components/Todo/DeleteBtn";
// import EditButton from "@/app/features/todo/Components/Todo/Editbutton";
import FormAddTodo from "@/app/features/todo/Components/Todo/FormAddTodo";
import { DataTableDemo } from "@/app/features/todo/Components/Todo/TableNew";
import { useTodoContext } from "@/Components/Context/TodoContext";
// import TableTodo from "@/app/features/todo/Components/Todo/TableTodo";
export default function Todo() {
  const { Todos, isLoading } = useTodoContext();
  return (
    <div>
      <FormAddTodo />
      <div className="relative container mx-auto overflow-x-auto mt-16">
        <div className="mx-auto w-[70%]">
          {isLoading ? (
            <div>
              <p>Loading...</p>
            </div>
          ) : (
            <DataTableDemo data={Todos ?? []} />
          )}
        </div>
      </div>
    </div>
  );
}
