import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* 1. HERO SECTION & SOCIAL ICONS */}
      <section className="container">
        <div className="left-panel">
          <div className="blur-effect"></div>
          <div className="image-wrapper">
            <Image 
              src="/assets/dreamina-2025-12-25-9086-Chân dung studio siêu chân thực của một ....jpeg"
              alt="Thế Công"
              width={380}
              height={550}
              className="main-photo"
              priority
            />
          </div>
        </div>

        <div className="right-panel">
          <div className="content-box">
            <h1>Xin chào,<br />mình là Thế Công.</h1>
            <p className="description">
              Người Đồng Tháp. Sinh ra ở Cao Lãnh.<br />
              Lập trình viên Flutter Mobile tại Tp.Hồ Chí Minh.
            </p>

            <div className="button-group">
              <Link href="#about" className="btn">VỀ MÌNH</Link>
              <Link href="#projects" className="btn">DỰ ÁN CỦA TÔI</Link>
              <Link href="#certificates" className="btn">CHỨNG CHỈ</Link>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=congnguyenthe212@gmail.com" target="_blank" className="btn btn-primary">HỢP TÁC VỚI MÌNH</a>
            </div>

            <div className="social-icons">
              <a href="https://github.com/nguyencong982" target="_blank" title="GitHub"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.facebook.com/nguyen.the.cong.902473" target="_blank" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/tc0673?igsh=Zmx1czJmem9mYWRy" target="_blank" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://youtube.com/@cong_nguyenthe?si=qMbgDhxsFI1qOTMm" target="_blank" title="Youtube"><i className="fa-brands fa-youtube"></i></a>
              <a href="https://www.tiktok.com/@tcgang212?_r=1&_t=ZS-92W29IsOI0e" target="_blank" title="TikTok"><i className="fa-brands fa-tiktok"></i></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=congnguyenthe212@gmail.com" target="_blank" title="Email"><i className="fa-solid fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GIỚI THIỆU & KỸ NĂNG */}
      <section id="about" className="cert-section">
        <h2 className="section-title">Giới Thiệu Bản Thân</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>Mình là một <strong>Sinh viên năm 4 Flutter Mobile</strong> với đam mê xây dựng các ứng dụng di động thực tế. Mình sở hữu tư duy logic tốt, khả năng tự học bền bỉ và sự kỷ luật cao trong công việc.</p>
            <p><strong>Mục tiêu:</strong> Trong 1-3 năm tới, mình hướng tới vị trí Senior Flutter Developer, làm chủ các kiến thức về kiến trúc ứng dụng và tối ưu hóa hiệu năng.</p>
            <p><strong>Điểm mạnh:</strong> Tự học tốt, chăm chỉ và có kinh nghiệm thực tế về vận hành sản phẩm thông qua quá trình kiểm kê hàng hóa.</p>
          </div>
          <div className="skills-container">
            <div className="skill-item">
              <span><i className="fa-brands fa-flutter"></i> Flutter & Dart</span>
              <div className="progress-bar"><div className="progress" style={{ width: '85%' }}></div></div>
            </div>
            <div className="skill-item">
              <span><i className="fa-brands fa-html5"></i> Front-end (HTML/CSS/JS)</span>
              <div className="progress-bar"><div className="progress" style={{ width: '62%' }}></div></div>
            </div>
            <div className="skill-item">
              <span><i className="fa-solid fa-fire"></i> Firebase & Firestore</span>
              <div className="progress-bar"><div className="progress" style={{ width: '75%' }}></div></div>
            </div>
            <div className="skill-item">
              <span><i className="fa-solid fa-toolbox"></i> Git, GitHub, Figma</span>
              <div className="progress-bar"><div className="progress" style={{ width: '70%' }}></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KINH NGHIỆM THỰC TẾ */}
      <section id="experience" className="cert-section" style={{ backgroundColor: '#f7fbf8' }}>
        <h2 className="section-title">Kinh Nghiệm Thực Tế</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="time">2024 - Hiện tại</div>
            <h3>Lập trình viên Flutter (Dự án Foodship)</h3>
            <p>Thiết kế UI chuyên nghiệp, tích hợp các API, quản lý giỏ hàng và dữ liệu món ăn qua Firebase.</p>
          </div>
        </div>
      </section>

      {/* 4. DỰ ÁN FLUTTER */}
      <section id="projects" className="cert-section">
        <h2 className="section-title">Dự Án Flutter</h2>
        <div className="cert-grid">
          <div className="cert-card project-card">
            <div className="cert-img-container">
              <Image src="/assets/food_dome_icon.png" alt="Foodship App" width={100} height={100} className="cert-img" />
            </div>
            <h3>MY RESTAURANT (Foodship)</h3>
            <p>Ứng dụng đặt món hiện đại, tích hợp xác thực người dùng và giao diện tối ưu cho trải nghiệm thực tế.</p>
            <div className="project-actions">
              <a href="/assets/app-release.apk" download className="btn-download">
                <i className="fa-solid fa-download"></i> Tải về APK
              </a>
            </div>
            <div className="tags-container">
              <span className="tag">Flutter</span>
              <span className="tag">Firebase</span>
              <span className="tag">Android</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CHỨNG CHỈ (Cisco) */}
      <section id="certificates" className="cert-section" style={{ backgroundColor: '#f9f9f9' }}>
        <h2 className="section-title">Chứng Chỉ</h2>
        <div className="cert-grid">
          <div className="cert-card">
            <div className="cert-img-container">
              <Image src="/assets/image copy.png" alt="JS 1" width={200} height={150} className="cert-img" />
            </div>
            <h3>JavaScript Essentials 1</h3>
            <p>Cisco Networking Academy - 2025</p>
            <a href="https://www.credly.com/badges/c9ae99f5-9ecc-46e0-9b0c-165ddad9f011/public_url" target="_blank" className="btn-verify">Xác minh</a>
          </div>
          <div className="cert-card">
            <div className="cert-img-container">
              <Image src="/assets/image copy 2.png" alt="JS 2" width={200} height={150} className="cert-img" />
            </div>
            <h3>JavaScript Essentials 2</h3>
            <p>Cisco Networking Academy - 2025</p>
            <a href="https://www.credly.com/badges/646acea7-1451-4231-886b-ede212196e20/public_url" target="_blank" className="btn-verify">Xác minh</a>
          </div>
        </div>
      </section>

      {/* 6. THÔNG TIN THÊM (Chính sách & Nhận xét) */}
      <section id="privacy-policy" className="cert-section">
        <h2 className="section-title">Thông Tin Thêm</h2>
        <div className="info-grid">
          <div className="info-box">
            <h3>Nhận xét</h3>
            <p><em>“Đang cập nhật – Sẽ bổ sung khi có dự án hợp tác mới.”</em></p>
          </div>
          <div className="info-box">
            <h3>Chính sách & Điều khoản</h3>
            <p>Mọi dữ liệu người dùng qua Facebook Login trên ứng dụng Foodship được bảo mật tuyệt đối và chỉ dùng để định danh tài khoản.</p>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '40px 0', background: '#333', color: '#fff' }}>
        <p>© 2025 Nguyễn Thế Công. All Rights Reserved.</p>
        <Link href="#" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>Quay lại đầu trang ↑</Link>
      </footer>
    </main>
  );
}