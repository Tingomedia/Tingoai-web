import { FC, useState, useEffect } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import artificial from "../../assets/images/gpt/artificial-intelligence-02.png";
import { useNavigate } from "react-router-dom";

type DropDownItem = {
  label: string;
  path: string;
};

type CustomDropDownProps = {
  items: DropDownItem[];
  onSelect: (value: string) => void;
  defaultSelected?: string;
  label?: string;
  autoCloseTimeout?: number;
};

const CustomDropDown: FC<CustomDropDownProps> = ({
  items,
  onSelect,
  defaultSelected,
  label = "Select",
  autoCloseTimeout = 10000,
}) => {
  const [selected, setSelected] = useState<string>(
    defaultSelected || items[0]?.path
  );
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      const id = window.setTimeout(() => closeDropdown(), autoCloseTimeout);
      setTimeoutId(id);
    }
    return () => clearTimeout(timeoutId as number);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        !(event.target as HTMLElement).closest(".custom-dropdown")
      ) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
    closeDropdown();
    navigate(value);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => {
    setIsOpen(false);
    if (timeoutId) clearTimeout(timeoutId);
  };

  const selectedItem = items.find((item) => item.path === selected);

  return (
    <div className="relative custom-dropdown z-[99]">
      {/* Dropdown Trigger */}
      <div
        className="flex min-w-[140px] justify-between items-center cursor-pointer p-3 rounded-xl hover:bg-dark-blue"
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
          {/* {selectedItem?.icon && <img src={selectedItem.icon} alt="icon" className="w-5 h-5 mr-2" />} */}
          <span className="text-sm">{selectedItem?.label || label}</span>
        </div>
        <div>{isOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}</div>
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute left-0 top-full z-[99] mt-8 w-[180px] border rounded-xl bg-dark-blue shadow-custom">
          <ul className="py-2 font-medium mx-2">
            <div className="my-2 text-center text-sm text-tremor-brand-faint">
              {label.toUpperCase()}
            </div>
            {items.map((item) => (
              <li key={item.path}>
                <div
                  className="flex cursor-pointer items-center gap-2 py-2 px-4 hover:bg-tremor-background-emphasis"
                  onClick={() => handleSelect(item.path)}
                >
                  <img src={artificial} className="w-5 h-5" alt="icon" />
                  <p className="text-sm">{item.label}</p>
                  {item.path == "upgrade" && (
                    <button className=" text-tremor-brand-faint text-sm border px-2 border-tremor-brand-faint rounded-full">
                      Upgrade
                    </button>
                  )}
                </div>
                
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropDown;
