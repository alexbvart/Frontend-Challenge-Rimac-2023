import { EndpointPlanModel, PlanModel } from "../models/plan-model";

export const createAdapterPlan = (plans: EndpointPlanModel[])=>{

    const formattedPlans = plans.map((plan) => {
        
        const formattedUsaer: PlanModel = {
            name: plan.name,
            price: plan.price,
            description: plan.description,
            age: plan.age,
        };
        return formattedUsaer
    })

    return formattedPlans;
}