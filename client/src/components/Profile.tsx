import { Button } from "./ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



const Profile = () => {

  return (
    <div className='max-w-lg mx-auto p-3 w-full'>

      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>

      <form className='flex flex-col gap-4'>


        <Avatar className='relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>Admin</AvatarFallback>
        </Avatar>



        <Input type='text' id='username' placeholder='username' value='John Doe' />

        <Input type='email' id='email' placeholder='email' value='johnDoe@example.com' />

        <Input type='password' id='password' placeholder='password' value='123456789' />

        <Button>Update</Button>


      </form>

      <div className="text-red-500 flex justify-between mt-5">
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default Profile