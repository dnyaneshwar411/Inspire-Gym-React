export function SubscriptionPlan({ plan }) {
    return (
        <div className='plan'>
            <div className="plan-name"><h3>{plan.planName}</h3></div>
            <p className="plan-description">{plan.planDescription}</p>
            <div className="plan-pricing"><span className='text-highlighter'>{plan.planPricing} /</span> month</div>
            <hr />
            <ul>
                {plan.planBenefits.map((benefit, index) => (<li key={index}><i className="fa-solid fa-check"></i> {benefit}</li>))}
            </ul>
            <hr />
            <a href="tel: +91 9067183889"><button className="btn-primary">Call Now</button></a>
        </div>
    )
}