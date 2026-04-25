export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 py-8 text-center text-sm border-t border-secondary-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <span className="text-white font-bold text-base">THOMPSON <span className="text-primary-500">ENGINEERING</span></span>
        <span>&copy; {new Date().getFullYear()} Thompson Engineering. All rights reserved. | Chennai, India</span>
      </div>
    </footer>
  );
}
