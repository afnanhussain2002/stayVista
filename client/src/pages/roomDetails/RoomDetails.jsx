import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo/RoomInfo";

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
        <div>
        <div className="flex flex-col gap-6"> <Header roomData={room}/> </div>
        {/* <div className=""><RoomInfo roomData={room}/></div>j */}
        {/* Calender */}
        </div>

     
      </Container>
    </>
  );
};

export default RoomDetails;
