import React from "react";

const CheckBox = ({ id, label, checked, onChange }) => {
  return (
    <fieldset>
      <legend className="sr-only">Checkboxes</legend>

      <div className="space-y-2">
        <label htmlFor={id} className="flex cursor-pointer items-start pr-2 ">
          <div className="flex items-center">
            &#8203;
            <input
              type="checkbox"
              className="size-4 rounded border-gray-300"
              id={id}
              checked={checked}
              onChange={onChange}
            />
          </div>

          <div>
            <strong className="pl-1 font-medium text-gray-900">{label}</strong>
          </div>
        </label>
      </div>
    </fieldset>
  );
};

export default CheckBox;
