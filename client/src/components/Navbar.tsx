import { Button } from './ui/button'
import { FaPlus } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between items-center px-14 py-4 border-b-2 shadow-md '>
        <h1 className='font-cav text-4xl font-extrabold'>RBAC</h1>
        <div className='flex items-center gap-5'>
          <Button><FaPlus />Project</Button>
          <Button><FaPlus />User</Button>
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