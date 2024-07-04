import { DateRange } from 'react-date-range';


const Calender = ({value}) => {
    return <DateRange
      ranges={[value]}
      rangeColors={['#f43f5e']}
      direction='vertical'
      showDateDisplay={false}
      
    />
    
};

export default Calender;