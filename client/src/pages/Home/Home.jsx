import { Helmet } from "react-helmet-async"
import Rooms from "../../components/Rooms/Rooms"
import Categories from "../../components/categories/Categories"

const Home = () => {
  return (
    <div>
      <Helmet><title>StayVista</title></Helmet>
      <Categories/>
      <Rooms/>
    </div>
  )
}

export default Home
