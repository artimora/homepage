import { ExternalLink } from "@/components/external-link";
import { PageMetaData } from "@/components/page-meta-data";
import { Content } from "@/components/sections/content";
import { Holder } from "@/components/sections/holder";
import { Link } from "@/components/sections/link";
import { SubSection } from "@/components/sections/subsection";
import { data } from "@/data";

export default async function HomePage() {
	const hash = import.meta.env.WAKU_PUBLIC_GIT_HASH;

	return (
		<div>
			<PageMetaData pageName="homepage" />

			<div className="main">
				<h1 className="header">{data.info.name}</h1>
				<p
					className="sub"
					/** biome-ignore lint/security/noDangerouslySetInnerHtml: i dont care */
					dangerouslySetInnerHTML={{ __html: data.info.title }}
				/>
				<p className="sub">nothing here yet though.</p>
			</div>

			<Holder className="close">
				<Link section="socials" type="section" />
				<Link section="libraries" type="section" />
			</Holder>

			<Content section="socials" className="close toppad">
				<ul className="content">
					{data.socials.map((social) => (
						<li key={social.name}>
							<ExternalLink key={social.name} href={social.url}>
								{social.name}
							</ExternalLink>
						</li>
					))}
				</ul>
			</Content>

			<Content section="libraries" className="close toppad">
				<ul className="content">
					{data.libraries.map((project) => (
						<div key={project.name}>
							<SubSection
								section={project.name}
								className="subsection"
							>
								<p>{project.description}</p>
								{Object.entries(project.links).map(
									([key, value]) => (
										<ExternalLink
											key={key}
											href={value}
											style={{ marginRight: "8px" }}
										>
											{key}
										</ExternalLink>
									),
								)}
							</SubSection>
							<li key={`${project.name}-item`}>
								<Link
									key={project.name}
									subsection={project.name}
									type="subsection"
								/>
							</li>
						</div>
					))}
				</ul>
			</Content>

			<ExternalLink
				href={`https://github.com/artimora/homepage/commit/${hash}`}
				style={{
					position: "fixed",
					bottom: "16px",
					right: "32px",
					lineHeight: "0",
				}}
			>
				<div>{hash}</div>
			</ExternalLink>
		</div>
	);
}

export const getConfig = async () => {
	return {
		render: "static",
	} as const;
};
