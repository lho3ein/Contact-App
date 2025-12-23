"use client";
import { postt } from "@/Components/Context/TodoContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { X } from "lucide-react";

export default function DeleteBtn({ item }: { item: postt }) {
  const queryClient = useQueryClient();

  const deletData = async () => {
    await fetch(
      `https://6624413d04457d4aaf9bf32a.mockapi.io/Contact/${item.id}`,
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
    onMutate: async (id: number) => {
      // 1. همه کوئری‌های مربوط به todos رو pause می‌کنیم
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      // 2. دیتا فعلی رو نگه می‌داریم برای احتمال نمایش دادن در ارور
      const previousTodos = queryClient.getQueryData(["posts"]);

      // 3. لیست رو بلافاصله و به‌صورت خوش‌بینانه آپدیت می‌کنیم
      queryClient.setQueryData<postt[]>(["posts"], (old = []) =>
        old.filter((item) => item.id !== id)
      );

      // 4. این مقدار رو برای استفاده در ارور برمی‌گردونیم
      return { previousTodos };
    },
    // اگر خطا خورد، لیست قبلی رو برمی‌گردونیم
    onError: (err, id, context) => {
      queryClient.setQueryData(["posts"], context?.previousTodos);
    },

    onSettled: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  return (
    <button
      className="md:w-6 md:h-6 w-5 h-5 text-red-700 hover:text-red-800"
      onClick={async () => await mutateAsync(item.id)}
    >
      <X />
    </button>
  );
}
