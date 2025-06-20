import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Plus } from "../../svgs";
import { footerOptions, options } from "../../constants";
import { ProBadge } from "../../components";
const ACTIVE_HOVER_STYLE = "bg-[#f2f2f2] rounded-[12px]";

export default function Home() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLElement | null>(null);
	const [menuHeight, setMenuHeight] = useState(0);

	useEffect(() => {
		if (menuRef.current) {
			setMenuHeight(isOpen ? menuRef.current.scrollHeight : 0);
		}
	}, [isOpen]);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleKeyDown = (
		e: KeyboardEvent<HTMLLIElement | HTMLDivElement>,
		index?: number
	) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			if (index === undefined) {
				handleToggle();
			} else {
				setActiveIndex(index);
			}
		}
	};

	return (
		<div className="flex justify-center items-center min-h-screen w-full select-none">
			<div className="bg-[#fcfcfc] w-[252px] max-h-[348px] rounded-[20px] inside-stroke p-[8px] overflow-hidden">
				<div
					role="button"
					aria-expanded={isOpen}
					aria-controls="user-settings-menu"
					tabIndex={0}
					className="py-3 pr-3 pl-4 rounded-[12px] flex justify-between items-center border border-[#EEEEEE] cursor-pointer hover:bg-[#f2f2f2]"
					onClick={handleToggle}
					onKeyDown={(e) => handleKeyDown(e)}
				>
					<div>
						<h2 className="text-[#121212] font-semibold font-sf-pro leading-[24px] tracking-normal">
							Sophie Bennett
						</h2>
						<p className="text-sm font-medium font-inter text-[#8a8a8a] leading-[16px] tracking-[-2%]">
							sophie@ui.live
						</p>
					</div>
					<div className="w-11 h-11">
						<img
							src="/avatar.png"
							alt="Avatar of Sophie Bennett"
							className="h-full w-full"
						/>
					</div>
				</div>
				<nav
					id="user-settings-menu"
					aria-label="User settings menu"
					ref={menuRef}
					style={{
						maxHeight: `${menuHeight}px`,
						transformOrigin: "top center",
					}}
					className={`overflow-hidden transition-all duration-300 ease-out ${
						isOpen
							? "transform scale-y-100 opacity-100"
							: "transform scale-y-0 opacity-0"
					}`}
				>
					<ul role="menu" className="flex flex-col py-2">
						{options.map((option, index) => (
							<li
								key={index}
								role="menuitem"
								aria-selected={activeIndex === index}
								tabIndex={0}
								className={`flex items-center justify-between p-2 transition duration-200 ease-in-out cursor-pointer ${
									activeIndex === index ? ACTIVE_HOVER_STYLE : ""
								} hover:bg-[#f2f2f2] hover:rounded-[12px] ${
									isOpen ? "animate-slideDown" : ""
								}`}
								onClick={() => setActiveIndex(index)}
								onKeyDown={(e) => handleKeyDown(e, index)}
								style={{
									animationDelay: isOpen ? `${index * 50}ms` : "0ms",
								}}
							>
								<div className="flex items-center gap-2">
									<span aria-hidden="true">{option.label}</span>
									<p className="text-[#121212] font-medium text-sm font-inter tracking-[-2%]">
										{option.name}
									</p>
								</div>
								<div>
									{index === 1 ? (
										<span className="cursor-pointer" aria-label="Add option">
											<Plus />
										</span>
									) : index === 2 ? (
										<span aria-label="Pro status">
											<ProBadge />
										</span>
									) : (
										""
									)}
								</div>
							</li>
						))}

						<div className=" bottom-0 left-0 right-0 border-t border-[#f4f4f4] py-2.5 z-1">
							{footerOptions.map((option, index) => (
								<li
									key={index}
									role="menuitem"
									aria-selected={activeIndex === options.length + index}
									tabIndex={0}
									className={`flex items-center justify-between p-2 transition duration-200 ease-in-out cursor-pointer ${
										activeIndex === options.length + index
											? ACTIVE_HOVER_STYLE
											: ""
									} hover:bg-[#f2f2f2] hover:rounded-[12px] ${
										isOpen ? "animate-slideDown" : ""
									}`}
									onClick={() => setActiveIndex(options.length + index)}
									onKeyDown={(e) => handleKeyDown(e, options.length + index)}
									style={{
										animationDelay: isOpen
											? `${(options.length + index) * 50}ms`
											: "0ms",
									}}
								>
									<div className="flex items-center gap-2">
										<span aria-hidden="true">{option.label}</span>
										<span className="text-[#121212] font-medium text-sm font-inter tracking-[-2%]">
											{option.name}
										</span>
									</div>
									<div></div>
								</li>
							))}
						</div>
					</ul>
				</nav>
			</div>
		</div>
	);
}
