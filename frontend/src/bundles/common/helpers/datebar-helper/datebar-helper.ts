import { type DataObject } from '../../components/bar-chart/bar.type';

const dateHelper = (array: DataObject[]): DataObject[] => {
    return array.map((object) => {
        return {
            date: new Date(object.date).toLocaleDateString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
            }),
            value: object.value,
        };
    });
};

export { dateHelper };
