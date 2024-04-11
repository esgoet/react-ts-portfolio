// import { Form } from "react-router-dom";
import ModuleBlock from "./ModuleBlock";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface InputProps {
    label: string,
    type: string,
    name: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
    placeholder: string
}

const elementClasses =
"bg-white border-solid border-black border py-2 px-5 text-black text-base rounded-lg outlined-none font-medium";


const Input = (props : InputProps) => (
    <input
      type={props.type}
      name={props.name}
      id={props.name}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      className={elementClasses}
      required
    />
  );
 
  const Textarea = (props : InputProps) => (
    <textarea
      rows={5}
      name={props.name}
      id={props.name}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      className={elementClasses + "resize-y sm:h-[300px]"}
      required
    />
  );
 
 const ContactFormElement = (
  props : InputProps
 ) => {
   return (
     <label htmlFor={props.name} className="flex flex-col">
       <span className="text-black text-sm ml-3">{props.label}</span>
       {props.type === "textarea" ? (
         <Textarea {...props} />
       ) : (
         <Input {...props} />
       )}
     </label>
   );
 };

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target !== null ) {
            const {name, value} = e.currentTarget;
            setForm({
            ...form, 
            [name]: value
            });
        }

    }

    const handleSubmit = (e : React.SyntheticEvent<HTMLFormElement>) => {
        console.log('sent off')
        e.preventDefault();
        setLoading(true);

        if (form.name.length > 0) {

        emailjs
        .send(
            "service_28abtbq",
            "template_hn5qowi",
            {
            from_name: form.name,
            to_name: "Eva Goetzke",
            from_email: form.email,
            reply_to: form.email,
            to_email: "eva.goetzke@gmail.com",
            message: form.message,
            },
            "qbyhQVnAB6vPZ1ifL"
        )
        .then(
            () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
            setForm({
                name: "",
                email: "",
                message: "",
            });
            },
            (error) => {
            console.log(error);
            alert("Oh no, something went wrong. Please try again!");
            setLoading(false);
            }
        );

        } else {
            alert('You have already sent this message.')
            setLoading(false)

        }

       
    }

    const contactForm = (
        <>
        <p className="mb-3 text-balance px-2 sm:px-10">Please enter your details and message below.</p>
        <form
            ref={formRef as any}
            onSubmit={handleSubmit}
            className="flex flex-col h-full gap-5 sm:px-8"
          >
            <ContactFormElement
              label={"Your Name"}
              placeholder={"What's your name?"}
              handleChange={handleChange}
              name={"name"}
              type={"text"}
            />
            <ContactFormElement
              label={"Your Email"}
              placeholder={"What's your email?"}
              handleChange={handleChange}
              name={"email"}
              type={"email"}
            />
            <ContactFormElement
              label={"Your Message"}
              placeholder={"What's your message?"}
              handleChange={handleChange}
              name={"message"}
              type={"textarea"}
            />
            <button
              type="submit"
              className="peachBtn"
          //     className="bg-peach border border-black hover:bg-peach/80 py-2 px-6 sm:py-2 sm:px-6 outline-none w-fit text-black font-bold
          //  rounded-lg self-end"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </>
       

    )
    return (
        <>   
        <ModuleBlock heading="Contact Me" sectionId='contact' content={contactForm} gridPos={'col-span-2 row-span-2'} />
        </>
    )
}

export default ContactForm;