import { GraduationCap, Heart, Mail, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="font-display font-semibold">Digital Portfolio</p>
                <p className="text-sm opacity-70">Học kỳ 2024-2025</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Portfolio học tập môn "Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Điều hướng</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Giới thiệu
              </Link>
              <Link to="/projects" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Dự án học tập
              </Link>
              <Link to="/conclusion" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Tổng kết
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Liên hệ</h4>
            <div className="space-y-3">
              <a
                href="mailto:student@university.edu.vn"
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                student@university.edu.vn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Github className="w-4 h-4" />
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-70">
            © {currentYear} Digital Portfolio. Được tạo cho mục đích học tập.
          </p>
          <p className="text-sm opacity-70 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent" /> for learning
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
