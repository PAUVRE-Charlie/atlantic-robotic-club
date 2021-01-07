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
import team from '../team';

const article: Article = {
    id: 17,
    title: "Réalisation de la table",
    category: navigation.robot,
	author: team.members.find(member=> member.lastname === 'Sellami'),
	preview:
		"Afin de pouvoir tester notre robot dans des conditions similaires à la Coupe de Robotique, il est nécessaire de recréer l’aire de jeu le plus fidèlement possible. C’est pourquoi nous avons tout d’abord récupéré l’ancienne table du club de robotique de Télécom Bretagne et nous avons modélisé les pièces manquantes pour les réaliser au Fablab de Brest.",
	body:[
        {
            title: "Introduction",
            body: (
                <React.Fragment>
                    <p>Afin de pouvoir tester notre robot dans des conditions similaires à la Coupe de Robotique, il est nécessaire de recréer l’aire de jeu le plus fidèlement possible. C’est pourquoi nous avons tout d’abord récupéré l’ancienne table du club de robotique de Télécom Bretagne et nous avons modélisé les pièces manquantes pour les réaliser au Fablab de Brest.</p>
                    <img className="mediumImage" src={images.makingTable.table.src} alt={images.makingTable.table.name} />
                </React.Fragment>
            )
        },
        {
            title: "Modélisation 3D",
            body: (
                <React.Fragment>
                    <span>Voici les pièces que nous avons modélisé en 3D sur le logiciel Fusion 360:</span>
                    <img className="veryBigImage" src={images.makingTable.pieces.src} alt={images.makingTable.pieces.name} />
                </React.Fragment>
            )
        },
        {
            title: "Dessin en vectoriel",
            body: (
                <React.Fragment>
                    <span>Afin d’exploiter la découpeuse laser du Fablab, il a fallu faire des dessins en 2 dimensions sur le logiciel Inkscape. Voici quelques dessins:</span>
                    <img className="bigImage" src={images.makingTable.drawings.src} alt={images.makingTable.drawings.name} />
                </React.Fragment>
            )
        },
        {
            title: "Premiers résultats",
            body: (
                <React.Fragment>
                    <h4>Manche à air:</h4>
                    <img className="mediumImage" src={images.makingTable.windsock.src} alt={images.makingTable.windsock.name} />
                    <p>Découpée par découpeuse laser, nous avons obtenu une manche à air. Elle a été découpée en plusieurs pièces du à des contraintes matérielles: la pièce est de 22 mm d’épaisseur alors que la découpeuse découpe au maximum 10 mm.</p>
                </React.Fragment>
            )
        },
    ]
}

export default article;