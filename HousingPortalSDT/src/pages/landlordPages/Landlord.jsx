import Container from '../../components/container/container';
import EmptyRegistration from '../../components/EmptyRegistration';
import PropertyCard from '../../components/PropertyCard'

const Landlord = () => {
    return(
        <Container>
            
            <div className='w-[100%] h-[100%] flex flex-row items-center justify-center'>
                <div className='h-[100%] w-[30%] bg-black'>
                    {/*For left side menu*/}
                    
                </div>
                <div className='h-[100%] w-[70%] flex flex-col justify-center items-center'>
                    {/*For other data desplaying*/}
                    {/* <EmptyRegistration/> */}
                    <PropertyCard image = '' name = 'Property 1' location ='Pitipana, Homagama'/>
                    <PropertyCard image = '' name = 'Property 2' location ='Pitipana, Homagama'/>
                    <PropertyCard image = '' name = 'Property 3' location ='Pitipana, Homagama'/>
                </div>
            </div>
        </Container>
    )
}

export default Landlord;