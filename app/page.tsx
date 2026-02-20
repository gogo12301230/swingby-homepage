"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

// 프로젝트 데이터 타입 정의
interface Project {
  titles: { [key: string]: string };
  roleKey: string;
  cats: string[];
  link: string;
  thumbnail: string;
}

export default function Home() {
  const [filter, setFilter] = useState("ALL");
  const [lang, setLang] = useState("KR");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    gsap.from(".expertise-section h2, .animate-item", {
      scrollTrigger: {
        trigger: ".expertise-section",
        start: "top 90%",
        end: "top 60%",
        scrub: 1.5,
      },
      opacity: 0,
      y: 100,
      stagger: 0.2,
    });
  }, [lang]);

  const scrollToSection = (id: string) => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: id, offsetY: 0 },
      ease: "power3.inOut"
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const t: { [key: string]: { [key: string]: string } } = {
    KR: {
      production: "기획부터 포스트까지, 영상의 모든 여정에 동행하여 하나의 세계를 완성합니다.",
      creative: "당신이 미소 지을 수 있는 순간을 상상하며, 마음을 움직이는 기획을 제안합니다.",
      shooting: "당신의 상상이 텍스트를 넘어, 살아 숨 쉬는 이미지로 투영되는 순간을 기록합니다.",
      edit: "어떤 형태의 이야기든, 당신만의 고유한 호흡과 스타일에 맞춰 세밀하게 조각합니다.",
      color: "색으로 전하는 이야기. 빛의 미묘한 차이를 읽어 작품만의 독보적인 온도를 찾아냅니다.",
      dit: "당신이 머릿속에 그린 이미지를 현장의 모니터 위로 생생하게 피워냅니다.",
      contact_msg: "모든 궤도를 넘어 당신에게로",
      form_name: "이름", form_phone: "연락처", form_email: "이메일 주소", form_msg: "내용", form_send: "보내기",
      role_edit: "편집", role_on_set: "현장편집 / 색보정", role_drone: "드론", role_dit: "D.I.T", role_complex: "D.I.T / 편집 / 색보정",
      role_making: "메이킹 필름", role_production: "제작", role_pepsi: "현장편집 / D.I.T", role_color: "색보정",
      role_shooting_color: "촬영 / 색보정", role_total_edit: "종합편집", role_assistant_director: "조감독",
      role_shooting: "촬영", role_rough_cut: "가편집"
    },
    JP: {
      production: "企画からポストまで, 映像のすべての旅に寄り添い, 一つの世界を完成させます。",
      creative: "あなたが笑顔になれる瞬間を想像し, 心を動かす企画を提案します。",
      shooting: "あなたの想像がテキストを超え, 生き生きとした映像として投影される瞬間を記録します。",
      edit: "どんな物語でも, あなただけの独自の呼吸とスタイルに合わせて細かく刻みます。",
      color: "色で伝える物語。光の微妙な差を読み取り, 作品だけの独歩的な温度を見つけ出します。",
      dit: "あなたが頭の中に描いたイメージを, 現場のモニターに鮮やかに咲かせます。",
      contact_msg: "すべての軌道を超えて, あなたのもとへ",
      form_name: "お名前", form_phone: "電話番号", form_email: "メールアドレス", form_msg: "内容", form_send: "送信",
      role_edit: "編集", role_on_set: "現場編集 / カラーグレーディング", role_drone: "ドローン", role_dit: "D.I.T", role_complex: "D.I.T / 編集 / カラーグレーディング",
      role_making: "メイキング映像", role_production: "制作", role_pepsi: "現場編集 / D.I.T", role_color: "カラーグレーディング",
      role_shooting_color: "撮影 / カラーグレーディング", role_total_edit: "総合編集", role_assistant_director: "助監督",
      role_shooting: "撮影", role_rough_cut: "仮編集"
    },
    EN: {
      production: "From vision to final frame, we navigate the entire journey to build a complete world.",
      creative: "Imagining the moment you'll smile, we design stories that touch the heart.",
      shooting: "The moment your imagination transcends text and is projected into living, breathing images.",
      edit: "Whatever the story, we finely sculpt it to match your unique rhythm and style.",
      color: "A story told through color. We read the subtle nuances of light to find the unique temperature of your work.",
      dit: "Bringing the images in your mind to vivid life on the on-site monitor.",
      contact_msg: "Beyond every orbit, towards you",
      form_name: "Name", form_phone: "Phone", form_email: "Email", form_msg: "Message", form_send: "SEND",
      role_edit: "EDIT", role_on_set: "ON-SET EDIT / COLOR GRADING", role_drone: "DRONE", role_dit: "D.I.T", role_complex: "D.I.T / EDIT / COLOR GRADING",
      role_making: "MAKING FILM", role_production: "PRODUCTION", role_pepsi: "ON-SET EDIT / D.I.T", role_color: "COLOR GRADING",
      role_shooting_color: "CINEMATOGRAPHY / COLOR GRADING", role_total_edit: "TOTAL EDIT", role_assistant_director: "ASSISTANT DIRECTOR",
      role_shooting: "CINEMATOGRAPHY", role_rough_cut: "ROUGH CUT"
    }
  };

  const categories = ["ALL", "PRODUCTION", "SHOOTING", "EDIT", "COLOR GRADING", "D.I.T"];
  
  const portfolioData: Project[] = [
    { titles: { KR: "2025 FST 공식 데일리 티저", EN: "2025 FST official daily teaser", JP: "2025 FST 公式デイリーティーザー" }, roleKey: "role_edit", cats: ["EDIT"], link: "https://youtu.be/5ckTO9U8zp8", thumbnail: "https://img.youtube.com/vi/5ckTO9U8zp8/maxresdefault.jpg" },
    { titles: { KR: "어쩌면 해피엔딩", EN: "Maybe Happy Ending", JP: "ひょっとしてハッピーエンヂィグ" }, roleKey: "role_on_set", cats: ["EDIT", "COLOR GRADING"], link: "#", thumbnail: "/MFLS.png" },
    { titles: { KR: "독친", EN: "Toxic Daughter", JP: "독친" }, roleKey: "role_drone", cats: ["SHOOTING"], link: "#", thumbnail: "/Toxic.png" },
    { titles: { KR: "under your bed", EN: "under your bed", JP: "under your bed" }, roleKey: "role_dit", cats: ["D.I.T"], link: "#", thumbnail: "/UYB.jpeg" },
    { titles: { KR: "6시간 후 너는 죽는다", EN: "You Will Die in 6 Hours", JP: "6時間後に君は死ぬ" }, roleKey: "role_dit", cats: ["D.I.T"], link: "#", thumbnail: "/6hours.jpeg" },
    { titles: { KR: "루프", EN: "The Loop", JP: "ループ" }, roleKey: "role_dit", cats: ["D.I.T"], link: "#", thumbnail: "/Loop.jpeg" },
    { titles: { KR: "신사 : 악귀의 속삭임", EN: "The Shrine", JP: "神社：悪鬼の囁き" }, roleKey: "role_dit", cats: ["D.I.T"], link: "#", thumbnail: "/shrine.jpg" },
    { titles: { KR: "흥신소", EN: "Detective agency", JP: "興信所" }, roleKey: "role_complex", cats: ["D.I.T", "EDIT", "COLOR GRADING"], link: "#", thumbnail: "/흥신소.jpg" },
    { titles: { KR: "옥수수수염차-IVE CF", EN: "Oksusu Suyeom Cha-IVE CF", JP: "とうもろこしひげ茶-IVE CM" }, roleKey: "role_making", cats: ["PRODUCTION"], link: "https://youtu.be/aulQMA8J5l8", thumbnail: "https://img.youtube.com/vi/aulQMA8J5l8/maxresdefault.jpg" },
    { titles: { KR: "그릴리-정경호 CF (Making)", EN: "Grilly-Jung Kyung-ho CF (Making Film)", JP: "Grilly-チョン・ギョンホ CM (メイキング)" }, roleKey: "role_making", cats: ["PRODUCTION"], link: "https://youtu.be/ivg4GFTbTAc", thumbnail: "https://img.youtube.com/vi/ivg4GFTbTAc/maxresdefault.jpg" },
    { titles: { KR: "그릴리-정경호 CF (Shortform)", EN: "Grilly-Jung Kyung-ho Shortform CF", JP: "Grilly-チョン・ギョンホ ショートフォーム CM" }, roleKey: "role_production", cats: ["PRODUCTION"], link: "https://youtube.com/shorts/TNKk8ohUL1I", thumbnail: "https://img.youtube.com/vi/TNKk8ohUL1I/maxresdefault.jpg" },
    { titles: { KR: "KB다이렉트자동차보험-김연아 CF", EN: "KB Direct Car Insurance-Kim Yuna CF", JP: "KBダイレクト自動車保険-キム・ヨナ CM" }, roleKey: "role_production", cats: ["PRODUCTION"], link: "https://youtube.com/shorts/8YOYu1gh1tI", thumbnail: "https://img.youtube.com/vi/8YOYu1gh1tI/maxresdefault.jpg" },
    { titles: { KR: "펩시-채수빈 CF", EN: "Pepsi-Chae Soo-bin CF", JP: "ペプシ-チェ・スビン CM" }, roleKey: "role_pepsi", cats: ["D.I.T", "EDIT"], link: "https://www.youtube.com/watch?v=85w6KAXCl9I", thumbnail: "https://img.youtube.com/vi/85w6KAXCl9I/maxresdefault.jpg" },
    { titles: { KR: "포켓몬카드-김효연,노혜성", EN: "Pokemon Card-Kim Hyo-yeon, Noh Hye-seong", JP: "ポケモンカード-キム・ヒョヨン, ノ・ヘソン" }, roleKey: "role_pepsi", cats: ["D.I.T"], link: "https://www.youtube.com/watch?v=DM4sNZUA-T0", thumbnail: "https://img.youtube.com/vi/DM4sNZUA-T0/maxresdefault.jpg" },
    { titles: { KR: "Heuhike 패션필름", EN: "Heuhike Fashion Film", JP: "Heuhike ファッションフィルム" }, roleKey: "role_color", cats: ["COLOR GRADING"], link: "https://www.youtube.com/watch?v=GrDRMbdkFfw", thumbnail: "https://img.youtube.com/vi/GrDRMbdkFfw/maxresdefault.jpg" },
    { titles: { KR: "깁스캠 - (주)윤진 홍보영상", EN: "GibbsCAM - Yoonjin Promo", JP: "GibbsCAM - ユンジン 広報映像" }, roleKey: "role_edit", cats: ["EDIT", "COLOR GRADING"], link: "https://youtu.be/EmZE-zBupZY", thumbnail: "https://img.youtube.com/vi/EmZE-zBupZY/maxresdefault.jpg" },
    { titles: { KR: "씨네큐-문래창작촌 홍보영상", EN: "CineQ-Mullae Art Village CF", JP: "CineQ-文来創作村 CM" }, roleKey: "role_production", cats: ["PRODUCTION"], link: "https://youtu.be/cMssFFhas4E", thumbnail: "https://img.youtube.com/vi/cMssFFhas4E/maxresdefault.jpg" },
    { titles: { KR: "숏폼드라마-카모플라쥬", EN: "Short-form Drama: Camouflage", JP: "ショートフォームドラマ-カモフラージュ" }, roleKey: "role_shooting_color", cats: ["SHOOTING", "COLOR GRADING"], link: "#", thumbnail: "/카모플라쥬.png" },
    { titles: { KR: "숏폼드라마-계속 나를 망상해줘요", EN: "Short-form Drama: Keep Deluding Me", JP: "ショートフォームドラマ-私を妄想し続けて" }, roleKey: "role_color", cats: ["COLOR GRADING"], link: "#", thumbnail: "/망상1.png" },
    { titles: { KR: "숏폼드라마-이혼당한 공주님의 달콤한 재혼", EN: "Short-form Drama: Sweet Remarriage", JP: "ショートフォームドラマ-捨てられたお嬢様のスイートな彼" }, roleKey: "role_shooting_color", cats: ["SHOOTING", "COLOR GRADING"], link: "https://www.youtube.com/watch?v=UaGy-L3Ts6Q", thumbnail: "https://img.youtube.com/vi/UaGy-L3Ts6Q/maxresdefault.jpg" },
    { titles: { KR: "KBSN-리얼그린도시락패밀리", EN: "KBSN - Real Green Lunchbox Family", JP: "KBSN - リアルグリーンお弁当ファミリー" }, roleKey: "role_total_edit", cats: ["EDIT"], link: "#", thumbnail: "/도시락.png" },
    { titles: { KR: "TicToc-Irene 굿즈행사 스케치영상", EN: "TicToc-Irene Goods Event Sketch", JP: "TicToc-Irene グッズイベント スケッチ映像" }, roleKey: "role_production", cats: ["PRODUCTION"], link: "https://youtu.be/dYPIjBO7W6w", thumbnail: "/틱톡.jpg" },
    { titles: { KR: "[MV]The Bowls-Mr.Love", EN: "[MV]The Bowls-Mr.Love", JP: "[MV]The Bowls-Mr.Love" }, roleKey: "role_assistant_director", cats: ["PRODUCTION"], link: "https://www.youtube.com/watch?v=fCF-7ZW7KNQ", thumbnail: "https://img.youtube.com/vi/fCF-7ZW7KNQ/maxresdefault.jpg" },
    { titles: { KR: "[MV]MAX-Old Fashion (Feat. Young ill)", EN: "[MV]MAX-Old Fashion (Feat. Young ill)", JP: "[MV]MAX-Old Fashion (Feat. Young ill)" }, roleKey: "role_color", cats: ["COLOR GRADING"], link: "https://www.youtube.com/watch?v=kwIS8Q0MHyk", thumbnail: "https://img.youtube.com/vi/kwIS8Q0MHyk/maxresdefault.jpg" },
    { titles: { KR: "현대 엘리베이터-충주시", EN: "Hyundai Elevator - Chungju City", JP: "現代エレべーター-忠州市" }, roleKey: "role_shooting", cats: ["SHOOTING"], link: "https://www.youtube.com/watch?v=Yj7hYwzyKP8", thumbnail: "/충주맨.jpg" },
    { titles: { KR: "현대엘리베이터ㅣ충주 스마트캠퍼스 - 디지털 투어", EN: "Hyundai Elevator Chungju Smart Campus - Digital Tour", JP: "現代エレベーターㅣ忠州スマートキャンパス - デジタルツアー" }, roleKey: "role_shooting", cats: ["SHOOTING"], link: "https://www.youtube.com/watch?v=rbV8okPYLO4", thumbnail: "https://img.youtube.com/vi/rbV8okPYLO4/maxresdefault.jpg" },
    { titles: { KR: "삼겹살입니다만", EN: "It's Samgyeopsal", JP: "サムギョプサルですが" }, roleKey: "role_rough_cut", cats: ["EDIT"], link: "#", thumbnail: "/삼겹살.jpg" },
    { titles: { KR: "가디언엔젤스코리아 스케치영상", EN: "Guardian Angels Korea Sketch Video", JP: "ガーディアンエンジェルス・コリア スケッチ映像" }, roleKey: "role_production", cats: ["PRODUCTION"], link: "https://youtu.be/msDcJcXktjQ", thumbnail: "https://img.youtube.com/vi/msDcJcXktjQ/maxresdefault.jpg" },
    { titles: { KR: "킨더포레지니 영어유치원 홍보영상", EN: "Kinder Foret Genie English Kindergarten Promo", JP: "キンダーフォレジニ 英語幼稚園 広報映像" }, roleKey: "role_production", cats: ["PRODUCTION"], link: "https://youtu.be/jn_m8G7yQnA", thumbnail: "https://img.youtube.com/vi/jn_m8G7yQnA/maxresdefault.jpg" }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden text-center">
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6">
        <div className="text-xl font-bold tracking-tighter italic cursor-pointer" onClick={() => scrollToSection('#hero')}>SWINGBY</div>
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-4 text-[10px] tracking-widest font-bold bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
          {["KR", "JP", "EN"].map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`transition-colors ${lang === l ? "text-cyan-400" : "text-gray-400 hover:text-white"}`}>{l}</button>
          ))}
        </div>
        <div className="flex text-xs font-medium tracking-[0.2em] uppercase">
          <button onClick={() => scrollToSection('#contact')} className="hover:text-cyan-400 transition-colors drop-shadow-md">Contact Us</button>
        </div>
      </nav>

      <section id="hero" className="relative w-full overflow-hidden bg-black aspect-square">
        <div className="relative w-full h-full z-0" style={{ backgroundImage: "url('/hero-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }} />
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center px-4">
          <h1 className="text-[12vw] font-black leading-none uppercase tracking-tighter italic drop-shadow-[0_10px_30px_rgba(0,0,0,1)] text-white">Swingby</h1>
          <p className="mt-4 text-2xl font-extrabold tracking-[0.3em] uppercase drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] text-white">Production</p>
        </div>
      </section>

      <section id="expertise" className="expertise-section py-32 px-8 max-w-6xl mx-auto relative z-10 bg-black">
        <h2 className="text-4xl font-bold mb-20 border-b border-white/10 pb-4 uppercase tracking-widest italic text-white text-center">Our Spectrum</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 text-left">
          {["production", "creative", "shooting", "edit", "color", "dit"].map((key) => (
            <div key={key} className="animate-item">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400 italic tracking-wider uppercase border-l-2 border-cyan-400 pl-4">
                {key === 'production' ? 'Production' : key === 'creative' ? 'Creative' : key === 'shooting' ? 'Cinematography' : key === 'edit' ? 'Edit' : key === 'color' ? 'Color Grading' : 'D.I.T'}
              </h3>
              <p className="text-gray-200 leading-relaxed text-base font-normal">{t[lang][key]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="py-32 px-4 max-w-full mx-auto bg-black border-t border-white/5 text-center">
        <h2 className="text-4xl font-bold mb-12 uppercase tracking-widest italic text-white">Works</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-16 px-4">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} className={`text-xs tracking-[0.2em] uppercase transition-all ${filter === cat ? "text-cyan-400 border-b border-cyan-400" : "text-gray-400 hover:text-white"}`}>{cat}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left px-4">
          {portfolioData.filter(item => filter === "ALL" || item.cats.includes(filter)).map((item, idx) => (
            <div key={idx} onClick={() => item.link !== "#" && setSelectedVideo(item.link)} className="group cursor-pointer">
              <div className="relative w-full aspect-video mb-4 overflow-hidden border border-white/10 bg-zinc-950">
                <div className="absolute inset-0 bg-cover bg-center scale-110 blur-md opacity-30 transition-transform duration-500 group-hover:scale-125" style={{ backgroundImage: `url(${item.thumbnail})` }} />
                <div className="relative z-10 w-full h-full flex items-center justify-center p-1">
                  <img src={item.thumbnail} className="max-w-full max-h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]" alt={item.titles[lang]} />
                </div>
                {item.link !== "#" && <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10"><div className="w-12 h-12 border border-white/50 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm shadow-xl">▶</div></div>}
              </div>
              <h4 className="text-lg font-bold uppercase group-hover:text-cyan-400 transition-colors text-gray-100">{item.titles[lang]}</h4>
              <p className="text-[13px] text-[#94a3b8] uppercase tracking-[0.2em] mt-2 font-medium">{t[lang][item.roleKey]}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12">
          <button onClick={() => setSelectedVideo(null)} className="absolute top-8 right-8 text-3xl hover:text-cyan-400">✕</button>
          <div className="w-full max-w-6xl aspect-video bg-black shadow-2xl">
            <iframe src={`https://www.youtube.com/embed/${getYoutubeId(selectedVideo)}?autoplay=1`} className="w-full h-full" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      )}

      <section id="contact" className="py-32 px-8 bg-black border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 uppercase tracking-widest italic text-white">Contact Us</h2>
          <p className="text-cyan-400 mb-12 text-xl tracking-tighter font-semibold">{t[lang].contact_msg}</p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left" onSubmit={(e) => e.preventDefault()}>
            <div><label className="text-xs uppercase tracking-widest text-gray-300 mb-2 block">{t[lang].form_name}</label><input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-base text-white focus:border-cyan-500 outline-none transition-colors" /></div>
            <div><label className="text-xs uppercase tracking-widest text-gray-300 mb-2 block">{t[lang].form_phone}</label><input type="text" name="phone" required value={formData.phone} onChange={handleChange} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-base text-white focus:border-cyan-500 outline-none transition-colors" /></div>
            <div className="md:col-span-2"><label className="text-xs uppercase tracking-widest text-gray-300 mb-2 block">{t[lang].form_email}</label><input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-base text-white focus:border-cyan-500 outline-none transition-colors" /></div>
            <div className="md:col-span-2"><label className="text-xs uppercase tracking-widest text-gray-300 mb-2 block">{t[lang].form_msg}</label><textarea name="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-base text-white focus:border-cyan-500 outline-none transition-colors resize-none"></textarea></div>
            <div className="md:col-span-2 text-center mt-4"><button type="submit" className="px-12 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-cyan-500 hover:text-white transition-all">{t[lang].form_send}</button></div>
          </form>
        </div>
      </section>
      <div className="h-[20vh] bg-black" />
    </main>
  );
}