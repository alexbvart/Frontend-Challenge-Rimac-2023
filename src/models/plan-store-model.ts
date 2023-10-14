import { PlanType } from "./plan-model";

export type  updatePlanAmountType = 'increasePlanAmount' | 'decreasePlanAmount' 
export type  updateCoveragePlanType  = 'stolenTire' | 'redLightRunning' | 'runOver'

export interface PlanStore {
  
    typeSelected: PlanType | number;
    setTypeSelected: (newPlanSelected : PlanType ) => void;

    planName: string;
    setPlanName: ( newPlanSelected : string ) => void;

    price: number;
    setPrice: ( price : number ) => void;

    // amountPlan: number;
    // updatePlanAmount: (name: updatePlanAmountType) => void;
    // ammuntCoverage: number;
    // toggleCoverageRunRedLight: boolean;
    // onToggleCoverageRunRedLight: () => void;
    // updateCoveragePlan: (
    //   name: updateCoveragePlanType,
    //   checked: boolean
    // ) => void;
}
