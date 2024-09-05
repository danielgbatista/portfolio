import BaseCard from "@atoms/base-card";
import HistoricalItem from "@molecules/historical-item";

const EducationCard = () => {
    return (
        <BaseCard className="min-h-[320px] flex flex-col gap-4" title="Educação">
            <HistoricalItem local="Cruzeiro do Sul" title="Análise em Desenvolvimento de Sistemas" startedAt={new Date('02-01-2024')} key={1}/>
            <HistoricalItem local="SENAI Jandira" title="Análise em Desenvolvimento de Sistemas" startedAt={new Date('02-12-2021')} finishedAt={new Date('06-16-2022')} key={1}/>
        </BaseCard>
    );
}

export default EducationCard;   