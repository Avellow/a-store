import styles from "./Logo.module.css";
import {Typography} from "@alfalab/core-components/typography";

export const Logo = (): JSX.Element => {
    return (
        <Typography.Title
            tag='h1'
            view='medium'
            weight='bold'
            className={styles.logoTitle}
        >
            A-Store
        </Typography.Title>
    )
};
