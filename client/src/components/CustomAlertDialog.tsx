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
import DatePicker from "./DatePicker";
import { Checkbox } from "./ui/checkbox";
interface DashboardCardProps {
    buttonType: string;
    content: string;
    trigger: React.ReactNode;
}
const CustomAlertDialog: React.FC<DashboardCardProps> = ({ buttonType, content, trigger }) => {
    var title: string = ''
    if (buttonType === 'edit' && content === 'Project') {
        title = 'Edit Project Details'
    }
    else if (buttonType === 'edit' && content === 'Employee') {
        title = 'Edit Employee Details'
    }
    else if (buttonType === 'edit' && content === 'Manager') {
        title = 'Edit Manager Details'
    }
    else if (buttonType === 'delete'){
        title = 'Are you sure you want to delete?'
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                {trigger}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className='text-2xl'>{title}</AlertDialogTitle>
                    {buttonType === 'delete' ? (
                        <AlertDialogDescription>

                        </AlertDialogDescription>
                    ):(
                
                    <AlertDialogDescription>
                        <p className='mb-5 text-xl'>Enter details carefully</p>
                        {content === 'Project' && (
                            <form className='mb-10'>
                                <div className='flex flex-col gap-8 '>
                                    <Input type='text' placeholder='Project Title' id='project_name' className='border-blue-600' />
                                    <Input type='text' placeholder='Project Head' id='project_head' className='border-blue-600' />
                                    <div className='flex justify-between items-center gap-10'>
                                        <DatePicker />
                                        <Input type='number' placeholder='total team members' id='team_count' className='w-3/5 border-blue-600' />
                                    </div>
                                </div>
                            </form>
                        )}
                        { (content === 'Employee' || content === 'Manager') && (
                            <form className='mb-10'>
                            <div className='flex flex-col gap-8 '>
                              <Input type='text' placeholder={`${content} Name`} id='user_name' className='border-blue-600'/>
                              <Input type='email' placeholder={`${content} Mail`} id='user_mail' className='border-blue-600'/>
                              <div className='flex justify-between items-center gap-3'>
                                <p className='text-lg'>Role:</p>
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
                          
                        )}

                    </AlertDialogDescription>
                    )}
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>
                        {buttonType === 'delete' ? 'Not Sure' : 'Cancel'}
                    </AlertDialogCancel>
                    <AlertDialogAction>
                        {buttonType === 'delete' ? "Yes I'm Sure" : 'Submit'}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default CustomAlertDialog