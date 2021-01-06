/**
 * This file is an article card component.
 * It is composed of two elements: 
 * - a title
 * - a small preview
 */

/* Packages */
import { Link } from 'react-router-dom';

/* Types */
import { ArticleCardProps } from '../utils';

/* Styles */
import '../styles/css/articleCard.css'

/* Data */
import colors from '../data/colors'

export default function ArticleCard({article} : ArticleCardProps) {
    return (
        <Link className="articleCardContainer" to={article.category.completeLink + '/' + article.id} style={{color: colors.darkBlue}}> 
            {/* Title */}
            <div className="titleCard">{article.title}</div>
            {/* Preview */}
            <div className="previewCard">{article.preview}</div>
        </Link>
    )
}
