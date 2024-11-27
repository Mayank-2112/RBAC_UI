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

const users = [
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID001",
    "user_name": "Emma Johnson",
    "user_mail": "emma.johnson@example.com",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID002",
    "user_name": "Liam Smith",
    "user_mail": "liam.smith@example.net",
    "role": "Employee",
    "status": "inactive"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID003",
    "user_name": "Olivia Brown",
    "user_mail": "olivia.brown@example.org",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID004",
    "user_name": "Noah Davis",
    "user_mail": "noah.davis@example.com",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID005",
    "user_name": "Ava Martinez",
    "user_mail": "ava.martinez@example.co",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID006",
    "user_name": "Elijah Taylor",
    "user_mail": "elijah.taylor@example.net",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID007",
    "user_name": "Sophia Wilson",
    "user_mail": "sophia.wilson@example.org",
    "role": "Employee",
    "status": "inactive"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID008",
    "user_name": "James Moore",
    "user_mail": "james.moore@example.com",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID009",
    "user_name": "Isabella Anderson",
    "user_mail": "isabella.anderson@example.co",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID010",
    "user_name": "Benjamin Thomas",
    "user_mail": "benjamin.thomas@example.net",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID011",
    "user_name": "Mia Jackson",
    "user_mail": "mia.jackson@example.org",
    "role": "Employee",
    "status": "inactive"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID012",
    "user_name": "Lucas White",
    "user_mail": "lucas.white@example.com",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID013",
    "user_name": "Charlotte Harris",
    "user_mail": "charlotte.harris@example.co",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID014",
    "user_name": "Henry Clark",
    "user_mail": "henry.clark@example.net",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID015",
    "user_name": "Amelia Hall",
    "user_mail": "amelia.hall@example.org",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID016",
    "user_name": "Ethan King",
    "user_mail": "ethan.king@example.com",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID017",
    "user_name": "Harper Lee",
    "user_mail": "harper.lee@example.net",
    "role": "Employee",
    "status": "inactive"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID018",
    "user_name": "Alexander Wright",
    "user_mail": "alexander.wright@example.org",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID019",
    "user_name": "Ella Scott",
    "user_mail": "ella.scott@example.com",
    "role": "Employee",
    "status": "inactive"
  },
  {
    "user_image": "https://example.com/default-user-image.png",
    "user_id": "EID020",
    "user_name": "Logan Harris",
    "user_mail": "logan.harris@example.co",
    "role": "Employee",
    "status": "active"
  }
]


const Employees = () => {
  return (
    <div className="flex max-h-[750px] scorll p-10 w-full border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-xl text-black">Employee</TableHead>
            <TableHead className="text-xl text-black">Employee ID</TableHead>
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
                <Button className="bg-green-600">Edit</Button>
              </TableCell>
              <TableCell>
                <Button variant='destructive'>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </div>
  )
}

export default Employees