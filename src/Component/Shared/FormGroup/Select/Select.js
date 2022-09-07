import classNames from "classnames";
import style from "./Select.module.css"

export default function Select({ isError,options = [], ...rest }) {
  const fieldStyle = classNames(style.inputTestWrapper,{
   [style.error]:isError
    
  });
  return (
    <div>
      <select className={fieldStyle} {...rest}>
        {options.map((option, index) => {
          return (
            <option key={`option-${index}`} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </select>
    </div>
  );
}