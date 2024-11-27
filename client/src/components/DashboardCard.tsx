import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { IconType } from "react-icons";
import { FaLongArrowAltUp } from "react-icons/fa";

interface DashboardCardProps {
    heading: string;
    count: string;
    icon: IconType;
    lastMonth: string;
  }
  const DashboardCard: React.FC<DashboardCardProps> = ({ heading, count, icon: Icon,lastMonth }) => {
    return (
        <Card className="w-1/4">
            <CardHeader>
                <CardTitle className="text-2xl">{heading}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center px-10">
                <p className="text-2xl">{count}</p>
                <Icon className="text-blue-600 h-10 w-10"/>
            </CardContent>
            <CardFooter className="text-lg">
                <FaLongArrowAltUp className="text-green-600 h-5 w-5"/>
                {lastMonth}
                <p>&nbsp; Last Month</p>

            </CardFooter>
        </Card>

    )
}

export default DashboardCard