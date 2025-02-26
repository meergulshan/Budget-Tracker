import React from "react";
interface checkboxprops {
    type?:string
  label?: "string";
  checked?: boolean;
}
const Checkbox: React.FC<checkboxprops> = ({ label, checked }) => {
  return (
    <div>
      <input type="checkbox" checked={checked} />
      <label>{label}</label>
    </div>
  );
};
export default Checkbox;
