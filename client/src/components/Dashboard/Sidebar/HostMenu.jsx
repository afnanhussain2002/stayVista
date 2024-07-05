import { IoHome } from "react-icons/io5";
import MenuItem from "./MenuItem";
import { MdMapsHomeWork, MdOutlineManageHistory } from "react-icons/md";

const HostMenu = () => {
  return (
    <>
      <MenuItem icon={IoHome} label="Add Rome" address="add-room" />
      <MenuItem icon={MdMapsHomeWork} label="My Listing" address="my-listing" />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Bookings"
        address="manage-bookings"
      />
    </>
  );
};

export default HostMenu;
