import {
    type Control,
    type FieldErrors,
    type FieldPath,
    type FieldValues,
} from 'react-hook-form';

import { useFormController } from '~/bundles/common/hooks/hooks.js';

import styles from './styles.module.scss';

type Properties<T extends FieldValues> = {
    control: Control<T, null>;
    errors: FieldErrors<T>;
    label: string;
    name: FieldPath<T>;
    placeholder?: string;
    type?: 'text' | 'email';
};

const Input = <T extends FieldValues>({
    control,
    errors,
    label,
    name,
    placeholder = '',
    type = 'text',
}: Properties<T>): JSX.Element => {
    const { field } = useFormController({ name, control });

    const error = errors[name]?.message;
    const hasError = Boolean(error);

    return (
        <label>
            <span>{label}</span>
            <input {...field} type={type} placeholder={placeholder} className={`${hasError ? styles.inputError : styles.input}`}/>
            {hasError && <span>{error as string}</span>}
        </label>
    );
};

export { Input };
