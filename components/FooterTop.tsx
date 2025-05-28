import { MapPin, Phone } from "lucide-react";
import React from "react";

interface Props {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}
const data: Props[] = [
  {
    title: "Visit Us",
    subtitle: "New York, USA",
    icon: (
      <MapPin className="text-gray-500 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: "Call Us",
    subtitle: "123 456 789",
    icon: (
      <Phone className="text-gray-500 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: "WWorking Hours",
    subtitle: "Mon - Fri: 9am - 5pm",
    icon: (
      <MapPin className="text-gray-500 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    // https://youtu.be/3hepJA56KF8?t=16764
    title: "Email Us",
    subtitle: "abc@gmail.com",
    icon: (
      <MapPin className="text-gray-500 group-hover:text-darkColor transition-colors" />
    ),
  },
];
const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
      {data?.map((item, index) => (
        <ContactItem
          key={index}
          icon={item?.icon}
          title={item?.title}
          subtitle={item?.subtitle}
        />
      ))}
    </div>
  );
};
const ContactItem = ({ icon, title, subtitle }) => {
  return (
    <div className="flex items-center gap-3 group hover:gb-gray-50 p-4 transition-colors">
      {icon}
      <div>
        <h3 className="font-semibold text-grey-900 group-hover:text-darkColor transition-colors">
          {title}
        </h3>
      <p className="text-gray-600 text-sm mt-1 group-hover:text-grey-900 transition-colors">
        {subtitle}
      </p>
      </div>
    </div>
  );
};

export default FooterTop;

// https://youtu.be/3hepJA56KF8?t=16832
