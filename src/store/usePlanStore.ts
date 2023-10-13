import { create } from 'zustand'
import { PlanStore } from '../models/plan-store-model'
import { PlanType } from '../models/plan-model'

export const usePlanStore = create<PlanStore>((set) => {
    return {
  
        typeSelected: -1,
        setTypeSelected: ( newPlanSelected : PlanType ) => {
            set((state) => {
                return { typeSelected: newPlanSelected}
            })
        },
    }
    
})