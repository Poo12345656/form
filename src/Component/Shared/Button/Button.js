import classNames from "classnames";
import style from "./Button.module.css"
export default function Button({
  text,
  color,
  variant,
  as: Tag = "button",
  children,
  disabled ,
  ...rest
}) {
  const buttonClasses = classNames(style.buttonWrapper, {
    [style[color]]: !!color,
    [style[variant]]: !!variant,
    [style.disabled]:disabled

  });
  return (
  <Tag className={buttonClasses} disabled={disabled} {...rest}>
      {text || children}
    </Tag>
  );
}
