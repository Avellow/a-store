import {SidebarProps} from "./Sidebar.props";
import styles from './Sidebar.module.css';
import {Menu} from "../Menu/Menu";
import {SidePanelResponsive} from "@alfalab/core-components/side-panel/responsive";
import {Button} from "@alfalab/core-components/button";
import {Link} from "react-router-dom";
import {Typography} from "@alfalab/core-components/typography";
import CrossHeavyMIcon from "@alfalab/icons/glyph/dist/CrossHeavyMIcon";
import {Grid} from "@alfalab/core-components/grid";
import {Circle} from "@alfalab/core-components/icon-view/components";
import WhatsappMIcon from "@alfalab/icons/logotype/dist/WhatsappMIcon";
import PhoneMIcon from "@alfalab/icons/glyph/dist/PhoneMIcon";
import EmailMBlackIcon from "@alfalab/icons/classic/dist/EmailMBlackIcon";

export const Sidebar = ({ isOpened, onClose }: SidebarProps): JSX.Element => {

    const handleCloseSidebar = () => onClose();

    const buildMessageIcons = () => {
        const iconColor = 'black';

        const icons = [
            <EmailMBlackIcon color={iconColor} />,
            <PhoneMIcon color={iconColor} />,
            <WhatsappMIcon color={iconColor} />,
        ];

        return (
            <Grid.Row align='middle' gutter={8} justify='center'>
                {icons.map((icon, i) => (
                    <Grid.Col key={i}>
                        <Button view='ghost'>
                            <Circle backgroundColor='white' size={32}>
                                {icon}
                            </Circle>
                        </Button>
                    </Grid.Col>
                ))}
            </Grid.Row>
        );
    };

    return (
        <SidePanelResponsive
            open={isOpened}
            onBackdropClick={handleCloseSidebar}
            onClose={handleCloseSidebar}
            className={styles.sidePanel}
            contentClassName={styles.sidePanelContent}
            breakpoint={400}
        >
            <SidePanelResponsive.Header hasCloser={false} contentClassName={styles.sidePanelHeader}>
                <Button view='ghost' className={styles.closeButton} onClick={ handleCloseSidebar }>
                    <CrossHeavyMIcon className={styles.closeIcon} />
                </Button>
            </SidePanelResponsive.Header>

            <SidePanelResponsive.Content>
                <Menu />
            </SidePanelResponsive.Content>

            <SidePanelResponsive.Footer layout='column'>
                <Link to='/#'>
                    <Typography.Text tag='p' weight='bold' view='primary-small' className={styles.policyText}>
                        Политика конфиденциальности и&nbsp;обработки персональных данных
                    </Typography.Text>
                </Link>
                { buildMessageIcons() }
            </SidePanelResponsive.Footer>
        </SidePanelResponsive>
    );
};
