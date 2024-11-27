import { Sidebar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { HiUser, HiUserGroup, HiChartPie } from 'react-icons/hi';
import { GrUserManager } from 'react-icons/gr';
import { AiFillProject } from 'react-icons/ai';
import { BiSolidUserBadge } from 'react-icons/bi';
import { FcRules } from 'react-icons/fc';
import { FaSignOutAlt } from "react-icons/fa";

const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  const tabs = [
    { tabName: 'dash', label: 'Dashboard', icon: HiChartPie },
    { tabName: 'profile', label: 'Profile', icon: HiUser, badge: 'Admin' },
    { tabName: 'employees', label: 'Employee Records', icon: HiUserGroup },
    { tabName: 'managers', label: 'Manager Records', icon: GrUserManager },
    { tabName: 'projects', label: 'Projects', icon: AiFillProject },
    { tabName: 'roles', label: 'Roles', icon: BiSolidUserBadge },
    { tabName: 'permissions', label: 'Set Permissions', icon: FcRules },
  ]
  return (
    <Sidebar className="w-1/5 hidden md:block min-h-screen border-r-4">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1 items-start text-lg">
          {tabs.map(({ tabName, label, icon, badge }) => (
            <Link
              key={tabName}
              to={`/dashboard?tab=${tabName}`}
              className={`w-full items-start flex rounded-lg p-3 ${
                tab === tabName ? 'bg-blue-600 text-white' : 'bg-none border-none'
              }`}
            >
              <Sidebar.Item active={tab === tabName} icon={icon} as="div">
                {label} {badge && <Badge className={`${tab === 'profile' ? 'bg-white text-blue-600': 'bg-blue-600 text-white'}`}>{badge}</Badge>}
              </Sidebar.Item>
            </Link>
          ))}
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Link to={`/signOut`} className='text-lg flex items-start p-3 w-full'>
          <Sidebar.Item icon={FaSignOutAlt} as="div"> LogOut

              </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
