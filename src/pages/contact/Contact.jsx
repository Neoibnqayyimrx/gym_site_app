import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
     <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum impedit aspernatur maiores magnam excepturi.
       Commodi doloribus perferendis minus dicta tenetur!
     </Header>
     <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:neoibnqayyim@hotmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http://m.me/ali_abdulhakim" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="http://wa.me/+233557097546" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
     </section>
     </>
  )
}

export default Contact