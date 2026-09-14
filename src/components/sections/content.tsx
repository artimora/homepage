"use client";
import { useStore } from "@nanostores/react";
import { currentSection } from "@/lib/stores";

export function Content({
	section,
	children,
	className,
}: {
	section: string;
	children: React.ReactNode;
	className?: string;
}) {
	const activeSection = useStore(currentSection);
	if (activeSection !== section) return null;
	return <div className={className}>{children}</div>;
}
