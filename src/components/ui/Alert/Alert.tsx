// import { FC } from "react";
import { ReactNode } from "react";
import { X } from "lucide-react";
import { AlertTypes } from "../../../interfaces";
import "./index.scss";
interface IProps {
  type: AlertTypes;
  title: string;
  icon: ReactNode;
  description?: string;
  children?: ReactNode;
}
// export const Alert : FC<IProps> = ({title}) => {
//   return (
//     <div>Alert</div>
//   )
// }
// or
export const Alert = ({ title, type, icon, description, children }: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          <span>{icon}</span>
          <h4>{title}</h4>
        </div>
        <X className="close" size={25} />
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  );
};
