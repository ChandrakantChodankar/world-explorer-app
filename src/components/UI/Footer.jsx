import footerContact from "../../api/footerApi.json";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Footer Content */}
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {footerContact.map((item) => {
            const { id, title, details } = item;
            return (
              <div key={id || title}>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {details}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#202020] text-white py-4">
        <p className="text-center text-sm">
          © {currentYear} WorldExplorer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
