const ContactPage = () => {
    return (
        <div id="contact-page">
            <div className="container">
                <div className="wrapper flex">
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.275183871301!2d73.98769345687795!3d19.527632083311573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd08db7a25034d%3A0xe4ed7a15a8af7248!2sDhumalwadi%2C%20Maharashtra%20422601!5e0!3m2!1sen!2sin!4v1692435869358!5m2!1sen!2sin"
                            loading="lazy"></iframe>
                    </div>
                    <div className="contact-content">
                        <h2>CONTACT US</h2>
                        <form action="">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <textarea name="" rows={10} placeholder="Enter your Message"></textarea>
                            <button className="btn-primary">CONTACT</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="flex">

                </div>
            </div>
        </div>
    )
}

export default ContactPage;