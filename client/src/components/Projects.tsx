import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";

const projects = [
  {
    "project_id": "PID001",
    "project_name": "Website Redesign",
    "project_head": "Olivia Brown",
    "deadline": "2024-12-15",
    "status": "ongoing",
    "team_count": 6
  },
  {
    "project_id": "PID002",
    "project_name": "Mobile App Development",
    "project_head": "Liam Smith",
    "deadline": "2025-01-20",
    "status": "ongoing",
    "team_count": 5
  },
  {
    "project_id": "PID003",
    "project_name": "Marketing Campaign",
    "project_head": "Sophia Wilson",
    "deadline": "2025-02-10",
    "status": "completed",
    "team_count": 8
  },
  {
    "project_id": "PID004",
    "project_name": "Cloud Migration",
    "project_head": "Noah Davis",
    "deadline": "2024-12-30",
    "status": "ongoing",
    "team_count": 7
  },
  {
    "project_id": "PID005",
    "project_name": "E-commerce Platform",
    "project_head": "Emma Johnson",
    "deadline": "2025-03-15",
    "status": "completed",
    "team_count": 4
  },
  {
    "project_id": "PID006",
    "project_name": "Data Analysis Tool",
    "project_head": "James Moore",
    "deadline": "2025-04-01",
    "status": "ongoing",
    "team_count": 6
  },
  {
    "project_id": "PID007",
    "project_name": "AI Integration",
    "project_head": "Isabella Anderson",
    "deadline": "2025-02-28",
    "status": "ongoing",
    "team_count": 7
  },
  {
    "project_id": "PID008",
    "project_name": "Customer Portal",
    "project_head": "Elijah Taylor",
    "deadline": "2024-11-30",
    "status": "ongoing",
    "team_count": 5
  },
  {
    "project_id": "PID009",
    "project_name": "Content Management System",
    "project_head": "Charlotte Harris",
    "deadline": "2025-01-10",
    "status": "completed",
    "team_count": 8
  },
  {
    "project_id": "PID010",
    "project_name": "Cybersecurity Audit",
    "project_head": "Benjamin Thomas",
    "deadline": "2024-12-05",
    "status": "ongoing",
    "team_count": 4
  }
]

const Projects = () => {
  return (
    <div className="flex max-h-[750px] scorll p-10 w-full border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-xl text-black">Project ID</TableHead>
            <TableHead className="text-xl text-black">Project Title</TableHead>
            <TableHead className="text-xl text-black">Project Head</TableHead>
            <TableHead className="text-xl text-black">Deadline</TableHead>
            <TableHead className="text-xl text-black">Status</TableHead>
            <TableHead className="text-xl text-black">Team Count</TableHead>
            <TableHead className="text-xl text-black">Edit</TableHead>
            <TableHead className="text-xl text-black">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.project_id}>
              <TableCell className="font-medium">{project.project_id}</TableCell>
              <TableCell>{project.project_name}</TableCell>
              <TableCell className="text-blue-600">{project.project_head}</TableCell>
              <TableCell className="">{project.deadline}</TableCell>
              <TableCell className={`${project.status === 'completed' ? 'text-red-600' : 'text-green-600'}`}>{project.status}</TableCell>
              <TableCell className="">{project.team_count}</TableCell>
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

export default Projects