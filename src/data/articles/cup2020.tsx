/**
 * This file store an article used in this website
 */

/* Packages */
import React from 'react';

/* Types */
import { Article } from '../../utils';

/* Data */
import images from '../images';
import { navigation } from '../navigation';

const article: Article = {
    id: 8,
    title: "L'édition 2020",
    category: navigation.cup,
	preview:
		"Cet article produit une analyse rapide de l'édition précédente de la coupe.",
	body: [
        {
            title: 'Thématique: Sail the world',
            body: <React.Fragment>
                <p>La thématique de l'édition 2020 est identique à celui de l'édition 2021. Pour plus de détails sur les règles, voir <a href="https://www.coupederobotique.fr/wp-content/uploads/Eurobot2020_Rules_Cup_OFFICIAL_FR.pdf">ici</a>.</p>
                <img className="mediumImage" src={images.cup2020.match.src} alt={images.cup2020.match.name}></img>
            </React.Fragment>
        },
        {
            title: 'Résultats',
            body: <React.Fragment>
                <p>Les trois équipes ayant eu les meilleurs résultats lors de cette édition 2020 sont les suivantes:</p>
                <img className="bigImage" src={images.cup2020.results.src} alt={images.cup2020.results.name}></img>
            </React.Fragment>
        },
        {
            title: 'La coupe en images',
            body: <React.Fragment>
                <iframe title="finaleCoupe2020" src="https://www.youtube.com/embed/QOsNiM6KpSg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </React.Fragment>
        },
    ]
}

export default article;