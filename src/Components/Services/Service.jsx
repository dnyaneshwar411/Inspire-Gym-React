const Service = ({ service }) => {
    return (
        <div className='service' style={{ backgroundImage: `url(${service.backgroundImage})` }}>
            <div className="service-wrapper flex"
                onMouseOver={e => e.target.style.backgroundImage = 'rgba(0,0,0,0)'}>
                <i className={service.icon}></i>
                <h4>{service.serviceHeading}</h4>
            </div>
        </div >
    )
}
export default Service;