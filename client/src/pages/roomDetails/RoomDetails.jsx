import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";


const RoomDetails = () => {
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [room, setRoom ] = useState({})
    useEffect(() =>{
        setLoading(true)
        fetch('/rooms.json')
        .then(res => res.json())
        .then(data =>{
            const singleRoom = data.find(item => item._id === id)
            setRoom(singleRoom)
            setLoading(false)
        })
    },[id])
    if (loading) return <Loader/>
    return (
        <>
            <Container>
        <Helmet><title>{room.title}</title></Helmet>
                <h3>{room.title}</h3>
            </Container>
        </>
    );
};

export default RoomDetails;