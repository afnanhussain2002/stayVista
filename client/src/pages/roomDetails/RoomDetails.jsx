import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo/RoomInfo";
import Calender from "../../components/RoomDetails/Calender/Calender";

const RoomDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [room, setRoom] = useState({});
  useEffect(() => {
    setLoading(true);
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const singleRoom = data.find((item) => item._id === id);
        setRoom(singleRoom);
        setLoading(false);
      });
  }, [id]);
  if (loading) return <Loader />;
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
           <Calender/>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RoomDetails;
