import React from 'react'
import './AboutPage.css'
import ProfileImage from '../../Images/profile_image.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import HtmlIcon  from '../Icons/HtmlIcon'
import CssIcon from '../Icons/CssIcon'
import StarIcon from '../Icons/StarIcon'
import JsIcon from '../Icons/JsIcon'
import ReactIcon from '../Icons/ReactIcon'
import SwiftIcon from '../Icons/SwiftIcon'
import JavaIcon from '../Icons/JavaIcon'

const AboutPage = () => {

    const fill = '#ffdf6c'
    const empty = '#fff'
    

   

    return (
        <div className="about-container">
            {/* about me section  */}
            <div className="about-content">
                <h1 className="about-title">About me</h1>
                <img className="about-profile-image" src={ProfileImage} alt ="" />
                <div className="about-content-text-title">I'm Johan Stahre and I'm a <span>junior developer</span></div>
                <div className="about-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio nam doloribus tempora eos quasi voluptatibus eaque deleniti aspernatur dicta, sit provident a architecto accusamus! Illo cum et, a quos mollitia tenetur molestiae modi corporis quasi rem quod, ducimus accusamus magnam? Ea facilis ab perspiciatis illum sequi similique, pariatur debitis praesentium impedit id rerum a omnis harum non. Pariatur blanditiis odit laboriosam dicta impedit, quisquam dolorum fuga sed placeat nobis tempore magnam sequi nulla iusto eos ducimus temporibus accusamus at porro eveniet ea. Dolorum voluptatibus earum voluptate esse officia quidem expedita illo animi placeat quas quaerat commodi, sequi culpa harum mollitia. Voluptates, similique. Alias, ipsam deleniti aut dolor perferendis architecto voluptatum placeat dolores. Corrupti consequuntur minima sit esse illo minus numquam, tempore maxime aperiam. Culpa ea, porro ratione ipsum vitae iure dicta animi amet id, at atque sapiente adipisci, beatae vero blanditiis nostrum incidunt! Minima distinctio sapiente eius itaque repellendus facere esse iste beatae obcaecati, voluptatum commodi cum neque id ut debitis nostrum incidunt doloremque dolorum autem. Animi dolorem magnam voluptatum tempore earum in voluptas deserunt eligendi, fugit, voluptates fuga tempora, labore quas vero cupiditate enim. Assumenda dolorum exercitationem rerum maxime aliquam delectus sapiente quibusdam expedita, odio harum soluta quia.</div>
                <button className="about-button-cv">download CV</button>
            </div>
            {/* skills section */}
            <div className="skill-content">
                 <h1 className="skill-title">Programming</h1>
                 <h3 className="skill-content-title">My Creative Skills & experiences</h3>
                 <div className="skill-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum velit sed cumque accusamus? Inventore nulla ad nobis doloremque odio! Recusandae, consectetur omnis? Libero vel iusto quidem laboriosam qui quis corporis minima nam rem, fugiat culpa, repellat reiciendis temporibus, laudantium pariatur aliquid repellendus consequuntur dicta voluptate eos magni eum totam quod! Fuga architecto eveniet doloribus illum illo delectus ab omnis harum, quis laborum modi optio debitis suscipit, error nihil ipsam quo repellat explicabo hic. Obcaecati in et omnis incidunt doloribus repellat dolore molestias optio vitae, blanditiis pariatur nostrum corporis voluptates officiis. Eveniet sit iste cupiditate. Debitis nam quod vel aliquam?</div>
                 <div className="grid-container">
                     <div className="first-column">
                        <div className="skill-icon" id="html"><HtmlIcon /></div>
                            <div className="skill-language">HTML5</div>
                            <div className="skill-rating">
                                <StarIcon fill={fill} />
                                <StarIcon fill={fill} />
                                <StarIcon fill={fill} />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                            </div>
                     </div>
                     <div className="second-column">
                        <div className="skill-icon" id="html"><CssIcon /></div>
                            <div className="skill-language">CSS</div>
                            <div className="skill-rating">
                                <StarIcon fill={fill} />
                                <StarIcon fill={fill} />
                                <StarIcon fill={fill} />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                            </div>
                     </div>
                     <div className="third-column">
                        <div className="skill-icon" id="html"><JsIcon /></div>
                            <div className="skill-language">Javascript</div>
                            <div className="skill-rating">
                                <StarIcon fill={fill} />
                                <StarIcon fill={fill} />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                            </div>
                     </div>
                     <div className="fourth-column">
                        <div className="skill-icon" id="html"><ReactIcon /></div>
                            <div className="skill-language">React</div>
                            <div className="skill-rating">
                                <StarIcon fill={fill} />
                                <StarIcon fill={fill} />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                            </div>
                     </div>
                     <div className="fifth-column">
                        <div className="skill-icon" id="html"><SwiftIcon /></div>
                            <div className="skill-language">Swift</div>
                            <div className="skill-rating">
                                <StarIcon fill={fill} />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                            </div>
                     </div>
                     <div className="fifth-column">
                        <div className="skill-icon" id="html"><JavaIcon /></div>
                            <div className="skill-language">Kotlin</div>
                            <div className="skill-rating">
                                <StarIcon fill={fill} />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                            </div>
                     </div>
                 </div>
                 {/* <table className="skill-table">
                     <tbody className="skill-table-body">
                         <tr>
                             <td>
                                 <div className="skill-icon" id="html"><HtmlIcon /></div>
                                 <div className="skill-language">HTML5</div>
                                 <div className="skill-rating">
                                     <StarIcon fill={fill} />
                                     <StarIcon fill={fill} />
                                     <StarIcon fill={fill} />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                 </div>
                             </td>
                             <td>
                                 <div className="skill-icon" id="css"><CssIcon /></div>
                                 <div className="skill-language">CSS</div>
                                 <div className="skill-rating">
                                    <StarIcon fill={fill} />
                                     <StarIcon fill={fill} />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                 </div>
                             </td>
                             <td>
                             <div className="skill-icon" id="Javascript"><JsIcon /></div>
                                 <div className="skill-language">Javascript</div>
                                 <div className="skill-rating">
                                     <StarIcon fill={fill} />
                                     <StarIcon fill={fill} />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                 </div>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <div className="skill-icon"><ReactIcon /></div>
                                 <div className="skill-language">React</div>
                                 <div className="skill-rating">
                                     <StarIcon fill={fill} />
                                     <StarIcon fill={fill} />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                 </div>
                             </td>
                             <td>
                                <div className="skill-icon"><SwiftIcon /></div>
                                 <div className="skill-language">Swift</div>
                                 <div className="skill-rating">
                                     <StarIcon fill={fill} />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                 </div>
                             </td>
                             <td>
                                 <div className="skill-icon"><FontAwesomeIcon icon={faHotel} /></div>
                                 <div className="skill-language">Kotlin</div>
                                 <div className="skill-rating">
                                     <StarIcon fill={fill} />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                 </div>
                             </td>
                         </tr>
                     </tbody>
                 </table> */}
            </div>
        </div>
    )
}

export default AboutPage
