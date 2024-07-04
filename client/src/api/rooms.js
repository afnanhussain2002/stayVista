import axiosSecure from '.'

// get all rooms
export const getAllRooms = async() =>{
    const {data} = await axiosSecure('/rooms')
    return data
}
// get all rooms for host which he added
export const getHostRooms = async(email) =>{
    const {data} = await axiosSecure(`/rooms/${email}`)
    return data
}

// get single room
export const getSingleRoom = async(id) =>{
    const {data} = await axiosSecure(`/room/${id}`)
    return data
}

// save a room data in database

export const addRoom = async roomData =>{
    const {data} = await axiosSecure.post('/rooms', roomData)
    return data
} 