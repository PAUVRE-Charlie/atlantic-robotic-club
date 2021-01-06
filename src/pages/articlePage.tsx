/**
 * This file is the page that focus a single article.
 * It is composed of two elements: 
 * - a list of categories on the left side of the web page
 * - the article in the center-right
 */

/* Packages */
import { Fragment, useEffect, useState  } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { RouteComponentProps } from 'react-router-dom';

/* Components */
import SideText from '../components/sideTextCategories';

/* Types */
import { Article, MatchParamsArticlePage } from '../utils';

/* Styles */
import '../styles/css/articlePage.css'

/* Data */
import colors from '../data/colors';
import icons from '../data/icons';
import articles from '../data/articles';
import { sideTextElements } from '../data/navigation';
import team from '../data/team';

export default function ArticlesPage({match}: RouteComponentProps<MatchParamsArticlePage>) {

    const [ article, setArticle ] = useState<Article>();

    useEffect(
		() => {
            setArticle(articles.find(article => article.id === Number(match.params.id)));
            /* This function make each containers of these classes appear fading from below : the class names are in article.css 
                The number at the end of the timeout function is the delay there is before the animation starts */
            document.querySelectorAll('.articleContainer').forEach(obj => {
                setTimeout(function() {
                    obj.classList.add('fadeAndMoveFromBelowArticle');
                }, 0);
            });
		},
		[ match, article ]
	);

    return (
        <div className="articlePageContainer">
            {/* Categories */}
            <SideText category={match.params.category} sideTextElements={sideTextElements} />

            {/* Article */}
            { article === undefined ? <div className="articleContainer" style={{display: 'grid', placeItems: 'center', minHeight: '15rem'}}>Pas d'article sur cette page.</div> : 
                <div className="articleContainer">
                    {/* the title section of the article */}
                    <div className="articleTitleSection">
                        <p className="articleTitle" style={{ color: colors.darkBlue }}>
                            {article.title}
                        </p>
                        <p className="articleSubtitle" style={{ color: colors.accent }}>
                            {article.author ? article.author.firstname + ' ' + article.author.lastname 
                                : team.name}
                        </p>
                    </div>
                    {/* the contents section of the article */}
                    <div className="articleContents">
                        { article.body && article.body.length > 1 && article.body.map(section =>{
                            return <LinkScroll key={"contents_"+section.url} to={(section.url)} style={{color: colors.darkBlue}}>{section.title}</LinkScroll>
                        })}
                    </div>
                    
                    {/* the body of the article */}
                    <div className="articleBody" style={{ color: colors.darkBlue }}>
                        { article.body && (
                            article.body.length > 1 ?(
                                article.body.map(section =>{
                                    return <Fragment key={"body_"+section.url}>
                                        <h2 id={section.url}>{section.title}</h2>
                                        {section.body}
                                    </Fragment>
                                })
                            ) : article.body.map(section =>{
                                return <Fragment key={"body_"+section.url}>
                                    {section.body}
                                </Fragment>
                            })
                        )}
                    </div>
                </div>
            }
            <LinkScroll to="headerContainer" className="arrowUpContainer">
                <img className="arrowUp" src={icons.arrow_up.src} alt={icons.arrow_up.name}/>
            </LinkScroll>
        </div>
    )
}
