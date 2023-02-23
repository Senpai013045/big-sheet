import {twMerge} from "tailwind-merge";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({className, ...rest}: Props) => {
  return (
    <button
      {...rest}
      className={twMerge(
        "bg-ui-dark text-ui-lightest px-4 py-2 rounded-md",
        "hover:bg-ui-darker",
        "active:bg-ui-darkest",
        "disabled:bg-ui-lightest disabled:text-ui-lightest disabled:cursor-not-allowed",
        className
      )}
    />
  );
};
