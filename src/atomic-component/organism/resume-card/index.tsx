import BaseCard from "@atoms/base-card"

const ResumeCard = () => {
    return (
        <BaseCard className="flex flex-col gap-4" title="Resumo">
            <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        </BaseCard>
    )
}

export default ResumeCard;