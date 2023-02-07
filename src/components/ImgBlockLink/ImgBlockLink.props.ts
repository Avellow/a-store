import {LinkProps} from "react-router-dom";

export interface ImgBlockLinkProps extends LinkProps {
    imgUrl: string,
    title: string
}
