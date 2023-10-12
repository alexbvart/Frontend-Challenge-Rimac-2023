import Hero from "../components/Hero"
import ProcessSteps from "../components/ProcessSteps"
import styles from './Plan.module.css'
import { SelectPlan } from "../components/SelectPlan"
import ForWho from "../components/SelectPlan/ForWho"
import PlanList from "../components/SelectPlan/PlanList"
const PlanPage = () => {
    return (
        <>
            <div className={`${styles.plan_grid} w-full px-4 mb-24  gap-6`} >

                <span/>

                <main className="flex-xy flex-col w-full">

                    <ProcessSteps />
                    <Hero />

                    <SelectPlan>
                        <ForWho />
                        <PlanList />
                    </SelectPlan>

                </main>
            </div>
        </>
    )
}

export default PlanPage