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
    id: 4,
    title: "Notre école",
	category: navigation.club,
	preview:
		"IMT Atlantique est l'une des 10 premières écoles d’ingénieur de France, une des 400 premières universités mondiales du THE World University Ranking. C’est une grande école d’ingénieurs généralistes du ministère en charge de l’industrie et du numérique, la première école « Mines-Télécom » de l’Institut Mines Télécom, née le 1er janvier 2017 de la fusion de Mines Nantes et Télécom Bretagne. Une école dotée d'un potentiel de recherche de premier plan, reconnue internationalement pour sa recherche (présente dans 5 disciplines des classements de Shanghaï, de QS et de THE). Une école résolument multi-sites à l’image du monde. Une école fortement implantée dans ses territoires au développement desquels elle contribue. Une école consciente de sa responsabilité environnementale et sociétale. Elle a obtenu le label développement durable ;& responsabilité sociétale en 2019 pour 4 ans. Enfin une école qui forme des cadres capables de comprendre et maîtriser la complexité des futurs systèmes fortement interconnectés, en alliant leurs connaissances des systèmes à celles des réseaux qui les relient.",
	body:[
        {
            title: "Introduction",
            body: (
                <React.Fragment>
                    <p>IMT Atlantique est l'une des 10 premières écoles d’ingénieur de France, une des 400 premières universités mondiales du THE World University Ranking. C’est une grande école d’ingénieurs généralistes du ministère en charge de l’industrie et du numérique, la première école « Mines-Télécom » de l’Institut Mines Télécom, née le 1er janvier 2017 de la fusion de Mines Nantes et Télécom Bretagne.
                        Une école dotée d'un potentiel de recherche de premier plan, reconnue internationalement pour sa recherche (présente dans 5 disciplines des classements de Shanghaï, de QS et de THE).
                        Une école résolument multi-sites à l’image du monde. Une école fortement implantée dans ses territoires au développement desquels elle contribue. Une école consciente de sa responsabilité environnementale et sociétale. Elle a obtenu le label développement durable ;& responsabilité sociétale en 2019 pour 4 ans.
                        Enfin une école qui forme des cadres capables de comprendre et maîtriser la complexité des futurs systèmes fortement interconnectés, en alliant leurs connaissances des systèmes à celles des réseaux qui les relient.</p>
                    <img className="bigImage" src={images.imtAtlantique.mixImages.src} alt={images.imtAtlantique.mixImages.name}/>
                </React.Fragment>
            )
        },
        {
            title: "Chiffres clés",
            body: (
                <React.Fragment>
                    <ul>
                        <li>3 campus Brest - Nantes – Rennes + 1 implantation à Toulouse</li>
                        <li>3 grands domaines d’expertise : le numérique, l'énergie et l’environnement.</li>
                        <li>1 800 étudiants dont 1 380 ingénieurs et 270 doctorants engagés dans des parcours de formation de haut niveau.</li>
                        <li>700 diplômés/an du diplôme d’ingénieur au doctorat</li>
                        <li>750 personnels dont 500 permanents</li>
                        <li>260 enseignants chercheurs et chercheurs permanents sur nos campus, dont 115 HDR</li>
                        <li>850 publications/an dont 390 de « rang A »</li>
                        <li>73 M€ de budget dont 27 M€ de ressources propres incluant 24 M€ de contrats de recherche</li>
                    </ul>
                </React.Fragment>
            )
        },
        {
            title: "Formation",
            body: (
                <React.Fragment>
                    <ul>
                        <li>Une nouvelle formation d'ingénieur généraliste unique, organisée en multi-sites. Recrutement sur le concours commun Mines-Pont  (Diplômation de la première promotion en novembre 2021)</li>
                        <li>Une formation à la convergence du numérique, de l’énergie et de l’environnement, construite autour du projet professionnel de l’élève et des besoins des entreprises.</li>
                        <li>D'autres formations : masters, mastères, ingénieur par apprentissage, doctorat.</li>
                        <li>Une agilité en innovation pédagogique pertinente.</li>
                    </ul>
                </React.Fragment>
            )
        },
        {
            title: "Recherche",
            body: (
                <React.Fragment>
                    <ul>
                        <li>Un potentiel en recherche qui place l’École parmi les 10 premières en France et les 400 premières universités mondiales (<a href="https://www.imt-atlantique.fr/fr/presse/les-palmares">Palmarès</a>)</li>
                        <li>L'École s'appuie sur son excellence en recherche dans ses domaines phares et en couplant les domaines scientifiques pour répondre aux défis de demain: énergie et numérique, cybersécurité, santé et numérique, environnement et numérique, industrie du futur, nucléaire et interactions. 6 axes thématiques : transition numérique, transition environnementale, transition industrielle, transition énergétique, santé du futur et recherche fondamentale.</li>
                        <li>Une contribution exemplaire au développement de la recherche sur le territoire via son engagement comme tutelle dans 6 unités mixtes de recherche (5 CNRS et 1 Inserm).</li>
                        <li>Une reconnaissance de la qualité de sa recherche avec le financement de 3 projets ERC (European Research Council grants), 4 chaires académiques et de nombreux prix scientifiques.</li>
                    </ul>
                </React.Fragment>
            )
        },
        {
            title: "International",
            body: (
                <React.Fragment>
                    <ul>
                        <li>Plus de 50 accords de double diplôme</li>
                        <li>Plus de 70 nationalités sur nos campus</li>
                        <li>Une offre de formation de niveau master en français et en anglais</li>
                        <li>2 programme de formation labellisé Erasmus Mundus</li>
                        <li>5 formations off-shore (Chine, Côte d’Ivoire, Maroc, Vietnam, Sénégal)</li>
                    </ul>
                </React.Fragment>
            )
        },
        {
            title: "Liens",
            body: (
                <React.Fragment>
                    <a href="https://www.imt-atlantique.fr/fr/">Site de l'école</a><br/>
			        <a href="https://www.youtube.com/c/IMTAtlantique/featured">Chaîne youtube</a>
                </React.Fragment>
            )
        },
    ]
}

export default article;