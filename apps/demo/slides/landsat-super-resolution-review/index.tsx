import React from 'react';
import type { Page } from '@open-slide/core';
import coverHero from './assets/cover-hero.png';
import srConcept from './assets/sr-concept.png';

const slideStyle: React.CSSProperties = {
  width: '1920px',
  height: '1080px',
  fontFamily: '"Pretendard", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif',
  backgroundColor: '#f8f9fa',
  color: '#212529',
  overflow: 'hidden',
  position: 'relative',
  wordBreak: 'keep-all',
  overflowWrap: 'anywhere',
};

const Section = ({ title, children, style }: { title?: string; children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ padding: '80px 120px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', ...style }}>
    {title && (
      <h2 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '64px', borderBottom: '2px solid #dee2e6', paddingBottom: '24px', color: '#1a1d20' }}>
        {title}
      </h2>
    )}
    <div style={{ flex: 1, fontSize: '32px', lineHeight: 1.6, display: 'flex', flexDirection: 'column' }}>
      {children}
    </div>
  </div>
);

const Slide1: Page = () => (
  <div style={{ ...slideStyle, display: 'flex' }}>
    <div style={{ flex: 1, padding: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ fontSize: '24px', fontWeight: 600, color: '#495057', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '32px' }}>
        Research Review
      </div>
      <h1 style={{ fontSize: '80px', fontWeight: 800, lineHeight: 1.2, marginBottom: '48px', color: '#1a1d20' }}>
        Landsat 열적외선 영상<br />초해상화 기법 리뷰
      </h1>
      <p style={{ fontSize: '36px', color: '#495057', lineHeight: 1.5 }}>
        딥러닝 기반 위성영상 향상과<br />핵시설 모니터링 적용 방안
      </p>
    </div>
    <div style={{ flex: 1, backgroundImage: `url(${coverHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
  </div>
);

const Slide2: Page = () => (
  <div style={slideStyle}>
    <Section title="1. 연구 배경 및 동기 (Background & Motivation)">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '32px', color: '#0d6efd' }}>원격 모니터링의 한계</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '24px', position: 'relative', paddingLeft: '40px' }}>
              <span style={{ position: 'absolute', left: 0, color: '#0d6efd' }}>■</span>
              Landsat TIRS는 100m 해상도(30m 리샘플링)로, 핵시설의 냉각수 방출구(10~15m) 등 좁은 열 구조물을 식별하기 어려움
            </li>
            <li style={{ marginBottom: '24px', position: 'relative', paddingLeft: '40px' }}>
              <span style={{ position: 'absolute', left: 0, color: '#0d6efd' }}>■</span>
              혼합 픽셀(Mixed-pixel) 문제로 인해 열적 이상 징후가 과소평가됨
            </li>
          </ul>
        </div>
        <div style={{ backgroundColor: '#e9ecef', borderRadius: '16px', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '24px' }}>주요 분석 대상: 영변 핵시설</h3>
          <p style={{ marginBottom: '24px' }}>단열재 부착 등 위장 전술로 인해 고해상도 열적외선(TIR) 영상의 필요성 급증.</p>
          <p style={{ color: '#495057', fontSize: '28px', backgroundColor: '#f8f9fa', padding: '24px', borderRadius: '8px' }}>
            👉 기존 위성의 공간적 한계를 <strong>초해상화(Super-Resolution)</strong>로 극복하는 것이 본 연구의 주요 목표
          </p>
        </div>
      </div>
    </Section>
  </div>
);

const Slide3: Page = () => (
  <div style={slideStyle}>
    <Section title="2. 고해상도 TIR 센서와 HiVE 위성">
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
        <h3 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '48px', color: '#212529' }}>constellr HiVE Constellation</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '64px', fontWeight: 900, color: '#0d6efd', marginBottom: '24px' }}>30m</div>
            <div style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>네이티브 TIR 해상도</div>
            <div style={{ fontSize: '24px', color: '#6c757d' }}>상업용 위성 최초 달성</div>
          </div>
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '64px', fontWeight: 900, color: '#198754', marginBottom: '24px' }}>{'<'}2K</div>
            <div style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>절대 온도 정확도</div>
            <div style={{ fontSize: '24px', color: '#6c757d' }}>극저온 냉각 MCT 감지기 활용</div>
          </div>
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '64px', fontWeight: 900, color: '#6f42c1', marginBottom: '24px' }}>Sync</div>
            <div style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>궤도 동기화</div>
            <div style={{ fontSize: '24px', color: '#6c757d' }}>Landsat 8/9와 궤도 및 대역 겹침 (SR 훈련 기준 데이터로 최적)</div>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

const Slide4: Page = () => (
  <div style={slideStyle}>
    <Section title="3. 딥러닝 기반 초해상화(SR) 기법">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '40px', flex: 1 }}>
        <div style={{ backgroundColor: 'white', borderLeft: '8px solid #0d6efd', borderRadius: '8px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h4 style={{ fontSize: '32px', fontWeight: 700, color: '#0d6efd', marginBottom: '16px' }}>CNN & ResNet</h4>
          <p style={{ fontSize: '26px', color: '#495057' }}>SRCNN, EDSR 등. 모디스(MODIS)에서 랜드셋(Landsat) 해상도로의 스케일업에 성공적으로 적용됨.</p>
        </div>
        <div style={{ backgroundColor: 'white', borderLeft: '8px solid #198754', borderRadius: '8px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h4 style={{ fontSize: '32px', fontWeight: 700, color: '#198754', marginBottom: '16px' }}>GAN (Adversarial Nets)</h4>
          <p style={{ fontSize: '26px', color: '#495057' }}>ESRGAN 등. 지각적 품질(Perceptual Quality)은 우수하나, 정량적 방사 측정 일관성 훼손 위험 존재.</p>
        </div>
        <div style={{ backgroundColor: 'white', borderLeft: '8px solid #6f42c1', borderRadius: '8px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h4 style={{ fontSize: '32px', fontWeight: 700, color: '#6f42c1', marginBottom: '16px' }}>Vision Transformers</h4>
          <p style={{ fontSize: '26px', color: '#495057' }}>SwinIR, HAT. 장거리 의존성 모델링에 뛰어나 복잡한 열적 텍스처 복원에 큰 강점.</p>
        </div>
        <div style={{ backgroundColor: 'white', borderLeft: '8px solid #fd7e14', borderRadius: '8px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h4 style={{ fontSize: '32px', fontWeight: 700, color: '#fd7e14', marginBottom: '16px' }}>Diffusion Models</h4>
          <p style={{ fontSize: '26px', color: '#495057' }}>SR3, ResShift. 생성 결과의 불확실성 정량화가 가능하여, 정밀한 작전 상태 평가에 유리.</p>
        </div>
      </div>
    </Section>
  </div>
);

const Slide5: Page = () => (
  <div style={slideStyle}>
    <Section title="4. 학습 데이터 구축 전략">
      <div style={{ display: 'flex', gap: '80px', flex: 1 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '32px' }}>물리적 열화(Degradation) 시뮬레이션</h3>
          <p style={{ marginBottom: '40px', fontSize: '32px', color: '#495057', lineHeight: 1.5 }}>
            완벽하게 페어링된 HiVE와 Landsat 이미지를 구하기 어렵기 때문에, HiVE 원본에 Landsat 센서의 <strong>특성을 시뮬레이션</strong>하여 가상의 학습 쌍(LR-HR)을 생성합니다.
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '24px', backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <strong style={{ color: '#0d6efd', display: 'block', marginBottom: '8px' }}>PSF Convolution</strong>
              Landsat TIRS 렌즈의 공간 확산 특성(Blur) 적용
            </li>
            <li style={{ marginBottom: '24px', backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <strong style={{ color: '#0d6efd', display: 'block', marginBottom: '8px' }}>Noise Modeling</strong>
              QWIP 센서의 고유한 측정 노이즈(NEdT) 주입
            </li>
          </ul>
        </div>
        <div style={{ flex: 1, backgroundImage: `url(${srConcept})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '24px', boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }} />
      </div>
    </Section>
  </div>
);

const Slide6: Page = () => (
  <div style={slideStyle}>
    <Section title="5. 시공간 융합 (Spatio-Temporal Fusion)">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <h3 style={{ fontSize: '48px', fontWeight: 700, color: '#212529', marginBottom: '16px' }}>위성 센서의 근본적 한계 극복</h3>
        <p style={{ fontSize: '32px', color: '#6c757d', marginBottom: '64px' }}>
          공간 해상도(Landsat)와 시간 주기(MODIS)의 장점을 결합
        </p>
        <div style={{ display: 'flex', gap: '64px', width: '100%', maxWidth: '1400px' }}>
          <div style={{ flex: 1, backgroundColor: 'white', padding: '48px', borderRadius: '24px', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>📊</div>
            <h4 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '24px', color: '#0d6efd' }}>STARFM / ESTARFM</h4>
            <p style={{ fontSize: '28px', color: '#495057', lineHeight: 1.6 }}>
              스펙트럼 혼합 해제 이론 기반의 전통적 모델.<br/>
              이종 위성간 반사율을 비교하여 Landsat 픽셀을 일 단위로 예측합니다.
            </p>
          </div>
          <div style={{ flex: 1, backgroundColor: 'white', padding: '48px', borderRadius: '24px', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>🧠</div>
            <h4 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '24px', color: '#198754' }}>Deep Learning Fusion</h4>
            <p style={{ fontSize: '28px', color: '#495057', lineHeight: 1.6 }}>
              Attention 및 Diffusion 기반 접근 방식.<br/>
              장마철 등 구름 낀 날(All-Sky)의 데이터 공백을 효과적으로 메워 연속적 관측을 가능케 합니다.
            </p>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

const Slide7: Page = () => (
  <div style={slideStyle}>
    <Section title="6. 제안하는 연구 프레임워크 (5-Stage Pipeline)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', flex: 1, justifyContent: 'center' }}>
        {[
          { phase: '1. HiVE Data Acquisition', desc: '영변 대상 훈련 코퍼스 구축 및 Landsat TIRS의 PSF/노이즈 특성에 맞춘 하향 열화 모델 교정' },
          { phase: '2. Dataset Construction', desc: '물리적 모델을 적용한 가상의 LR-HR 쌍 생성 및 대기, 지형을 고려한 데이터 증강(Augmentation)' },
          { phase: '3. SR Model Development', desc: 'CNN, Transformer, Diffusion 아키텍처 비교 및 온도 충실도 규제를 포함한 하이브리드 손실 함수 훈련' },
          { phase: '4. Time Series Reconstruction', desc: '과거 Landsat 데이터 초해상화 적용 및 다중 센서 시공간 융합을 통해 매일의 LST 도출' },
          { phase: '5. Operational Status Estimation', desc: '초해상화된 데이터를 기반으로 원자로 가동 상태 및 열쇠 구조물의 열 이상 징후 정밀 추정' }
        ].map((item, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', backgroundColor: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
            <div style={{ width: '64px', height: '64px', backgroundColor: '#e9ecef', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: 800, color: '#495057', marginRight: '32px', flexShrink: 0 }}>
              {idx + 1}
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '12px', color: '#212529' }}>{item.phase}</div>
              <div style={{ fontSize: '28px', color: '#6c757d' }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  </div>
);

const Slide8: Page = () => (
  <div style={slideStyle}>
    <Section title="7. 결론 (Conclusion)">
      <div style={{ backgroundColor: '#1a1d20', color: 'white', borderRadius: '24px', padding: '80px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h3 style={{ fontSize: '56px', fontWeight: 700, marginBottom: '64px', color: '#f8f9fa' }}>열적외선(TIR) 초해상화의 미래</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '40px', fontSize: '36px', display: 'flex', alignItems: 'flex-start', lineHeight: 1.5 }}>
            <span style={{ color: '#0dcaf0', marginRight: '32px', fontSize: '40px' }}>✓</span>
            <div>
              <strong>모니터링 능력 극대화:</strong> 상업용 고해상도 열적외선 위성(HiVE 등)과 딥러닝 SR의 융합으로 폐쇄된 시설의 정밀 사찰이 가능해짐
            </div>
          </li>
          <li style={{ marginBottom: '40px', fontSize: '36px', display: 'flex', alignItems: 'flex-start', lineHeight: 1.5 }}>
            <span style={{ color: '#0dcaf0', marginRight: '32px', fontSize: '40px' }}>✓</span>
            <div>
              <strong>Radiometric 정확도 보장:</strong> 단순한 시각적 화질(Sharpness) 개선을 넘어, 온도 추정치의 절대적 신뢰성을 담보할 수 있는 평가 지표 정립이 필수
            </div>
          </li>
          <li style={{ fontSize: '36px', display: 'flex', alignItems: 'flex-start', lineHeight: 1.5 }}>
            <span style={{ color: '#0dcaf0', marginRight: '32px', fontSize: '40px' }}>✓</span>
            <div>
              <strong>확장성:</strong> 핵 군축 검증뿐만 아니라 글로벌 민간 원전 안전 모니터링 및 산업 환경 규제 등으로 적용 범위 대폭 확장 가능
            </div>
          </li>
        </ul>
      </div>
    </Section>
  </div>
);

export default [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];
