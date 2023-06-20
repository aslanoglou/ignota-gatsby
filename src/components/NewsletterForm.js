import React from "react";
import {useInView} from "react-intersection-observer";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

const NewsletterForm = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    // console.log(watch("nameRequired")); // watch input value by passing the name of it
    // console.log(watch("emailRequired")); // watch input value by passing the name of it

    const {ref, inView} = useInView({triggerOnce: true});
    const onChange = (value) => {
        console.log("Captcha value:", value);
    }
    return (
        <section ref={ref}>
            <div className="md:mb-[256px] mb-[181px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 data-[inviewport=false]:invisible data-[inviewport=false]:opacity-0 data-[inviewport=false]:tranform data-[inviewport=false]:translate-y-20 transition ease-in-out duration-300 delay-100" data-inviewport={inView.toString()}>
                <div>
                    <h2 className="text-lg md:text-[40px] mb-6 leading-sm relative pt-12 font-NeueMachina text-ignota-white before:content-[''] before:block before:top-0 before:absolute data-[inviewport=false]:before:w-0 before:border-t before:border-t-ignota-white data-[inviewport=true]:before:w-[80px] transition before:ease-in-out before:duration-300 before:delay-700"
                        data-inviewport={inView.toString()}>
                        Let’s engage
                    </h2>
                    <p className="text-md">
                        Let us know your needs and we’ll contact you for more details
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} onBlur={handleSubmit(onSubmit)} autoComplete="off" className="md:pt-12 group form-invalid">
                    <div className="grid grid-cols-1 gap-6 mb-16">
                        <div className="relative z-10">
                            <input id="input-name" placeholder=" " onBlur="" type="text" {...register("nameRequired", { required: "The name field is required" })} className="font-sans block pt-8 pb-4 px-0 w-full text-md text-ignota-white bg-ignota-black border-0 border-b border-b-ignota-white appearance-none hover:text-ignota-gray-2 hover:border-ignota-pink-1 focus:outline-none focus:ring-0 focus:border-ignota-pink-1 peer" />
                            {/* errors will return when field validation fails  */}
                            {errors.nameRequired &&
                                <p role="alert" className="mt-2 text-sm text-ignota-white text-right">
                                    {errors.nameRequired?.message}
                                </p>}
                            <label
                                className="absolute text-md text-ignota-white duration-300 transform -translate-y-8 scale-75 top-8 -z-5 origin-[0] peer-focus:left-0 peer-hover:text-ignota-gray-2 peer-focus:text-ignota-orange-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                                htmlFor="input-name">Your name</label>
                        </div>
                        <div className="relative z-10">
                            <input id="input-email" placeholder=" " onBlur="" type="email" {...register("emailRequired", { required: "Email Address is required", validate: {
                                    maxLength: (v) =>
                                        v.length <= 50 || "The email should have at most 50 characters",
                                    matchPattern: (v) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                        "Email address must be a valid address",
                                } })}   className="font-sans block pt-8 pb-4 px-0 w-full text-md text-ignota-white !bg-ignota-black border-0 border-b border-b-ignota-white appearance-none hover:text-ignota-gray-2 hover:border-ignota-pink-1 focus:outline-none focus:ring-0 focus:border-ignota-pink-1 peer" />
                            {/* errors will return when field validation fails  */}
                            {errors.emailRequired &&
                                <p role="alert" className="mt-2 text-sm text-ignota-white text-right">
                                    {errors.emailRequired?.message}
                                </p>}
                            <label
                                className="absolute text-md text-ignota-white duration-300 transform -translate-y-8 scale-75 top-8 -z-5 origin-[0] peer-focus:left-0 peer-hover:text-ignota-gray-2 peer-focus:text-ignota-orange-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                                htmlFor="input-email">Your email</label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <button type="submit" className="text-ignota-black bg-ignota-pink-1 text-md hover:bg-ignota-pink-2 focus:ring-0 font-medium rounded-full px-8 py-4 focus:outline-none g-recaptcha max-w-[240px]">
                                Submit
                            </button>
                            <ReCAPTCHA
                                sitekey="6LdYN-0jAAAAAN5HXSzGUd4RuHiRrp-Y7_N-Tj7g"
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default NewsletterForm;