import React from 'react';
import { TextInput, Button } from 'flowbite-react';
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from 'react';

function CreateTable() {
  const [dateValue, setDateValue] = useState({
    startDate: null,
    endDate: null,
  });

  const [mainTable, setMainTable] = useState({
    tablename: "",
    datepicker: "",
  });

  const handleValueChange = (newValue) => {
    setDateValue(newValue);
    setMainTable({
      ...mainTable,
      datepicker:newValue.startDate,
    })
  };
  

  const handleTableName = (e) => {
    setMainTable({
      ...mainTable,
      tablename: e.target.value,
    });
  };

  const setMainTableFunction = async () => {
    try {
        setMainTable((prevMainTable) => ({
            tablename: mainTable.tablename,
            datepicker: dateValue.startDate ? dateValue.startDate.toString() : "",
          }));
        const res = await fetch('/api/mainTable', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mainTable),
        });
      if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      console.log('Data:', data);
      } catch (error) {
        console.log(error);
      }
};
 
  return (
    <div className='flex flex-col justify-center align-middle h-screen p-10 gap-5'>
      <h1 className='text-4xl my-10'>Tablo Oluşturma</h1>

      <div className='flex gap-7'>
        <span className='flex items-center'>Tablo İsmi : </span>
        <TextInput
          id='tablename'
          className='p-4 text-lg rounded border border-gray-300 lg:w-80 w-full'
          onChange={handleTableName}
          value={mainTable.tablename}
        />
      </div>

      <div className='flex'>
        <span className='flex items-center'>Tablo Tarihi: </span>
        <div className='p-4 text-lg rounded border border-gray-300 lg:w-80 w-full ml-5'>
          <Datepicker
            useRange={false}
            asSingle={true}
            value={dateValue}
            onChange={handleValueChange}
            id='datepicker'
          />
        </div>
      </div>

      <div className='flex justify-center'>
        <Button
          onClick={setMainTableFunction}
          className='p-4 bg-gray-500 text-white rounded-3 text-lg lg:w-80 w-full'
        >
          Tablo Oluştur
        </Button>
      </div>
    </div>
  );
}

export default CreateTable;
