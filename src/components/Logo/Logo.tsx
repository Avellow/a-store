import styles from "./Logo.module.css";
import {Typography} from "@alfalab/core-components/typography";
import {Link} from "react-router-dom";

export const Logo = (): JSX.Element => {
    return (
        <Typography.Title
            tag='h1'
            view='medium'
            weight='bold'
            className={styles.logoTitle}
        >
            <Link to='/'>A-Store</Link>
        </Typography.Title>
    )
};
