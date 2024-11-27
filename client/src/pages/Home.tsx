import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="flex justify-center items-center p-20">
        <Link to="/dashboard?tab=dash">
            <Button className="text-xl">Go to Dashboard</Button>
        </Link>
    </div>
  )
}

export default Home