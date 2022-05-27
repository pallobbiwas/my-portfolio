import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ContuctMe = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
      icon: 'success',
      title: 'Thank you..',
    })
  };
  return (
    <div id="contuct" className="container mx-auto mb-6">
      <div className="mx-20 mb-20">
        <h1 className="text-4xl tracking-widest mb-5">My social link</h1>
        <hr />
      </div>
      <div>
        <div>
          <ul>
            <li>
              <a href="https://www.facebook.com/pallabbiswas.pallabbiswas.311">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/pallob-biswas-53a917229/">
                Linkdin
              </a>
            </li>
            <li>01575026033 whatsapp number</li>
          </ul>
        </div>
        <div>
          <div>
            <h1 className="text-3xl text-primary my-20">
              Ask a question free / message us
            </h1>
            <div className="bg-slate-500 ml-10 rounded-lg p-3">
              <form className=" mt-40" onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="enter email"
                  type="email"
                  className="input input-bordered w-3/4"
                  {...register("email")}
                />
                <br />
                <textarea
                  placeholder="text area"
                  className="p-4 my-3 rounded-sm h-20 w-3/4"
                  {...register("message")}
                />
                <br />
                <input className="btn btn-primary px-20" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContuctMe;
