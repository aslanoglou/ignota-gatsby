import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

const NewsletterForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [submitted, setSubmitted] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true });
    const recaptchaRef = useRef(null);
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const handleToken = (token) => {
        // console.log('ReCAPTCHA token:', token);
        setRecaptchaToken(token);
    };

    const onSubmit = async (data) => {
        try {
            const token = await recaptchaRef.current.executeAsync();
            // console.log('ReCAPTCHA token from executeAsync:', token);
            setRecaptchaToken(token);

            if (token) {
                const response = await fetch('https://ignota-forms-default-rtdb.europe-west1.firebasedatabase.app/customers.json', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    setSubmitted(true);
                    reset(); // Reset form fields on successful submission
                } else {
                    // console.error('Failed to submit data');
                }
            } else {
                // console.error('Please complete the reCAPTCHA');
            }
        } catch (error) {
            // console.error('An error occurred', error);
        }
    };

    return (
        <section ref={ref}>
            <div className="md:mb-[256px] mb-[181px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 data-[inviewport=false]:invisible data-[inviewport=false]:opacity-0 data-[inviewport=false]:tranform data-[inviewport=false]:translate-y-20 transition ease-in-out duration-700 delay-300" data-inviewport={inView.toString()}>
                <div>
                    <h2 className="text-lg md:text-[40px] mb-6 leading-sm relative pt-12 font-NeueMachina text-ignota-white before:content-[''] before:block before:top-0 before:absolute data-[inviewport=false]:before:w-0 before:border-t before:border-t-ignota-white data-[inviewport=true]:before:w-[80px] transition before:ease-in-out before:duration-700 before:delay-1000" data-inviewport={inView.toString()}>
                        Let’s engage
                    </h2>
                    <p className="text-md">
                        How can we address you?
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="md:pt-12 group form-invalid" method="post" action="https://ignota-forms-default-rtdb.europe-west1.firebasedatabase.app/customers.json">
                    {submitted ?
                        <p className="text-md md:text-center">Thank you for your submission.<br />We will be right back to you.</p>
                        :
                        <div className="grid grid-cols-1 gap-6 mb-16">
                            <div className="relative z-10">
                                <input id="input-name" placeholder=" " type="text" {...register("Name", { required: "The name field is required" })} className={`${errors.Name ? "!border-b-ignota-red !text-ignota-red" : ""} font-sans block pt-8 pb-4 px-0 w-full text-md text-ignota-white bg-ignota-black border-0 border-b border-b-ignota-white appearance-none hover:text-ignota-gray-2 hover:border-ignota-pink-1 focus:outline-none focus:ring-0 focus:border-ignota-pink-1 peer`} />
                                {errors.Name && <p role="alert" className="mt-2 text-sm text-ignota-red text-right">{errors.Name?.message}</p>}
                                <label className={`${errors.Name && "!text-ignota-red"} absolute text-md text-ignota-white duration-300 transform -translate-y-8 scale-75 top-8 -z-5 origin-[0] peer-focus:left-0 peer-hover:text-ignota-gray-2 peer-focus:text-ignota-orange-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8`} htmlFor="input-name">Your name</label>
                            </div>
                            <div className="relative z-10">
                                <input id="input-email" placeholder=" " type="text" {...register("Email", {
                                    required: "Email Address is required", validate: {
                                        maxLength: (v) => v.length <= 50 || "The email should have at most 50 characters",
                                        matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Email address must be a valid address",
                                    }
                                })} className={`${errors.Email ? "!border-b-ignota-red !text-ignota-red" : ""} font-sans block pt-8 pb-4 px-0 w-full text-md text-ignota-white !bg-ignota-black border-0 border-b border-b-ignota-white appearance-none hover:text-ignota-gray-2 hover:border-ignota-pink-1 focus:outline-none focus:ring-0 focus:border-ignota-pink-1 peer`} />
                                {errors.Email && <p role="alert" className="mt-2 text-sm !text-ignota-red text-right">{errors.Email?.message}</p>}
                                <label className={`${errors.Email && "!text-ignota-red"} absolute text-md text-ignota-white duration-300 transform -translate-y-8 scale-75 top-8 -z-5 origin-[0] peer-focus:left-0 peer-hover:text-ignota-gray-2 peer-focus:text-ignota-orange-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8`} htmlFor="input-email">Your email</label>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    size="invisible"
                                    sitekey="6LdYN-0jAAAAAN5HXSzGUd4RuHiRrp-Y7_N-Tj7g"
                                    onChange={handleToken}
                                />
                                <button type="submit" className="text-ignota-black bg-ignota-pink-1 text-md hover:bg-ignota-pink-2 focus:ring-0 font-medium rounded-full px-8 py-4 focus:outline-none g-recaptcha max-w-[240px]">
                                    Submit
                                </button>
                            </div>
                        </div>
                    }
                </form>
            </div>
        </section>
    );
};

export default NewsletterForm;
