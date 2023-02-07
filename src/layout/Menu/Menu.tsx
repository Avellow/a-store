import styles from './Menu.module.css';
import {pagesData} from "../../routes/pagesData";
import {Link} from "react-router-dom";
import {Typography} from "@alfalab/core-components/typography";

export const Menu = (): JSX.Element => {

    return (
        <nav>
            <ul className={styles.menuList}>
                {pagesData.map((page) => page.linkTitle && (
                    <li key={page.title}>
                        <Link to={`/${page.path}`}>
                            <Typography.TitleResponsive
                                tag='div'
                                view='large'
                                font='styrene'
                                weight='bold'
                                className={styles.linkText}
                                defaultMargins
                            >
                                {page.linkTitle}
                            </Typography.TitleResponsive>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
