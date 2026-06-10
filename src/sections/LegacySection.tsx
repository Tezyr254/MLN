import { motion } from 'framer-motion';
import { Flag, Heart, Landmark } from 'lucide-react';

const legacyPoints = [
  {
    icon: Flag,
    title: 'Khôi Phục Chủ Quyền',
    description:
      'Sau hàng thế kỷ bị đô hộ, Việt Nam trở thành quốc gia độc lập, thống nhất, chủ quyền trên toàn bộ lãnh thổ.',
  },
  {
    icon: Landmark,
    title: 'Di Sản Bền Vững',
    description:
      'Hai cuộc kháng chiến trở thành biểu tượng đấu tranh giải phóng dân tộc, truyền cảm hứng cho các phong trào ở châu Phi, châu Á và Mỹ Latinh.',
  },
  {
    icon: Heart,
    title: 'Tinh Thần Kiên Cường',
    description:
      'Hy sinh của hàng triệu người đã hun đúc bản lĩnh dân tộc — đoàn kết, bền bỉ và quyết tâm giành độc lập, tự do.',
  },
];

export function LegacySection() {
  return (
    <section
      id="legacy"
      className="relative overflow-hidden bg-mln-dark py-24 md:py-32"
      aria-labelledby="legacy-heading"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 100%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-mln-gold">
            Chương Cuối
          </p>
          <h2
            id="legacy-heading"
            className="font-display text-3xl font-bold text-mln-white md:text-5xl"
          >
            Di Sản Thống Nhất
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-8 text-lg leading-relaxed text-mln-white/70 md:text-xl"
        >
          Ngày 30 tháng 4 năm 1975, giấc mơ đã được nêu tại Quảng trường Ba Đình ba thập kỷ trước
          trở thành hiện thực. Thống nhất đất nước không chỉ là chiến thắng quân sự — đó là kết quả
          của niềm tin bất diệt rằng không lực lượng nào có thể chia cắt vĩnh viễn một dân tộc quyết
          tâm giành tự do. Hôm nay, câu chuyện kháng chiến của Việt Nam là minh chứng cho sức mạnh
          ý chí tập thể, tầm nhìn chiến lược và khát vọng tự quyết vượt thời gian.
        </motion.p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {legacyPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-mln-gold/30 bg-mln-gold/10">
                <point.icon className="h-6 w-6 text-mln-gold" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-semibold text-mln-white">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mln-white/50">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
