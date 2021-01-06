/**
 * This file is the home page of the website.
 * It is composed of two elements: 
 * - a hero
 * - this list of the categories of the articles
 */

/* Packages */
import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* Styles */
import '../styles/css/homePage.css'

/* Components */
import ScrollToTop from '../components/scrollToTop'

/* Data */
import colors from '../data/colors';
import images from '../data/images';
import icons from '../data/icons';
import { navigation } from '../data/navigation';

export default function HomePage() {

    useEffect(
		() => {
			/* This function make each card container appear fading from below : the class names are in articleCard.css 
				The number at the end of the timeout function is the delay there is before the animation starts */
			let timer = 0;
			document.querySelectorAll('.sideTextItem').forEach(obj => {
				setTimeout(function() {
					obj.classList.add('fadeAndMoveFromBelow');
                }, timer);
                timer += 100;
            });
            timer = 0;
			document.querySelectorAll('.sideTextItem').forEach(obj => {
				setTimeout(function() {
					obj.classList.add('fadeAndMoveFromBelow');
                }, timer);
                timer += 100;
			});
		}
	);

    return (
        <ScrollToTop>
                <div className="homePageContainer">
                {/* Club name : same as sideText element but it is not composed of links, it is just a decoration */}
                <Fragment>
                    <div className="sideTextItem" style={{top: '5%', color: colors.white}}>
                        A<span>tlantic</span>
                    </div>
                    <div className="sideTextItem" style={{top: '35%', color: colors.darkBlue}}>
                        R<span>obotic</span>
                    </div>
                    <div className="sideTextItem" style={{top: '65%', color: colors.accent}}>
                        C<span>lub</span>
                    </div>
                </Fragment>

                {/* Robot name */}
                <div className="robotName" style={{color: colors.darkBlue}}>PoulpyBot</div>
                
                {/* Logo */}
                <img className="clubLogo" src={images.logos.logo654.src} alt={images.logos.logo654.name}/>

                {/* Categories */}
                <div className="categories">
                    <img className="arrowBottom" src={icons.arrow_bottom.src} alt={icons.arrow_bottom.name}/>
                    <Link to={navigation.robot.completeLink} className="categoryItem" style={{color: colors.white, transform: 'rotate(15deg)'}}>
                        Robot
                    </Link>
                    <Link to={navigation.coupe.completeLink} className="categoryItem" style={{color: colors.darkBlue, transform: 'rotate(-15deg)'}}>
                        Coupe
                    </Link>
                    <Link to={navigation.club.completeLink} className="categoryItem" style={{color: colors.accent, transform: 'rotate(15deg)'}}>
                        Club
                    </Link>
                </div>
                
            </div>
        </ScrollToTop>
    )
}
