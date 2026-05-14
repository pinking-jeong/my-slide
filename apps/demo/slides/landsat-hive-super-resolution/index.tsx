import React from 'react';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import coverImg from './assets/cover.png';
import conclusionImg from './assets/conclusion.png';
import spectrumImg from './assets/spectrum.png';
import decorrelationImg from './assets/decorrelation.png';
import neuralNetImg from './assets/neural_network.png';
import videoSrImg from './assets/video_sr.png';
import diffractionImg from './assets/lens_diffraction.png';
import deskImg from './assets/research_desk.png';

export const design: DesignSystem = {
  palette: { bg: '#ffffff', text: '#111827', accent: '#2563eb' },
  fonts: {
    display: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
    body: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
  },
  typeScale: { hero: 80, body: 36 },
  radius: 12,
};

const muted = '#6b7280';
const faint = '#f3f4f6';

const slideStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  fontFamily: 'var(--osd-font-body)',
  backgroundColor: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  position: 'relative',
  overflow: 'hidden',
  wordBreak: 'keep-all',
  overflowWrap: 'anywhere',
  display: 'flex',
  flexDirection: 'column',
};

const PageNumber = ({ n, total }: { n: number; total: number }) => (
  <div style={{ position: 'absolute', bottom: 64, right: 120, fontSize: 24, color: muted, fontWeight: 500, letterSpacing: '0.1em' }}>
    {String(n).padStart(2, '0')} / {String(total).padStart(2, '0')}
  </div>
);

const Section = ({ title, children, style }: { title?: string; children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ padding: '100px 120px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', ...style }}>
    {title && (
      <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 64, fontWeight: 800, marginBottom: 56, borderBottom: `2px solid ${faint}`, paddingBottom: 24, color: 'var(--osd-text)' }}>
        {title}
      </h2>
    )}
    <div style={{ flex: 1, fontSize: 'var(--osd-size-body)', lineHeight: 1.6, display: 'flex', flexDirection: 'column' }}>
      {children}
    </div>
  </div>
);

const Cover: Page = () => (
  <div style={{ ...slideStyle, flexDirection: 'row' }}>
    <div style={{ flex: 1, padding: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ fontSize: 28, fontWeight: 600, color: 'var(--osd-accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 40 }}>
        Research Review
      </div>
      <h1 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 'var(--osd-size-hero)', fontWeight: 800, lineHeight: 1.2, marginBottom: 48, color: 'var(--osd-text)' }}>
        Landsat 열적외 초해상화 기법의<br />SatVu HiVE 적용 가능성 검토
      </h1>
      <p style={{ fontSize: 40, color: muted, lineHeight: 1.6 }}>
        파장대, 관측 모드 차이를 넘어선<br />Video Super-Resolution의 학술적 타당성
      </p>
    </div>
    <div style={{ width: '800px', backgroundImage: `url(${coverImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
  </div>
);

const Slide2: Page = () => (
  <div style={slideStyle}>
    <Section title="핵심 결론: 직접 이식 불가, 재설계 필요">
      <div style={{ display: 'flex', gap: 64, flex: 1 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: 40, fontWeight: 700, color: 'var(--osd-accent)', marginBottom: 32 }}>
            개념적으로는 적용 가능하나,<br />모델 아키텍처의 단순 이식은 어렵습니다.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--osd-text)' }}>
            <li style={{ marginBottom: 24, display: 'flex' }}>
              <span style={{ color: 'var(--osd-accent)', marginRight: 24 }}>■</span>
              Landsat 8/9용으로 학습된 모델 가중치는 도메인 차이로 인해 직접 사용 불가
            </li>
            <li style={{ marginBottom: 24, display: 'flex' }}>
              <span style={{ color: 'var(--osd-accent)', marginRight: 24 }}>■</span>
              물리적(파장대) 차이 및 관측 모드(정지 vs 비디오)의 근본적 차이 존재
            </li>
            <li style={{ display: 'flex' }}>
              <span style={{ color: 'var(--osd-accent)', marginRight: 24 }}>■</span>
              단일 이미지 기반에서 비디오 기반 다중 프레임 SR 기법으로의 전환이 필수적
            </li>
          </ul>
        </div>
        <div style={{ flex: 1, borderRadius: 'var(--osd-radius)', overflow: 'hidden', backgroundImage: `url(${conclusionImg})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 24px 48px rgba(0,0,0,0.1)' }} />
      </div>
    </Section>
    <PageNumber n={2} total={8} />
  </div>
);

const Slide3: Page = () => (
  <div style={slideStyle}>
    <Section title="1. 물리적 도메인 차이 — 가장 근본적인 제약">
      <div style={{ display: 'flex', gap: 64, flex: 1 }}>
        <div style={{ flex: 1.2 }}>
          <div style={{ background: faint, borderRadius: 'var(--osd-radius)', padding: 40, marginBottom: 40 }}>
            <h3 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>Landsat 8/9 TIRS (LWIR)</h3>
            <p style={{ fontSize: 28, color: muted, marginBottom: 16 }}>파장대: 10.6 – 12.5 μm</p>
            <p style={{ fontSize: 28, color: muted, marginBottom: 16 }}>원해상도: 100m (30m 리샘플)</p>
            <p style={{ fontSize: 28, color: muted }}>특징: 환경 온도에 민감, 푸시브룸 정지 관측</p>
          </div>
          <div style={{ background: 'rgba(37, 99, 235, 0.05)', border: '2px solid var(--osd-accent)', borderRadius: 'var(--osd-radius)', padding: 40 }}>
            <h3 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, color: 'var(--osd-accent)' }}>SatVu HiVE (MWIR)</h3>
            <p style={{ fontSize: 28, color: muted, marginBottom: 16 }}>파장대: 3.5 – 5 μm 추정</p>
            <p style={{ fontSize: 28, color: muted, marginBottom: 16 }}>원해상도: ~3.5m</p>
            <p style={{ fontSize: 28, color: muted }}>특징: 고온 타겟 민감, 비디오 동영상 관측 (수초~분)</p>
          </div>
        </div>
        <div style={{ flex: 1, borderRadius: 'var(--osd-radius)', overflow: 'hidden', backgroundImage: `url(${spectrumImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>
    </Section>
    <PageNumber n={3} total={8} />
  </div>
);

const Slide4: Page = () => (
  <div style={slideStyle}>
    <Section title="2. 적용 가능한 기법 분류 (a) 직접 이식 곤란">
      <div style={{ display: 'flex', gap: 64, flex: 1 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ marginBottom: 64 }}>
            <h3 style={{ fontSize: 40, fontWeight: 700, marginBottom: 24 }}>Pan-sharpening 계열</h3>
            <p style={{ fontSize: 32, color: muted, lineHeight: 1.6 }}>
              가시광선(VNIR)과 열적외선(TIR)의 상관관계를 가정하지만, HiVE는 가시광 밴드가 제한적입니다. 3.5m 고해상도에서는 도시 구조물의 <strong>열-광학 비상관(Thermal-Optical Decorrelation)</strong> 문제가 더욱 심화됩니다.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 40, fontWeight: 700, marginBottom: 24 }}>Reference-based SR</h3>
            <p style={{ fontSize: 32, color: muted, lineHeight: 1.6 }}>
              Sentinel-2와 같은 고해상도 다중분광 참조 영상을 사용하는 기법들입니다. 하지만 참조 영상의 해상도(10m)가 HiVE(~3.5m)보다 낮아 Reference로서 기능하지 못합니다.
            </p>
          </div>
        </div>
        <div style={{ flex: 1, borderRadius: 'var(--osd-radius)', overflow: 'hidden', backgroundImage: `url(${decorrelationImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>
    </Section>
    <PageNumber n={4} total={8} />
  </div>
);

const Slide5: Page = () => (
  <div style={slideStyle}>
    <Section title="2. 적용 가능한 기법 분류 (b) 재설계 시 유망">
      <div style={{ display: 'flex', gap: 64, flex: 1 }}>
        <div style={{ flex: 1, borderRadius: 'var(--osd-radius)', overflow: 'hidden', backgroundImage: `url(${neuralNetImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: 40, fontWeight: 700, marginBottom: 32, color: 'var(--osd-text)' }}>단일 영상 딥러닝 SR</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 24, fontSize: 32, color: muted, lineHeight: 1.6, display: 'flex' }}>
              <span style={{ color: 'var(--osd-accent)', marginRight: 24 }}>✓</span>
              SRCNN, EDSR, SwinIR, Diffusion 기반 네트워크
            </li>
            <li style={{ marginBottom: 24, fontSize: 32, color: muted, lineHeight: 1.6, display: 'flex' }}>
              <span style={{ color: 'var(--osd-accent)', marginRight: 24 }}>✓</span>
              네트워크 아키텍처 자체는 그대로 사용 가능
            </li>
            <li style={{ marginBottom: 48, fontSize: 32, color: muted, lineHeight: 1.6, display: 'flex' }}>
              <span style={{ color: 'var(--osd-accent)', marginRight: 24 }}>✓</span>
              MWIR 페어(Pair) 학습 데이터를 완전히 새로 구축해야 함
            </li>
          </ul>
          <h3 style={{ fontSize: 40, fontWeight: 700, marginBottom: 32, color: 'var(--osd-text)' }}>Multi-temporal SR</h3>
          <p style={{ fontSize: 32, color: muted, lineHeight: 1.6 }}>
            HiVE의 강점인 짧은 재방문 주기와 연속성을 활용하여 시간축을 결합한 다중 시기 초해상화 기법을 적용할 수 있습니다.
          </p>
        </div>
      </div>
    </Section>
    <PageNumber n={5} total={8} />
  </div>
);

const Slide6: Page = () => (
  <div style={slideStyle}>
    <Section title="2. 기법 분류 (c) HiVE 고유 강점 — VSR">
      <div style={{ display: 'flex', gap: 64, flex: 1 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: 48, fontWeight: 800, color: 'var(--osd-accent)', marginBottom: 32 }}>
            Video Super-Resolution (VSR)
          </h3>
          <p style={{ fontSize: 36, color: 'var(--osd-text)', lineHeight: 1.6, marginBottom: 40 }}>
            학술적으로 가장 매력적이고 자연스럽게 부합하는 접근 방식입니다.
          </p>
          <div style={{ background: faint, padding: 40, borderRadius: 'var(--osd-radius)' }}>
            <p style={{ fontSize: 32, color: muted, lineHeight: 1.6, marginBottom: 24 }}>
              HiVE는 동일 지점을 수십~수백 프레임 연속 관측합니다. 서브픽셀 시프트(Sub-pixel Shift)를 활용한 다중 프레임 정통 SR 이론과 최신 VSR(BasicVSR++ 등) 모델 적용이 가능합니다.
            </p>
            <p style={{ fontSize: 32, fontWeight: 700, color: 'var(--osd-text)' }}>
              이전 Landsat에서는 불가능했던 혁신적인 접근법입니다.
            </p>
          </div>
        </div>
        <div style={{ flex: 1, borderRadius: 'var(--osd-radius)', overflow: 'hidden', backgroundImage: `url(${videoSrImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>
    </Section>
    <PageNumber n={6} total={8} />
  </div>
);

const Slide7: Page = () => (
  <div style={slideStyle}>
    <Section title="3. 본질적 한계 (Fundamental Limitations)">
      <div style={{ display: 'flex', gap: 64, flex: 1 }}>
        <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ marginBottom: 48 }}>
            <h3 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16 }}>1. 회절 한계 (Diffraction Limit)</h3>
            <p style={{ fontSize: 32, color: muted, lineHeight: 1.5 }}>
              MWIR 파장(약 4μm) 특성상 1m 이하 SR은 우주 광학계의 물리적 정보 천장에 근접합니다. SR은 실제 정보가 아닌 '학습된 사전에 부합하는 그럴듯한 추정'을 만듭니다.
            </p>
          </div>
          <div style={{ marginBottom: 48 }}>
            <h3 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16 }}>2. 검증 데이터(GT)의 부재</h3>
            <p style={{ fontSize: 32, color: muted, lineHeight: 1.5 }}>
              HiVE보다 높은 해상도의 신뢰성 있는 공개 열영상 GT가 없습니다. 합성 데이터나 항공 캠페인에 의존해야 하므로 정량 지표(PSNR/SSIM)의 학술적 신뢰도가 약화됩니다.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16 }}>3. 방사 정확도 (Radiometric Accuracy) 보존</h3>
            <p style={{ fontSize: 32, color: muted, lineHeight: 1.5 }}>
              시각화가 아닌 <strong>LST 산출</strong>이 목적일 경우, SR 과정이 화소별 복사휘도를 왜곡시켜 에너지 플럭스나 열섬 분석에 편향을 일으킬 위험이 있습니다.
            </p>
          </div>
        </div>
        <div style={{ flex: 1, borderRadius: 'var(--osd-radius)', overflow: 'hidden', backgroundImage: `url(${diffractionImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>
    </Section>
    <PageNumber n={7} total={8} />
  </div>
);

const Slide8: Page = () => (
  <div style={slideStyle}>
    <Section title="4. 학술적 기여 가능성 및 프레이밍">
      <div style={{ display: 'flex', gap: 64, flex: 1 }}>
        <div style={{ flex: 1, borderRadius: 'var(--osd-radius)', overflow: 'hidden', backgroundImage: `url(${deskImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: 40, fontWeight: 700, marginBottom: 40, color: 'var(--osd-accent)' }}>새로운 논문 주제로서의 가치 확보</h3>
          <div style={{ background: faint, padding: 48, borderRadius: 'var(--osd-radius)', marginBottom: 32 }}>
            <h4 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>"MWIR satellite video super-resolution"</h4>
            <p style={{ fontSize: 28, color: muted, lineHeight: 1.6 }}>
              Landsat SR 문헌과 직접 경쟁하지 않고 비디오 열적외선의 새로운 sub-field를 개척하는 방향으로 차별화해야 합니다.
            </p>
          </div>
          <div style={{ background: faint, padding: 48, borderRadius: 'var(--osd-radius)', marginBottom: 32 }}>
            <h4 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>물리 제약 손실 (Physics-informed loss)</h4>
            <p style={{ fontSize: 28, color: muted, lineHeight: 1.6 }}>
              단순 이미지 품질을 넘어 Stefan-Boltzmann 법칙이나 대기 투과율 보존을 신경망의 손실 함수(Loss)에 결합하는 혁신이 요구됩니다.
            </p>
          </div>
          <div style={{ background: faint, padding: 48, borderRadius: 'var(--osd-radius)' }}>
            <h4 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>새로운 평가 프로토콜 제안</h4>
            <p style={{ fontSize: 28, color: muted, lineHeight: 1.6 }}>
              방사 측정의 정확도와 공간 해상도의 Trade-off를 정량화하는 고유의 평가 체계를 수립할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </Section>
    <PageNumber n={8} total={8} />
  </div>
);

export const meta: SlideMeta = { title: 'Landsat 열적외 초해상화 기법의 HiVE 적용 가능성 검토' };
export default [Cover, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8] satisfies Page[];
