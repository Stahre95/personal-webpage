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
// import KotlinIcon from '../Icons/KotlinIcon'
import SwiftIcon from '../Icons/SwiftIcon'

const AboutPage = () => {

    

   

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
                 <table className="skill-table">
                     <tbody className="skill-table-body">
                         <tr>
                             <td>
                                 <div className="skill-icon"><HtmlIcon /></div>
                                 <div className="skill-language">HTML5</div>
                                 <div className="skill-rating">
                                     <StarIcon fill="yellow" />
                                     <StarIcon fill="yellow" />
                                     <StarIcon fill="yellow" />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                 </div>
                             </td>
                             <td>
                                 <div className="skill-icon"><CssIcon /></div>
                                 <div className="skill-language">CSS</div>
                                 <div className="skill-rating">
                                     <StarIcon fill="yellow" />
                                     <StarIcon fill="yellow" />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                 </div>
                             </td>
                             <td>
                             <div className="skill-icon"><JsIcon /></div>
                                 <div className="skill-language">Javascript</div>
                                 <div className="skill-rating">
                                     <StarIcon fill="yellow" />
                                     <StarIcon fill="yellow" />
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
                                     <StarIcon fill="yellow" />
                                     <StarIcon fill="yellow" />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                 </div>
                             </td>
                             <td>
                                <div className="skill-icon"><SwiftIcon /></div>
                                 <div className="skill-language">Swift</div>
                                 <div className="skill-rating">
                                     <StarIcon fill="yellow" />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                 </div>
                             </td>
                             <td>
                                 <div className="skill-icon"><FontAwesomeIcon icon={faHotel} size="4x" /></div>
                                 <div className="skill-language">Kotlin</div>
                                 <div className="skill-rating">
                                     <StarIcon fill="yellow" />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                     <StarIcon fill="white" />
                                 </div>
                             </td>
                         </tr>
                     </tbody>
                 </table>
            </div>
        </div>
    )
}

export default AboutPage
