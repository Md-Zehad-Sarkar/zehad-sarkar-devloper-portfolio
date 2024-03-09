import { sendMAil } from "@/lib/mail";

type TData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  // //check valid email
  // const verifyEmail = (email: string) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  const handleSubmit = async (e) => {
    "use server";
    const formData = new FormData(e.target);
    // e.preventDefault();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    // if (!name || !email || !message) {
    //   // Handle the case where any required field is missing
    //   console.error("Please fill out all fields");
    //   return;
    // }
    await sendMAil({
      to: "zehadsarkar22@gmail.com",
      name: name!.toString(),
      email: email!.toString(),
      body: message!.toString(),
    });
  };

  return (
    <div className="mt-24">
      <h2 className="text-5xl mb-12">Contact</h2>
      <form className="max-w-[600px]">
        <legend id="contact">Contact with me</legend>
        <div className="flex flex-col mt-6 gap-2">
          <label htmlFor="name" className="text-lg">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="input input-bordered input-primary w-full max-w-md"
            placeholder="Type your name"
          />
        </div>
        <div className="flex flex-col mt-6 gap-2">
          <label className="">Email</label>
          <input
            type="text"
            name="email"
            className="input input-bordered input-primary w-full max-w-md"
            placeholder="Type your email"
          />
        </div>
        <div className="flex flex-col mt-6 gap-2">
          <label className="">Message</label>
          <textarea
            name="message"
            className="textarea textarea-primary w-full max-w-md  input input-bordered input-primary"
            placeholder="Write details"
          ></textarea>
        </div>

        <br />
        <button
          type="submit"
          // formAction={handleSubmit}
          className="w-28 btn bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:bg-gradient-to-l text-white text-lg text-thin hover:text-white"
          // disabled={!name || !email || !message}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
