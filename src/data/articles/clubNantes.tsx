/**
 * This file store an article used in this website
 */

/* Packages */
import React from 'react';

/* Types */
import { Article } from '../../utils';

/* Data */
import colors from '../colors';
import { navigation } from '../navigation';
import team from '../team';

const article: Article = {
    id: 6,
    title: "Club robotique de Nantes",
    category: navigation.club,
	preview:
		'Cet article présente les membres du club robotique de Nantes.',
	body: [
        {
            title:'',
            body: Object.values(team.members).filter(member => member.campus === "Nantes").map((person) => {
                return (
                    <div key={"person" + person.id} className="sideViewImage avatar" style={{flexDirection: person.id%2 === 0 ? 'row' : 'row-reverse'}}>
                        <div><img src={person.image.src} alt={person.image.name}></img></div>
                        <div><h2>{person.firstname + " " + person.lastname}</h2>
                            <p style={{color: colors.accent}}>{person.nickname}</p>
                            <p style={{color: colors.darkBlue}}>{person.taf}</p>
                            <br/>
                            <p>{person.description}</p>
                        </div>
                    </div>
                )
            })
        }
    ]
}

export default article;