import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="container">
                <div className="row">
                    <div className="col-8 map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1501993707784!2d-77.03871848520393!3d38.89768045453364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2zTmjDoCBUcuG6r25n!5e0!3m2!1svi!2s!4v1532853622808" width={600} height={450} frameBorder={0} style={{border: 0}} title="map" allowFullScreen />
                    </div>
                    <div className="col-4 address">
                        <h3>Mustache Bakery Store</h3>
                        <p>Address: </p>
                        <ul>
                            <li>1600 Pennsylvania Ave NW</li>
                            <li>Washington</li>
                            <li>DC 20500</li>
                            <li>USA</li>
                        </ul>
                        <div className="social-icons">
                            <i className="fab fa-facebook-f" />
                            <i className="fab fa-instagram" />
                            <i className="fab fa-twitter" />
                            <i className="fab fa-snapchat" />
                        </div>
                        <div className="copy-right">
                            © copyright 2018 - Mustache Bakery Store
                        </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default Footer;