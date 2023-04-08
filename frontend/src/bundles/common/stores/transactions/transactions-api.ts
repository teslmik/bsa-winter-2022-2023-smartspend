import { type TransactionGetAllResponseDto } from 'shared/build/index.js';
import { TransactionsApiPath } from 'shared/build/index.js';

import { ApiPath, ContentType } from '~/bundles/common/enums/enums.js';
import { HttpApi } from '~/framework/api/api.js';
import { type IHttp } from '~/framework/http/http.js';
import { type IStorage } from '~/framework/storage/storage.js';

type DeleteTransactionResponseDto = {
    id: string;
};

type Constructor = {
    baseUrl: string;
    http: IHttp;
    storage: IStorage;
};
class TransactionsApi extends HttpApi {
    public constructor({ baseUrl, http, storage }: Constructor) {
        super({ path: ApiPath.TRANSACTIONS, baseUrl, http, storage });
    }

    public async loadTransactions(): Promise<TransactionGetAllResponseDto> {
        const response = await this.load(
            this.getFullEndpoint(TransactionsApiPath.ROOT, {}),
            {
                method: 'GET',
                contentType: ContentType.JSON,
                hasAuth: true,
            },
        );
        return await response.json<TransactionGetAllResponseDto>();
    }

    public async deleteTransaction(
        id: string,
    ): Promise<DeleteTransactionResponseDto> {
        const response = await this.load(
            this.getFullEndpoint(`${TransactionsApiPath.ROOT}${id}`, {}),
            {
                method: 'DELETE',
                contentType: ContentType.TEXT_PLAIN,
                hasAuth: true,
            },
        );
        return response.json<DeleteTransactionResponseDto>();
    }
}

export { type DeleteTransactionResponseDto, TransactionsApi };
