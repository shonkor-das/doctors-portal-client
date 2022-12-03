
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    // const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <header
            style={{
                background: `url(${bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                bagkgoundAttachment: 'fixed'
            }}
            className='py-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className=" rounded-lg lg:w-1/2 shadow-2xl" alt='dentist chair' />
                    <div className='mr-8'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}

                        ></DayPicker>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;