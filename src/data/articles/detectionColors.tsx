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
    id: 12,
    title: "Détecteur de couleur",
    category: navigation.robot,
	author: team.members.find(member=> member.lastname === 'Sierra Sanchez'),
	preview:
		"Dans le cadre de notre stratégie, il est nécessaire de classer la couleur de chacune des bouées collectées par notre robot et de les placer ensuite dans les chenaux pour reconstituer la balistique, c'est-à-dire les placer correctement sur les lignes de chenal dans les ports, en étant de préférence triées par couleur.",
	body: [
        {
            title: "Introduction",
            url: "introduction",
            body: (
                <React.Fragment>
                    <p>Dans le cadre de notre stratégie, il est nécessaire de classer la couleur de chacune des bouées collectées par notre robot et de les placer ensuite dans les chenaux pour reconstituer la balistique, c'est-à-dire les placer correctement sur les lignes de chenal dans les ports, en étant de préférence triées par couleur.</p>
                </React.Fragment>
            )
        },
        {
            title: "Définition des besoins",
            url: 'needs',
            body: (
                <React.Fragment>
                    <p>Il est nécessaire de définir les besoins de détection de couleur de chacune des bouées et ensuite, leur emplacement sur les routes dans les ports. Pour cela, notre détecteur doit pouvoir le faire :</p>
                    <ul>
                        <li>Détecter les couleurs verte et rouge des bouées et de la route du port.</li>
                        <li>Avoir une marge d'erreur minimale au moment de la détection.</li>
                    </ul>
                    <p>Pour détecter le trajet du port, il est nécessaire que le capteur choisi puisse couvrir une grande partie du canal afin de réduire la marge d'erreur, c'est-à-dire que les dimensions du capteur soient inférieures à la largeur du chenal.</p>
                    <img className="smallImage" src={images.detectionColor.harbor.src} alt={images.detectionColor.harbor.name}/>
                    <p>Comme on peut le voir sur l'image, la largeur de chaque chenal correspond à 30 mm, ce qui est une valeur de contrainte pour notre sélection du détecteur.</p>
                </React.Fragment>
            )
        },
        {
            title: "Sélection",
            url: 'selection',
            body: (
                <React.Fragment>
                    <p>Dans notre phase de sélection, deux détecteurs de couleur ont été présélectionnés, dont chacun sera analysé en tenant compte des caractéristiques requises pour la réalisation de notre stratégie. Les deux capteurs sont:</p>
                    <ul>
                        <li>
                            Capteur de couleur pour Arduino, TCS3200<br/>
                            <img className="smallImage" src={images.detectionColor.sensor_TCS3200.src} alt={images.detectionColor.sensor_TCS3200.name}/>
                            Ce capteur de couleurs permet la détection d'une gamme presque illimitée de couleurs. Il est composé d'un ensemble de photodétecteurs avec des filtres rouges, bleus, verts ou non filtrés.
                        </li>
                        <br/>
                        <li>Capteur de couleur RGB, TCS34725<br/>
                            <img className="smallImage" src={images.detectionColor.sensor_TCS34725.src} alt={images.detectionColor.sensor_TCS34725.name}/>
                            Le TCS34725 est un système de mesure numérique des couleurs entièrement intégré qui fournit des valeurs RVB et claires. La communication avec le capteur est assurée par I2C afin qu'il puisse être lu à partir d'un processeur comme Arduino.
                        </li>
                    </ul>
                    <span>Le tableau suivant présente les principales caractéristiques de chacun des capteurs qui ne nous permettent pas de choisir le bon capteur en respectant notre définition des besoins et des contraintes.</span>
                    <img className="mediumImage" src={images.detectionColor.table_sensors.src} alt={images.detectionColor.table_sensors.name} />
                    <p>En termes de dimensions, elles sont toutes deux inférieures à la largeur du canal, ce qui permet aux deux capteurs de couvrir toute la zone du canal du port pour en détecter la couleur, le capteur TCS34725 étant lui aussi plus petit.</p>
                    <p>De plus, l'une des différences du TCS34725 par rapport au TCS3200, est qu'il ne peut détecter que les couleurs de base. Le TCS34725 est capable de fournir une mesure RVB relativement précise de la couleur mesurée grâce au filtre bloquant les IR, intégré dans la puce, qui permet de mesurer les couleurs avec précision en réduisant l'effet influencé par la lumière ambiante.</p>
                    <p>En tenant compte de ce dernier et des dimensions du capteur, le capteur TCS34725 a été sélectionné pour notre stratégie.</p>
                </React.Fragment>
            )
        },
        {
            title: "Mise en oeuvre et codification",
            url: 'code',
            body: (
                <React.Fragment>
                    <span>Pour tester notre capteur, nous l'implanterions à Arduino comme indiqué ci-dessous:</span>
                    <img className="mediumImage" src={images.detectionColor.arduino.src} alt={images.detectionColor.arduino.name} />
                    <span>En utilisant le code suivant dans Arduino, qui nous permet de lire les valeurs RVB prises par le capteur et de déterminer ensuite la couleur reçue.</span>
                    <img className="bigImage" src={images.detectionColor.code.src} alt={images.detectionColor.code.name} />
                    <span>Le but de ce test est de trouver la gamme sur l'échelle RVB (0 - 255 bits) dans laquelle se trouvent les couleurs qui nous intéressent, à savoir le rouge et le vert.</span>
                </React.Fragment>
            )
        },
    ]
}

export default article;