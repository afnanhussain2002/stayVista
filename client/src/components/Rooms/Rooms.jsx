import { useEffect, useState } from "react";
import Container from "../Shared/Container";
import RoomCard from "./RoomCard";
import { useSearchParams } from "react-router-dom";


const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    useEffect(() =>{
        fetch('./rooms.json')
        .then(res => res.json())
        .then(data =>{
            if (category) {
                const filterCategory = data.filter(room => room.category === category)
                setRooms(filterCategory)
            }else{
                setRooms(data)
            }
        })
    },[category])
    return (
        <div>
            <Container>
                <div className="grid pt-4 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {rooms.map(room => <RoomCard room={room} key={room._id}></RoomCard>)}
                </div>
            </Container>
        </div>
    );
};

export default Rooms;