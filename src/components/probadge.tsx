import { Lightening } from "../svgs";

export default function ProBadge() {
	return (
		<span
			role="status"
			aria-label="Pro status badge"
			title="Pro status"
			className="flex items-center justify-center gap-[4px] px-[6px] py-[3px] bg-[#A0FFA5] rounded-[6px] outline-2 outline-[#8DEE92]"
		>
			<Lightening aria-hidden="true" />
			<span className="text-[11px] font-inter-display font-bold leading-[14px] tracking-[3%] text-[#014E04]">
				PRO
			</span>
		</span>
	);
}
