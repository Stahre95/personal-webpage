import { faEnvelope, faMapMarkerAlt, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../ContactView/ContactPage.css'

function ContactPage() {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <h1 className="contact-title">Contact me</h1>
                <div className="contact-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui quo cum soluta quidem laboriosam, porro voluptate minima molestiae enim esse dolorem sed unde assumenda dolore laborum modi nisi aliquam. Atque, nostrum! Officia repudiandae sequi maiores dolores eligendi fugit ducimus perferendis, ipsam modi fugiat quos officiis, mollitia natus unde. Ad?</div>
            </div>

            <div className="contact-form-container">
                <div className="contact-left">
                    <div className="contact-icons">
                        <div className="icons-row">
                            <FontAwesomeIcon icon={faUser} className="icons"/>
                            <div className="icons-info">
                                <div className="info-title">Name</div>
                                <div className="info-subtitle">Johan Stahre</div>
                            </div>
                        </div>
                        <div className="icons-row">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="icons"/>
                            <div className="icons-info">
                                <div className="info-title">Adress</div>
                                <div className="info-subtitle">Bellmansgatan 9B, Västerås</div>
                            </div>
                        </div>
                        <div className="icons-row">
                            <FontAwesomeIcon icon={faEnvelope} className="icons"/>
                            <div className="icons-info">
                                <div className="info-title">Email</div>
                                <div className="info-subtitle">johan.stahre@iths.se</div>
                            </div>
                        </div>
                        <div className="icons-row">
                            <FontAwesomeIcon icon={faPhone} className="icons"/>
                            <div className="icons-info">
                                <div className="info-title">Phone</div>
                                <div className="info-subtitle">+46767989144</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="contact-form-text">Message me</div>
                    <form action="#" className="contact-form">
                        <div className="fields">
                            <div className="field field-name">
                                <input type="text" className="name-input" placeholder="Name" />
                            </div>
                            <div className="field field-email">
                                <input type="text" className="email-input" placeholder="Email" />
                            </div>
                        </div>
                        <div className="field field-subject">
                            <input type="text" className="subject-input" placeholder="Subject" />
                        </div>
                        <div className="field field-textarea">
                            <textarea cols="30" rows="10" className="field-message" placeholder="Your message..."></textarea>
                        </div>
                        <div className="button-area">
                            <button className="send-message" type="submit" name="send">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
