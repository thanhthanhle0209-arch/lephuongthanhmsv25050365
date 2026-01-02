import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';

// Import evidence images for project 1
import project1Evidence1 from '@/assets/project1-evidence-1.png';
import project1Evidence2 from '@/assets/project1-evidence-2.png';
import project1Evidence3 from '@/assets/project1-evidence-3.png';
import project1Evidence4 from '@/assets/project1-evidence-4.png';
import project1Evidence5 from '@/assets/project1-evidence-5.png';
import project1Evidence6 from '@/assets/project1-evidence-6.png';
import project1Evidence7 from '@/assets/project1-evidence-7.png';

// Import evidence images for project 2
import project2Evidence1 from '@/assets/project2-evidence-1.png';
import project2Evidence2 from '@/assets/project2-evidence-2.png';
import project2Evidence3 from '@/assets/project2-evidence-3.png';
import project2Evidence4 from '@/assets/project2-evidence-4.png';
import project2Evidence5 from '@/assets/project2-evidence-5.png';

// Import evidence images for project 3
import project3Evidence1 from '@/assets/project3-evidence-1.png';
import project3Evidence2 from '@/assets/project3-evidence-2.png';
import project3Evidence3 from '@/assets/project3-evidence-3.png';
import project3Evidence4 from '@/assets/project3-evidence-4.png';
import project3Evidence5 from '@/assets/project3-evidence-5.png';
import project3Evidence6 from '@/assets/project3-evidence-6.png';
import project3Evidence7 from '@/assets/project3-evidence-7.png';
import project3Evidence8 from '@/assets/project3-evidence-8.png';
import project3Evidence9 from '@/assets/project3-evidence-9.png';
import project3Evidence10 from '@/assets/project3-evidence-10.png';
const projectsData = [
  {
    number: 1,
    title: 'Thao tác cơ bản với tệp và thư mục',
    description: 'Thiết kế cấu trúc thư mục khoa học và quy tắc đặt tên tệp nhất quán cho việc học tập hiệu quả.',
    sections: {
      objective: 'Nắm vững kỹ năng quản lý tệp và thư mục một cách khoa học, tạo nền tảng cho việc tổ chức dữ liệu học tập hiệu quả trong suốt quá trình học đại học và sự nghiệp sau này.',
      method: [
        'Mở File Explorer: Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ.',
        'Truy cập ổ đĩa/thư mục: Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào một ổ đĩa không phải ổ hệ thống (ví dụ: ổ D: hoặc E:). Nếu chỉ có ổ C:, hãy vào thư mục Documents.',
        'Tạo thư mục mới: Nhấp chuột phải vào một khoảng trống -> chọn New -> Folder. Đặt tên thư mục là ThucHanh_hotensinhvien (ví dụ: ThucHanh_NguyenVanA). Nhấn Enter.',
        'Vào thư mục vừa tạo: Nhấp đúp vào thư mục ThucHanh_NguyenVanA.',
        'Tạo tệp tin văn bản: Nhấp chuột phải vào khoảng trống -> New -> Text Document. Đặt tên là GhiChu.txt. Nhấn Enter.',
        'Đổi tên tệp tin: Nhấp chuột phải vào tệp GhiChu.txt -> chọn Rename. Đổi tên thành GhiChuQuanTrong.txt. Nhấn Enter.',
        'Tạo thư mục con: Trong thư mục ThucHanh_NguyenVanA, nhấp chuột phải -> New -> Folder. Đặt tên là TaiLieu.',
        'Sao chép tệp tin (Copy & Paste): Nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Copy (hoặc chọn tệp rồi nhấn Ctrl + C). Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống bên trong -> chọn Paste (hoặc nhấn Ctrl + V).',
        'Di chuyển tệp tin (Cut & Paste): Quay lại thư mục ThucHanh_NguyenVanA. Tạo một tệp mới tên là DiChuyen.txt. Nhấp chuột phải vào tệp DiChuyen.txt -> chọn Cut (hoặc nhấn Ctrl + X). Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống -> chọn Paste (hoặc nhấn Ctrl + V).',
        'Xóa tệp tin: Trong thư mục TaiLieu, nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Delete. Tệp sẽ được chuyển vào Thùng rác (Recycle Bin).',
        'Xóa vĩnh viễn: Chọn tệp DiChuyen.txt, nhấn giữ phím Shift và nhấn phím Delete. Một cảnh báo sẽ hiện ra. Nếu đồng ý, tệp sẽ bị xóa vĩnh viễn mà không qua Thùng rác.',
        'Khôi phục từ Thùng rác (Tùy chọn): Tìm biểu tượng Recycle Bin trên màn hình nền, nhấp đúp để mở. Tìm tệp GhiChuQuanTrong.txt đã xóa, nhấp chuột phải vào nó và chọn Restore. Tệp sẽ quay trở lại vị trí ban đầu.',
      ],
      evidenceImages: [
        project1Evidence1,
        project1Evidence2,
        project1Evidence3,
        project1Evidence4,
        project1Evidence5,
        project1Evidence6,
        project1Evidence7,
      ],
      analysis: 'Việc tổ chức thư mục khoa học mang lại nhiều lợi ích thiết thực: tiết kiệm thời gian tìm kiếm tài liệu (giảm từ 5-10 phút xuống còn dưới 1 phút), giảm nguy cơ mất dữ liệu do nhầm lẫn, tạo thói quen làm việc chuyên nghiệp. Quy tắc đặt tên nhất quán giúp dễ dàng sắp xếp và lọc tệp theo thời gian hoặc phiên bản.',
      lesson: 'Bài học quan trọng nhất là "Tổ chức từ đầu, tiết kiệm về sau". Một hệ thống quản lý dữ liệu tốt không chỉ giúp học tập hiệu quả hơn mà còn là kỹ năng chuyên nghiệp cần thiết trong môi trường làm việc hiện đại.',
    },
  },
  {
    number: 2,
    title: 'Tìm kiếm và đánh giá thông tin học thuật',
    description: 'Phát triển kỹ năng tìm kiếm thông tin học thuật và đánh giá độ tin cậy của nguồn tài liệu.',
    sections: {
      objective: 'Phát triển kỹ năng tìm kiếm thông tin học thuật hiệu quả, đánh giá độ tin cậy của nguồn và áp dụng tư duy phản biện khi tiếp cận thông tin trên môi trường số.',
      method: [
        'Chọn một chủ đề liên quan đến ngành học của bạn.',
        'Thực hiện tìm kiếm thông tin từ các nguồn: Cơ sở dữ liệu học thuật (Google Scholar, Microsoft Academic, CSDL của thư viện trường), Tạp chí khoa học chuyên ngành, Sách chuyên khảo, Các nguồn mở trên internet.',
        'Thu thập ít nhất 10 tài liệu tham khảo liên quan đến chủ đề (bao gồm ít nhất 5 bài báo khoa học).',
        'Đánh giá độ tin cậy của mỗi nguồn thông tin dựa trên các tiêu chí: tác giả, cơ quan xuất bản, phương pháp nghiên cứu, trích dẫn, tính cập nhật.',
        'Tạo bảng tổng hợp các nguồn thông tin với đánh giá và xếp hạng độ tin cậy.',
      ],
      evidenceImages: [
        project2Evidence1,
        project2Evidence2,
        project2Evidence3,
        project2Evidence4,
        project2Evidence5,
      ],
      analysis: 'Các bài báo do các chuyên gia tài chính và viện nghiên cứu công bố có độ tin cậy cao nhất nhờ quy trình kiểm duyệt nghiêm ngặt. Bài báo quốc tế cũng có tính xác thực cao, tuy nhiên cần chú ý đến thời gian và bối cảnh của từng bài để đảm bảo phù hợp với thực tế hiện tại. Wikipedia có thông tin tổng quan tốt nhưng cần kiểm chứng thêm. Blog cá nhân có giá trị tham khảo thấp nhất do thiếu kiểm chứng và có thể mang tính chủ quan cao.',
      lesson: 'Tư duy phản biện trong kỷ nguyên số không chỉ là "đừng tin vào mọi thứ bạn đọc" mà là biết cách đánh giá và so sánh các nguồn một cách có hệ thống. Kỹ năng này giúp tôi tránh được thông tin sai lệch và xây dựng nền tảng kiến thức vững chắc.',
    },
  },
  {
    number: 3,
    title: 'Viết Prompt hiệu quả cho các mục đích học tập',
    description: 'Học cách giao tiếp hiệu quả với AI thông qua việc viết prompt có cấu trúc và mục tiêu rõ ràng.',
    sections: {
      objective: 'Nắm vững kỹ thuật viết prompt hiệu quả để tối ưu hóa việc sử dụng AI trong học tập, đảm bảo đầu ra chất lượng và phù hợp với nhu cầu.',
      method: [
        'Chọn 3 tác vụ học tập phổ biến: Tóm tắt một bài đọc/tài liệu học thuật, Giải thích một khái niệm phức tạp, Tạo bộ câu hỏi ôn tập cho một chủ đề.',
        'Cho mỗi tác vụ, viết 3 phiên bản prompt khác nhau: Prompt cơ bản (đơn giản, ngắn gọn), Prompt cải tiến (chi tiết hơn, có cấu trúc), Prompt nâng cao (áp dụng các kỹ thuật prompt engineering như role prompting, chain-of-thought, few-shot examples).',
        'Thử nghiệm các prompt với một công cụ AI (như ChatGPT) và so sánh kết quả.',
        'Phân tích lý do tại sao một số prompt hiệu quả hơn các prompt khác.',
        'Tổng hợp các nguyên tắc và mẹo viết prompt hiệu quả dựa trên kết quả thử nghiệm.',
      ],
      evidenceImages: [
        project3Evidence1,
        project3Evidence2,
        project3Evidence3,
        project3Evidence4,
        project3Evidence5,
        project3Evidence6,
        project3Evidence7,
        project3Evidence8,
        project3Evidence9,
        project3Evidence10,
      ],
      analysis: 'Prompt cải tiến cho kết quả tốt hơn rõ rệt: nội dung phù hợp với trình độ người đọc, ví dụ liên quan đến ngành học, cấu trúc rõ ràng dễ theo dõi. Trong khi prompt ban đầu cho câu trả lời quá chung chung, thiếu tập trung và khó áp dụng vào học tập.',
      lesson: 'Một prompt tốt cần 4 yếu tố: (1) Xác định đối tượng/ngữ cảnh, (2) Nêu rõ mục tiêu cụ thể, (3) Định hướng cấu trúc đầu ra, (4) Giới hạn phạm vi. AI là công cụ mạnh mẽ, nhưng chất lượng đầu ra phụ thuộc lớn vào cách chúng ta đặt câu hỏi.',
    },
  },
  {
    number: 4,
    title: 'Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm',
    description: 'Ứng dụng các công cụ collaboration để quản lý và thực hiện dự án nhóm hiệu quả.',
    sections: {
      objective: 'Thành thạo việc sử dụng công cụ hợp tác trực tuyến (Trello, Notion, Google Workspace) để tổ chức và thực hiện dự án nhóm một cách chuyên nghiệp.',
      method: [
        'Làm việc với nhóm của bạn và cùng nhau thảo luận, lựa chọn một dự án nhỏ (ví dụ: tạo bài thuyết trình, viết báo cáo nghiên cứu, lập kế hoạch sự kiện).',
        'Lựa chọn và sử dụng ít nhất 3 công cụ hợp tác trực tuyến: Công cụ quản lý dự án (Trello, Asana, ClickUp, Microsoft Planner...), Công cụ soạn thảo tài liệu cộng tác (Google Docs, Microsoft Office Online...), Công cụ lưu trữ và chia sẻ tệp (Google Drive, OneDrive, Dropbox...), Công cụ giao tiếp nhóm (Slack, Discord, Microsoft Teams...).',
        'Thiết lập không gian làm việc chung và mời tất cả thành viên tham gia.',
        'Thực hiện dự án trong 1 tuần, sử dụng các công cụ đã chọn để: Phân công và theo dõi nhiệm vụ, Cộng tác trên tài liệu, Giao tiếp và thảo luận, Chia sẻ tài nguyên và tệp.',
        'Ghi lại quá trình sử dụng các công cụ, bao gồm ảnh chụp màn hình minh họa.',
      ],
      evidence: 'Ảnh chụp màn hình bảng Trello với đầy đủ các thẻ công việc, nhãn màu theo độ ưu tiên (Cao/Trung bình/Thấp), checklist trong mỗi thẻ, và nhật ký hoạt động. Kèm theo sơ đồ Gantt đơn giản thể hiện timeline dự án.',
      analysis: 'Công cụ hợp tác online giúp: (1) Minh bạch hóa tiến độ - mọi thành viên đều thấy ai đang làm gì, (2) Giảm communication overhead - thông tin tập trung một chỗ, (3) Tạo accountability - mỗi người chịu trách nhiệm với task của mình, (4) Dễ dàng điều chỉnh kế hoạch khi có thay đổi.',
      lesson: 'Công cụ chỉ là phương tiện, điều quan trọng là quy trình và cam kết của team. Một bảng Trello đẹp không có nghĩa là dự án thành công nếu không có sự tuân thủ quy trình và cập nhật thường xuyên từ tất cả thành viên.',
    },
  },
  {
    number: 5,
    title: 'Sử dụng AI hỗ trợ sáng tạo nội dung',
    description: 'Khám phá quy trình sáng tạo nội dung với sự hỗ trợ của AI, đảm bảo vai trò chủ động của người học.',
    sections: {
      objective: 'Hiểu và thực hành quy trình sáng tạo nội dung số với sự hỗ trợ của AI, đồng thời phân định rõ vai trò của AI như công cụ hỗ trợ và vai trò chủ động của người học.',
      method: [
        'Lên ý tưởng video giải thích "5 Tips học tập hiệu quả với AI"',
        'Sử dụng AI để brainstorm và phát triển outline',
        'Viết kịch bản chi tiết với sự hỗ trợ của AI',
        'Chỉnh sửa, bổ sung góc nhìn cá nhân và finalize nội dung',
      ],
      evidence: 'Tài liệu quy trình sáng tạo gồm: (1) Mindmap ý tưởng ban đầu (do tôi tạo), (2) Outline được AI hỗ trợ mở rộng, (3) Bản nháp kịch bản, (4) Bản chỉnh sửa cuối với highlight các phần tôi thay đổi/bổ sung.',
      analysis: 'Ưu điểm của AI: tăng tốc brainstorming (tiết kiệm 60% thời gian), gợi ý các góc nhìn mới, hỗ trợ cấu trúc nội dung logic. Hạn chế: nội dung thiếu chiều sâu cá nhân, đôi khi generic, cần fact-check kỹ. Vai trò của người học vẫn không thể thay thế: định hướng, đánh giá, và thêm "chất riêng" vào sản phẩm.',
      lesson: 'AI là người trợ lý sáng tạo tuyệt vời, nhưng không phải người sáng tạo. Sản phẩm cuối cùng vẫn cần dấu ấn và tư duy của con người để có giá trị và sự độc đáo. Công thức tốt nhất: Ý tưởng (Người) + Hỗ trợ (AI) + Hoàn thiện (Người) = Sản phẩm chất lượng.',
    },
  },
  {
    number: 6,
    title: 'Sử dụng AI có trách nhiệm trong học tập và nghiên cứu',
    description: 'Xây dựng framework cá nhân về việc sử dụng AI có đạo đức và trách nhiệm trong môi trường học thuật.',
    sections: {
      objective: 'Hiểu sâu các vấn đề đạo đức khi sử dụng AI trong học tập, xây dựng bộ nguyên tắc cá nhân và cam kết liêm chính học thuật.',
      method: [
        'Nghiên cứu các case study về vi phạm liêm chính học thuật liên quan đến AI',
        'Tham khảo hướng dẫn sử dụng AI của các trường đại học hàng đầu',
        'Suy ngẫm và xây dựng bộ nguyên tắc cá nhân',
        'Ký cam kết liêm chính học thuật với bản thân',
      ],
      evidence: 'Văn bản "Nguyên tắc sử dụng AI có trách nhiệm" của bản thân, bao gồm 7 điều khoản cụ thể, kèm theo các ví dụ minh họa cho từng nguyên tắc.',
      analysis: 'Các vấn đề đạo đức chính khi sử dụng AI: đạo văn (sử dụng output AI mà không trích dẫn), gian lận (nộp bài hoàn toàn do AI tạo), thiếu minh bạch (không công khai việc sử dụng AI), phụ thuộc quá mức (mất khả năng tư duy độc lập). Việc sử dụng AI có trách nhiệm đòi hỏi sự cân bằng giữa tận dụng công nghệ và duy trì giá trị học thuật.',
      lesson: '7 nguyên tắc của tôi: (1) Luôn trích dẫn khi sử dụng AI, (2) AI là công cụ hỗ trợ, không phải người thay thế, (3) Kiểm chứng mọi thông tin từ AI, (4) Sử dụng AI để học, không phải để lách việc học, (5) Minh bạch về việc sử dụng AI trong bài nộp, (6) Phát triển tư duy độc lập song song với việc dùng AI, (7) Tôn trọng quy định của nhà trường về AI.',
    },
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="section-container">
          <SectionHeader
            label="Dự án học tập"
            title="6 Bài tập trọng tâm"
            description="Mỗi bài tập được trình bày theo cấu trúc chuẩn: Mục tiêu → Phương pháp → Minh chứng → Phân tích → Bài học. Click vào từng bài để xem chi tiết."
            centered
          />

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {[
              { value: '6', label: 'Bài tập' },
              { value: '5', label: 'Kỹ năng' },
              { value: '100%', label: 'Hoàn thành' },
              { value: '∞', label: 'Bài học' },
            ].map((stat, index) => (
              <div key={index} className="card-academic p-4 text-center">
                <p className="font-display font-bold text-2xl text-accent">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="pb-16 md:pb-24">
        <div className="section-container">
          <div className="space-y-6">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.number}
                {...project}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="section-container">
          <SectionHeader
            label="Tổng quan"
            title="Những điểm nổi bật"
            centered
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-academic p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📁</span>
              </div>
              <h4 className="font-display font-semibold text-lg mb-2">Kỹ năng tổ chức</h4>
              <p className="text-sm text-muted-foreground">
                Quản lý dữ liệu và thông tin một cách khoa học, có hệ thống
              </p>
            </div>

            <div className="card-academic p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h4 className="font-display font-semibold text-lg mb-2">AI có trách nhiệm</h4>
              <p className="text-sm text-muted-foreground">
                Sử dụng AI như công cụ hỗ trợ trong khi duy trì tư duy độc lập
              </p>
            </div>

            <div className="card-academic p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-display font-semibold text-lg mb-2">Làm việc nhóm</h4>
              <p className="text-sm text-muted-foreground">
                Hợp tác hiệu quả với công cụ số và quy trình chuyên nghiệp
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
