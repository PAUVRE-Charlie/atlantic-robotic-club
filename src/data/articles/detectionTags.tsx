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
    id: 11,
    title: "Détection de Tags ArUcos",
    category: navigation.robot,
	author: team.members.find(member=> member.lastname === 'Bonnemains'),
	preview:
		"L’un des plus grands enjeux en robotique est de permettre au robot d’appréhender son environnement – par la détection d’obstacles ou de points d’intérêts - afin de pouvoir prendre des décisions motrices en conséquence : par exemple, si un mur est détecté, le robot fait demi-tour.",
	body:[
        {
            title: "Les tags ArUco, qu'est-ce que c'est ?",
            body: (
                <React.Fragment>
                    <h4>Contexte</h4>
                    <p>L’un des plus grands enjeux en robotique est de permettre au robot d’appréhender son environnement – par la détection d’obstacles ou de points d’intérêts - afin de pouvoir prendre des décisions motrices en conséquence : par exemple, si un mur est détecté, le robot fait demi-tour.</p>
                    <p>Ce type de détection est en général séparé en 2 branches, qui sont parfois combinées pour une plus grande précision : la détection par traitement de données issues de capteurs - typiquement des capteurs ultrasons, des lidar etc.. - et la détection par computer vision – typiquement le traitement d’images captées par des caméras -. La création des tags ArUcos s’inscrit dans ce dernier contexte.</p>
                    <h4>Les tags ArUco</h4>
                    <p>Les tags ArUcos sont des marqueurs synthétiques de forme carré, présentant des bords noirs et une matrice binaire (représentée sous forme de pixels noirs ou blancs) en son centre qui permet d’identifier chaque marqueur de manière unique. Cette matrice peut prendre diverses tailles selon la dimension du marqueur. Ci-dessous, on retrouve différents marqueurs 4x4.</p>
                    <img className="smallImage" src={images.detectionTags.tag.src} alt={images.detectionTags.tag.name}/>
                    <p>Le processus de détection des marqueurs permet d’une part d’identifier le marqueur parmi un dictionnaire de tag associé mais aussi de déterminer s' il a subi ou non une rotation : cela permet par exemple de transmettre une direction Nord Sud Est Ouest au robot, selon le sens dans lequel il visualise le tag.</p>
                    <h4>La détection</h4>
                    <span>La détection se fait en plusieurs temps :</span>
                    <ul>
                        <li>tout d’abord un seuillage est effectué (l’image captée est transformée en noir et blanc) et on détecte des candidats potentiels, c’est à dire des formes carrées correspondantes en termes de taille en pixels par exemple au marqueurs que l’on cherche à détecter.</li>
                        <li>ensuite on récupère chacun des candidats potentiels et, un par un, on redresse l’image qui est souvent distordu lors de sa prise par la caméra.</li>
                        <li>
                            puis on cherche à extraire les bits de l’image, en divisant celle-ci en diverses cases selon les marqueurs recherchés (le nombre de bits dépend de la dimension du marqueur).<br/>
                            <img className="smallImage" src={images.detectionTags.tag_cases.src} alt={images.detectionTags.tag_cases.name}/>
                        </li>
                        <li>on détermine alors la couleur de chaque case en se focalisant sur les couleurs des pixels compris dans un carré inscrit dans la case et centré mais de dimension moins importante, afin de ne pas prendre en compte les pixels aux bords qui peuvent avoir une autre couleur du fait du découpage forcément imparfait réalisé auparavant.</li>
                        <li>à partir de ces bits identifiés, on peut identifier le tag ArUco détecté et déterminer sa rotation par rapport à sa position originale, et donc par extension déterminer la position de la caméra et du robot.</li>
                    </ul>
                </React.Fragment>
            )
        },
        {
            title: "A quoi servent-ils dans le cadre de l'édition 2021 ?",
            body: (
                <React.Fragment>
                    <h4>Usage principal</h4>
                    <p>Pour l’édition 2021 de la Coupe de France de Robotique, le thème choisi – Sail the World – introduit un mât central sur lequel se trouve une boussole indiquant le Nord ou le Sud. Sur cette boussole se trouve un tag ArUco de dimension 4x4, qui porte l’identifiant 17. Au début du match, la boussole est tournée ; lorsqu’elle s’arrête, la position indiquée indique si le robot doit aller se ranger dans son port au Nord ou au Sud à la fin de la partie.</p>
                    <p>Cette action est très importante dans notre stratégie car elle permet de remporter 20 points lorsqu’elle est bien effectuée. En déterminant la rotation du tag ArUco par rapport à sa position initiale grâce à une caméra disposée sur le robot, il nous sera possible d’en déduire la direction indiquée par la boussole.</p>
                    <div className="multipleImages">
                        <img className="mediumImage" src={images.detectionTags.compass.src} alt={images.detectionTags.compass.name} />
                        <img className="smallImage" src={images.detectionTags.compass_tag.src} alt={images.detectionTags.compass_tag.name}/>
                    </div>
                    <h4>Autre usage possible</h4>
                    <p>Un tag ArUco est également positionné au centre de l’aire de jeu et chaque équipe dispose d’un certain nombre de balises possibles sur lesquelles il peut positionner des marqueurs ArUco, notamment un emplacement sur le sommet de la balise embarquée des robots. Ainsi, en positionnant une caméra sur le mât central, il est possible notamment de traquer la position des différents robots sur l’aire de jeu : même si ce n’est pas une option envisagée pour le moment dans la stratégie définie, elle reste mobilisable avec un code très proche de celui préalablement utilisé pour la boussole.</p>
                </React.Fragment>
            )
        },
        {
            title: "Matériel utilisé",
            body: (
                <React.Fragment>
                    <p>Afin de produire une démonstration de comment implémenter la détection des tags ArUco afin de détecter, une camera PiCamera V2 reliée à une Raspberry Pi 3b+ a été utilisée. Si une caméra différente est finalement choisie pour l’intégration sur PoulpyBot, seule l’étape de calibrage de la caméra sera à adapter.</p>
                    <img className="smallImage" src={images.detectionTags.equipment.src} alt={images.detectionTags.equipment.name}/>
                </React.Fragment>
            )
        },
        {
            title: "Code et implémentation",
            body: (
                <React.Fragment>
                    <h4>Code de détection de l'orientation de la boussole</h4>
                    <p>Le code suit les étapes suivantes : tout d’abord, la caméra capture un certain nombre d’images des marqueurs. Ensuite, on utilise la librairie Aruco d’OpenCV pour détecter les identifiants des marqueurs et récupérer la matrice de rotation associée au marqueur détecté. Ensuite, on convertit cette matrice en angles de rotation autour des axes x,y et z. Ici, seules les rotations qui sont autour de l’axe z nous intéressent (le tag Aruco est compris dans le plan x0y). Enfin, cet angle de rotation est converti en degré par soucis de simplification de lecture. A partir de là, on se base sur les observations suivantes pour trouver un critère mesurable de l’orientation de la boussole.</p>
                    <p>On considère la position sans rotation de la boussole de cette manière. On représente en sombre la zone Nord et en clair la zone Sud, en jaune le marqueur donnant l’orientation : ainsi pour un angle 0, la zone indiquée est Nord.</p>
                    <img className="smallImage" src={images.detectionTags.tag1.src} alt={images.detectionTags.tag1.name}/>
                    <p>On a ensuite les positions après des rotations successives dans le sens horaire de 90°, 180° et 270°.</p>
                    <div className="multipleImages">
                        <img className="smallImage" src={images.detectionTags.tag2.src} alt={images.detectionTags.tag2.name}/>
                        <img className="smallImage" src={images.detectionTags.tag3.src} alt={images.detectionTags.tag3.name}/>
                        <img className="smallImage" src={images.detectionTags.tag4.src} alt={images.detectionTags.tag4.name}/>
                    </div>
                    <p>On en déduit que les rotations donnant Nord sont celles comprises entre 0° et 90° et entre 270° et 360°, tandis que les rotations donnant Sud sont celles comprises entre 90° et 270° : c’est donc ce critère que l’on implémente dans le code.</p>
                    <p>Le code décrit ici a été implémenté en Python et peut être retrouvé sur ce <a href="https://github.com/sean-bnms/CdFR_Aruco_Detection.git">répo GitHub</a>.</p>
                    <h4>Calibration de la caméra</h4>
                    <p>Afin d’obtenir des matrices de rotation pertinentes et donc des mesures d’angles précises à l’étape précédente, il faut au préalable avoir calibré la caméra, afin de récupérer sa matrice et ses coefficients de distorsion (ces derniers sont nécessaires pour utiliser les fonctions de détection de position de la libraire Aruco).</p>
                    <p>Pour calibrer la caméra, on utilise généralement des jeux d’échiquiers. Néanmoins, il existe une libraire sous OpenCV qui permet de faire la calibration en utilisant une CharUco Board. Cette procédure sera similaire peu importe la caméra utilisée, et n’a besoin d’être réalisée qu’une fois pour une même caméra (à condition que ces paramètres ne soient pas modifiés pour un autre usage après coup).</p>
                    <span>Dans un premier temps, on génère une Charuco Board:</span>
                    <img className="smallImage" src={images.detectionTags.charuco_board.src} alt={images.detectionTags.charuco_board.name}/>
                    <p>Ensuite, il faut prendre un certain nombre de photos de la board imprimée avec la caméra, dans différents angles. Plus ce nombre est important, plus le calibrage sera précis, mais le temps de calcul sera plus élevé (ici, j’ai utilisé 8 images et le temps de calcul était de quelques minutes). Ensuite, on peut utiliser la librairie Aruco d’OpenCV pour obtenir les paramètres de calibration de la caméra.</p>
                    <span>Le code décrit ici a été implémenté en Python et peut être retrouvé sur ce <a href="https://github.com/sean-bnms/PiCamera_Calibration.git">répo GitHub</a>.</span>
                </React.Fragment>
            )
        },
        {
            title: "Démonstration",
            body: (
                <React.Fragment>
                    <h4>Expérience réalisée</h4>
                    <p>Pour cette première démonstration, une boussole de fortune a été créée ; les dimensions retenues pour le tag Aruco 17 utilisé sont les dimensions réelles. 10 images de la boussole, dans des orientations différentes, ont été prises. On retrouve 2 d’entre elles ci-dessous (les images 2 et 8).</p>
                    <div className="multipleImages" >
                        <img className="smallImage" src={images.detectionTags.demo1.src} alt={images.detectionTags.demo1.name}/>
                        <img className="smallImage" src={images.detectionTags.demo2.src} alt={images.detectionTags.demo2.name}/>
                    </div>
                    <h4>Résultats</h4>
                    <img className="veryBigImage" src={images.detectionTags.results.src} alt={images.detectionTags.results.name} />
                    <h4>Remarques</h4>
                    <span>Sur les 10 images capturées :</span>
                    <ul>
                        <li>Pour 4 des 10 images capturées, une erreur s’est produite : à 3 reprises, l’angle de rotation n’a pu être correctement calculé, tandis qu’à une reprise le marqueur n’a pas pu être identifié.</li>
                        <li>Pour les 6 images restantes, l’identification a toujours été bonne, et les angles obtenus pertinents. On peut le constater pour l’image 2 et l’image 8 par exemple.</li>
                    </ul>
                    <span>L’algorithme pourrait voir ses erreurs limitées en appliquant notamment une rectification de la distorsion avant calcul ; néanmoins, en considérant que l’on utilise cet algorithme seulement pour déterminer l’orientation de la boussole, on peut considérer qu’il suffit de faire un nombre assez importants de capture lorsque la boussole est arrêté et on aura des captures qui ne lèveront pas d’erreurs et permettront d’obtenir de manière précise l’orientation. La décision de l’intérêt ou non d’implémenter ces corrections se fera lorsque la caméra sera testé une fois intégrée sur le robot en situation réelle, selon les résultats satisfaisants ou non obtenus.</span>
                </React.Fragment>
            )
        },
        {
            title: "Liens utiles",
            body: (
                <React.Fragment>
                    <span>Ces liens ont été consultés pour écrire cet article et produire le code utilisé pour la démonstration.</span>
                    <h4>Détection des marqueurs et de la position:</h4>
                    <ul>
                        <li><a href="https://docs.opencv.org/master/d5/dae/tutorial_aruco_detection.html">Tutoriel OpenCV pour la librairie ArUco (C++)</a></li>
                        <li><a href="https://mecaruco2.readthedocs.io/en/latest/notebooks_rst/Aruco/aruco_basics_video.html">Tutoriel OpenCV pour la librairie ArUco (Python)</a></li>
                        <li><a href="https://docs.opencv.org/master/d9/d6a/group__aruco.html#ga2ad34b0f277edebb6a132d3069ed2909">Documentation officielle de la librairie ArUco OpenCV en C++/Python</a></li>
                        <li><a href="https://picamera.readthedocs.io/en/release-1.10/recipes1.html#capturing-to-an-opencv-object">Documentation Picamera</a></li>
                        <li><a href="https://dzone.com/articles/marker-tracking-via-websockets-with-raspberry-pi">Exemple d’implémentation de l’estimation de la position de tags Arucos avec une PiCamera</a></li>
                    </ul>
                    <h4>Calibrage de la PiCamera</h4>
                    <ul>
                        <li><a href="https://mecaruco2.readthedocs.io/en/latest/notebooks_rst/Aruco/sandbox/ludovic/aruco_calibration_rotation.html">Tutoriel calibration de camera avec OpenCV (Python)</a></li>
                        <li><a href="https://docs.opencv.org/3.4/df/d4a/tutorial_charuco_detection.html">Tutoriel OpenCV pour la librairie CharUco (C++)</a></li>
                        <li><a href="https://www.youtube.com/watch?v=xlmJsTeZL3w">Vidéo YouTube pour l’installation d’OpenCv sur Raspberry Pi</a></li>
                    </ul>
                    

                    
                </React.Fragment>
            )
        },
    ]
}

export default article;