import toast from "react-hot-toast";

const ContactForm = () => {
  const handleContactForm = () => {
    toast.success("Mail Send Success");
  };
  return (
    <div className="max-w-3xl px-3 sm:px-4 mx-auto">
      <div className="bg-gray-200 p-4 rounded-lg">
        <h1 className="text-4xl my-4   ">Get in Touch</h1>
        <form onSubmit={handleContactForm}>
          <div className="space-y-4 ">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 px-3 w-full block bg-white rounded outline-none  border-b-2 border-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="p-2 px-3 w-full block bg-white rounded outline-none  border-b-2 border-gray-400"
              required
            />
            <input
              type="number"
              name="number"
              placeholder="Enter Your Phone Number"
              className="p-2 px-3 w-full block bg-white rounded outline-none  border-b-2 border-gray-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="p-2 px-3 w-full block bg-white rounded outline-none  border-b-2 border-gray-400"
              required
            />
            <textarea
              className="p-2 px-3 w-full block bg-white rounded outline-none  border-b-2 border-gray-400"
              name="message"
              placeholder="Message Optional"
              rows="6"
            ></textarea>
            <button
              type="submit"
              className="p-2 px-3 w-full  file: rounded outline-none  btn btn-secondary border-none flex items-center text-lg"
            >
              Send{" "}
              {/* <span>
                  <IoMdSend></IoMdSend>
                </span> */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
