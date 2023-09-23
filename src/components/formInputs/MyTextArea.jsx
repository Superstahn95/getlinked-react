import { useField } from "formik";

function MyTextArea({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col space-y-2 mb-2 text-gray-600">
      <textarea
        {...field}
        {...props}
        rows="5"
        className="border border-white  outline-none p-2  bg-transparent rounded-md text-white w-full"
      ></textarea>
      {meta.touched && meta.error ? (
        <div className="text-red-500 font-montserrat text-[10px]">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
}

export default MyTextArea;
