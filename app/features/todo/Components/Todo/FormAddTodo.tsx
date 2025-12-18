"use client";
export type newpostt = {
  firstname: string;
  lastname: string;
  phonenumber: string;
};
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

export default function FormAddTodo() {
  const queryClient = useQueryClient();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [statusWarning, setStatusWarning] = useState(false);

  const newItem: newpostt = {
    firstname: firstname,
    lastname: lastname,
    phonenumber: phonenumber,
  };
  const postData = async () =>
    await fetch(`https://6624413d04457d4aaf9bf32a.mockapi.io/Contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
  const { mutateAsync } = useMutation({
    mutationFn: postData,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ((firstname && phonenumber && lastname).length > 0) {
      await mutateAsync();
      setPhoneNumber("");
      setFirstname("");
      setLastname("");
    } else {
      setStatusWarning(true);
    }
  };
  return (
    <form
      className="flex flex-col items-start gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        name="firstname"
        value={firstname}
        onChange={(e) => (
          setStatusWarning(false), setFirstname(e.target.value)
        )}
        placeholder="First Name :"
        className="border-2 w-full px-3 py-2 rounded-md dark:bg-gray-800"
      />
      <input
        type="text"
        name="lastname"
        value={lastname}
        onChange={(e) => (setStatusWarning(false), setLastname(e.target.value))}
        placeholder="Last Name :"
        className="border-2 w-full px-3 py-2 rounded-md dark:bg-gray-800"
      />
      <input
        type="tel"
        name="description"
        placeholder="Phone Number :"
        value={phonenumber}
        onChange={(e) => (
          setStatusWarning(false), setPhoneNumber(e.target.value)
        )}
        className="border-2 w-full px-3 py-2 rounded-md resize-none dark:bg-gray-800"
      ></input>
      <p
        className={`${
          statusWarning ? "block" : "hidden"
        } text-gray-500 text-sm self-center`}
      >
        Title and Body should not be empty
      </p>
      <button
        type="submit"
        disabled={statusWarning}
        className={`disabled:opacity-40 bg-indigo-600 hover:bg-indigo-700 text-white self-center rounded-md bg-opacity-85 py-2 px-5 dark:bg-indigo-800 dark:hover:bg-indigo-900`}
      >
        Add Contact
      </button>
    </form>
  );
}
