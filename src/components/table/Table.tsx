import React from 'react';

interface Column<T> {
    key: keyof T;
    header: string;
}

interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
    loading?: boolean;
    error?: string | null;
    skeletonRowCount?: number;
}

export default function Table<T>({
    columns,
    data,
    loading = false,
    error = null,
    skeletonRowCount = 5,
}: TableProps<T>) {
    if (error) {
        return (
            <div className="border border-red-300 bg-red-100 text-red-700 p-4 rounded">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto ">
            <table className="min-w-full">
                <thead>
                    <tr className="bg-[#E8ECEE] ">
                        {columns.map((column, idx) => (

                            <th
                                key={String(column.key)}
                                className={`${idx === 0 ? ' rounded-s-md' : idx === (columns.length - 1) ? 'rounded-e-md' : ''} px-4 py-2 text-left text-sm font-medium `}
                            >
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {loading
                        ? Array.from({ length: skeletonRowCount }).map((_, index) => (
                            <tr key={index}>
                                {columns.map((_, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className="border-b border-[#F1F3F4] px-4 py-2 text-sm"
                                    >
                                        <div className="h-4 bg-[#F1F3F4] rounded animate-pulse"></div>
                                    </td>
                                ))}
                            </tr>
                        ))
                        : data.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-gray-50">
                                {columns.map((column) => (
                                    <td
                                        key={String(column.key)}
                                        className="border-b border-[#F1F3F4] px-4 py-2 text-sm"
                                    >
                                        {String(row[column.key])}
                                    </td>
                                ))}
                            </tr>
                        ))}
                </tbody>
            </table>
            {!loading && data.length === 0 && (
                <div className="text-center py-4 text-gray-600">
                    No data available
                </div>
            )}
        </div>
    );
}
