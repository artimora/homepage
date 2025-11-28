import { siteInfo } from "@/app-info";

export function createProps(pageInfo: PageInfo): PageProps {
	return { pageInfo, siteInfo };
}

export type PageProps = {
	pageInfo: PageInfo;
	siteInfo: SiteInfo;
};

export type PageInfo = {
	title?: string;
	description: string;
	image: string;
	article?: Article;
};

export type SiteInfo = {
	title: string;
	license: string;
	locale: string;
	keywords: string[];
	robots: Robots;
	twitter?: Twitter;
	author: Author;
};

export type Robots =
	| "all"
	| "noindex"
	| "nofollow"
	| "none"
	| "nosnippet"
	| "indexifembedded"
	| "notranslate"
	| "noimageindex";

export type Twitter = {
	card?: TwitterCard;
	imageAlt?: string;
	siteUsername?: string;
};

export type TwitterCard = "summary" | "summary_large_image";

export type Author = {
	name: string;
	twitterUsername?: string;
};

export type Article = {
	author: string;
	publishedTime: string;
	modifiedTime?: string;
	expirationTime?: string;
	section: string;
	tag: string;
};
