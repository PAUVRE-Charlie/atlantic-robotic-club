/**
 * This file is the page that gathers all the articles of the website.
 * It is composed of two elements: 
 * - a list of categories on the left side of the web page
 * - a list of the articles in the center
 */

/* Packages */
import { RouteComponentProps } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { useEffect } from 'react';

/* Types */
import { MatchParamsArticlesPage } from '../utils';

/* Styles */
import '../styles/css/articlesPage.css'

/* Components */
import ArticleCard from '../components/articleCard';
import ScrollToTop from '../components/scrollToTop';
import SideText from '../components/sideTextCategories';

/* Data */
import icons from '../data/icons';
import articles from '../data/articles';
import { sideTextElements } from '../data/navigation';

export default function ArticlesPage({match}: RouteComponentProps<MatchParamsArticlesPage>) {

    useEffect(
		() => {
			/* This function make each card container appear fading from below : the class names are in articleCard.css 
				The number at the end of the timeout function is the delay there is before the animation starts */
			let timer = 0;
			document.querySelectorAll('.articleCardContainer').forEach(obj  => {
				setTimeout(function() {
					obj.classList.add('fadeAndMoveFromBelow');
                }, timer);
                timer += 100;
            });
		},
		[match]
    );

    return (
        <ScrollToTop>
            <div className="articlesPageContainer">
                {/* Categories */}
                <SideText category={match.params.category} sideTextElements={sideTextElements} />

                {/* Articles */}
                <div className="articlesContainer">
                    { articles && articles.filter(article => article.category.link === match.params.category).map(article => {
                        return <ArticleCard key={article.id} article={article} />
                    })}
                </div>

                {/* Arrow to go back at the top of the page */}
                <LinkScroll to="headerContainer" className="arrowUpContainer">
                        <img className="arrowUp" src={icons.arrow_up.src} alt={icons.arrow_up.name}/>
                </LinkScroll>
            </div>
        </ScrollToTop>
    )
}
