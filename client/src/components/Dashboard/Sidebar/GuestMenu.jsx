import MenuItem from "./MenuItem";
import { BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from 'react-icons/gr'
import useRole from "../../../hooks/useRole";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import HostModal from "../../Modal/HostRequestModal/HostRequestModal";




const GuestMenu = () => {
    const [role] = useRole()
    const {user} = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () =>{
        setIsOpen(false)
    }
    // request to become a host
    const modalHandler = async() =>{
console.log('request for host');
    }
    return (
        <>
             <MenuItem
                icon={BsFingerprint}
                label='My Bookings'
                address='my-bookings'
              />
              <>
              
              </>
              { role === 'guest' && (
        <div onClick={() => setIsOpen(true)} className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
          <GrUserAdmin className='w-5 h-5' />

          <span className='mx-4 font-medium'>Become A Host</span>
        </div>
      )}
      <HostModal closeModal={closeModal} isOpen={isOpen} modalHandler={modalHandler}/>
        </>
    );
};

export default GuestMenu;