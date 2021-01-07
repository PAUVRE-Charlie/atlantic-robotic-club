/**
 * This file store an article used in this website
 */

/* Packages */
import React from 'react';

/* Types */
import { Article } from '../../utils';

/* Data */
import { navigation } from '../navigation';

const article: Article = {
    id: 3,
    title: "Comment s'inscrire",
    category: navigation.cup,
	preview:
		'Pour participer à la Coupe de France de Robotique 2021, vous devez au préalable vous inscrire, en respectant dans l’ordre les différentes étapes listées ici.',
	body:[
        {
            title: "Inscription",
            body: (
                <React.Fragment>
                    <p>Pour participer à la Coupe de France de Robotique 2021, 
                    vous devez au préalable vous inscrire, en respectant 
                    dans l’ordre les différentes étapes listées <a href="https://www.coupederobotique.fr/edition-2021/le-concours/inscriptions-2021/">ici</a>. 
                    Pour les équipes inscrites, vous pouvez suivre l’avancement 
                    de votre inscription sur la plateforme d’inscription en 
                    ligne POOLZOR.</p>
                </React.Fragment>
            )
        }
    ]
}

export default article;