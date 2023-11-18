import { MdOutlineEventNote } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlinePersonSearch } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { LiaChartBarSolid } from "react-icons/lia";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaChildren } from "react-icons/fa6";
import { CiMoneyBill } from "react-icons/ci";
export const MainMenu = [
  {
    name: "Dashboard",
    Link: "/",
    icon: <LiaChartBarSolid />,
  },

  {
    name: "Academy Management",
    Link: "/management",
    icon: <HiOutlineAcademicCap />,
  },
];

export const moreMenu = [
  {
    name: "Students",
    Link: "/",
    icon: <FaChildren />,
  },
  {
    name: "Fee Payment",
    Link: "/products",
    icon: <CiMoneyBill />,
  },

  {
    name: "Enquiries",
    Link: "/",
    icon: <MdOutlinePersonSearch />,
  },
  {
    name: "Coaches",
    Link: "/",
    icon: <FaChalkboardTeacher />,
  },
  {
    name: "Schedule",
    Link: "/",
    icon: <MdOutlineEventNote />,
  },
];

export const revenueData = [
  {
    Fee_Recived: 20000,
    month: "Jun 23",
  },
  {
    Fee_Recived: 45000,
    month: "Jul 23",
  },
  {
    Fee_Recived: 55000,
    month: "Aug 23",
  },
];
export const activeStudentsData = [
  {
    Active_Students: 45,
    month: "Jun 23",
  },
  {
    Active_Students: 55,
    month: "Jun 23",
  },
  {
    Active_Students: 75,
    month: "Jun 23",
  },
];

export const FeeSummary = [
  { name: "AMOUNT RECEIVED", value: 1000 },
  { name: "AMOUNT  PENDING", value: 200 },
];

export const COLORS = ["#465B64", "#FF6C6C"];

export const SCHEDULEButtons = [
  { name: "ALL", Link: "all" },
  { name: "Classes", Link: "classes" },
  { name: "Meetings", Link: "meetings" },
  { name: "Events", Link: "events" },
];

export const scheduleData = [
  {
    name: "C",
    date: "Fri,01 Sep",
    time: "3:00 PM - 4:00 PM",
    Class: "Beginners Badminton Class",
    coach: "Saige Fuentes",
  },
  {
    name: "C",
    date: "Fri,01 Sep",
    time: "6:00 PM - 7:30 PM",
    Class: "Intermediate Badminton Class",
    event: "Fitness Test",
    coach: "Leighton Kramer",
  },
  {
    name: "M",
    date: "Sat,02 Sep",
    time: "6:00 AM - 7:30 AM",
    Class: "Staff Meeting",
    coach: "Jaylen Blackwell",
  },
  {
    name: "c",
    date: "Sat,02 Sep",
    time: "3:00 PM - 4:00 PM",
    Class: "Beginners Badminton Class",
    coach: "Saige Fuentes",
  },
];
