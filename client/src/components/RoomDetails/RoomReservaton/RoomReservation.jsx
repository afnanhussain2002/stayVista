
import Button from "../../Button/Button";
import Calender from "../Calender/Calender";

const RoomReservation = ({ room }) => {
   /*  const totalDays = parseInt(formatDistance(new Date(room?.to), new Date(room?.from)))

    const totalPrice = totalDays * room?.price
   console.log(totalPrice); */
  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">
          ${room?.price} <span className="text-sm">Night</span>
        </div>
      </div>
      <div className="flex justify-center">
        <Calender />
      </div>
      <hr />
      <div className="p-4">
        <Button label={"Reserve"} />
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {room?.price}</div>
      </div>
    </div>
  );
};

export default RoomReservation;
