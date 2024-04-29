import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes ,fa1 } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/facebook'
import 'react-social-icons/linkedin'


export default function Footer(){
    
    return <footer id='footer'>
         <SocialIcon target='_blank' url="https://www.linkedin.com/in/melat-desta-a08700297/" />
         <SocialIcon target='_blank' url="https://www.facebook.com/melatdesta1040" />
         <SocialIcon target='_blank' url="https://www.instagram.com/melatdesta4?igsh=MXVnZGpjbnl4NzVzNQ==" />
     </footer>
}