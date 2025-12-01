import React from 'react';

// Иконки для сортировки
const downIcon = '▼';
const upIcon = '▲';
const noneIcon = '↕';

export type SuperSortPropsType = {
    id?: string;
    sort: string;
    value: string;
    onChange: (newSort: string) => void;
};

// Функция для циклического изменения сортировки
export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === '') return down;
    if (sort === down) return up;
    if (sort === up) return '';
    return down;
};

const SuperSort: React.FC<SuperSortPropsType> = ({
                                                     sort,
                                                     value,
                                                     onChange,
                                                     id = 'hw15',
                                                 }) => {
    const up = '0' + value;
    const down = '1' + value;

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up));
    };

    // Определяем, какую иконку показывать
    let icon;
    if (sort === down) {
        icon = downIcon;
    } else if (sort === up) {
        icon = upIcon;
    } else {
        icon = noneIcon;
    }

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{ cursor: 'pointer', marginLeft: '5px' }}
        >
            {icon}
        </span>
    );
};

export default SuperSort;
