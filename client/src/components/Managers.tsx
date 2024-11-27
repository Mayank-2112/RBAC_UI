import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"
import CustomAlertDialog from "./CustomAlertDialog"

const users = [
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "MID001",
    "user_name": "Emma Johnson",
    "user_mail": "emma.johnson@example.com",
    "role": "Manager",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "MID002",
    "user_name": "Liam Smith",
    "user_mail": "liam.smith@example.net",
    "role": "Manager",
    "status": "inactive"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "MID003",
    "user_name": "Olivia Brown",
    "user_mail": "olivia.brown@example.org",
    "role": "Manager",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "MID004",
    "user_name": "Noah Davis",
    "user_mail": "noah.davis@example.com",
    "role": "Manager",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "MID005",
    "user_name": "Ava Martinez",
    "user_mail": "ava.martinez@example.co",
    "role": "Manager",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "MID006",
    "user_name": "Elijah Taylor",
    "user_mail": "elijah.taylor@example.net",
    "role": "Manager",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "MID007",
    "user_name": "Sophia Wilson",
    "user_mail": "sophia.wilson@example.org",
    "role": "Manager",
    "status": "inactive"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "MID008",
    "user_name": "James Moore",
    "user_mail": "james.moore@example.com",
    "role": "Manager",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "MID009",
    "user_name": "Isabella Anderson",
    "user_mail": "isabella.anderson@example.co",
    "role": "Manager",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "MID010",
    "user_name": "Benjamin Thomas",
    "user_mail": "benjamin.thomas@example.net",
    "role": "Manager",
    "status": "active"
  },
  
]


const Managers = () => {
  return (
    <div className="flex max-h-[750px] scorll p-10 w-full border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-xl text-black">Manager</TableHead>
            <TableHead className="text-xl text-black">Manager ID</TableHead>
            <TableHead className="text-xl text-black">Name</TableHead>
            <TableHead className="text-xl text-black">Mail ID</TableHead>
            <TableHead className="text-xl text-black">Role</TableHead>
            <TableHead className="text-xl text-black">Status</TableHead>
            <TableHead className="text-xl text-black">Edit</TableHead>
            <TableHead className="text-xl text-black">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.user_id}>
              <TableCell>
                <Avatar>
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>{user.user_id}</AvatarFallback>
                </Avatar>

              </TableCell>
              <TableCell className="font-medium">{user.user_id}</TableCell>
              <TableCell>{user.user_name}</TableCell>
              <TableCell className="text-blue-600"><a href={`mailto:${user.user_mail}`}>{user.user_mail}</a></TableCell>
              <TableCell className="">{user.role}</TableCell>
              <TableCell className={`${user.status === 'active' ? 'text-green-600' : 'text-red-600'}`}>{user.status}</TableCell>
              <TableCell>
                <CustomAlertDialog buttonType="edit" content="Manager" trigger={<Button className="bg-green-600 hover:bg-green-500">Edit</Button>}/>
              </TableCell>
              <TableCell>
                <CustomAlertDialog buttonType="delete" content="Project" trigger={<Button variant='destructive'>Delete</Button>}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </div>
  )
}

export default Managers