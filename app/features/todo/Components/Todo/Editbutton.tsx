"use client";
import { postt } from "@/Components/Context/TodoContext";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { cn } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SquarePen } from "lucide-react";
import { useState } from "react";
import { newpostt } from "./FormAddTodo";

export default function EditButton({ item }: { item: postt }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [statusWarning, setStatusWarning] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);

  const queryClient = useQueryClient();
  const newData: newpostt = {
    firstname: firstName,
    lastname: lastName,
    phonenumber: phoneNumber,
  };
  const PutData = async () => {
    const res = await fetch(
      `https://6624413d04457d4aaf9bf32a.mockapi.io/Contact/${item.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      }
    );
    if (res.ok) return res.json();
  };

  const { mutateAsync } = useMutation({
    mutationFn: PutData,
    onSuccess: () => (
      queryClient.invalidateQueries({ queryKey: ["posts"] }),
      setOpenStatus(false)
    ),
  });
  // e: FormEvent<HTMLFormElement>
  const clickHandler = async () => {
    // e.preventDefault();
    if ((firstName && lastName && phoneNumber).length > 0) {
      await mutateAsync();
      // setOpenStatus(false);
    } else {
      setStatusWarning(true);
    }
  };
  return (
    <Dialog open={openStatus} onOpenChange={setOpenStatus}>
      <form className="flex">
        <DialogTrigger asChild>
          <Button
            size={"icon_custom"}
            variant={"link"}
            className={cn("text-blue-500 hover:text-blue-700")}
            onClick={() => (
              setFirstName(item.firstname),
              setLastName(item.lastname),
              setPhoneNumber(item.phonenumber)
            )}
          >
            <SquarePen />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Contact</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">First Name</Label>
              <Input
                id="name-1"
                name="name"
                value={firstName}
                onChange={(e) => (
                  setStatusWarning(false), setFirstName(e.target.value)
                )}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Last Name</Label>
              <Input
                id="name-1"
                name="name"
                value={lastName}
                onChange={(e) => (
                  setStatusWarning(false), setLastName(e.target.value)
                )}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Phone Number</Label>
              <Input
                id="username-1"
                type="tel"
                name="username"
                value={phoneNumber}
                onChange={(e) => (
                  setStatusWarning(false), setPhoneNumber(e.target.value)
                )}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-800 text-white"
              onClick={clickHandler}
              disabled={statusWarning}
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
