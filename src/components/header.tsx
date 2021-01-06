/**
 * This file is the header component.
 * It is composed of two elements: 
 * - a list of webpage links called the navigation bar.
 * - a list of social media icons
 */

/* Packages */
import { Link } from 'react-router-dom';

/* Types */
import { navigationItem, socialMediaItem } from '../utils';

/* Styles */
import '../styles/css/header.css'

/* Data */
import socialMedia from '../data/socialMedia';
import { navigation } from '../data/navigation';
import colors from '../data/colors';

export default function Header() {
    return (
        <div className="headerContainer">
            {/* Navigation bar */}
            <div className="navigationContainer">
                { navigation && Object.values(navigation).map((navItem: navigationItem) => {
                    return <Link key={navItem.name} to={navItem.completeLink} style={{color: colors.darkBlue}} >{navItem.name}</Link>
                })}
            </div>
            {/* Social media buttons */}
            <div className="socialMediaContainer">
                { socialMedia && Object.values(socialMedia).map((media: socialMediaItem) => {
                    return <a key={media.logo.name} href={media.link}><img src={media.logo.src} alt={media.logo.name} /></a>
                })}
            </div>
        </div>
    )
}
