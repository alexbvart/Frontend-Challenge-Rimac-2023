import { useState } from "react";
import CustomCard from "../../../../components/Card";
import { useData } from "../../../../hooks/useData";
import { PlanModel } from "../../../../models/plan-model";
import { useUserStore } from "../../../../store/userStore";
import { URL_PUBLIC_API_PLAN } from "../../../../utilities/constants";
import { getAge } from "../../../../utilities/getAge";
import { fetchPlanEndpoint } from "../../services/call-endpoint";
import Typography from "../../../../components/Typography";
import { Divider } from "@nextui-org/react";
import Button from "../../../../components/Button";


const PlanListData = () => {

    // const setName = useUserStore(state => state.setName)
    // const setMailing = useUserStore(state => state.setMailing)

    const { data, error, isLoading } = useData<PlanModel[]>({ key: URL_PUBLIC_API_PLAN, fetcher: fetchPlanEndpoint });
    const birthDay = useUserStore(state => state.birthDay)
    const UserAge = getAge(birthDay);


    console.log({ data, error, isLoading });

    // if (!error && !isLoading && data) {
    //     const { name, email } = data;
    //     name && setName(name)
    //     email && setMailing(email)
    // }

    const [activeCard, setActiveCard] = useState<number>(0);

    const handleCardClick = (cardIndex: number) => {
        setActiveCard(cardIndex);
    };

    return (
        <div className={`${isLoading && "animate-pulse rounded-lg inline-block "} flex gap-4`}>
            {data &&
                data
                .filter((plan) =>  plan.age >= UserAge)
                .map((plan, index) => (

                    <CustomCard
                        isActive={activeCard === index}
                        onClick={() => handleCardClick(index)}
                    >
                        <CustomCard.Header>
                            <Typography>
                                <Typography.TitleContainer className='w-full flex flex-row gap-4 justify-between font-bold'>
                                    {plan.name}
                                    <div className="w-12 h-12 block bg-slate-200" />
                                </Typography.TitleContainer>
                                <Typography.Xs className="text-slate-500 uppercase">
                                    costo del plan
                                </Typography.Xs>
                                <Typography.Base className="font-semibold">
                                    $ {plan.price} al mes
                                </Typography.Base>
                            </Typography>
                        </CustomCard.Header>

                        <Divider/>

                        <CustomCard.Body>
                            <ul className="list-disc ml-4">
                                {plan.description.map((description) => 
                                    <li className="pb-2">{description}</li>
                                )}
                            </ul>
                            <Button isDirty isValid type="button"> Seleccionar Plan </Button>
                        </CustomCard.Body>

                    </CustomCard>

                ))
            }
        </div>
    )
}

export default PlanListData