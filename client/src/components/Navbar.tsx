import { Button } from './ui/button'
import { FaPlus } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import DatePicker from './DatePicker';
import { Checkbox } from './ui/checkbox';

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between items-center px-14 py-4 border-b-2 shadow-md '>
        <h1 className='font-cav text-4xl font-extrabold'>RBAC</h1>
        <div className='flex items-center gap-5'>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button><FaPlus />Project</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className='text-2xl'>Project Details</AlertDialogTitle>
                <AlertDialogDescription>
                  <p className='mb-5 text-xl'>Enter details carefully</p>
                  <form className='mb-10'>
                    <div className='flex flex-col gap-8 '>
                      <Input type='text' placeholder='Project Title' id='project_name' className='border-blue-600'/>
                      <Input type='text' placeholder='Project Head' id='project_head' className='border-blue-600'/>
                      <div className='flex justify-between items-center gap-10'>
                      <DatePicker/>
                      <Input type='number' placeholder='total team members' id='team_count' className='w-3/5 border-blue-600'/>
                      </div>
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

          <AlertDialog>
            <AlertDialogTrigger>
              <Button><FaPlus />User</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className='text-2xl'>User Details</AlertDialogTitle>
                <AlertDialogDescription>
                  <p className='mb-5 text-xl'>Enter details carefully</p>
                  <form className='mb-10'>
                    <div className='flex flex-col gap-8 '>
                      <Input type='text' placeholder='User Name' id='user_name' className='border-blue-600'/>
                      <Input type='email' placeholder='User Mail' id='user_mail' className='border-blue-600'/>
                      <div className='flex justify-between items-center gap-3'>
                        <p className='text-lg'>User Role:</p>
                        <div className='flex gap-3 items-center'>
                          <Checkbox/>
                          <label htmlFor="employee">Employee</label>
                          <Checkbox/>
                          <label htmlFor="manager">Manager</label>
                          <Checkbox/>
                          <label htmlFor="admin">Admin</label>
                        </div>
                      </div>
                      <div className='flex justify-between items-center gap-3'>
                        <p className='text-lg'>Status:</p>
                        <div className='flex gap-3 items-center'>
                          <Checkbox/>
                          <label htmlFor="active">Active</label>
                          <Checkbox/>
                          <label htmlFor="inactive">Inactive</label>
                        </div>
                      </div>
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

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>Admin</AvatarFallback>
          </Avatar>

        </div>
      </div>
    </>
  )
}

export default Navbar