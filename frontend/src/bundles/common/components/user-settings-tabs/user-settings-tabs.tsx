import { UserSettingsTab } from './components/components.js';
import styles from './styles.module.scss';

interface Properties {
    tabsData: {
        title: string;
        to: string;
    }[];
}

const UserSettingsTabs: React.FC<Properties> = ({ tabsData }) => {
    return (
        <nav className={styles.tabs}>
            {tabsData.map((item, index) => (
                <UserSettingsTab key={index} title={item.title} to={item.to} />
            ))}
        </nav>
    );
};

export { UserSettingsTabs };
