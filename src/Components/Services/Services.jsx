import Service from './Service';
import './services.css'
import ServiceImage1 from '/assets/service-1.jpg';
import ServiceImage2 from '/assets/person-1.jpg';
import ServiceImage3 from '/assets/service-3.jpg';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: 'fa-regular fa-heart',
            serviceHeading: 'HEALTH',
            backgroundImage: ServiceImage1
        }, {
            id: 2,
            icon: 'fa-solid fa-dumbbell',
            serviceHeading: 'WORKOUT',
            backgroundImage: ServiceImage2
        }, {
            id: 3,
            icon: 'fa-solid fa-headphones',
            serviceHeading: 'FUN & ADVENTURE',
            backgroundImage: ServiceImage3
        }
    ]
    return (
        <div id="services">
            <div className="flex service-container">
                {services.map((service, index) => (<Service key={index} service={service} />))}
            </div>
        </div>
    )
}
export default Services;