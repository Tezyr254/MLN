# MLN

Trải nghiệm lịch sử tương tác — hành trình khám phá lịch sử Việt Nam hiện đại từ 1945 đến 1975.

## Công nghệ

- **Vite** + **React** + **TypeScript**
- **TailwindCSS** — giao diện
- **Framer Motion** — hiệu ứng chuyển động
- **Lucide React** — biểu tượng

## Chạy trên máy

```bash
npm install
npm run dev
```

Mở [http://localhost:5173](http://localhost:5173) trên trình duyệt.

## Build sản phẩm

```bash
npm run build
npm run preview
```

---

## Deploy miễn phí lên Cloudflare Pages

Cloudflare Pages **miễn phí** cho website tĩnh, băng thông không giới hạn, HTTPS tự động.

### Cách 1: Kết nối GitHub/GitLab (khuyến nghị)

1. Đẩy mã nguồn lên GitHub hoặc GitLab.
2. Đăng nhập [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Chọn repository **MLN**.
4. Cấu hình build:

| Mục | Giá trị |
|-----|---------|
| Framework preset | `None` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (mặc định) |

5. Thêm biến môi trường (tuỳ chọn nhưng nên có):

| Biến | Giá trị |
|------|---------|
| `NODE_VERSION` | `20` |

6. Nhấn **Save and Deploy**. Cloudflare sẽ tự build và cấp URL dạng `https://mln.pages.dev`.

Mỗi lần push lên nhánh production, trang web tự cập nhật.

### Cách 2: Deploy trực tiếp bằng Wrangler CLI

```bash
npm install
npm run deploy
```

Lần đầu chạy, Wrangler sẽ yêu cầu đăng nhập Cloudflare. Sau khi hoàn tất, trang được đăng lên Cloudflare Pages.

### File cấu hình đã có sẵn

| File | Mục đích |
|------|----------|
| `public/_redirects` | SPA routing — mọi đường dẫn trả về `index.html` |
| `public/_headers` | Header bảo mật & cache tài nguyên |
| `public/_routes.json` | Tối ưu routing trên Cloudflare |
| `wrangler.toml` | Cấu hình Wrangler / Pages |
| `.nvmrc` / `.node-version` | Node.js 20 cho môi trường build |

### Tên miền tuỳ chỉnh (miễn phí)

Trong Cloudflare Pages → project **mln** → **Custom domains** → thêm tên miền của bạn. Cloudflare cấp SSL miễn phí.

---

## Cấu trúc dự án

```
src/
├── assets/
├── components/
│   ├── layout/
│   ├── timeline/
│   └── ui/
├── sections/
├── data/
├── hooks/
├── types/
├── App.tsx
└── main.tsx
```

## Tính năng

- Hero toàn màn hình với hạt động và hiệu ứng parallax
- Dòng thời gian ngang tương tác (1945–1975): kéo, cuộn, phóng to
- Panel chi tiết sự kiện với nội dung lịch sử tiếng Việt
- Nhân vật lịch sử, thống kê động, phần di sản
- Responsive — dòng thời gian dọc trên mobile
- Hỗ trợ bàn phím và ARIA
- Ảnh lazy-load, animation tối ưu
