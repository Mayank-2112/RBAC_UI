import DashboardCard from "./DashboardCard"
import { HiMiniUserGroup } from "react-icons/hi2";
import { BiSolidUserBadge } from 'react-icons/bi';
import { AiFillProject } from 'react-icons/ai';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
const users = [
  {
    "user_id": "UID001",
    "user_name": "Emma Johnson",
    "user_mail": "emma.johnson@example.com",
    "role": "Employee",
    "status": 'active',
  },
  {
    "user_id": "UID002",
    "user_name": "Liam Smith",
    "user_mail": "liam.smith@example.net",
    "role": "Employee",
    "status": 'active',
  },
  {
    "user_id": "UID003",
    "user_name": "Olivia Brown",
    "user_mail": "olivia.brown@example.org",
    "role": "Manager",
    "status": 'active',
  },
  {
    "user_id": "UID004",
    "user_name": "Noah Davis",
    "user_mail": "noah.davis@example.com",
    "role": "Employee",
    "status": 'active',
  },
  {
    "user_id": "UID005",
    "user_name": "Ava Martinez",
    "user_mail": "ava.martinez@example.co",
    "role": "Manager",
    "status": 'active',
  },
  {
    "user_id": "UID006",
    "user_name": "Elijah Taylor",
    "user_mail": "elijah.taylor@example.net",
    "role": "Employee",
    "status": 'inactive',
  },
  {
    "user_id": "UID007",
    "user_name": "Sophia Wilson",
    "user_mail": "sophia.wilson@example.org",
    "role": "Manager",
    "status": 'active',
  },

]
const projects =
  [
    {
      "project_id": "PID001",
      "project_name": "Website Redesign",
      "project_head": "Olivia Brown",
      "deadline": "2024-12-15"
    },
    {
      "project_id": "PID002",
      "project_name": "Mobile App Development",
      "project_head": "Liam Smith",
      "deadline": "2025-01-10"
    },
    {
      "project_id": "PID003",
      "project_name": "Blockchain Integration",
      "project_head": "Sophia Wilson",
      "deadline": "2025-02-20"
    },
    {
      "project_id": "PID004",
      "project_name": "AI Chatbot Implementation",
      "project_head": "Noah Davis",
      "deadline": "2025-03-05"
    },
    {
      "project_id": "PID005",
      "project_name": "E-commerce Platform",
      "project_head": "Emma Martinez",
      "deadline": "2025-04-01"
    }
  ]


const DashboardContent = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex h-auto justify-center items-start w-full pt-5 gap-20">
        <DashboardCard heading="Total Users" count="12" icon={HiMiniUserGroup} lastMonth="2" />
        <DashboardCard heading="Number of Roles" count="3" icon={BiSolidUserBadge} lastMonth="3" />
        <DashboardCard heading="Ongoing Projects" count="5" icon={AiFillProject} lastMonth="4" />
      </div>
      <div className="flex gap-8 px-8">
        <div className="w-3/5 border-2 p-5 rounded-xl flex flex-col gap-10 h-fit">
          <Table>
            <TableCaption className="text-blue-600 text-xl">A list of your recent users.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-lg text-black">User ID</TableHead>
                <TableHead className="text-lg text-black">Name</TableHead>
                <TableHead className="text-lg text-black">Mail ID</TableHead>
                <TableHead className="text-lg text-black">Role</TableHead>
                <TableHead className="text-lg text-black">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.user_id}>
                  <TableCell className="font-medium">{user.user_id}</TableCell>
                  <TableCell>{user.user_name}</TableCell>
                  <TableCell className="text-blue-600"><a href={`mailto:${user.user_mail}`}>{user.user_mail}</a></TableCell>
                  <TableCell className="">{user.role}</TableCell>
                  <TableCell className={`${user.status === 'active' ? 'text-green-600' : 'text-red-600'}`}>{user.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button variant='outline' className="self-center border border-blue-600">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2"><span>View All</span><IoIosArrowDown /> </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to='/dashboard?tab=employees'>Employee Records</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to='/dashboard?tab=managers'>Manager Records</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Button>


        </div>
        <div className="w-2/5 border-2 p-5 rounded-xl flex flex-col gap-10 h-fit">
          <Table>
            <TableCaption className="text-blue-600 text-xl">A list of your recent projects.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-black">Project ID</TableHead>
                <TableHead className="text-black">Project Title</TableHead>
                <TableHead className="text-black">Project Head</TableHead>
                <TableHead className="text-black">Deadline</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.project_id}>
                  <TableCell className="font-medium">{project.project_id}</TableCell>
                  <TableCell>{project.project_name}</TableCell>
                  <TableCell className="text-blue-600">{project.project_head}</TableCell>
                  <TableCell className="">{project.deadline}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Link to='/dashboard?tab=projects' className="flex justify-center">
            <Button variant='secondary' className="border border-blue-600 w-1/5 item-center">View All</Button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default DashboardContent