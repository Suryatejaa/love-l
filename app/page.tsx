'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const sectionsRef = useRef<HTMLElement[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  const handleYesClick = () => {
    setShowModal(true);
    setTimeout(() => {
      const message = "Yayy, We are together now!";
      const whatsappUrl = `https://wa.me/916301561744?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setShowModal(false);
    }, 2500);
  };

  const handleNoHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    setNoButtonPos({ x: randomX, y: randomY });
  };

  const handleNoTouch = (e: React.TouchEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    setNoButtonPos({ x: randomX, y: randomY });
  };

  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Parallax effect for floating hearts
    let lastScrollY = 0;
    const handleScroll = () => {
      lastScrollY = window.scrollY;
      document.querySelectorAll('.love-float').forEach((heart, index) => {
        const speed = 0.3 + index * 0.1;
        (heart as HTMLElement).style.transform = `translateY(${lastScrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="relative bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-gray-100 overflow-x-hidden" style={{ filter: showModal ? 'blur(8px)' : 'blur(0px)', transition: 'filter 300ms ease-in-out', pointerEvents: showModal ? 'none' : 'auto' }}>
        {/* Floating hearts background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="love-float fixed left-[10%] text-2xl opacity-10">❤️</div>
          <div className="love-float fixed left-[30%] text-2xl opacity-10">🤍</div>
          <div className="love-float fixed left-[55%] text-2xl opacity-10">💕</div>
          <div className="love-float fixed left-[75%] text-2xl opacity-10">💞</div>
        </div>

        {/* INTRO */}
        <section
          ref={(el) => {
            if (el) sectionsRef.current[0] = el;
          }}
          className="min-h-screen flex items-center justify-center px-2 sm:px-6 py-12 sm:py-20"
          style={{ opacity: 0, transform: 'translateY(48px)', transition: 'all 1000ms cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        >
          <div className="max-w-2xl text-center">
            <h3 className="text-4xl sm:text-6xl font-medium tracking-tight text-rose-300 mb-8 sm:mb-12 leading-none" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Hey Honey…
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-light tracking-wide mb-6 sm:mb-8 leading-relaxed text-slate-200" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Ee page open chesinappudu,
              <br />
              konchem slow ga scroll cheyyagalava?
            </p>
            <p className="text-base sm:text-lg md:text-xl font-light tracking-wide leading-relaxed text-slate-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Idhi answers kosam kaadu.
              <br />
              Just oka feeling kosam.
            </p>
          </div>
        </section>

        <div className="flex justify-center py-8 text-3xl opacity-60">✨💖✨</div>

        {/* FEBRUARY 7 DAYS */}
        <section
          ref={(el) => {
            if (el) sectionsRef.current[1] = el;
          }}
          className="min-h-screen flex items-center justify-center px-2 sm:px-6 py-12 sm:py-20"
          style={{ opacity: 0, transform: 'translateY(48px)', transition: 'all 1000ms cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        >
          <div className="max-w-2xl w-full">
            <p className="text-lg sm:text-2xl md:text-3xl font-light mb-10 sm:mb-16 leading-relaxed tracking-wide text-slate-100" style={{ fontFamily: "'Poppins', sans-serif" }}>
              February lo 7 days untayi…
              <br />
              and ee 7 days lo, 7 silent surprises nee kosam.
            </p>

            <div className="space-y-5 sm:space-y-8">
              {[
                { icon: '🌹', title: 'Rose Day', text: 'Rose ivvadam kaadu… nee value ni daily respect cheyyadam.' },
                { icon: '💍', title: 'Propose Day', text: 'Loud proposal kaadu… oka simple truth — I choose you.' },
                { icon: '🍫', title: 'Chocolate Day', text: 'Sweet moments ante chocolates kaadu… nee presence.' },
                { icon: '🧸', title: 'Teddy Day', text: 'World heavy anipinchinappudu, nee comfort ayyi undali ani korukuntunna.' },
                { icon: '🤝', title: 'Promise Day', text: 'Perfect promises kaadu… honest effort.' },
                { icon: '🤗', title: 'Hug Day', text: 'Konni rojulu words avasaram ledu… just closeness chalu.' },
                { icon: '😘', title: 'Kiss Day', text: 'Moment gurinchi kaadu… feeling gurinchi.' },
              ].map((day, index) => (
                <div
                  key={index}
                  className="pl-4 sm:pl-6 border-l border-rose-400 border-opacity-30"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-rose-300 text-base sm:text-xl font-medium block mb-2 sm:mb-3 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {day.icon} {day.title}
                  </span>
                  <p className="text-slate-300 font-light leading-relaxed text-sm sm:text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>{day.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="flex justify-center py-8 text-3xl opacity-60">🫶🌙🫶</div>

        {/* STORY */}
        <section
          ref={(el) => {
            if (el) sectionsRef.current[2] = el;
          }}
          className="min-h-screen flex items-center justify-center px-2 sm:px-6 py-12 sm:py-20"
          style={{ opacity: 0, transform: 'translateY(48px)', transition: 'all 1000ms cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        >
          <div className="max-w-2xl w-full">
            <div className="text-xl sm:text-3xl md:text-4xl font-medium text-rose-300 mb-8 sm:mb-12 tracking-wide leading-snug" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Eppudu first time nuvvu important aipoyav ani realise ayyano telusa?
            </div>

            <p className="mb-6 sm:mb-8 text-sm sm:text-lg md:text-xl font-light leading-relaxed text-slate-200 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Exact moment gurthu ledu.
              <br />
              Kaani aa day nundi, nee peru naa mind lo
              <br />
              konchem slow ga echo avvadam start ayyindi.
            </p>

            <br></br>
            <p className="mb-12 sm:mb-16 text-sm sm:text-lg md:text-xl font-light leading-relaxed text-slate-300 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Life lo chinna pauses vachinappudu kuda,
              <br />
              naa thoughts automatic ga nee side vellayi.
            </p>
<br></br>
            <div className="text-xl sm:text-3xl md:text-4xl font-medium text-rose-300 mb-8 sm:mb-12 tracking-wide leading-snug" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Enduku nuvvu different ga anipinchav?
            </div>

            <p className="mb-6 sm:mb-8 text-sm sm:text-lg md:text-xl font-light leading-relaxed text-slate-200 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Big reasons emi levu.
              <br />
              Nee simplicity. Nee calm way of talking.
            </p>

            <br></br>
            <p className="mb-12 sm:mb-16 text-sm sm:text-lg md:text-xl font-light leading-relaxed text-slate-300 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Honey, nuvvu chaos lo kuda
              <br />
              oka peaceful feeling laaga untav.
            </p>
<br></br>
            <div className="text-xl sm:text-3xl md:text-4xl font-medium text-rose-300 mb-8 sm:mb-12 tracking-wide leading-snug" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Konni sarlu silence chala bhayam ga anipistundi
            </div>

            <p className="mb-6 sm:mb-8 text-sm sm:text-lg md:text-xl font-light leading-relaxed text-slate-200 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Distance undachu. Replies late avvachu.
              <br />
              Kaani aa silence lo kuda, naa heart ni choose chesedi nuvve.
            </p>
            <br></br>

            <p className="text-sm sm:text-lg md:text-xl font-light leading-relaxed italic text-slate-300 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
              "No drama. No chaos. Just my heart quietly choosing you."
            </p>
          </div>
        </section>

        <div className="flex justify-center py-8 text-3xl opacity-60">💞✨💞</div>

        {/* ENDING */}
        <section
          ref={(el) => {
            if (el) sectionsRef.current[3] = el;
          }}
          className="min-h-screen flex items-center justify-center px-2 sm:px-6 py-12 sm:py-20"
          style={{ opacity: 0, transform: 'translateY(48px)', transition: 'all 1000ms cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        >
          <div className="max-w-2xl text-center w-full">
            <div className="text-xl sm:text-3xl md:text-4xl font-medium text-rose-300 mb-8 sm:mb-12 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Ikkada varaku chadivav ante…?
            </div>

            <p className="text-lg sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-8 text-slate-100 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>Thank you, Honey.</p>
            <p className="text-base sm:text-xl md:text-2xl font-light mb-6 sm:mb-8 text-slate-200 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>Idhi confession kaadu. Idhi pressure kaadu.</p>
            <p className="text-base sm:text-xl md:text-2xl font-light mb-12 sm:mb-16 text-slate-300 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>Just oka silent truth… nee kosam.</p>

            <p className="text-base sm:text-xl md:text-2xl font-light mb-12 sm:mb-16 text-slate-200 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>— Always, nee gurinchi alochisthu ❤️</p>

            <p className="text-sm sm:text-lg md:text-xl font-light leading-relaxed text-slate-300 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Naa heart lo unna space…
              <br />
              adi ippudu nee peru tho fill ayyindi.
            </p>
          </div>
        </section>

        <div className="flex justify-center py-8 text-3xl opacity-60">💍💖💍</div>

        {/* VALENTINE'S DAY */}
        <section
          ref={(el) => {
            if (el) sectionsRef.current[4] = el;
          }}
          className="min-h-screen flex items-center justify-center px-2 sm:px-6 py-12 sm:py-20"
          style={{ opacity: 0, transform: 'translateY(48px)', transition: 'all 1000ms cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        >
          <div className="max-w-2xl text-center w-full">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-medium text-rose-300 mb-8 sm:mb-16 tracking-tight leading-none" style={{ fontFamily: "'Poppins', sans-serif" }}>
              ❤️ February 14
            </h2>
            <p className="text-lg sm:text-2xl font-light mb-6 sm:mb-12 text-slate-200 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>Valentine's Day</p>

            <p className="text-base sm:text-xl md:text-2xl font-light mb-6 sm:mb-12 text-slate-300 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>Ee roju kosam big surprises kaadu.</p>
            <p className="text-base sm:text-xl md:text-2xl font-light mb-8 sm:mb-16 text-slate-300 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>Just oka simple question matrame…</p>

            <p className="text-lg sm:text-2xl md:text-3xl font-medium text-rose-300 mb-8 sm:mb-16 tracking-wide leading-snug" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Nuvvu, naa life lo oka constant laaga undadaaniki ready aa?
            </p>

            <p className="text-sm sm:text-lg md:text-xl font-light leading-relaxed mb-8 text-slate-200 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Nenu slow love ni nammutanu.
              <br />
              Respect tho start ayye relationship ni nammutanu.
            </p>

            <p className="text-sm sm:text-lg md:text-xl font-light leading-relaxed text-slate-300 tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Nee answer edaina sare,
              <br />
              I'll respect it.
              <br />
              <br />
            </p>

            <div className="flex gap-6 sm:gap-8 justify-center mt-12 flex-wrap">
              <button
                onClick={handleYesClick}
                className="px-20 sm:px-28 py-6 sm:py-8 bg-rose-400 hover:bg-rose-500 text-white font-semibold rounded-lg transition-all duration-300 text-base sm:text-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                YES 💕
              </button>
              <button
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoTouch}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
                  transition: 'transform 0.3s ease-out',
                }}
                className="px-20 sm:px-28 py-6 sm:py-8 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg text-base sm:text-lg cursor-pointer"
              >
                NO
              </button>
            </div>
          </div>
        </section>

        <style jsx>{`
        @keyframes float {
          0% {
            bottom: -10%;
            transform: translateX(0) rotateZ(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.08;
          }
          90% {
            opacity: 0.08;
          }
          100% {
            bottom: 110%;
            transform: translateX(60px) rotateZ(360deg);
            opacity: 0;
          }
        }

        .love-float:nth-child(1) {
          animation: float 28s linear infinite;
        }
        .love-float:nth-child(2) {
          animation: float 32s linear infinite;
          animation-delay: 5s;
        }
        .love-float:nth-child(3) {
          animation: float 26s linear infinite;
          animation-delay: 10s;
        }
        .love-float:nth-child(4) {
          animation: float 34s linear infinite;
          animation-delay: 15s;
        }
      `}</style>
      </div>

      {/* Modal - Outside main div to avoid blur */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8">
          <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg p-12 sm:p-20 text-center max-w-md mx-auto border border-rose-400/30">
            <h2 className="text-4xl sm:text-5xl font-bold text-rose-300 mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Yayy! 🎉
            </h2>
            <p className="text-lg sm:text-2xl text-slate-200 mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
              We are together now! 💕
            </p>
            <div className="text-2xl">💕✨💍</div>
          </div>
        </div>
      )}
    </>
  );
}
