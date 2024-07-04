import { Helmet } from "react-helmet-async"
import AddRoomForm from "../../Form/AddRoomForm";

const AddRoom = () => {
    const handleSubmit = e =>{
        e.preventDefault()
        const form = e.target
        const location = form.location.value
        const category = form.category.value
        const title = form.title.value
        const to = dates.endDate
        const from = dates.startDate
        const price = form.price.value
        const guests = form.total_guest.value
        const bathrooms = form.bathrooms.value
        const description = form.description.value
        const bedrooms = form.bedrooms.value
        const image = form.image.files[0]
    }
    return (
        <>
        <Helmet><title>Add Room | Dashboard</title></Helmet>

        {/* Form */}

        <AddRoomForm handleSubmit={handleSubmit}/>
            
        </>
    );
};

export default AddRoom;