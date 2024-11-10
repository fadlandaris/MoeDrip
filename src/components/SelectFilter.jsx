import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const SelectFilter = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0].values);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    onChange(value);
    setIsOpen(false);
  };

  const selected = options.find(option => option.values === selectedOption);

  return (
    <div className='relative min-w-60 text-[14px] '>
      <div className='flex items-center justify-between px-4 py-2 bg-lightgray rounded-2xl cursor-pointer' onClick={toggleDropdown}>
        <div className='font-medium flex items-center gap-x-2'>
          {selected?.icon && React.createElement(selected.icon)}
          {selected?.title || 'Select an option'}
        </div>
        <IoMdArrowDropdown className={`${isOpen ? 'transform rotate-180 transition-all duration-300' : 'transition-all duration-300'}`}/>
      </div>
      {isOpen && (
        <div className='absolute z-10 w-full mt-1 bg-white border rounded-2xl shadow-lg'>
          {options.map((option, i) => (
            <div
              key={i}
              className={`px-4 py-2 rounded-lg cursor-pointer hover:bg-chilliRed hover:text-white transition-all duration-150 ${selectedOption === option.values ? 'bg-lightgray' : ''}`}
              onClick={() => handleOptionClick(option.values)}
            >
              <p className='flex items-center gap-x-2'>
                {option.icon && React.createElement(option.icon)}
                {option.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectFilter;
