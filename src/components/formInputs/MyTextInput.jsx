import { useField } from "formik";

function MyTextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col space-y-2 mb-4 ">
      {label && (
        <label
          htmlFor={props.id || props.name}
          className="text-white font-montserrat text-[14px]"
        >
          {label}
        </label>
      )}
      <input
        {...field}
        {...props}
        className="border border-white  outline-none p-2  bg-transparent rounded-md text-white"
      />

      {meta.touched && meta.error ? (
        <div className="text-red-500  font-montserrat text-[10px]">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
}

export default MyTextInput;
