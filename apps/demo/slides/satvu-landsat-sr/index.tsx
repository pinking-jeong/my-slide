import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#f7f5f0', text: '#1a1814', accent: '#6d4cff' },
  fonts: {
    display: '"Times New Roman", "Georgia", serif',
    body: '-apple-system, BlinkMacSystemFont, "Pretendard", "Noto Sans KR", system-ui, sans-serif',
  },
  typeScale: { hero: 110, body: 28 },
  radius: 16,
};

/* ─────────────── Tokens & primitives ─────────────── */

const palette = {
  bg: '#f7f5f0',
  surface: '#ffffff',
  text: '#1a1814',
  muted: '#6b6660',
  faint: '#a8a29a',
  line: '#e4e0d8',
  accent: '#6d4cff',
  warm: '#c2410c',
};

const fill = {
  width: '100%',
  height: '100%',
  fontFamily: 'var(--osd-font-body)',
  color: 'var(--osd-text)',
  background: 'var(--osd-bg)',
  position: 'relative',
  overflow: 'hidden',
  wordBreak: 'keep-all',
  overflowWrap: 'anywhere',
} as const;

const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

const keyframes = `
@keyframes lFadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes lFade {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes lLineGrow {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
.l-fadeup { animation: lFadeUp 1000ms ${ease} both; }
.l-fade   { animation: lFade 1200ms ${ease} both; }
.l-line   { animation: lLineGrow 900ms ${ease} both; transform-origin: left center; }
`;

const Style = () => <style>{keyframes}</style>;

const PAD_X = 140;
const PAD_Y = 110;
const TOTAL = 20;

const Eyebrow = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <div
    className="l-fadeup"
    style={{
      animationDelay: `${delay}ms`,
      fontFamily: 'var(--osd-font-body)',
      fontSize: 22,
      fontWeight: 500,
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: 'var(--osd-accent)',
    }}
  >
    {children}
  </div>
);

const PageNumber = ({ n }: { n: number }) => (
  <div
    style={{
      position: 'absolute',
      left: PAD_X,
      bottom: 60,
      fontFamily: 'var(--osd-font-body)',
      fontSize: 18,
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: palette.faint,
    }}
  >
    RESEARCH BRIEF · {String(n).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
  </div>
);

const SectionTitle = ({
  children,
  size = 84,
  delay = 180,
  margin = '32px 0 16px',
  maxWidth,
}: {
  children: React.ReactNode;
  size?: number;
  delay?: number;
  margin?: string;
  maxWidth?: number;
}) => (
  <h2
    className="l-fadeup"
    style={{
      animationDelay: `${delay}ms`,
      fontFamily: 'var(--osd-font-display)',
      fontSize: size,
      fontWeight: 400,
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      margin,
      maxWidth,
      color: 'var(--osd-text)',
    }}
  >
    {children}
  </h2>
);

const BodyText = ({
  children,
  delay = 320,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <p
    className="l-fadeup"
    style={{
      animationDelay: `${delay}ms`,
      fontSize: 34,
      lineHeight: 1.6,
      color: palette.muted,
      fontWeight: 300,
      margin: '0 0 50px',
      maxWidth: 1400,
    }}
  >
    {children}
  </p>
);

const FullImage = ({ src, delay = 600 }: { src: string; delay?: number }) => (
  <div
    className="l-fadeup"
    style={{
      animationDelay: `${delay}ms`,
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: palette.surface,
      border: `1px solid ${palette.line}`,
      borderRadius: 16,
      overflow: 'hidden',
      padding: 40,
    }}
  >
    <img src={src} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Infographic" />
  </div>
);

import landsatVsSatvu from './assets/landsat_vs_satvu.png';
import mwirVsLwir from './assets/mwir_vs_lwir.png';
import degPipeline from './assets/degradation_pipeline.png';
import guidedArch from './assets/guided_swinir_arch.png';

/* ─────────────── Pages ─────────────── */

const P01_Cover: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>Technical Report · 2026</Eyebrow>
    <SectionTitle size={110} margin="40px 0 0" maxWidth={1600}>
      SatVu 고해상도 영상을 활용한<br />
      <em style={{ color: 'var(--osd-accent)', fontStyle: 'italic' }}>Landsat 8/9 초해상화</em> 파이프라인
    </SectionTitle>
    <div className="l-line" style={{ height: 1, width: 520, background: 'var(--osd-text)', margin: '64px 0 32px' }} />
    <BodyText delay={1100}>
      100m 해상도의 열역학적 한계를 돌파하기 위한 물리 기반 초해상화 전략.<br />
      도메인 갭, 열관성, 어텐션 메커니즘, 그리고 에너지 보존 법칙을 중심으로.
    </BodyText>
    <PageNumber n={1} />
  </div>
);

const P02_BigIdea: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>The Big Idea</Eyebrow>
    <SectionTitle size={90} margin="40px 0 60px" maxWidth={1600}>
      물리법칙을 모사한 열화 모델과<br />
      <em style={{ color: 'var(--osd-accent)' }}>다중 모달리티 기반 초해상화</em>
    </SectionTitle>
    <BodyText delay={600}>
      Landsat 8/9의 근본적인 100m 공간 한계를, 세계 최고 수준인 SatVu의 3.5m 해상도를 활용해 국지적 수준으로 복원합니다. 이는 단순한 이미지 확장이 아닌, 열역학 기반의 정밀한 모델링을 요구합니다.
    </BodyText>
    <PageNumber n={2} />
  </div>
);

const P03_Background1: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>Background 01</Eyebrow>
    <SectionTitle>폭발하는 고해상도 열 지도 수요</SectionTitle>
    <BodyText>
      기후 변화 감시, 도시 열섬(Urban Heat Island) 완화 전략 수립, 그리고 정밀 농업의 관개 관리를 위해서는 지표면 온도(LST)를 더욱 정밀하게 측정해야 합니다.
    </BodyText>
    <div className="l-fade" style={{ background: palette.surface, padding: 60, borderRadius: 16, border: `1px solid ${palette.line}`, flex: 1, animationDelay: '600ms' }}>
      <p style={{ fontSize: 40, fontStyle: 'italic', color: palette.text, lineHeight: 1.5, margin: 0, fontFamily: 'var(--osd-font-display)' }}>
        "도심지 환경에서는 불과 몇 미터 단위로 토지 피복이 변하며, 이에 따라 온도 에너지 분포 역시 극적으로 요동칩니다."
      </p>
    </div>
    <PageNumber n={3} />
  </div>
);

const P04_Background2: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>Background 02</Eyebrow>
    <SectionTitle>Landsat 8/9 TIRS의 근본적 한계</SectionTitle>
    <BodyText>
      범용적인 오픈 LST 데이터의 표준인 Landsat 위성의 열적외선 센서는 공간 해상도 100m의 한계를 가집니다.
    </BodyText>
    <div style={{ display: 'flex', gap: 40, flex: 1 }}>
      <div className="l-fadeup" style={{ flex: 1, padding: 40, background: palette.surface, borderRadius: 16, border: `1px solid ${palette.line}`, animationDelay: '600ms' }}>
        <h3 style={{ fontSize: 24, color: palette.accent, textTransform: 'uppercase', letterSpacing: '0.1em' }}>100m Resolution</h3>
        <p style={{ fontSize: 28, color: palette.muted, marginTop: 24 }}>건물 하나, 작은 도로를 구분하기에 턱없이 큽니다. 하나의 픽셀 내에 아스팔트, 나무, 건물이 모두 섞여 버립니다.</p>
      </div>
      <div className="l-fadeup" style={{ flex: 1, padding: 40, background: palette.surface, borderRadius: 16, border: `1px solid ${palette.line}`, animationDelay: '800ms' }}>
        <h3 style={{ fontSize: 24, color: palette.accent, textTransform: 'uppercase', letterSpacing: '0.1em' }}>30m Resampling</h3>
        <p style={{ fontSize: 28, color: palette.muted, marginTop: 24 }}>USGS는 이를 30m 격자로 리샘플링하여 배포하지만, 실제 물리적인 해상도가 높아진 것은 아닙니다.</p>
      </div>
    </div>
    <PageNumber n={4} />
  </div>
);

const P05_Background3: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>Background 03</Eyebrow>
    <SectionTitle>SatVu HiVE: 3.5m 열적외선의 등장</SectionTitle>
    <BodyText>
      영국의 민간 위성 기업인 Satellite Vu가 쏘아 올린 HotSat 군집위성은 전례 없는 수준의 고해상도 열 영상 촬영을 가능하게 했습니다.
    </BodyText>
    <div style={{ display: 'flex', gap: 40, flex: 1 }}>
      <div className="l-fadeup" style={{ flex: 1, padding: 40, background: palette.surface, borderRadius: 16, border: `1px solid ${palette.line}`, animationDelay: '600ms' }}>
        <h3 style={{ fontSize: 80, color: palette.text, fontFamily: 'var(--osd-font-display)', margin: 0 }}>3.5m</h3>
        <p style={{ fontSize: 28, color: palette.muted, marginTop: 24 }}>건물 지붕 단위, 개별 산업 시설 수준의 열 방출을 독립적인 픽셀로 감지해 냅니다.</p>
      </div>
      <div className="l-fadeup" style={{ flex: 1, padding: 40, background: palette.surface, borderRadius: 16, border: `1px solid ${palette.line}`, animationDelay: '800ms' }}>
        <h3 style={{ fontSize: 80, color: palette.text, fontFamily: 'var(--osd-font-display)', margin: 0 }}>~28.5x</h3>
        <p style={{ fontSize: 28, color: palette.muted, marginTop: 24 }}>100m인 Landsat 대비 28.5배의 스케일 차이를 가집니다. 이를 결합하면 막강한 초해상화가 가능합니다.</p>
      </div>
    </div>
    <PageNumber n={5} />
  </div>
);

const P06_VisualComparison: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>Visual Comparison</Eyebrow>
    <SectionTitle>단일 픽셀 내의 정보량 차이</SectionTitle>
    <FullImage src={landsatVsSatvu} delay={300} />
    <PageNumber n={6} />
  </div>
);

const P07_ProblemStatement: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>The Challenge</Eyebrow>
    <SectionTitle size={90} margin="40px 0 60px" maxWidth={1600}>
      단순히 크기만 줄인다고 해서<br />학습 데이터가 되는 것은 아닙니다.
    </SectionTitle>
    <BodyText>
      Landsat과 SatVu 센서는 작동하는 스펙트럼 대역과 빛을 받아들이는 광학적 특징이 완전히 다릅니다. 이 '도메인 갭(Domain Gap)'을 메우지 않으면 딥러닝 모델은 잘못된 온도를 학습합니다.
    </BodyText>
    <PageNumber n={7} />
  </div>
);

const P08_PhysicsPlanck: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>Physics · Planck's Law</Eyebrow>
    <SectionTitle>플랑크의 복사 법칙과 스펙트럼 갭</SectionTitle>
    <BodyText>
      모든 물체는 온도에 따라 특정 파장의 에너지를 냅니다. 빈의 변위 법칙에 따르면 300K의 지구는 약 9.6µm에서 최대 에너지를 방출합니다.
    </BodyText>
    <div style={{ display: 'flex', gap: 40, flex: 1 }}>
      <div className="l-fadeup" style={{ flex: 1, padding: 40, background: palette.surface, borderRadius: 16, border: `1px solid ${palette.line}`, animationDelay: '600ms' }}>
        <h3 style={{ fontSize: 24, color: palette.accent, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Landsat (LWIR)</h3>
        <p style={{ fontSize: 28, color: palette.text, fontWeight: 500, marginTop: 16 }}>10 ~ 12µm 장파장</p>
        <p style={{ fontSize: 24, color: palette.muted, marginTop: 16 }}>지구 복사 에너지의 정점을 직접 수집합니다. 태양 반사 간섭이 없습니다.</p>
      </div>
      <div className="l-fadeup" style={{ flex: 1, padding: 40, background: palette.surface, borderRadius: 16, border: `1px solid ${palette.line}`, animationDelay: '800ms' }}>
        <h3 style={{ fontSize: 24, color: palette.accent, textTransform: 'uppercase', letterSpacing: '0.1em' }}>SatVu (MWIR)</h3>
        <p style={{ fontSize: 28, color: palette.text, fontWeight: 500, marginTop: 16 }}>3 ~ 5µm 중파장</p>
        <p style={{ fontSize: 24, color: palette.muted, marginTop: 16 }}>복사 에너지가 비교적 적으며, 주간 촬영 시 태양 광학 반사에 영향을 받을 수 있습니다.</p>
      </div>
    </div>
    <PageNumber n={8} />
  </div>
);

const P09_PhysicsCurve: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>Radiation Curve</Eyebrow>
    <SectionTitle>MWIR vs LWIR 관측 영역 차이</SectionTitle>
    <FullImage src={mwirVsLwir} delay={300} />
    <PageNumber n={9} />
  </div>
);

const P10_ChallengeSR: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>Ill-posed Problem</Eyebrow>
    <SectionTitle size={90} margin="40px 0 60px" maxWidth={1600}>
      100m를 3.5m로 쪼개는 일의 한계
    </SectionTitle>
    <BodyText>
      단일 열적외선 이미지 만으로는(SISR), 어떤 부분에 온도가 높은 물질이 몰려있는지 전혀 추론할 수 없습니다. 억지로 늘리면 경계가 뭉개지거나, 있지도 않은 가짜 열 신호(Hallucination)가 생성됩니다.
    </BodyText>
    <PageNumber n={10} />
  </div>
);

const P11_ThermalInertia: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>Physics · Thermal Inertia</Eyebrow>
    <SectionTitle>열관성과 Guided SR의 근거</SectionTitle>
    <BodyText>
      다행히 지표면의 토지 피복(콘크리트, 수계, 흙)은 고유의 열용량을 지닙니다. 이는 <strong>광학 영상의 윤곽선과 열역학적 경계가 거의 일치함</strong>을 의미합니다.
    </BodyText>
    <div className="l-fade" style={{ background: palette.surface, padding: 60, borderRadius: 16, border: `1px solid ${palette.line}`, flex: 1, animationDelay: '600ms' }}>
      <h3 style={{ fontSize: 32, color: palette.text, marginBottom: 24 }}>해결책: 다중 모달리티 융합 (Multimodal Fusion)</h3>
      <p style={{ fontSize: 28, color: palette.muted, lineHeight: 1.6 }}>
        초해상화 모델에 <strong>Landsat OLI (30m)</strong>나 <strong>Sentinel-2 (10m)</strong> 같은 광학 영상을 가이드로 넣어줍니다. 모델은 이 광학 경계(Edge)를 따라 열 에너지를 재분배하는 법을 터득합니다.
      </p>
    </div>
    <PageNumber n={11} />
  </div>
);

const P12_EnergyConservation: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>Radiometric Consistency</Eyebrow>
    <SectionTitle>에너지 보존 법칙 (Energy Conservation)</SectionTitle>
    <BodyText>
      열 영상은 단순한 그림이 아닌 물리적 온도(Kelvin)입니다. 3.5m로 해상도를 높이더라도, 100m 면적 단위로 합산한 온도는 원본의 측정치와 동일해야만 과학적 신뢰성을 담보할 수 있습니다.
    </BodyText>
    <div className="l-fadeup" style={{ padding: 40, background: palette.surface, borderRadius: 16, border: `1px solid ${palette.line}`, animationDelay: '600ms' }}>
      <p style={{ fontFamily: 'var(--osd-font-display)', fontSize: 40, fontStyle: 'italic', color: palette.text, textAlign: 'center' }}>
        슈테판-볼츠만 법칙에 근거한<br/>완벽한 닫힌 계(Closed System) 수립
      </p>
    </div>
    <PageNumber n={12} />
  </div>
);

const P13_PipelineOverview: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>Pipeline Overview</Eyebrow>
    <SectionTitle size={90} margin="40px 0 60px" maxWidth={1600}>
      정교하게 설계된<br />4단계 처리 파이프라인
    </SectionTitle>
    <div style={{ display: 'flex', gap: 20 }}>
      {['열화 모델링', '도메인 적응', '네트워크 학습', '에너지 보존 후처리'].map((step, i) => (
        <div key={i} className="l-fadeup" style={{ flex: 1, padding: 30, background: palette.surface, border: `1px solid ${palette.line}`, borderRadius: 16, animationDelay: `${600 + i * 200}ms` }}>
          <h4 style={{ color: palette.accent, fontSize: 18, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Phase {i+1}</h4>
          <p style={{ fontSize: 24, fontWeight: 500, margin: '16px 0 0' }}>{step}</p>
        </div>
      ))}
    </div>
    <PageNumber n={13} />
  </div>
);

const P14_Degradation: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>Phase 1 · Degradation</Eyebrow>
    <SectionTitle>Landsat TIRS를 모사하는 열화 과정</SectionTitle>
    <BodyText>
      단순 Bicubic 축소는 센서의 물리적 특성을 무시합니다.
    </BodyText>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
      {['1. PSF/MTF 가우시안 블러 (광학적 흐림)', '2. 나이퀴스트 이론에 따른 100m 축소', '3. TIRS 스펙에 맞춘 NEΔT (0.05K) 암전류 노이즈 주입', '4. USGS 배포 형태인 30m 그리드 리샘플링'].map((item, i) => (
        <li key={i} className="l-fadeup" style={{ fontSize: 28, color: palette.text, padding: 24, background: palette.surface, borderRadius: 12, border: `1px solid ${palette.line}`, animationDelay: `${600 + i * 150}ms` }}>
          {item}
        </li>
      ))}
    </ul>
    <PageNumber n={14} />
  </div>
);

const P15_DegradationVisual: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>Flowchart</Eyebrow>
    <SectionTitle>센서 특성 기반 열화 파이프라인</SectionTitle>
    <FullImage src={degPipeline} delay={300} />
    <PageNumber n={15} />
  </div>
);

const P16_DomainAdaptation: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>Phase 2 · Adaptation</Eyebrow>
    <SectionTitle>과적합(Overfitting)의 긍정적 활용</SectionTitle>
    <BodyText>
      글로벌 모델 대신 타겟 지역의 랜드코버 패턴이 집중된 야간(Night-time) SatVu 패치를 추출합니다. 또한 Z-Score 정규화를 통해 Landsat의 스케일과 매칭시켜 도메인 갭을 극복합니다.
    </BodyText>
    <div className="l-fade" style={{ background: palette.surface, padding: 60, borderRadius: 16, border: `1px solid ${palette.line}`, flex: 1, animationDelay: '600ms' }}>
      <p style={{ fontSize: 32, fontStyle: 'italic', color: palette.text, lineHeight: 1.6, margin: 0, fontFamily: 'var(--osd-font-display)' }}>
        "특정 도심지나 산업단지라는 한정된 환경에 최적화함으로써, 모델은 타겟 지역의 고유한 미세 기후(Micro-climate) 특성을 완벽하게 체화하게 됩니다."
      </p>
    </div>
    <PageNumber n={16} />
  </div>
);

const P17_NetworkArch: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>Phase 2 · Architecture</Eyebrow>
    <SectionTitle>Guided-SwinIR 트랜스포머 아키텍처</SectionTitle>
    <BodyText>
      수용영역이 좁은 CNN의 한계를 넘어, 어텐션 메커니즘을 통해 광역적인 열 흐름을 파악합니다.
    </BodyText>
    <div className="l-fadeup" style={{ padding: 40, background: palette.surface, borderRadius: 16, border: `1px solid ${palette.line}`, animationDelay: '600ms' }}>
      <p style={{ fontSize: 28, color: palette.text, fontFamily: 'var(--osd-font-mono)' }}>
        Attention(Q, K, V) = Softmax(QKᵀ / √d) V
      </p>
      <p style={{ fontSize: 24, color: palette.muted, marginTop: 24, lineHeight: 1.5 }}>
        고해상도 광학 영상에서 추출한 윤곽선(Query)을 기준으로, 저해상도 열 영상의 에너지(Value)가 스스로 자리를 찾아가도록 유도하는 강력한 Cross-Attention 구조입니다.
      </p>
    </div>
    <PageNumber n={17} />
  </div>
);

const P18_NetworkArchVisual: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>Flowchart</Eyebrow>
    <SectionTitle>다중 모달리티 결합 아키텍처</SectionTitle>
    <FullImage src={guidedArch} delay={300} />
    <PageNumber n={18} />
  </div>
);

const P19_LossAndInference: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>Phase 3 & 4</Eyebrow>
    <SectionTitle>손실 함수 최적화 및 슬라이딩 윈도우 추론</SectionTitle>
    <BodyText>
      L1 Loss(물리적 정확도), SSIM(구조 유지), Edge Loss를 혼합하여 물리적 왜곡을 최소화합니다.
    </BodyText>
    <div className="l-fade" style={{ background: palette.surface, padding: 60, borderRadius: 16, border: `1px solid ${palette.line}`, flex: 1, animationDelay: '600ms' }}>
      <h3 style={{ fontSize: 28, color: palette.accent, marginBottom: 20 }}>에너지 보존 레이어의 수식적 적용</h3>
      <p style={{ fontSize: 28, color: palette.text, fontFamily: 'var(--osd-font-mono)', marginBottom: 20 }}>
        x'ᵢ = xᵢ + (yⱼ - 1/N ∑xᵢ)
      </p>
      <p style={{ fontSize: 26, color: palette.muted, lineHeight: 1.5 }}>
        추론 결과물의 100m 평균 온도와 실제 Landsat 원본(yⱼ) 간의 차이(Shift)를 일괄적으로 보정하여, 상대적 열 구배는 유지하면서 열역학적 닫힌 계를 수학적으로 완성합니다.
      </p>
    </div>
    <PageNumber n={19} />
  </div>
);

const P20_Conclusion: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>Conclusion</Eyebrow>
    <SectionTitle size={100} margin="40px 0 60px" maxWidth={1600}>
      물리법칙을 준수하는 딥러닝만이<br />
      진정한 과학적 데이터로 기능합니다.
    </SectionTitle>
    <BodyText delay={600}>
      물리적 열화 모사, 광학 가이드 어텐션, 그리고 에너지 보존 후처리까지. 이 정교한 파이프라인을 통해 특정 타겟 지역의 100m 영상을 3.5m 수준의 세계 최고 스펙으로 고도화할 수 있습니다.
    </BodyText>
    <PageNumber n={20} />
  </div>
);

export default [
  P01_Cover,
  P02_BigIdea,
  P03_Background1,
  P04_Background2,
  P05_Background3,
  P06_VisualComparison,
  P07_ProblemStatement,
  P08_PhysicsPlanck,
  P09_PhysicsCurve,
  P10_ChallengeSR,
  P11_ThermalInertia,
  P12_EnergyConservation,
  P13_PipelineOverview,
  P14_Degradation,
  P15_DegradationVisual,
  P16_DomainAdaptation,
  P17_NetworkArch,
  P18_NetworkArchVisual,
  P19_LossAndInference,
  P20_Conclusion,
];

export const meta: SlideMeta = { title: 'SatVu Landsat 초해상화' };
