import {withLayout} from "../layout/Layout";
import {PageProps} from "./Page.props";

const Page = ({ children }: PageProps): JSX.Element => {
    return (
        <>
            { children }
        </>
    )
}

export default withLayout(Page)
