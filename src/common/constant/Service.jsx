import { CiShop } from "react-icons/ci";
import { FaConnectdevelop, FaPager, FaPiedPiper } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoIosSchool } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { MdAnimation } from "react-icons/md";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";

const size = 35

export const Services = [
  {
    icon: (
      <FaConnectdevelop
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
        
      />
    ),
    title: "Is there a free trial available?",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, repellat. Praesentium consectetur repellendus harum provident ad. Ducimus, ad consectetur? Distinctio inventore ad velit nihil debitis sapiente ipsum doloremque quaerat consectetur.",
  },
  {
    icon: (
      <MdAnimation
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Can I change my plan later?",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, repellat. Praesentium consectetur repellendus harum provident ad. Ducimus, ad consectetur? Distinctio inventore ad velit nihil debitis sapiente ipsum doloremque quaerat consectetur.",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "What is your cancellation policy?",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, repellat. Praesentium consectetur repellendus harum provident ad. Ducimus, ad consectetur? Distinctio inventore ad velit nihil debitis sapiente ipsum doloremque quaerat consectetur.",
  },
];

export const ServiceItem = [
  {
    title: 'Food Delivery',
    desc: 'Satisfy Your Hunger, Anytime, Anywhere. Bringing local street eats and restaurant favorites directly to your door.',
    icon : <FaPager className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Grocery Delivery',
    desc: 'Shop Smart, Get Fresh. Fast delivery of daily essentials and fresh produce from your favorite local markets.',
    icon : <ImProfile className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Express Parcel Services',
    desc: 'Quick Deliveries, No Hassle. Swift and secure city-wide package delivery for your personal or business needs.',
    icon : <IoDiamondOutline className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Transport',
    desc: 'One App, Many Services. Book rides easily and get to your destination with reliable local drivers.',
    icon : <CiShop className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Local-First Approach',
    desc: 'Built specifically for the Cambodian market with a deep understanding of local needs and preferences.',
    icon : <IoIosSchool className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Speed & Convenience',
    desc: 'Focus on speed, care, and convenience with real-time tracking and dependable service you can trust.',
    icon : <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />
  },

];

