export type HomepageData = {
	page: {
		// data
		title: string;
		description: string;
		site: string;
		color: `#${string}`;

		// images
		icon: `${string}.png`;
		image: `${string}.png`;

		// metadata
		license: string;
		locale: string;
		keywords: string[];
		robots: Robots;
		twitter?: Twitter;
		author: Author;
	};
	info: {
		name: string;
		title: string;
		description: string;
	};
	socials: {
		name: string;
		url: string;
	}[];
	libraries: {
		name: string;
		description: string;
		links: {
			[key: string]: string;
		};
		tags?: string[];
	}[];
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
	siteUsername?: `@${string}`;
	creatorUsername?: `@${string}`;
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
