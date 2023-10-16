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
import { calculatePriceWithDiscount } from "../../../../utilities/calculatePriceWithDiscount";
import { usePlanStore } from "../../../../store/usePlanStore";
import { useNavigate } from "react-router-dom";
import { THANKS_PATH } from "../../../../routes/routesPath";


const PlanListData = () => {

    // const setName = useUserStore(state => state.setName)
    // const setMailing = useUserStore(state => state.setMailing)

    const { data, error, isLoading } = useData<PlanModel[]>({ key: URL_PUBLIC_API_PLAN, fetcher: fetchPlanEndpoint });
    const navigate = useNavigate();

    const birthDay = useUserStore(state => state.birthDay)
    const typeSelected = usePlanStore(state => state.typeSelected)
    const [setPlanName, setPrice] = usePlanStore(state => [state.setPlanName, state.setPrice])
    const UserAge = getAge(birthDay);


    console.log({ data, error, isLoading });

    // if (!error && !isLoading && data) {
    //     const { name, email } = data;
    // }
    
    const [activeCard, setActiveCard] = useState<number>(0);

    const handleCardClick = (cardIndex: number, name: string, price: number) => {
        setActiveCard(cardIndex);
        setPlanName(name);
        setPrice(price)
        navigate(THANKS_PATH);
    };

    return (
        <div className="scroll-touch">

        <div className={`${isLoading && "animate-pulse rounded-lg inline-block "} flex gap-4 scroll-horizontal`}>
            {data &&
                data
                .filter((plan) =>  plan.age >= UserAge)
                .map((plan, index) => (

                    <CustomCard
                        isActive={activeCard === index}
                        // onClick={() => handleCardClick(index)}
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
                                    $ {calculatePriceWithDiscount(plan.price,typeSelected)} al mes
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
                        </CustomCard.Body>

                        <CustomCard.Footer>
                            <Button 
                                className="bg-rimac" isDirty isValid 
                                type="button" 
                                onClick={() => handleCardClick(index,  plan.name, calculatePriceWithDiscount(plan.price,typeSelected))}
                            > 
                                Seleccionar Plan 
                            </Button>
                        </CustomCard.Footer>

                    </CustomCard>

                ))
            }
        </div>
        </div>
    )
}

export default PlanListData