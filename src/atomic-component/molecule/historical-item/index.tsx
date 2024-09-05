import { HistoricalItemProps } from "./interface";

const HistoricalItem: React.FC<HistoricalItemProps> = ({ ...props }) => {
    let startedAt = new Date(props.startedAt).getFullYear();
    let finishedAt = props.finishedAt ? new Date(props.finishedAt).getFullYear() : 'Presente';

    return (
        <div className="w-auto flex justify-between">
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <h3 className="text-md font-bold">{props.title}</h3>
                    <p>{startedAt}</p> - <p>{finishedAt}</p>
                </div>
                <p>{props.local}</p>
            </div>
        </div>
    );
};

export default HistoricalItem