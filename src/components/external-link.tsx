import { LinkExternal } from "./icons/link-external";

export function ExternalLink({
	href,
	children,
	className,
	style,
	showIcon = true,
}: {
	href: string;
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	showIcon?: boolean;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener"
			className={className}
			style={{
				display: "inline-flex",
				alignItems: "center",
				gap: "0.25rem",
				...style,
			}}
		>
			<span>{children}</span>

			{showIcon && <LinkExternal title={children as string} />}
		</a>
	);
}
