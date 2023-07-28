
import { MenuProps, Select } from "antd";
import DropDownArrow from "shared/assets/DropDownArrow.svg"
import cls from "./LangSwitcher.module.scss"

const items = [
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Русский' },
  { value: 'ua', label: 'Українська' },

  ];
export const LangSwitcher = () => {

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
    return ( 
        <>
        <div className={cls.content}>
        <Select
          className={cls.dropdown}
          suffixIcon={<DropDownArrow />}
          defaultValue={items[0].value}
          onChange={handleChange}
          options={items}
          
    />
        </div>
        </>
     );
}
 
