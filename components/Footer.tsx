
const Footer = () => (
  <footer>
    <div className="custom-screen pt-16">
      <div className="mt-10 py-10 border-t items-center justify-between flex">
        <p className="text-gray-600">
          Basado en{' '}
          <a
            href="https://qrgpt.io/"
            className="hover:underline transition"
          >
            qrgpt
          </a>{' '}
        </p>
        <div className="flex items-center gap-x-6 text-gray-400">
          <a
            className="border border-slate-200 rounded-md px-3 py-1 tracking-tight flex gap-1 hover:scale-105 transition"
            href="https://siliconmind.ai/"
            target="_blank"
          >
            <span className="text-gray-500">By Silicon Mind</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
