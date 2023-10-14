import { PlanType } from "../../../models/plan-model";

export const plans = [
  {
    type: PlanType.ParaMi,
    title: 'Para mí',
    description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
    amountPayable: 1,
  },
  {
    type: PlanType.ParaOtros,
    title: 'Para alguien más',
    description: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
    amountPayable: 0.95,
  },
  // {
  //   type: PlanType.ParaPadres,
  //   title: 'Para padres',
  //   description: 'Ofrece una cobertura especial para tus padres.',
  //   amountPayable: 0.90,
  // },
  // {
  //   type: PlanType.ParaMascotas,
  //   title: 'Para mascotas',
  //   description: 'Protege a tus queridas mascotas con un seguro de salud.',
  //   amountPayable: 0.50,
  // }
];
