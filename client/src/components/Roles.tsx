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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from './ui/input';
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
      <AlertDialog>
        <AlertDialogTrigger>
        <Button className="w-fit"><FaPlus />Add New Role</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className='text-2xl'>Role</AlertDialogTitle>
            <AlertDialogDescription>
              <p className='mb-5 text-xl'>Enter new role name carefully</p>
              <form className='mb-10'>
                <div className='flex flex-col gap-8 '>
                  <Input type='text' placeholder='New Role' id='role_name' className='border-blue-600' />
                </div>
              </form>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Submit</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
    </div>
  )
}

export default Roles