"use client";
import { useStore } from "@nanostores/react";
import { currentSection, currentSubSection } from "@/lib/stores";

type LinkProps =
	| { type: "section"; section: string }
	| { type: "subsection"; subsection: string };

export function Link(props: LinkProps) {
	const activeSubSection = useStore(currentSubSection);
	const activeSection = useStore(currentSection);

	return (
		<a
			href="javascript"
			onClick={(e) => {
				e.preventDefault();
				if (props.type === "section") {
					currentSection.set(
						currentSection.get() === props.section
							? "none"
							: props.section,
					);

					currentSubSection.set("none");
				}

				if (props.type === "subsection") {
					currentSubSection.set(
						currentSubSection.get() === props.subsection
							? "none"
							: props.subsection,
					);
				}
			}}
			className={`cursor default${props.type === "section" && activeSection === props.section ? " active" : ""}`}
		>
			<p>
				{props.type === "subsection" &&
				activeSubSection === props.subsection
					? "> "
					: ""}
				{props.type === "section" && activeSection === props.section
					? "> "
					: ""}
				{props.type === "section" ? props.section : props.subsection}
			</p>
		</a>
	);
}
