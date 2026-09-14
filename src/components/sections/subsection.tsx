"use client";

import { useStore } from "@nanostores/react";
import { currentSubSection } from "@/lib/stores";

export function SubSection({
	section,
	children,
	className,
}: {
	section: string;
	children: React.ReactNode;
	className?: string;
}) {
	const activeSection = useStore(currentSubSection);
	if (activeSection !== section) return null;
	return <div className={className}>{children}</div>;
}
