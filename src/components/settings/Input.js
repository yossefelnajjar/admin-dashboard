const Input = ({ label, id }) => {
  return (
    <div class="relative mb-3">
      <input
        type="text"
        id={id}
        class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-600 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 peer"
        placeholder=""
      />
      <label
        for={id}
        class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
        {label}
      </label>
    </div>
  );
};

export default Input;
