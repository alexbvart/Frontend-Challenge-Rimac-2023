import { useState } from 'react';
import CustomCard from '../../../../components/Card'
import Typography from '../../../../components/Typography';

const ForWho = () => {

    const [activeCard, setActiveCard] = useState<number>(0);

    const handleCardClick = (cardIndex: number) => {
        setActiveCard(cardIndex);
    };

    return (
        <section className='flex flex-col md:flex-row gap-4'>
            <CustomCard
                isActive={activeCard === 0}
                onClick={() => handleCardClick(0)}
            >
                <CustomCard.Header>
                    <Typography>
                        <Typography.SubtitleContainer className='flex flex-col md:flex-row gap-4 '>
                            <div className="w-12 h-12 relative bg-slate-200" />
                            Para mi
                        </Typography.SubtitleContainer>
                        <Typography.Small>Cotiza tu seguro de salud y agrega familiares si así lo deseas.</Typography.Small>
                    </Typography>
                </CustomCard.Header>
            </CustomCard>

            <CustomCard
                isActive={activeCard === 1}
                onClick={() => handleCardClick(1)}
            >
                <CustomCard.Header>
                    <Typography>
                        <Typography.SubtitleContainer className='flex flex-col md:flex-row gap-4  '>
                            <div className="w-12 h-12 relative bg-slate-200" />
                            Para alguien más
                        </Typography.SubtitleContainer>
                        <Typography.Small>Realiza una cotización para uno de tus familiares o cualquier persona.</Typography.Small>
                    </Typography>
                </CustomCard.Header>
            </CustomCard>
        </section>
    )
}

export default ForWho