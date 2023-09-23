import { useField } from "formik";

function MyCheckBox({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="flex items-center space-x-2 text-white font-montserrat text-[10px] md:text-[12px]">
        <input
          type="checkbox"
          {...field}
          {...props}
          className="bg-transparent border border-white"
        />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-red-500 font-montserrat text-[10px]">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
}

export default MyCheckBox;
