import { Communtiy, Help, Profile, Settings, SignOut, Sub } from "@/svgs";
import type { ReactNode } from "react";

type OPTIONS_TYPE = {
	name: string;
	label: ReactNode;
};
export const options: OPTIONS_TYPE[] = [
	{
		name: "Profile",
		label: <Profile />,
	},
	{
		name: "Community",
		label: <Communtiy />,
	},
	{
		name: "Subscriptions",
		label: <Sub />,
	},
	{
		name: "Settings",
		label: <Settings />,
	},
];

export const footerOptions: OPTIONS_TYPE[] = [
	{
		name: "Help center",
		label: <Help />,
	},
	{
		name: "Sign out",
		label: <SignOut />,
	},
];
