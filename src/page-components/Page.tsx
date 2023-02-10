import {Layout} from "../layout";
import {PageProps} from "./Page.props";

const Page = ({ children, ...restProps }: PageProps): JSX.Element => {
    return (
        <Layout>
            <Layout.Header />
            <Layout.Body {...restProps}>
                { children }
            </Layout.Body>
            <Layout.Footer />
        </Layout>
    );
};

export default Page;
