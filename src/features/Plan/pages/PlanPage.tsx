import Hero from "../components/Hero"
import ProcessSteps from "../components/ProcessSteps"
import { SelectPlan } from "../components/SelectPlan"
import ForWho from "../components/SelectPlan/ForWho"
import PlanList from "../components/SelectPlan/PlanList"
const PlanPage = () => {
    return (
        <>
            <div className={`w-full lg:w-5/6 xl:w-4/6 px-4 mb-24  gap-6`} >

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