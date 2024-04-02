import PropertyCard from "./PropertyCard";

const PropertyDisplay = () => {
    return(
        <div className="h-[90%] w-[90%] rounded-xl border-2 border-[#dfdfdf]">
            <p className="ml-[50px] mt-[20px] text-[25px] font-semibold">My Properties</p>
            <div className="w-[100%] h-[600px] overflow-y-auto flex flex-col justify-center items-center mt-[20px] pt-[250px]" >
                <PropertyCard name="Property 1" location = "Ganemulla"/>
                <PropertyCard name="Property 1" location = "Ganemulla"/>
                <PropertyCard name="Property 1" location = "Ganemulla"/>
                <PropertyCard name="Property 1" location = "Ganemulla"/>
                <PropertyCard name="Property 1" location = "Ganemulla"/>
            </div>
        </div>
    )
}

export default PropertyDisplay;