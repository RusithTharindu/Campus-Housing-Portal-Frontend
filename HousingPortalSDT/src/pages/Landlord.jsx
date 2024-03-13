import Container from '../components/container/container'
import EmptyRegistration from '../components/EmptyRegistration'

const Landlord = () => {
    return(
        <Container>
            <div className='w-[100%] h-[100%] flex flex-row items-center justify-center'>
                <div className='h-[100%] w-[30%] bg-black'>
                    {/*For left side menu*/}
                    
                </div>
                <div className='h-[100%] w-[70%] bg-pink flex'>
                    {/*For other data desplaying*/}
                    <EmptyRegistration/>
                </div>
            </div>
        </Container>
    )
}

export default Landlord;