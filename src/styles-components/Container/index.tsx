interface ContainerdProps {
  y?: boolean;
  x?: boolean;
  // className?: string; // className es opcional
  children: React.ReactNode;
}
export const Container = ({children, y = false, x = true} :ContainerdProps) => {

    const horizontalClasses = x ? 'w-full mx-6 ld:mx-0' : '';
    const verticalClasses = y ? ' ' : '';

  return (
    <section className={` ${horizontalClasses} ${verticalClasses}`}>
        {children}
    </section>
  )
}
