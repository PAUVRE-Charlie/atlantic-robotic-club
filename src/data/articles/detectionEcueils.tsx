/**
 * This file store an article used in this website
 */

/* Packages */
import React from 'react';

/* Types */
import { Article } from '../../utils';

/* Data */
import images from '../images';
import videos from '../videos';
import { navigation } from '../navigation';
import team from '../team';


const article: Article = {
    id: 5,
    title: "Détection des écueils",
    category: navigation.robot,
	author: team.members.find(member=> member.lastname === 'Heyer'),
	preview:
		'Dans notre stratégie nous souhaiterions profiter des écueils sur lesquels sont disposées 5 bouées. Pour les récupérer à l’aide d’actionneurs, il devient indispensable au robot de savoir se positionner correctement.',
	body:[
        {
            title: "Introduction",
            body: (
                <React.Fragment>
                    <p>Dans notre stratégie nous souhaiterions profiter des 
                        écueils sur lesquels sont disposées 5 bouées. Pour les 
                        récupérer à l’aide d’actionneurs, il devient indispensable 
                        au robot de savoir se positionner correctement.
                    </p>
                    <img className="mediumImage" src={images.detectionEcueils.model.src} alt={images.detectionEcueils.model.name} />
                </React.Fragment>
            )
        },
        {
            title: "Principe",
            body: (
                <React.Fragment>
                    <span>Pour se faire, l’odométrie guidera le robot jusqu’à la zone proche de l’écueil.</span>
                    <div className="sideViewImage">
                        <p>La suite relève de deux capteurs de distance VL53L1X. Ceux-ci sont placés à la 
                        hauteur des bouées des écueils, au-dessus du mur (en bleu sur l’image du dessus). 
                        En plaçant deux capteurs à chaque extrémité du robot, on obtient une assurance 
                        de la justesse du positionnement du robot : lorsque les deux capteurs détectent 
                        un obstacle, le robot est en face de l’écueil. De plus, il connaît la distance 
                        qui les sépare ce qui lui permet d’ajuster correctement sa position afin que les 
                        actionneurs n’aient pas de problèmes à récupérer les bouées.
                        </p>
                        <img className="smallImage" src={images.detectionEcueils.sensor.src} alt={images.detectionEcueils.sensor.name}></img>
                    </div>
            </React.Fragment>
            )
        },
        {
            title: "Test",
            body: (
                <React.Fragment>
                    <p>Nous avons testé un capteur ultrason VMA360 afin d’expliquer le principe de fonctionnement similaire du VL53L1X.</p>
                    <div className="sideViewImage">
                        <img className="mediumImage" src={images.detectionEcueils.setup.src} alt={images.detectionEcueils.setup.name}></img>
                        <span> Le module ultrasonique VMA360 a 4 broches: GND, VCC, Trig et Echo. 
                            Les broches de masse et de VCC du module doivent être connectées, 
                            respectivement, à la masse et à la broche de 5 volts de la carte 
                            Arduino, et les broches de trig et d'écho à n'importe quelle E/S 
                            numérique de la carte Arduino. Arbitrairement, nous avons nommé 
                            le numéro 9 comme trigPin et le numéro 10 comme echoPin.
                        </span>
                    </div>
                    <img className="mediumImage" src={images.detectionEcueils.setup_blueprint.src} alt={images.detectionEcueils.setup_blueprint.name}></img>
            </React.Fragment>
            )
        },
        {
            title: "Code arduino",
            body: (
                <React.Fragment>
                    <p>Voici le code que nous avons utilisé:</p>
                    <img className="mediumImage" src={images.detectionEcueils.code1.src} alt={images.detectionEcueils.code1.name}></img>
                    <p>Le trigPin envoie au composant l’ordre d’envoyer pendant 10ms des ultrasons 
                        afin de recevoir à travers l’echoPin la valeur du temps mis pour que le 
                        signal soit réfléchi et reçu par le capteur. Un simple facteur permet 
                        d’exprimer la valeur reçue en distance en millimètre. La distance a été 
                        calculée en considérant une vitesse du son de 340 m/s.
                    </p>
            </React.Fragment>
            )
        },
        {
            title: "Vidéo de l'expérience",
            body: (
                <React.Fragment>
                    <span>Voici une vidéo de l’expérience avec les résultats en direct:</span>
                    <video controls>
                        <source src={videos.detectionEcueils_experience.src} type="video/mp4" />
                    </video>
                    <span>N’ayant pas encore eu les composants nécessaires, nous avons imaginé ce code qui permettrait au robot de s’arrêter en face des écueils.</span>
                    <img className="mediumImage" src={images.detectionEcueils.code2.src} alt={images.detectionEcueils.code2.name}></img>
                    <img className="mediumImage" src={images.detectionEcueils.code3.src} alt={images.detectionEcueils.code3.name}></img>
                    <p>Nous utilisons un pont en H, un composant qui permet de moduler la tension Arduino et de faire tourner les moteurs dans un sens ou dans l’autre à l’aide d’un jeu d’interrupteurs.</p>
                    <p>Ainsi, lorsqu’un des capteurs détecte un obstacle à 10 cm (la distance nécessite encore d’être estimée), il ordonne à la roue qui se trouve sur son côté de cesser de tourner afin que l’autre roue puisse continuer ce qui permettra au robot de se positionner correctement devant les écueils.</p>
                    <span>Une fois que le robot est au bon endroit, l’Arduino pourra enfin exécuter les tâches des actionneurs pour récupérer les bouées des écueils.</span>
            </React.Fragment>
            )
        },
    ]
}

export default article;