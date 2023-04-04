const Toggle = () => {
  return (
    <label className="h-7 w-12 relative inline-flex items-center cursor-pointer ">
      <input type="checkbox" className="sr-only peer" defaultChecked />
      <div className="absolute w-12 h-6 after:top-0.5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute  after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  );
};

export default Toggle;
