import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { FaPlus } from "react-icons/fa6";

const roles = [
  {
    'role_id': 'RID001',
    'role_name': 'Admin',
    'total_count': 1
  },
  {
    'role_id': 'RID002',
    'role_name': 'Manager',
    'total_count': 10
  },
  {
    'role_id': 'RID003',
    'role_name': 'Employee',
    'total_count': 20
  }
]
const Roles = () => {
  return (
    <div className="flex flex-col gap-20 max-h-[750px] scorll p-10 w-full border mx-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-xl text-black">Role ID</TableHead>
            <TableHead className="text-xl text-black">Role</TableHead>
            <TableHead className="text-xl text-black">Total Count</TableHead>
            <TableHead className="text-xl text-black">Edit</TableHead>
            <TableHead className="text-xl text-black">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.role_id}>
              <TableCell className="font-medium">{role.role_id}</TableCell>
              <TableCell className="text-blue-600">{role.role_name}</TableCell>
              <TableCell className="">{role.total_count}</TableCell>
              <TableCell>
                <Button className="bg-green-600">Edit</Button>
              </TableCell>
              <TableCell>
                <Button variant='destructive'>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button className="w-fit"><FaPlus />Add New Role</Button>
    </div>
  )
}

export default Roles