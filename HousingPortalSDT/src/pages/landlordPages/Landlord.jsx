import Container from '../../components/container/container';
import EmptyRegistration from '../../components/EmptyRegistration'
import GloButton from '../../components/GloButton';
import PropertyCard from '../../components/PropertyCard'

const Landlord = () => {
    return(
        <Container>
            
            <div className='w-[100%] h-[100%] flex flex-row items-center justify-center'>
                <div className='h-[100%] w-[30%]  flex flex-col items-end'>
                    {/*For left side menu*/}
                    <div className='w-[80%] h-[50px] m- bg-slate-100 rounded-[10px] active:border active:border-1 active-border-y-indigo-500' >

                    </div>
                    <div className='w-[100%] h-[50px] bg-slate-100 rounded-[10px] active:border active:border-1 active-border-y-indigo-500'>

                    </div>
                    
                </div>
                <div className='h-[100%] w-[70%] flex flex-col justify-center items-start'>
                    {/*For other data desplaying*/}
                    <EmptyRegistration/>
                    {/* <PropertyCard image = '' name = 'Property 1' location ='Pitipana, Homagama'/>
                    <PropertyCard image = '' name = 'Property 2' location ='Pitipana, Homagama'/>
                    <PropertyCard image = '' name = 'Property 3' location ='Pitipana, Homagama'/> */}
                </div>
            </div>
        </Container>
    )
}

export default Landlord;