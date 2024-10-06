import ContactTextArea from "./ContactTextArea";
import ContactTextInput from "./ContactTextInput";
import { ContactInterface } from "./interface";

export default function ContactDesktop(prop: ContactInterface) {
  function handleOnchange(e: string) {
    console.log(e);
  }
  return (
    <div className={`${prop.className}`}>
      <div className="text-clamp-about font-extrabold text-center">
        CONTACT US
      </div>
      <div className="grid grid-cols-2 gap-10 mt-5">
        <ContactTextInput
          label="Full name"
          placeholder="Input your full name here"
          onChange={handleOnchange}
        />
        <ContactTextInput
          label="Email"
          placeholder="Your company or personal email for us to reach out"
          onChange={handleOnchange}
        />
        <ContactTextInput
          label="Phone number"
          placeholder="Your company or personal phone number"
          onChange={handleOnchange}
        />
        <ContactTextArea
          label="Message"
          placeholder="Describe your project requirements for us"
          onChange={handleOnchange}
        />
      </div>
      <div className="flex justify-end mt-10">
        <div className="shadow-md hover:bg-accent_hover mt-5 hover:cursor-pointer bg-accent px-4 py-1 rounded-sm text-font_dark">
          Submit
        </div>
      </div>
    </div>
  );
}
