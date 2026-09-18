import type { HomepageData } from "@/lib/types";

export const data: HomepageData = {
	page: {
		// data
		title: "artimora",
		description: "sup, we make games. nothing here yet though",
		site: "https://artimora.dev",
		color: "#8093f1",

		// images
		icon: "/images/favicon.png",
		image: "/images/banner.png",

		// metadata
		license: "MIT",
		keywords: ["artimora", "studio", "software", "code"],
		robots: "all",
		locale: "en_US",
		twitter: {
			card: "summary_large_image",
			siteUsername: "@artimorastudios",
			creatorUsername: "@copperdevs",
		},
		author: {
			name: "copper",
			twitterUsername: "@copperdevs",
		},
	},
	info: {
		name: "artimora",
		title: "sup, we <i>(hopefully will)</i> make games.",
		description: "nothing here yet though.",
	},
	socials: [
		{
			name: "email",
			url: "mailto:contact@artiomra.dev",
		},
		{
			name: "twitter",
			url: "https://twitter.com/artimorastudios",
		},
		{
			name: "youtube",
			url: "https://youtube.com/@artimorastudios",
		},
		{
			name: "github",
			url: "https://github.com/artimora",
		},
		{
			name: "modrinth",
			url: "https://modrinth.com/organization/artimora",
		},
		{
			name: "npm",
			url: "https://www.npmjs.com/org/artimora",
		},
		{
			name: "nuget",
			url: "https://www.nuget.org/profiles/artimora",
		},
	],
	libraries: [
		{
			name: "maia",
			description: "message based networking library for .NET",
			links: {
				nuget: "https://www.nuget.org/packages/Artimora.Maia/",
				source: "https://github.com/artimora/maia",
			},
		},
		{
			name: "electra",
			description: "message based networking library for node",
			links: {
				npm: "https://www.npmjs.com/package/@artimora/electra",
				source: "https://github.com/artimora/electra",
			},
		},
		{
			name: "kronos",
			description: "simple web framework for .NET",
			links: {
				nuget: "https://www.nuget.org/packages/Artimora.Kronos",
				source: "https://github.com/artimora/kronos",
			},
		},
		{
			name: "fdb",
			description: "file system emulated in a database for kysley",
			links: {
				npm: "https://www.npmjs.com/package/@artimora/fdb",
				source: "https://github.com/artimora/dbs/tree/main/src/packages/fdb",
			},
		},
		{
			name: "hangar",
			description: "simple dev server powered by vite and hono",
			links: {
				source: "https://github.com/artimora/hangar",
			},
			tags: ["archived"],
		},
	],
};
