import { create } from 'zustand'
import { PlanStore } from '../models/plan-store-model'
import { PlanType } from '../models/plan-model'

export const usePlanStore = create<PlanStore>((set) => {
    return {
  
        typeSelected: -1,
        setTypeSelected: ( newPlanSelected : PlanType ) => {
            set(() => {
                return { typeSelected: newPlanSelected}
            })
        },

        planName: "",
        setPlanName: ( newPlanSelected : string ) => {
            set(() => {
                return { planName: newPlanSelected}
            })
        },

        price: 0,
        setPrice: ( price : number ) => {
            set(() => {
                return { price: price}
            })
        },
    }
    
})