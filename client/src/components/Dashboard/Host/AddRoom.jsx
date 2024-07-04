import { Helmet } from "react-helmet-async"
import AddRoomForm from "../../Form/AddRoomForm";
import { useState } from "react";

const AddRoom = () => {
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      })
    const handleSubmit = async e =>{
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
    // Handle Date change from reat-date-range calender
    const handleDates = ranges =>{
        setDates(ranges.selection)
    }
    return (
        <>
        <Helmet><title>Add Room | Dashboard</title></Helmet>

        {/* Form */}

        <AddRoomForm handleSubmit={handleSubmit} handleDates={handleDates} dates={dates}/>
            
        </>
    );
};

export default AddRoom;