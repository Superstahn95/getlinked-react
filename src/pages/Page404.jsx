import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="text-white min-h-screen flex flex-col justify-center items-center font-montserrat">
      <h2>This page does not exist</h2>
      <Link to={"/"} className="underline">
        Go to home page
      </Link>
    </div>
  );
}

export default Page404;
