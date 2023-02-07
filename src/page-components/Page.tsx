import {Layout} from "../layout";
import {PageProps} from "./Page.props";

const Page = ({ children }: PageProps): JSX.Element => {
    return (
        <Layout>
            <Layout.Header />
            <Layout.Body>
                { children }
            </Layout.Body>
            <Layout.Footer />
        </Layout>
    );
};

export default Page;
