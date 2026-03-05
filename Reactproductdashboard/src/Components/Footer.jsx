const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6 mt-auto">
      <div className="text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Product Dashboard </p>
        <p>Built with ❤️ using React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
