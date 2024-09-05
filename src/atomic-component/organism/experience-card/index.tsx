import BaseCard from "@atoms/base-card";
import HistoricalItem from "@molecules/historical-item";

const ExperienceCard = () => {
    return (
        <BaseCard className="min-h-[320px] flex flex-col gap-4" title="Experiência">
            <HistoricalItem local="SENAI" title="Estágio em Desenvolvimento de Sistemas" startedAt={new Date('04-12-2022')} finishedAt={new Date('04-16-2024')} key={1}/>
        </BaseCard>
    );
}

export default ExperienceCard;