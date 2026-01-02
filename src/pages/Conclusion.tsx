import { Link } from 'react-router-dom';
import { Heart, Star, TrendingUp, MessageCircle, ArrowLeft, CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';

const Conclusion = () => {
  const achievements = [
    {
      icon: '📁',
      title: 'Kỹ năng quản lý dữ liệu',
      description: 'Biết cách tổ chức thông tin và tài liệu một cách khoa học, có hệ thống',
    },
    {
      icon: '🔍',
      title: 'Tư duy phản biện',
      description: 'Phát triển khả năng đánh giá và xác minh thông tin từ nhiều nguồn',
    },
    {
      icon: '🤖',
      title: 'Sử dụng AI hiệu quả',
      description: 'Nắm vững kỹ thuật viết prompt và tận dụng AI như công cụ hỗ trợ',
    },
    {
      icon: '🤝',
      title: 'Hợp tác trực tuyến',
      description: 'Thành thạo công cụ collaboration và quy trình làm việc nhóm từ xa',
    },
    {
      icon: '⚖️',
      title: 'Đạo đức số',
      description: 'Xây dựng bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm',
    },
  ];

  const challenges = [
    {
      challenge: 'Khó khăn ban đầu với việc viết prompt hiệu quả',
      solution: 'Thực hành liên tục, phân tích kết quả, và xây dựng template cá nhân',
    },
    {
      challenge: 'Phân biệt nguồn tin cậy trong môi trường thông tin đa dạng',
      solution: 'Áp dụng framework CRAAP và luôn cross-check từ nhiều nguồn',
    },
    {
      challenge: 'Cân bằng giữa sử dụng AI và phát triển kỹ năng tự thân',
      solution: 'Xác định rõ vai trò AI là hỗ trợ, không thay thế việc học và tư duy',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="section-container">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại dự án
          </Link>

          <SectionHeader
            label="Tổng kết"
            title="Kết thúc hành trình học tập"
            description="Nhìn lại quá trình thực hiện portfolio, những kiến thức đã đạt được, và vai trò của AI trong việc hỗ trợ học tập hiện đại."
          />
        </div>
      </section>

      {/* Personal Reflection */}
      <section className="pb-16 md:pb-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Main content */}
            <div className="lg:col-span-3">
              <div className="card-academic p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-xl">Cảm nhận cá nhân</h3>
                </div>

                <div className="prose prose-slate max-w-none">
                  <p className="text-foreground leading-relaxed mb-4">
                    Quá trình thực hiện portfolio này là một hành trình học tập đầy ý nghĩa. Từ những bài tập tưởng chừng đơn giản như quản lý tệp tin đến những vấn đề phức tạp hơn như đạo đức AI, mỗi bài học đều mang đến cho tôi những góc nhìn mới.
                  </p>

                  <p className="text-foreground leading-relaxed mb-4">
                    Điều tôi ấn tượng nhất là sự liên kết giữa các bài học. Kỹ năng tổ chức dữ liệu giúp tôi quản lý tài liệu nghiên cứu tốt hơn. Tư duy phản biện giúp tôi đánh giá output của AI một cách khách quan. Hiểu về đạo đức AI giúp tôi sử dụng công nghệ một cách có trách nhiệm.
                  </p>

                  <p className="text-foreground leading-relaxed">
                    Portfolio này không chỉ là một bài tập, mà là minh chứng cho sự phát triển của bản thân trong thời đại số. Tôi tự tin rằng những kỹ năng và tư duy đã rèn luyện sẽ đồng hành cùng tôi trong suốt hành trình học tập và sự nghiệp phía trước.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card-academic p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-accent" />
                  <h4 className="font-display font-semibold">Thông tin Portfolio</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Số bài tập</span>
                    <span className="font-medium">6 bài</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Thời gian thực hiện</span>
                    <span className="font-medium">1 học kỳ</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Học phần</span>
                    <span className="font-medium">CNSS & AI</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Trạng thái</span>
                    <span className="inline-flex items-center gap-1 text-green-600">
                      <CheckCircle2 className="w-4 h-4" />
                      Hoàn thành
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-academic p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <h4 className="font-display font-semibold">Điểm tiến bộ</h4>
                </div>
                <div className="space-y-3">
                  {[
                    { skill: 'Kỹ năng số', before: 40, after: 85 },
                    { skill: 'Tư duy phản biện', before: 50, after: 80 },
                    { skill: 'Sử dụng AI', before: 30, after: 90 },
                  ].map((item) => (
                    <div key={item.skill}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{item.skill}</span>
                        <span className="text-accent font-medium">+{item.after - item.before}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full transition-all duration-500"
                          style={{ width: `${item.after}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="section-container">
          <SectionHeader
            label="Thành tựu"
            title="Kiến thức và kỹ năng đạt được"
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="card-academic p-6 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h4 className="font-display font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <SectionHeader
            label="Thử thách"
            title="Khó khăn và cách vượt qua"
            description="Những thử thách gặp phải trong quá trình học tập và phương pháp giải quyết."
          />

          <div className="space-y-6 max-w-3xl">
            {challenges.map((item, index) => (
              <div key={index} className="card-academic p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-medium text-foreground mb-2">
                      {item.challenge}
                    </h4>
                    <div className="flex items-start gap-2 mt-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
                      <Lightbulb className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-green-700 dark:text-green-400">
                        <strong>Giải pháp:</strong> {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Role Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-sm font-medium mb-6">
              Đánh giá
            </span>
            <h2 className="heading-display text-3xl md:text-4xl mb-6">
              Vai trò của AI trong học tập hiện đại
            </h2>
            <div className="divider-gold mx-auto mb-8" />

            <div className="text-left space-y-6">
              <p className="text-lg opacity-90 leading-relaxed">
                Qua quá trình thực hiện portfolio này, tôi nhận ra AI đóng vai trò như một 
                <strong className="text-accent"> người trợ lý thông minh</strong> trong học tập. 
                AI có thể giúp tăng tốc quá trình nghiên cứu, gợi ý ý tưởng mới, và hỗ trợ 
                tổ chức thông tin - nhưng không thể thay thế việc học và tư duy của con người.
              </p>

              <p className="text-lg opacity-90 leading-relaxed">
                Điều quan trọng nhất tôi học được là <strong className="text-accent">sử dụng AI có trách nhiệm</strong>. 
                Điều này bao gồm: luôn kiểm chứng thông tin từ AI, trích dẫn khi sử dụng, 
                minh bạch về việc sử dụng AI trong bài nộp, và quan trọng nhất - không để 
                AI thay thế quá trình học tập và phát triển tư duy của bản thân.
              </p>

              <p className="text-lg opacity-90 leading-relaxed">
                Trong tương lai, khi AI ngày càng phát triển, kỹ năng quan trọng nhất không phải 
                là biết sử dụng AI, mà là biết <strong className="text-accent">khi nào nên và không nên 
                sử dụng AI</strong>, và làm sao để kết hợp sức mạnh của AI với tư duy con người 
                để tạo ra giá trị thực sự.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-foreground text-primary font-medium hover:opacity-90 transition-opacity"
              >
                <ArrowLeft className="w-4 h-4" />
                Về trang chủ
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                Xem lại dự án
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <MessageCircle className="w-12 h-12 text-accent mx-auto mb-6" />
            <blockquote className="font-display text-2xl md:text-3xl italic text-foreground mb-6">
              "Công nghệ chỉ là công cụ. Điều quan trọng là con người đứng sau nó - với tư duy, 
              đạo đức, và khát vọng học hỏi không ngừng."
            </blockquote>
            <p className="text-muted-foreground">— Bài học từ học phần CNSS & AI</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Conclusion;
