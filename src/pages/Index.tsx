import { Link } from 'react-router-dom';
import { User, Target, BookOpen, ArrowRight, Sparkles, Brain, Shield } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';

const Index = () => {
  const objectives = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Nâng cao kỹ năng số',
      description: 'Thành thạo các công cụ và nền tảng số phục vụ học tập, nghiên cứu và làm việc trong môi trường hiện đại.',
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Phát triển tư duy phản biện',
      description: 'Rèn luyện khả năng đánh giá, phân tích thông tin một cách khách quan và có hệ thống.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Sử dụng AI có trách nhiệm',
      description: 'Ứng dụng trí tuệ nhân tạo hiệu quả trong học tập đồng thời tuân thủ các nguyên tắc đạo đức.',
    },
  ];

  const portfolioGoals = [
    'Thể hiện quá trình học tập và phát triển cá nhân qua từng bài tập',
    'Tổng hợp các sản phẩm học tập trọng tâm của học phần',
    'Lưu trữ minh chứng học tập phục vụ tham khảo trong tương lai',
    'Chia sẻ kinh nghiệm và bài học với cộng đồng học tập',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="section-container">
          <div className="max-w-3xl">
            <div className="animate-slide-up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                Digital Portfolio 2024-2025
              </span>
            </div>

            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-slide-up animate-delay-100">
              Xin chào, tôi là{' '}
              <span className="text-gradient">Lê Phương Thanh</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 animate-slide-up animate-delay-200">
              Sinh viên <strong className="text-foreground">Khoa Kinh tế Chính trị</strong>. 
              Đây là portfolio học tập của tôi cho môn "Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo".
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up animate-delay-300">
              <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                Xem dự án
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#about"
                className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
              >
                Tìm hiểu thêm
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="section-container">
          <SectionHeader
            label="Giới thiệu"
            title="Về bản thân tôi"
            description="Tôi là một sinh viên đam mê công nghệ, luôn tìm kiếm cơ hội học hỏi và phát triển kỹ năng số trong thời đại 4.0."
          />

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="card-academic p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl">Thông tin cá nhân</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Họ và tên</p>
                  <p className="font-medium text-foreground">Lê Phương Thanh</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Mã sinh viên</p>
                  <p className="font-medium text-foreground">25050365</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Khoa</p>
                  <p className="font-medium text-foreground">Kinh tế Chính trị</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Trường</p>
                  <p className="font-medium text-foreground">Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Sở thích học tập</p>
                  <p className="text-foreground leading-relaxed">
                    Tôi đặc biệt quan tâm đến việc ứng dụng công nghệ vào giải quyết các vấn đề thực tiễn. 
                    Bên cạnh đó, tôi cũng yêu thích nghiên cứu về trí tuệ nhân tạo và khoa học dữ liệu.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Định hướng phát triển</p>
                  <p className="text-foreground leading-relaxed">
                    Mục tiêu của tôi là trở thành một chuyên gia có khả năng kết hợp kiến thức chuyên ngành 
                    với kỹ năng số để tạo ra giá trị trong môi trường làm việc hiện đại.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className="card-academic p-6 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors flex-shrink-0">
                      {objective.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                        {objective.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {objective.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Goals Section */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                label="Mục tiêu"
                title="Mục đích của Portfolio này"
                description="Portfolio này được xây dựng như một minh chứng cho quá trình học tập và phát triển cá nhân của tôi trong suốt học phần."
              />

              <div className="space-y-4">
                {portfolioGoals.map((goal, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent text-sm font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-foreground leading-relaxed">{goal}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-academic p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl">Học phần</h3>
                  <p className="text-sm text-muted-foreground">Năm học 2024-2025</p>
                </div>
              </div>

              <h4 className="font-display font-medium text-lg text-foreground mb-4">
                Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo
              </h4>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Học phần cung cấp nền tảng kiến thức và kỹ năng thiết yếu về công nghệ số, 
                đồng thời giúp sinh viên hiểu và ứng dụng AI một cách có trách nhiệm trong học tập và công việc.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Kỹ năng số', 'Tư duy phản biện', 'AI Ethics', 'Collaboration', 'Digital Literacy'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <h2 className="heading-display text-3xl md:text-4xl mb-6">
            Khám phá các dự án học tập
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
            Xem chi tiết 6 bài tập trọng tâm của học phần, mỗi bài đều có mục tiêu, 
            phương pháp thực hiện, minh chứng và bài học rút ra.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold hover:shadow-glow transition-all"
          >
            Xem tất cả dự án
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
