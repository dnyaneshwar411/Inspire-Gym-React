import './../pages.css'
import { SubscriptionPlan } from './SubscriptionPlan';

const SubscriptionPage = () => {
    const plans = [{
        id: 1,
        planName: 'Pro',
        planDescription: 'Select best plan ensuring the a perfect match. Need more or less? Customize your subscription for a seamless fit!',
        planPricing: '₹500',
        planBenefits: [
            "Access to Gym Facilities",
            "Flexible Hours",
            "Locker Room Access",
            "Discounts on Classes",
        ]
    }, {
        id: 2,
        planName: 'Pro Plus',
        planDescription: 'Select best plan ensuring the a perfect match. Need more or less? Customize your subscription for a seamless fit!',
        planPricing: '₹800',
        planBenefits: [
            "Access to Gym Facilities",
            "24/7 Access",
            "Personal Training Session",
            "Nutrition Consultation",
            "Priority Class Booking",
            "Guest Passes",
        ]

    }, {
        id: 3,
        planName: 'Custom',
        planDescription: 'Select best plan ensuring the a perfect match. Need more or less? Customize your subscription for a seamless fit!',
        planPricing: 'From ₹900',
        planBenefits: [
            "Unlimited Personal Training",
            "Customized Nutrition Plan",
            "Access to Specialty Classes",
            "Monthly Health Checkups",
            "Exclusive Events",
            "Discounts on Merchandise",
        ]
    }]

    return (
        <div id="subscription-page">
            <div className="container">
                <h2>CHOOSE RIGHT SUBSCRIPTION PAGE</h2>
                <p>Select best plan ensuring the a perfect match. Need more or less? Customize your subscription for a seamless fit!</p>
                <div className="plans-container flex">
                    {plans.map((plan, index) => (<SubscriptionPlan plan={plan} key={index} />))}

                    {/* <div className='plan'></div>
                    <div className='plan'></div> */}
                </div>
            </div>
        </div>
    )
}

export default SubscriptionPage;