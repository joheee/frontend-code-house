import { ContactTextInterface } from "./interface";

export default function ContactTextArea(prop: ContactTextInterface) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {prop.label}
      </label>
      <textarea
        onChange={(e) => prop.onChange(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={prop.placeholder}
        required
      />
    </div>
  );
}
