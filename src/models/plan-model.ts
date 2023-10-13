export interface Plans {
  list: PlanModel[];
}

export interface PlanModel {
  name: string;
  price: number;
  description: string[];
  age: number;
}


export interface EndpointPlanModel {
  name: string;
  price: number;
  description: string[];
  age: number;
}

export enum PlanType {
  ParaMi,
  ParaOtros,
  ParaPadres,
  ParaMascotas
}
