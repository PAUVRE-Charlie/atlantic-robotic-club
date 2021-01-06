/**
 * This file gathers some interfaces and functions used in multiple files.
 */

/* Packages */
import { RouteProps } from "react-router-dom";

export interface navigationItem {
    name: string;
    link: string;
    completeLink: string;
}

export interface socialMediaItem {
    logo: Logo;
    link: string;
}

export interface Person {
    id: number;
    firstname: string;
    lastname: string;
    nickname: string;
    campus: string;
    image: Image;
    taf: string;
    description: string;
}

export interface Team {
    name: string;
    members: Person[]
}

export interface Video {
    name: string;
    src: string;
}

export interface Image {
    name: string;
    src: string;
}

export interface Logo {
    name: string;
    src: string;
}

export interface Section {
    title: string;
    url: string;
    body: React.ReactFragment
}

export interface Article {
    id: number,
    title: string;
    category: navigationItem;
    author?: Person;
    preview: string;
    body: Section[];
}

export interface MatchParamsArticlePage {
    category: string;
    id: string;
}

export interface MatchParamsArticlesPage {
    category: string;
}

export interface ArticleCardProps {
    article: Article
}

export interface ScrollToTopProps {
    children?: any; 
    location: RouteProps["location"];
}

export interface SideTextElement {
    navigationItem: navigationItem;
    color: string;
    position: string;
}

export interface SideTextProps {
    category: string;
    sideTextElements: SideTextElement[];
}
