import CustomCard from '../../../../components/Card'
import Typography from '../../../../components/Typography';
import { plans } from '../../Data/plansData';
import { usePlanStore } from '../../../../store/usePlanStore';

const ForWho = () => {

    const [typeSelected, setTypeSelected] = usePlanStore(state => [state.typeSelected, state.setTypeSelected]); 
    // const [activeCard, setActiveCard] = useState<number>(-1);

    const handleCardClick = (cardIndex: number) => {
        setTypeSelected(cardIndex);
    };

    return (
        <section className='flex flex-col md:flex-row gap-4
                            w-full lg:w-5/6 m-auto'
        >
            {plans.map((plan, index) => (

                <CustomCard
                    key={`${index}-${plan.type}`}
                    isActive={typeSelected === plan.type}
                    onClick={() => handleCardClick(plan.type)}
                >
                    <CustomCard.Header>
                        <Typography>
                            <Typography.SubtitleContainer className='flex flex-col md:flex-row gap-4 '>
                                <div className="w-12 h-12 relative bg-slate-200" />
                                {plan.title}
                            </Typography.SubtitleContainer>
                            <Typography.Small>{plan.description}</Typography.Small>
                        </Typography>
                    </CustomCard.Header>
                </CustomCard>

            ))}
        </section>
    )
}

export default ForWho