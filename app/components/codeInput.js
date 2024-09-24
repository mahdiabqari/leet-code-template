import React, { useState } from 'react';

const CodeInput = ({ onCompile, output }) => {
  const [code, setCode] = useState('');

  const handleCompile = () => {
    onCompile(code);
  };

  return (
    <div className="md:w-[100%] border-black border-4 flex justify-center items-center gap-0 rounded-xl shadow-sm bg-gray-100 shadow-gray-800 w-[45rem] h-[23rem]">
      <textarea 
        placeholder="Your Code..."
        value={code}
        onChange={(e) => setCode(e.target.value)} 
        className="box py-3 pt-10 px-4 text-xl border-black border-4 md:w-[22rem] rounded-l-xl shadow-sm bg-gray-100 shadow-gray-800 w-[35rem] h-full"
      />
      
      <div className="result-code pt-10 border-black border-4 w-[10rem] h-full p-2 text-gray-600 flex justify-start items-start">
        {output}
      </div>
      <button className="absolute ml-[17rem] md:ml-[2rem] md:px-2 md:py-1 md:text-sm  mt-[19rem] rounded-xl bg-gray-400 px-4 py-2" onClick={handleCompile}>Compile</button>
    </div>
  );
};

export default CodeInput;
