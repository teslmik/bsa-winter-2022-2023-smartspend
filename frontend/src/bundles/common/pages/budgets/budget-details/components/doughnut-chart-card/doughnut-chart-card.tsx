import { type IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';

import { DoughnutChart, Icon } from '~/bundles/common/components/components';
import { dateToShortStringHelper } from '~/bundles/common/helpers/helpers';
import { type DoughnutChartCartVariant } from '~/bundles/landing/enums/enums';

import styles from './styles.module.scss';

type Properties = {
    title: string;
    date: string;
    transaction_num?: number;
    transaction_type?: string;
    transaction_sum?: string;
    name?: string;
    variant?: DoughnutChartCartVariant;
    categories: {
        total: number;
        count: number;
        color: string;
        name: string;
        icon: string;
    }[];
};

const DoughnutChartCard: React.FC<Properties> = ({
    title,
    date,
    categories,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.topPart}>
                <p className={styles.title}>{title}</p>
                <span className={styles.date}>
                    {dateToShortStringHelper([{ date: date }])[0].date}
                </span>
            </div>
            <div className={styles.chartPart}>
                <DoughnutChart tooltipDisplay={false} categories={categories} />
            </div>
            {categories.map((category) => (
                <div key={category.name} className={styles.bottomPart}>
                    <div className={styles.transactionTypeContainer}>
                        <div className={styles.base}>
                            <span
                                className={styles.icon}
                                style={{ background: `${category.color}` }}
                            >
                                <Icon name={category.icon as IconProp} />
                            </span>
                        </div>
                        <p className={styles.transactionType}>
                            {category.name}
                        </p>
                    </div>
                    <div
                        className={classNames(
                            styles.transactionTypeContainer,
                            styles.right,
                        )}
                    >
                        <p className={styles.transactionNum}>
                            {category.count} transaction
                        </p>
                        <p className={styles.transactionSum}>
                            {category.total}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export { DoughnutChartCard };
