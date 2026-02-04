import { Icon } from "@/components/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import { cn } from "@/utils";

type UserAvatarProps = {
	src?: string | null;
	name?: string | null;
	email?: string | null;
	size?: number;
	className?: string;
};

const getInitials = (name?: string | null, email?: string | null) => {
	const trimmed = (name || "").trim();
	if (trimmed) {
		const parts = trimmed.split(/\s+/);
		const first = parts[0]?.[0] ?? "";
		const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
		const initials = `${first}${last}`.toUpperCase();
		return initials || "U";
	}
	const emailInitial = (email || "").trim()[0];
	return emailInitial ? emailInitial.toUpperCase() : "U";
};

export default function UserAvatar({ src, name, email, size = 32, className }: UserAvatarProps) {
	const initials = getInitials(name, email);

	return (
		<Avatar
			className={cn("bg-muted", className)}
			style={{ width: size, height: size }}
			aria-label={name || email || "User"}
		>
			{src ? <AvatarImage src={src} /> : null}
			<AvatarFallback className="text-xs font-medium">
				{initials ? <span>{initials}</span> : <Icon icon="mdi:account" size={Math.max(16, Math.floor(size * 0.6))} />}
			</AvatarFallback>
		</Avatar>
	);
}
