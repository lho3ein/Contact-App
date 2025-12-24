// import { postt } from "@/Components/Context/TodoContext";
// import { ColumnDef } from "@tanstack/react-table";

// export const columns: ColumnDef<postt>[] = [
//   {
//     accessorKey: "id",
//     header: "ID",
//     cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
//   },
//   {
//     accessorKey: "fullname",
//     header: () => <div className="text-start">Fullname</div>,
//     cell: ({ row }) => (
//       <div className="lowercase">{row.getValue("fullname")}</div>
//     ),
//   },
//   {
//     accessorKey: "phonenumber",
//     header: () => <div className="text-center">Phone Number</div>,
//     cell: ({ row }) => (
//       <div className="text-center font-medium">
//         {row.getValue("phonenumber")}
//       </div>
//     ),
//   },
//   {
//     accessorKey: "action",
//     header: () => <div className="text-center">Action</div>,
//     cell: () => {
//       return (
//         <div className="md:px-6 px-4 py-3 md:py-4 text-sm flex flex-row gap-1 items-center justify-center text-white">
//           {/* <DeleteBtn item={item} />
//           <EditButton item={item} /> */}
//         </div>
//       );
//     },
//   },
// ];
