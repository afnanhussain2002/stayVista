import { id } from "date-fns/locale";
import axiosSecure from ".";

// create payment intent

export const createPaymentIntent = async price => {
    const {data} = await axiosSecure.post('/create-payment-intent', price)
    return data;
}
// save booking info in db
export const saveBookingInfo = async paymentInfo => {
    const {data} = await axiosSecure.post('/bookings', paymentInfo)
    return data;
}
// update room status
export const updateStatus = async(id, status) => {
    const {data} = await axiosSecure.patch(`/rooms/status/${id}`, status)
    return data;
}
// get all bookings
export const getBookings = async(email) => {
    const {data} = await axiosSecure(`/bookings?email=${email}`)
    return data;
}
// get all bookings of host
export const getHostBookings = async(email) => {
    const {data} = await axiosSecure(`/bookings/host?email=${email}`)
    return data;
}

