import {ImgBlockLinkProps} from "./ImgBlockLink.props";
import {Typography} from "@alfalab/core-components/typography";
import styles from './ImgBlockLink.module.css';
import {Link} from "react-router-dom";

export const ImgBlockLink = ({ title, imgUrl, to, ...restProps }: ImgBlockLinkProps): JSX.Element => {

    return (
        <Link to={to} className={styles.linkBlock} {...restProps}>
            <div
                className={styles.imgWrapper}
                style={{
                    background: `top url(${imgUrl})`,
                    backgroundSize: 'cover'
                }}
            >
                <Typography.TitleResponsive tag='h2' font='styrene' weight='bold' view='medium' color='primary'>
                    { title }
                </Typography.TitleResponsive>
            </div>
        </Link>
    )
}
