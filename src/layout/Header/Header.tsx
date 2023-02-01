import {HeaderProps} from "./Header.props";
import styles from './Header.module.css';
import cn from 'classnames';
import { Logo } from "../../components";
import { BurgerMIcon } from '@alfalab/icons-glyph/BurgerMIcon';
import {Button} from "@alfalab/core-components/button";

export const Header = ({ children, className, ...props }: HeaderProps): JSX.Element => {

    return (
        <header
            className={cn(className, styles.header)}
            {...props}
        >
            <Logo />
            <Button
                view='ghost'
                leftAddons={ <BurgerMIcon width='35' height='35' viewBox='0 0 24 24' /> }
            >
                меню
            </Button>
        </header>
    );
};
