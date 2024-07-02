import Calender from "../Calender/Calender";


const RoomReservation = ({room}) => {
    return (
        <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
            <div className="flex items-center gap-1 p-4">
                <div className="text-2xl font-semibold">${room?.price} <span className="text-sm">Night</span></div>
            </div>
            <Calender/>
        </div>
    );
};

export default RoomReservation;