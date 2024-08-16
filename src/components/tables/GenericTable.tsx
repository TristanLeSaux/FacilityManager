import { TableParameter } from "./TableParameter"
import '@/styles/Table.css'

interface GenericTableProps<T> {
    tableParameters: TableParameter[];
    data: T[];
}

export default function GenericTable<T>({ tableParameters, data }: GenericTableProps<T>) {

    const getNestedValue = (item: any) => {
        if (typeof item === 'object' && item !== null && 'name' in item) {
            return item.name;
        }
        return item;
    };

    return (
        <table className="table-display">
            <thead>
                <tr>
                    {tableParameters.map((param, index) => (
                        param.estAffiche && (
                            <th key={index}>{param.label}</th>
                        )
                    ))}
                </tr>
            </thead>
            <tbody>
                {data && data.map((item, rowIndex) => (
                    <tr key={rowIndex}>
                        {tableParameters.filter(param => param.estAffiche).map((param, colIndex) => (
                            <td key={colIndex}>
                                {getNestedValue(item[param.value as keyof T])}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
