import { AppRoute } from '~/bundles/common/enums/enums.js';

const tabsDashboard = [
    { title: 'Dashboard', to: AppRoute.DASHBOARD, icon: 'DASHBOARD' },
    { title: 'Budgets', to: AppRoute.BUDGETS, icon: 'BUDGET' },
];

const tabsData = [
    { title: 'Transaction', to: AppRoute.USER, icon: 'TRANSACTION' },
    { title: 'Overview', to: '/overview', icon: 'DASHBOARD' },
    { title: 'Budget', to: '/budget', icon: 'BUDGET' },
    { title: 'Wallet Settings', to: '/wallet-settings', icon: 'SETTINGS' },
];

const dataTabs = {
    dashboard: tabsDashboard,
    wallets: tabsData,
};

export { dataTabs };
