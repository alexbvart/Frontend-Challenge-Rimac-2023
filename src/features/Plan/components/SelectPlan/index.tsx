interface SelectPlanProps {
    className?: string; // className es opcional
    children: React.ReactNode;
}

export const SelectPlan = ({ children, className } : SelectPlanProps) => {

    return (
        <main className={` ${className} w-full flex flex-col gap-6`}>
            {children}
        </main>
    )
}
