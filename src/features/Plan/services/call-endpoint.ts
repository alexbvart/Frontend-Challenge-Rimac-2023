import axios from "axios"
import { Plans } from "../../../models/plan-model";
import { createAdapterPlan } from "../../../adapters/planAdapter";

export const fetchPlanEndpoint = async (url: string) : Promise<Plans| any> => {
    try {
        const response = await axios.get(url).then(response => response.data);
        const plans = createAdapterPlan(response.list)
        return plans;

    } catch (error) {
        return error        
    }
}