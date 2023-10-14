import { plans } from "../features/Plan/Data/plansData";
import { PlanType } from "../models/plan-model";

export function calculatePriceWithDiscount(price: number, planType: PlanType | -1): number {

    if (planType === -1) {
        return price
    }

    const plan = plans.find((p) => p.type === planType);

    if (!plan) {
        throw new Error("Tipo de plan no válido.");
    }

    return Math.ceil(price * plan.amountPayable);
}