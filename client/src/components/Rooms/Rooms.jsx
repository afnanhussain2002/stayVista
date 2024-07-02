import { useEffect, useState } from "react";
import Container from "../Shared/Container";
import RoomCard from "./RoomCard";


const Rooms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() =>{
        fetch('./rooms.json')
        .then(res => res.json())
        .then(data =>setRooms(data))
    },[])
    return (
        <div>
            <Container>
                <div className="grid pt-4 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {rooms.map(room => <RoomCard room={room} key={room._id}></RoomCard>)}
                </div>
            </Container>
        </div>
    );
};

export default Rooms;