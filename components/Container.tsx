import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export default function Container({ children, className, as: Component = "div" }: ContainerProps) {
  return (
    <Component className={clsx("container mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Component>
  );
}

