// Modules
import React, { useRef } from "react";

// Elements
import ListMenuElements from "molecules/ListMenuElements/ListMenuElements";

// Styles
import { secondary } from "styles/customColors";
import * as Styled from "organisms/MenuBar/MenuBar.styled";

// Definitions
export interface MenuBarProps {
	elements: { name: string; id: string; onClick?: () => void }[];
	selectedId: string;
	onSwitchChange: (checked: boolean) => void;
	darkModeChecked: boolean;
}

// Element
const MenuBar = ({ elements, selectedId, onSwitchChange, darkModeChecked }: MenuBarProps) => {
	const ref = useRef<HTMLDivElement>(null);

	const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => onSwitchChange(ev.target.checked);

	return (
		<Styled.Container ref={ref} secondary={secondary} className="w-full sticky top-0 flex justify-center pt-2 pb-2 z-50">
			<ListMenuElements menuElements={elements} selectedId={selectedId} className="w-4/5 max-w-screen-lg items-center" />
			<Styled.MaterialUISwitch checked={darkModeChecked} onChange={onChange} value="nightMode" inputProps={{ "aria-label": "Night Mode switch" }} />
		</Styled.Container>
	);
};

export default MenuBar;

// Hides the bar menu when scrolled down and shows it when scrolled up

/* 	useEffect(() => {
		var prevScrollPosition = window.scrollY;
		window.onscroll = () => {
			var currentScrollPos = window.scrollY;
			if (ref.current) ref.current.style.top = prevScrollPosition > currentScrollPos ? "0" : "-100px";
			prevScrollPosition = window.scrollY;
		};
	});
 */
