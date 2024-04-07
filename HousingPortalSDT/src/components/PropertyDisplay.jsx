import PropertyCard from "./PropertyCard";
import axios from 'axios';



const PropertyDisplay = ({properties}) => {
    return(
        <div className="h-[90%] w-[90%] rounded-xl ">
            <p className="ml-[50px] mt-[20px] text-[25px] font-semibold">My Properties</p>
            <div className="w-[100%] h-[600px] overflow-y-auto flex flex-col justify-center items-center mt-[20px] pt-[250px]" >
                {
                    properties.map((property) => (
                        <PropertyCard name={property.title} location = {property.propertyLocation} isRented = {property.isRented}/>
                    ))
                }
                
            
            
            </div>
        </div>
    )
}

export default PropertyDisplay;