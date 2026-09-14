import { data } from "@/data";
import "../styles.css";

import type { ReactNode } from "react";
import { unstable_getRequest as getRequest } from "waku/router/server";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
	return (
		<div>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="anonymous"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
				rel="stylesheet"
			/>

			<PageMetaData />

			<main>{children}</main>
		</div>
	);
}

export const getConfig = async () => {
	return {
		render: "static",
	} as const;
};

function PageMetaData() {
	const request = getRequest();
	const url = new URL(request.url);

	const canonicalURL = new URL(url.pathname, data.page.site);

	const image = new URL(data.page.image, url);
	const keywords = data.page.keywords.join(",");

	return (
		<div>
			<meta name="keywords" content={keywords} />
			<meta name="robots" content={data.page.robots} />
			<meta name="license" content={data.page.license} />

			{/* <!-- Canonical URL --> */}
			<link rel="canonical" href={canonicalURL.href} />

			{/* <!-- Open Graph / Facebook --> */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url.href} />
			<meta property="og:title" content={data.page.title} />
			<meta property="og:description" content={data.page.description} />
			<meta property="og:site_name" content={data.page.title} />
			<meta property="og:image" content={image.href} />
			<meta property="og:locale" content={data.page.locale} />

			{/* <!-- Twitter --> */}

			<meta property="twitter:url" content={url.href} />
			<meta property="twitter:title" content={data.page.title} />
			<meta
				property="twitter:description"
				content={data.page.description}
			/>
			<meta property="twitter:image" content={image.href} />

			{data.page.twitter?.imageAlt && (
				<meta
					property="twitter:image:alt"
					content={data.page.twitter?.imageAlt}
				/>
			)}

			{data.page.twitter?.card && (
				<meta
					property="twitter:card"
					content={data.page.twitter.card ?? "summary_large_image"}
				/>
			)}

			{data.page.twitter?.creatorUsername && (
				<meta
					property="twitter:creator"
					content={data.page.twitter.creatorUsername}
				/>
			)}

			{data.page.twitter?.siteUsername && (
				<meta
					property="twitter:site"
					content={data.page.twitter.siteUsername}
				/>
			)}

			{/* <!-- Primary Meta Tags --> */}
			<meta name="title" content={data.page.title} />
			<meta name="author" content={data.page.author.name} />
			<meta name="description" content={data.page.description} />
			<link rel="icon" type="image/png" href={data.page.icon} />
			<title>{data.page.title}</title>
		</div>
	);
}
