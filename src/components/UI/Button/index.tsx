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
        "disabled:cursor-not-allowed disabled:opacity-70",
        className
      )}
    />
  );
};

//q: what is the sql command to get users where age is greater than 40
//a: SELECT * FROM users WHERE age > 40
