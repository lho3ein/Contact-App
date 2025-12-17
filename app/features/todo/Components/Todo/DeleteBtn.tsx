"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postt } from "../Context/TodoContext";

export default function DeleteBtn({ Todo }: { Todo: postt }) {
  const queryClient = useQueryClient();

  const deletData = async () => {
    await fetch(
      `https://6624413d04457d4aaf9bf32a.mockapi.io/todos/${Todo.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: null,
      }
    );
  };

  const { mutateAsync } = useMutation({
    mutationFn: deletData,
    // Optimstic ui
    onMutate: async (id) => {
      // 1. همه کوئری‌های مربوط به todos رو pause می‌کنیم
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      // 2. دیتا فعلی رو نگه می‌داریم برای احتمال نمایش دادن در ارور
      const previousTodos = queryClient.getQueryData({
        queryKey: ["posts"],
      });

      // 3. لیست رو بلافاصله و به‌صورت خوش‌بینانه آپدیت می‌کنیم
      queryClient.setQueryData({ queryKey: ["posts"] }, (old = []) =>
        old.filter((todo) => todo.id !== id)
      );

      // 4. این مقدار رو برای استفاده در ارور برمی‌گردونیم
      return { previousTodos };
    },
    // اگر خطا خورد، لیست قبلی رو برمی‌گردونیم
    onError: (err, id, context) => {
      queryClient.setQueryData({ queryKey: ["posts"] }, context?.previousTodos);
    },

    onSettled: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  return (
    <button
      type="button"
      className="bg-red-500 hover:bg-red-700 transition-colors duration-500 px-2 py-1 rounded-md"
      onClick={async () => await mutateAsync()}
    >
      delete
    </button>
  );
}
