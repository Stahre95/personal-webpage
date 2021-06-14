import React from 'react'
import './AboutPage.css'
import ProfileImage from '../../Images/profile_image.jpeg'

const AboutPage = () => {

    function StarIcon (props) {
        const {fill = 'none'} = props
        return (
            <svg className="w-6 h-6" fill={fill} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
        )
    }
    return (
        <div className="about-container">
            {/* about me section  */}
            <div className="about-content">
                <h1 className="about-title">About me</h1>
                <img className="about-profile-image" src={ProfileImage} alt ="" />
                <div className="about-content-text-title">I'm Johan Stahre and I'm a <span>junior developer</span></div>
                <div className="about-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio nam doloribus tempora eos quasi voluptatibus eaque deleniti aspernatur dicta, sit provident a architecto accusamus! Illo cum et, a quos mollitia tenetur molestiae modi corporis quasi rem quod, ducimus accusamus magnam? Ea facilis ab perspiciatis illum sequi similique, pariatur debitis praesentium impedit id rerum a omnis harum non. Pariatur blanditiis odit laboriosam dicta impedit, quisquam dolorum fuga sed placeat nobis tempore magnam sequi nulla iusto eos ducimus temporibus accusamus at porro eveniet ea. Dolorum voluptatibus earum voluptate esse officia quidem expedita illo animi placeat quas quaerat commodi, sequi culpa harum mollitia. Voluptates, similique. Alias, ipsam deleniti aut dolor perferendis architecto voluptatum placeat dolores. Corrupti consequuntur minima sit esse illo minus numquam, tempore maxime aperiam. Culpa ea, porro ratione ipsum vitae iure dicta animi amet id, at atque sapiente adipisci, beatae vero blanditiis nostrum incidunt! Minima distinctio sapiente eius itaque repellendus facere esse iste beatae obcaecati, voluptatum commodi cum neque id ut debitis nostrum incidunt doloremque dolorum autem. Animi dolorem magnam voluptatum tempore earum in voluptas deserunt eligendi, fugit, voluptates fuga tempora, labore quas vero cupiditate enim. Assumenda dolorum exercitationem rerum maxime aliquam delectus sapiente quibusdam expedita, odio harum soluta quia.</div>
            </div>
            {/* skills section */}
            <div className="skill-content">
                 <h1 className="skill-title">Programming</h1>
                 <table className="skill-table">
                     <tbody className="skill-table-body">
                         <tr>
                             <td className="skill-language">HTML</td>
                             <td className="skill-rating">
                                <StarIcon fill="yellow" />
                                <StarIcon fill="yellow" />
                                <StarIcon fill="yellow" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                             </td>
                         </tr>
                         <tr>
                             <td className="skill-language">CSS</td>
                             <td className="skill-rating">
                                <StarIcon fill="yellow" />
                                <StarIcon fill="yellow" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                             </td>
                         </tr>
                         <tr>
                             <td className="skill-language">Javascript</td>
                             <td className="skill-rating">
                                <StarIcon fill="yellow" />
                                <StarIcon fill="yellow" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                             </td>
                         </tr>
                         <tr>
                             <td className="skill-language">Reactjs</td>
                             <td className="skill-rating">
                                <StarIcon fill="yellow" />
                                <StarIcon fill="yellow" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                             </td>
                         </tr>
                         <tr>
                             <td className="skill-language">Kotlin</td>
                             <td className="skill-rating">
                                <StarIcon fill="yellow" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                             </td>
                         </tr>
                         <tr>
                             <td className="skill-language">Swift</td>
                             <td className="skill-rating">
                                <StarIcon fill="yellow" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                                <StarIcon fill="white" />
                             </td>
                         </tr>
                     </tbody>
                 </table>
            </div>
        </div>
    )
}

export default AboutPage
