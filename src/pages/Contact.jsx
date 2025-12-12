export const Contact = () => {
  const inputFieldStyle =
    "w-full md:max-w-[30rem] px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";

  // const handleFormSubmit = (formData) => {
  //   const formInputData = Object.fromEntries(formData.entries());
  //   console.log(formInputData);
  // };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <div className="max-w-7xl mx-auto m-8">
      <h1 className="flex items-center justify-center pb-8 text-2xl md:text-4xl font-bold">
        Contact Us
      </h1>

      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col items-center justify-center px-6">
          <input
            type="text"
            name="username"
            className={inputFieldStyle}
            placeholder="Enter your Name"
            required
            minLength={3}
            aria-label="Name"
          />
          <input
            type="email"
            name="email"
            className={inputFieldStyle}
            placeholder="Enter your Email"
            required
            aria-label="Email"
          />
          <textarea
            name="message"
            rows={5}
            className={inputFieldStyle}
            placeholder="Enter your message"
            required
            minLength={10}
            aria-label="Message"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
