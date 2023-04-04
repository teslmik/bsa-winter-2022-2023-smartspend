import { authController } from '~/bundles/auth/auth.js';
import { budgetController } from '~/bundles/budgets/budgets.js';
import { categoryController } from '~/bundles/categories/categories.js';
import { transactionController } from '~/bundles/transactions/transactions.js';
import { userController } from '~/bundles/users/users.js';
import { walletController } from '~/bundles/wallets/wallets.js';
import { config } from '~/common/config/config.js';
import { database } from '~/common/database/database.js';
import { logger } from '~/common/logger/logger.js';

import { ServerApp } from './server-app.js';
import { ServerAppApi } from './server-app-api.js';

const apiV1 = new ServerAppApi(
    'v1',
    config,
    ...authController.routes,
    ...userController.routes,
    ...categoryController.routes,
    ...walletController.routes,
    ...transactionController.routes,
    ...budgetController.routes,
);
const serverApp = new ServerApp({
    config,
    logger,
    database,
    apis: [apiV1],
});

export { serverApp };
export { type ServerAppRouteParameters } from './types/types.js';
