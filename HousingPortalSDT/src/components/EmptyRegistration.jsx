import Emptybox2 from '../assets/emptybox2.svg'
import GloButton from '../components/GloButton'
import { useNavigate } from 'react-router-dom';

const EmptyRegistration = () => {
    const navigator = useNavigate();
    return(
        <div className="w-[100%] h-[600px] flex items-center justify-center">
            <div className="w-[800px] h-[80%] border-2 border-dashed border-gray-400 bg-gray-50 rounded-[25px] flex flex-col items-center justify-center" >
                <img src={Emptybox2} className='h-[100px]' />
                <p className='mt-[10px] text-[rgba(0,0,0,0.5)]'>You Haven’t Published Anything yet</p>
                <GloButton name = 'Register a Property' onclick = {() => {navigator('/editdashboard')}}/>
            </div>
        </div>
    );
};

export default EmptyRegistration;

