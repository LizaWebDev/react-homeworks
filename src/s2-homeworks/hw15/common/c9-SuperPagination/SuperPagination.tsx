import React from 'react';
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect';
import { Pagination } from '@mui/material';
import s from './SuperPagination.module.css';

export type SuperPaginationPropsType = {
    id?: string;
    page: number;
    itemsCountForPage: number;
    totalCount: number;
    onChange: (page: number, count: number) => void;
};

const SuperPagination: React.FC<SuperPaginationPropsType> = ({
                                                                 page,
                                                                 itemsCountForPage,
                                                                 totalCount,
                                                                 onChange,
                                                                 id = 'hw15',
                                                             }) => {
    // Вычисляем количество страниц
    const lastPage = Math.ceil(totalCount / itemsCountForPage) || 1;

    const onChangeCallback = (event: React.ChangeEvent<unknown>, page: number) => {
        onChange(page, itemsCountForPage);
    };

    const onChangeSelect = (id: string) => {
        // Исправляем: нужно преобразовать строку в число
        const newCount = Number(id);
        onChange(1, newCount); // При изменении количества строк возвращаемся на первую страницу
    };

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    '& .MuiPaginationItem-root': {
                        color: '#0066CC',
                        fontSize: '14px',
                        minWidth: '24px',
                        height: '24px',
                        margin: '0 4px',
                        '&:hover': {
                            backgroundColor: '#E5F0FF',
                        },
                        '&.Mui-selected': {
                            backgroundColor: '#0066CC',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#0052CC',
                            },
                        },
                    },
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton={false}
                hidePrevButton={false}
                shape="rounded"
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    { id: 4, value: 4 },
                    { id: 7, value: 7 },
                    { id: 10, value: 10 },
                ]}
                onChangeOption={onChangeSelect} // Важно: используем onChangeOption
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    );
};

export default SuperPagination;