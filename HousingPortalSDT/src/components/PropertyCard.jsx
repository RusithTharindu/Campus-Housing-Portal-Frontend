import refImage from '../assets/refimage.jpg'
import LocationIcon from '../assets/LocationIcon.svg'
import TextArrow from '../assets/textArrow.svg'

const PropertyCard = (props) => {
    return(
        <div className="bg-[#F1F1F1] w-[700px] h-[150px] p-[20px] m-[10px] rounded-[15px] flex flex-row">  
            <div className="w-[30%] h-[100%] flex items-center justify-center">
                {/*Image Container*/}
                <img src={refImage} alt="" className='h-[100%] w-[100%] rounded-[10px]'/>
            </div>
            <div className="w-[50%] h-[100%] pl-[20px] pt-[5px]">
                {/*Content*/}
                <p className='text-[20px] font-semibold'>{props.name}</p>
                <p className='text-[15px] font-light flex items-center'><img src={LocationIcon} alt="" className='h-[20px] mr-[5px]'/>{props.location}</p>
            </div>
            <div className="w-[20%] h-[100%] text-[13px] pl-[15px] pt-[10px] text-[#0057FF] ">
                {/*View Details Button*/}
                <a href='#' className='hover:underline flex items-center '>View Details <img src={TextArrow} alt="" className='h-[8px] w-[10px] ml-[2px]'/></a>
            </div>
        </div>
    )
}
export default PropertyCard;