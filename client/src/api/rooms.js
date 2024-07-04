import axiosSecure from '.'

// get all rooms
export const getAllRooms = async() =>{
    const {data} = await axiosSecure('/rooms')
    return data
}
// get single room
export const getSingleRoom = async(id) =>{
    const {data} = await axiosSecure(`/room/${id}`)
    return data
}