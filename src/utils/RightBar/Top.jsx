export const Top = () => {
  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center py-8">
      <img
        src="https://imgs.search.brave.com/XeOnofsyUi9ZZA1ylXchSPCfqOxo7Sv-KCVt3afegx8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAz/NTQ4ODQwMC9waG90/by9iZWF1dGlmdWwt/Z2lybC13aXRoLWx1/c2gtY3VybHktaGFp/cnN0eWxlLndlYnA_/YT0xJmI9MSZzPTYx/Mng2MTImdz0wJms9/MjAmYz1uNnc2eUo1/SEltZzI0bEY3TkR0/SVlwX1JDcXRRbVJn/dnluemI3a2swVlFV/PQ"
        className="w-[100px] rounded-full h-[100px]"
      />
      <select
        name=""
        id=""
        className="bg-transparent text-white text-xl outline-none"
      >
        <option value="hey" className="bg-purple-600">
          Adanech Abebe{" "}
        </option>
        <option value="hey" className="bg-purple-600">
          Abiy Ahmed{" "}
        </option>
      </select>

      <p className="text-sm text-white">Grade 10 | ID0985</p>
    </div>
  );
};
