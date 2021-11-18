import { Image } from 'react-bootstrap';
import banner from './images/banner.jpg';
import banner2 from './images/banner2.jpg';
import banner3 from './images/banner3.jpg';

const Home = () => {
    return ( 
        <div className="container bg-light">
            <h3 className='text-center mt-2'>Welcome To Product Management System Home Page !!</h3>
            <br/>
            <div className='card card-body mt-5'>
                <section>
                    <h4>
                        <ul>
                            <li>This is a Full stack React/Spring Boot responsive application.</li>
                            <li>You can resize your browser width to see the responsive behaviour.</li>
                            <li>In this app, you can create a new product, update the existing product and delete the specific product too.</li>
                            <li>Click on the Product tab to see the list of available products I have. </li>
                        </ul>
                    </h4>
                </section>
                <div className='d-inline-block text-center'>
                    <Image className='mt-5 px-2'
                        src={banner}
                        width="300px"
                        height="300px"
                    />
                    <Image className='mt-5 px-2'
                        src={banner2}
                        width="300px"
                        height="300px"                    
                    />
                    <Image className='mt-5 px-2'
                        src={banner3}
                        width="300px"
                        height="300px"
                    />                    
                </div>
            </div>

        </div>
     );
}
 
export default Home;