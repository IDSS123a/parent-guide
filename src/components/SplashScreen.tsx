/**
 * IDSS Parent Guide 2026/2027 — Animirani Splash Screen
 * Djevojčica (video s transparentnošću) je najviši sloj iznad cijele pozadine.
 * Pozadina: tamnoplava podloga -> plava kartica -> oker slovo O -> tekst -> logo.
 *
 * Potrebni fajlovi u public/ folderu:
 *   - girl-alpha.webm          (VP9 WebM video s alfa kanalom)
 *   - idss-logo-whiteout.png   (bijela verzija IDSS logotipa)
 */

import React, { useEffect, useRef } from 'react';

interface SplashScreenProps {
  onOpen: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onOpen }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    const btn = btnRef.current;
    if (!v || !btn) return;

    // Fallback: ako browser ne podržava VP9 alpha (stariji Safari), sakrij video
    const canVp9 = v.canPlayType('video/webm; codecs="vp9"');
    if (!canVp9) {
      v.style.display = 'none';
    }

    // Jaki puls dugmeta dok djevojčica pokazuje (~4s-8.2s ping-pong ciklusa od ~12.1s)
    const POINT_START = 4.0;
    const POINT_END = 8.2;
    const onTime = () => {
      const t = v.currentTime;
      if (t >= POINT_START && t <= POINT_END) {
        btn.classList.add('splash-attention');
      } else {
        btn.classList.remove('splash-attention');
      }
    };
    v.addEventListener('timeupdate', onTime);
    return () => v.removeEventListener('timeupdate', onTime);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] print:hidden splash-root">
      <style>{`
        .splash-root{
          --splash-navy:#072B61;
          --splash-blue:#035EA1;
          --splash-sky:#08ABE6;
          --splash-ochre:#FFCB29;
          background:var(--splash-navy);
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          overflow:auto;
          padding:24px 16px;
          font-family:'Segoe UI','Century Gothic',Arial,sans-serif;
        }
        .splash-card{
          background:var(--splash-sky);
          border-radius:16px;
          width:440px;
          max-width:94vw;
          padding:120px 40px 36px;
          position:relative;
          box-shadow:0 20px 60px rgba(0,0,0,0.35);
          overflow:hidden;
          opacity:0;
          transform:translateY(40px) scale(0.96);
          animation:splashCardIn 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s forwards;
        }
        @keyframes splashCardIn{to{opacity:1;transform:translateY(0) scale(1)}}
        .splash-stage{
          position:relative;
          width:330px;
          height:330px;
          margin:0 auto 6px;
        }
        .splash-circle{
          position:absolute;
          inset:0;
          border-radius:50%;
          background:var(--splash-ochre);
          opacity:0;
          transform:scale(0.2);
          animation:splashCirclePop 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.7s forwards;
        }
        @keyframes splashCirclePop{to{opacity:1;transform:scale(1)}}
        .splash-hole{
          position:absolute;
          left:50%;top:50%;
          width:48%;height:48%;
          transform:translate(-50%,-50%) scale(0);
          border-radius:50%;
          background:var(--splash-sky);
          animation:splashHolePop 0.6s cubic-bezier(0.34,1.56,0.64,1) 1.1s forwards;
        }
        @keyframes splashHolePop{to{transform:translate(-50%,-50%) scale(1)}}
        .splash-girl{
          position:absolute;
          left:50%;
          bottom:-20px;
          width:140%;
          transform:translateX(-50%);
          opacity:0;
          animation:splashGirlRise 1s cubic-bezier(0.22,1,0.36,1) 1.5s forwards;
          z-index:5;
        }
        @keyframes splashGirlRise{
          from{opacity:0;transform:translateX(-50%) translateY(80px) scale(0.9)}
          to{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}
        }
        .splash-girl video{
          display:block;
          width:100%;
          height:auto;
        }
        .splash-title{margin-top:24px;text-align:left}
        .splash-title span{display:block;line-height:1.18}
        .splash-t1,.splash-t2{
          font-size:40px;font-weight:700;color:var(--splash-blue);
          opacity:0;transform:translateY(18px);
        }
        .splash-t1{animation:splashFadeUp 0.7s ease-out 1.9s forwards}
        .splash-t2{animation:splashFadeUp 0.7s ease-out 2.1s forwards}
        .splash-t3{
          font-size:40px;font-weight:800;color:var(--splash-ochre);line-height:1.25;
          opacity:0;transform:translateY(18px);
          animation:splashFadeUp 0.7s ease-out 2.3s forwards;
        }
        @keyframes splashFadeUp{to{opacity:1;transform:translateY(0)}}
        .splash-logo{
          margin-top:42px;text-align:left;
          opacity:0;animation:splashFadeUp 0.7s ease-out 2.6s forwards;
        }
        .splash-logo img{height:52px;width:auto;display:block}
        .splash-btnwrap{
          margin-top:28px;
          opacity:0;transform:translateY(14px);
          animation:splashFadeUp 0.6s ease-out 3.0s forwards;
        }
        .splash-btn{
          background:var(--splash-ochre);
          color:var(--splash-blue);
          border:none;
          padding:16px 52px;
          border-radius:32px;
          font-size:18px;
          font-weight:700;
          font-family:inherit;
          letter-spacing:0.3px;
          cursor:pointer;
          position:relative;
          box-shadow:0 6px 20px rgba(0,0,0,0.30);
          transition:transform 0.25s ease, box-shadow 0.25s ease;
          animation:splashBtnIdle 2.6s ease-in-out 3.4s infinite;
        }
        @keyframes splashBtnIdle{
          0%,100%{transform:scale(1)}
          50%{transform:scale(1.025)}
        }
        .splash-btn:hover{
          transform:scale(1.08) !important;
          box-shadow:0 10px 32px rgba(255,203,41,0.55);
        }
        .splash-btn:active{transform:scale(0.97) !important}
        .splash-btn.splash-attention{
          animation:splashBtnAttention 1.1s ease-in-out infinite;
        }
        @keyframes splashBtnAttention{
          0%,100%{transform:scale(1.02);box-shadow:0 6px 20px rgba(0,0,0,0.30)}
          50%{transform:scale(1.12);box-shadow:0 0 0 8px rgba(255,203,41,0.45),0 12px 36px rgba(255,203,41,0.65)}
        }
        .splash-pulsering{
          position:absolute;
          inset:-3px;
          border-radius:36px;
          border:2px solid var(--splash-ochre);
          opacity:0;
          pointer-events:none;
        }
        .splash-btn.splash-attention .splash-pulsering{
          animation:splashRingOut 1.1s ease-out infinite;
        }
        @keyframes splashRingOut{
          0%{opacity:0.7;transform:scale(1.02)}
          60%{opacity:0;transform:scale(1.4)}
          100%{opacity:0;transform:scale(1.4)}
        }
        @media (max-width:480px){
          .splash-stage{width:255px;height:255px}
          .splash-girl{bottom:-15px}
          .splash-t1,.splash-t2,.splash-t3{font-size:31px}
          .splash-card{padding:96px 26px 28px}
        }
      `}</style>

      <div className="splash-card">
        <div className="splash-stage">
          <div className="splash-circle"></div>
          <div className="splash-hole"></div>
          <div className="splash-girl">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/girl-alpha.webm" type='video/webm; codecs="vp9"' />
            </video>
          </div>
        </div>

        <div className="splash-title">
          <span className="splash-t1">IDSS</span>
          <span className="splash-t2">Parent Guide</span>
          <span className="splash-t3">2026/2027</span>
        </div>

        <div className="splash-logo">
          <img src="/idss-logo-whiteout.png" alt="Internationale Deutsche Schule Sarajevo" />
        </div>
      </div>

      <div className="splash-btnwrap">
        <button ref={btnRef} className="splash-btn" onClick={onOpen}>
          Open Guide
          <span className="splash-pulsering"></span>
        </button>
      </div>
    </div>
  );
};
