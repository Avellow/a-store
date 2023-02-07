import {HeaderProps} from "./Header.props";
import styles from './Header.module.css';
import cn from 'classnames';
import { Logo } from "../../components";
import { BurgerMIcon } from '@alfalab/icons-glyph/BurgerMIcon';
import {Button} from "@alfalab/core-components/button";
import {useState} from "react";
import {Sidebar} from "../Sidebar/Sidebar";

export const Header = ({ children, className, ...props }: HeaderProps): JSX.Element => {

    const [isSidePanelOpened, setIsSidePanelOpened] = useState<boolean>(false);

    const closeSidePanel = () => setIsSidePanelOpened(false);
    const openSidePanel = () => setIsSidePanelOpened(true);

    return (
        <header
            className={cn(className, styles.header)}
            {...props}
        >
            <Logo />
            <Button
                view='ghost'
                onClick={ openSidePanel }
                leftAddons={ <BurgerMIcon width='35' height='35' viewBox='0 0 24 24' /> }
            >
                <span className={styles.menuText}>меню</span>
            </Button>
            <Sidebar onClose={ closeSidePanel } isOpened={ isSidePanelOpened } />
        </header>
    );
};
