import {useNavigate, useSearchParams} from 'react-router-dom'
import qs from 'query-string'

const CategoryBox = ({ label, icon: Icon, selected }) => {
const [params, setParams] = useSearchParams()
const navigate = useNavigate()

console.log(selected);

const handleClick = () =>{
    console.log(label);
    let currentQuery = {}
    if (params) {
        currentQuery = qs.parse(params.toString())
    }

        const updatedQuery = {...currentQuery , category:label}

        const url = qs.stringifyUrl({
            url:'/',
            query:updatedQuery
        })
        navigate(url)
    
    }
    params.get('category')

  return (
    <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3border-b-2 hover:text-neutral-800 cursor-pointer border-b-2 ${selected ? 'border-b-neutral-800 text-neutral-800' : ''}`}>
      <Icon size={26}/>
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
