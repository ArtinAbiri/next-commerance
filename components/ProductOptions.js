import React, { useState, useEffect } from 'react'

export default function ProductOptions({ name, values, selectedOptions, setOptions, productInventory, selectedVariant }) {
    function handleChange(e) {
        selectedVariant.variantQuantity= parseInt(e.target.value)
    }

    const PositiveInput = () => {
        const [value, setValue] = useState("1");

        const onChange = (e) => {
            const value = e.target.value.replace(/[^\d]/, "");

            if (+value !== 0) {
                setValue(value);
                selectedVariant.variantQuantity= parseInt(e.target.value)
            }

        };

        return <input style={{paddingLeft:'10px'}} defaultValue={1} type={"number"} className="border-2 h-10 w-24 text-xl font-bold rounded border-black"  value={value} onChange={onChange} />;
    };

  return (
    <fieldset className="mt-3">
      <legend className="text-xl font-semibold">{name}</legend>
      <div className="inline-flex items-center flex-wrap">
        {
          values.map(value => {
            const id = `option-${name}-${value}`
            const checked = selectedOptions[name] === value

            return (
              <form>
                    <PositiveInput />
                  </form>
            )
          })
        }
      </div>
    </fieldset>
  )
}
