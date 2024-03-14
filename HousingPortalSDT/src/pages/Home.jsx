import Container from '../components/container/container';
import ImageSelector from '../components/imageSelector'
import ViewMap from '../components/viewmap'
const Home = () => {
  return (
    <Container>
      <div className='  mt-20 lg:mt-60 flex flex-col lg:flex-row border border-blue-600 gap-4'>
      <ImageSelector/>
      <ViewMap/>
    </div>
    </Container>
  );
};

export default Home;
