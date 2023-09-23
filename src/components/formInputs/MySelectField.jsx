import { useField } from "formik";

function MySelectField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col space-y-2 mb-2 ">
      <label
        htmlFor={props.id || props.name}
        className="text-gray-700 dark:text-white"
      >
        {label}
      </label>
      <select
        {...field}
        {...props}
        className="border border-white  outline-none p-2  bg-transparent rounded-md text-white"
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 font-montserrat text-[10px]">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
}

export default MySelectField;
