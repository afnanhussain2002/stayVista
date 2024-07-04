import { useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservaton/RoomReservation";

const RoomDetails = () => {
  const room = useLoaderData()

  return (
    <>
      <Container>
        <Helmet>
          <title>{room.title}</title>
        </Helmet>
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-6">
            {" "}
            <Header roomData={room} />{" "}
          </div>

          <div className="mt-12 gap-10 grid grid-cols-1 lg:grid-cols-7">
            {/* Room Info */}
            <RoomInfo roomData={room} />
            {/* Calender */}
            <div className="md:col-span-3 order-first md:order-last mb-10">
           <RoomReservation room={room}/>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RoomDetails;
