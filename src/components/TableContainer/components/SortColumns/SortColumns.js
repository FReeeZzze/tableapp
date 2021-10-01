import React from 'react';
import PropTypes from 'prop-types';
import "./styles/SortColumns.css"

const SortColumns = ({ table, columns, handleSortTable }) => {
    const [currentSort, setSort] = React.useState(null)
    const [activeColumn, setActive] = React.useState(null)

    React.useEffect(() => {
        // если есть сортировка мы сортируем, если нет оставляем в первоначальном виде.
        if (currentSort) {
            const sortTable = table.sort((a, b) => {
                // по порядку alphabet с начало до конца или если reverse наоборот с конца в начало
                if ((currentSort.type === 'alpha' && a[currentSort.name] > b[currentSort.name]) || 
                    (currentSort.type === 'reversalpha' && b[currentSort.name] > a[currentSort.name])) {
                    return 1;
                }

                if ((currentSort.type === 'alpha' && a[currentSort.name] < b[currentSort.name]) ||
                    (currentSort.type === 'reversalpha' && b[currentSort.name] < a[currentSort.name])
                ) {
                    return -1;
                }

                // тоже самое и для numeric / reversenumeric
                if (currentSort.type === 'numeric') {
                    return a[currentSort.name] - b[currentSort.name];
                } 

                if (currentSort.type === 'reversnumeric') {
                    return b[currentSort.name] - a[currentSort.name];
                }

                return 0;
            })

            handleSortTable(sortTable);
        } else {
            handleSortTable(table)
        }
    }, [currentSort, table, handleSortTable])


    const handleSort = (column) => {
        if (column.name !== 'Date') {
            setSort((prev) => {
                // если повторяется один и тот же тип мы его меняем на `revers"тип"`
                if (prev && prev.type === column.type) {
                    return {...column, type: `revers${column.type}`};
                }
                return column;
            });
            setActive(column.name)
        }
    }

    return (
        <div className="sort-columns">
            {columns.length && columns.map((column, index) => {
                return (
                    <div className={activeColumn === column.name ? 'active-sort-column': ''} onClick={() => handleSort(column)} key={`key:${column.name}-${index}`}>
                        {column.name}
                    </div>
                )
            })}
        </div>
    )
}

SortColumns.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object),
    table: PropTypes.array,
    handleSortTable: PropTypes.func
};

export default React.memo(SortColumns);