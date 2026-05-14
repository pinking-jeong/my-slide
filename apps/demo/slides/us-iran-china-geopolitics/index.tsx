import React from 'react';
import type { DesignSystem, Page } from '@open-slide/core';
import geopoliticsCover from './assets/geopolitics_cover.png';
import hormuzDiagram from './assets/hormuz_strait_diagram.png';

export const design: DesignSystem = {
  palette: { bg: '#f7f5f0', text: '#1a1814', accent: '#991b1b' },
  fonts: {
    display: '"Noto Serif KR", "Times New Roman", "Georgia", serif',
    body: '"Pretendard", -apple-system, BlinkMacSystemFont, "Inter", system-ui, sans-serif',
  },
  typeScale: { hero: 110, body: 28 },
  radius: 12,
};

const palette = {
  bg: '#f7f5f0',
  surface: '#ffffff',
  text: '#1a1814',
  muted: '#6b6660',
  faint: '#a8a29a',
  line: '#e4e0d8',
  accent: '#991b1b', // dark red
  accentSoft: 'rgba(153, 27, 27, 0.10)',
  blue: '#1d4ed8',
  blueSoft: 'rgba(29, 78, 216, 0.10)',
};

const fonts = {
  serif: design.fonts.display,
  sans: design.fonts.body,
  mono: '"SF Mono", "JetBrains Mono", "Menlo", monospace',
};

const fill = {
  width: '100%',
  height: '100%',
  fontFamily: fonts.sans,
  color: palette.text,
  background: palette.bg,
  position: 'relative',
  overflow: 'hidden',
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
.l-fadeup    { animation: lFadeUp 1000ms cubic-bezier(0.16, 1, 0.3, 1) both; }
.l-fade      { animation: lFade 1200ms cubic-bezier(0.16, 1, 0.3, 1) both; }
.l-line      { animation: lLineGrow 900ms cubic-bezier(0.16, 1, 0.3, 1) both; transform-origin: left center; }
`;

const Style = () => <style>{keyframes}</style>;

const PAD_X = 140;
const PAD_Y = 110;
const TOTAL = 22;

const Eyebrow = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <div
    className="l-fadeup"
    style={{
      animationDelay: delay + "ms",
      fontFamily: fonts.sans,
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: palette.accent,
      marginBottom: 32,
    }}
  >
    {children}
  </div>
);

const PageNumber = ({ n, total }: { n: number; total: number }) => (
  <div
    style={{
      position: 'absolute',
      left: PAD_X,
      bottom: 60,
      fontFamily: fonts.sans,
      fontSize: 18,
      letterSpacing: '0.15em',
      color: palette.faint,
    }}
  >
    {String(n).padStart(2, '0')} / {String(total).padStart(2, '0')}
  </div>
);

const SectionTitle = ({
  children,
  size = 80,
  delay = 180,
  margin = '0 0 40px',
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
      animationDelay: delay + "ms",
      fontFamily: fonts.serif,
      fontSize: size,
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      margin,
      maxWidth,
      color: palette.text,
      wordBreak: 'keep-all',
    }}
  >
    {children}
  </h2>
);

const BodyText = ({ children, delay = 320, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) => (
  <p
    className="l-fadeup"
    style={{
      animationDelay: delay + "ms",
      fontFamily: fonts.sans,
      fontSize: 34,
      lineHeight: 1.6,
      color: palette.muted,
      fontWeight: 400,
      margin: 0,
      wordBreak: 'keep-all',
      ...style,
    }}
  >
    {children}
  </p>
);

/* ─────────────── 1. Cover ─────────────── */
const Cover: Page = () => (
  <div style={{ ...fill, display: 'flex' }}>
    <Style />
    <div style={{ flex: 1, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center', background: palette.surface }}>
      <Eyebrow delay={0}>심층 분석 보고서</Eyebrow>
      <h1 className="l-fadeup" style={{ animationDelay: '180ms', fontFamily: fonts.serif, fontSize: 100, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', margin: '0 0 32px', wordBreak: 'keep-all' }}>
        미국의 이란 제재를<br />미중 패권 경쟁으로<br />해석하는 근거
      </h1>
      <div className="l-line" style={{ animationDelay: '400ms', height: 2, width: 200, background: palette.accent, margin: '20px 0 40px' }} />
      <p className="l-fadeup" style={{ animationDelay: '600ms', fontSize: 32, lineHeight: 1.6, color: palette.muted, fontWeight: 400, wordBreak: 'keep-all' }}>
        에너지·금융·지정학·전략 차원의<br />통합 구조 분석
      </p>
    </div>
    <div style={{ flex: 1, position: 'relative' }}>
      <img src={geopoliticsCover} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Geopolitics Abstract" />
    </div>
    <PageNumber n={1} total={TOTAL} />
  </div>
);

/* ─────────────── 2. 서론 (Big Idea) ─────────────── */
const Intro: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>문제 제기</Eyebrow>
    <SectionTitle size={90} maxWidth={1600}>
      "미국의 대이란 제재는 더 이상 중동 정책이 아니라,<br />
      <em style={{ color: palette.accent, fontStyle: 'normal' }}>대중(對中) 경제전쟁의 한 전선</em>으로 융합되었다."
    </SectionTitle>
    <BodyText delay={400} style={{ maxWidth: 1400, fontSize: 38 }}>
      단순한 동시성의 관찰이 아닙니다.<br />
      두 사안이 구조적으로 동일한 전략 논리의 두 측면임을 의미합니다.
    </BodyText>
    <PageNumber n={2} total={TOTAL} />
  </div>
);

/* ─────────────── 3. 최대 압박 2.0 선언 ─────────────── */
const MaxPressure: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>2025년의 선언</Eyebrow>
    <div className="l-fadeup" style={{ animationDelay: '200ms', background: palette.surface, padding: 60, borderRadius: 16, border: "1px solid " + palette.line }}>
      <p style={{ fontFamily: fonts.serif, fontSize: 44, lineHeight: 1.6, color: palette.text, margin: 0, fontWeight: 600 }}>
        "국무장관은 <em style={{ color: palette.accent, fontStyle: 'normal' }}>이란 원유의 중화인민공화국 수출을 포함하여</em>, 이란의 원유 수출을 0으로 만드는 캠페인을 시행하라."
      </p>
      <div style={{ marginTop: 40, fontSize: 24, color: palette.muted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        — 국가안보 대통령 메모랜덤 (NSPM-2), 2025.02.04
      </div>
    </div>
    <BodyText delay={600} style={{ marginTop: 60 }}>
      정책 문서에 중국이 명시적으로 거명된 거명된 것은, 제재가 전략적 패권 다툼으로 재편되었음을 알리는 결정적 신호입니다.
    </BodyText>
    <PageNumber n={3} total={TOTAL} />
  </div>
);

/* ─────────────── 4. 분석 프레임워크 ─────────────── */
const Framework: Page = () => {
  const dims = [
    { name: '에너지', core: '원유 공급망', q: '미국 제재가 누구의 에너지 안보를 위협하는가?' },
    { name: '금융', core: '결제 체제', q: '달러 기축 체제 외부의 결제망은 누구를 위한 것인가?' },
    { name: '지정학', core: '육상 회랑', q: '이란이라는 지리적 노드의 통제권은 누구에게 가는가?' },
    { name: '전략', core: '담론과 프레임', q: '미국 전략 사고에서 이란과 중국은 어떻게 연결되는가?' },
  ];
  return (
    <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
      <Style />
      <Eyebrow>분석 프레임워크</Eyebrow>
      <SectionTitle>네 가지 차원의 상호 강화</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginTop: 40 }}>
        {dims.map((d, i) => (
          <div key={d.name} className="l-fadeup" style={{ animationDelay: (300 + i * 150) + "ms", padding: 50, background: palette.surface, borderRadius: 16, border: "1px solid " + palette.line }}>
            <h3 style={{ margin: '0 0 16px', fontSize: 32, color: palette.accent, fontFamily: fonts.serif }}>{d.name} 차원</h3>
            <div style={{ fontSize: 24, fontWeight: 600, color: palette.text, marginBottom: 24 }}>핵심 기제: {d.core}</div>
            <p style={{ margin: 0, fontSize: 26, color: palette.muted, lineHeight: 1.5 }}>{d.q}</p>
          </div>
        ))}
      </div>
      <PageNumber n={4} total={TOTAL} />
    </div>
  );
};

/* ─────────────── 5. 역사적 배경 ─────────────── */
const Timeline: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>역사적 배경</Eyebrow>
    <SectionTitle>제재의 누적과 진화</SectionTitle>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginTop: 20 }}>
      {[
        { y: '1979-90s', t: '이슬람 혁명 및 ILSA 제정 — 2차 제재 개념 도입' },
        { y: '2012', t: '이란 중앙은행 SWIFT 차단 — 금융 무기화의 결정적 첫 사례' },
        { y: '2015', t: '포괄적 공동 행동 계획(JCPOA) 체결' },
        { y: '2018', t: 'JCPOA 탈퇴 및 "최대 압박" 1기 개시' },
      ].map((item, i) => (
        <div key={item.y} className="l-fadeup" style={{ animationDelay: (300 + i * 200) + "ms", display: 'flex', alignItems: 'center', gap: 40 }}>
          <div style={{ width: 180, fontSize: 32, fontWeight: 700, color: palette.accent, fontFamily: fonts.mono }}>{item.y}</div>
          <div style={{ height: 2, flex: 1, background: palette.line }} />
          <div style={{ width: 800, fontSize: 30, color: palette.text, fontWeight: 500 }}>{item.t}</div>
        </div>
      ))}
    </div>
    <BodyText delay={1200} style={{ marginTop: 60 }}>
      초기의 제재는 중국을 직접 겨냥하지 않았으나, 다자적 규범에서 양자적 압박으로 전환되며 무기로 진화했습니다.
    </BodyText>
    <PageNumber n={5} total={TOTAL} />
  </div>
);

/* ─────────────── 6. 2018년의 분기점 ─────────────── */
const Year2018: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>결정적 분기점</Eyebrow>
    <SectionTitle>2018년: 동시성의 의미</SectionTitle>
    <div style={{ display: 'flex', gap: 60, marginTop: 40 }}>
      <div className="l-fadeup" style={{ animationDelay: '300ms', flex: 1, padding: 50, background: palette.surface, borderTop: "4px solid " + palette.accent }}>
        <h3 style={{ fontSize: 36, margin: '0 0 20px' }}>2018년 3월~7월</h3>
        <p style={{ fontSize: 30, color: palette.muted, lineHeight: 1.5 }}>미국의 대중국 관세 부과 시작<br />(미중 무역전쟁의 개막)</p>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '500ms', flex: 1, padding: 50, background: palette.surface, borderTop: "4px solid " + palette.blue }}>
        <h3 style={{ fontSize: 36, margin: '0 0 20px' }}>2018년 5월</h3>
        <p style={{ fontSize: 30, color: palette.muted, lineHeight: 1.5 }}>트럼프 1기 JCPOA 일방적 탈퇴<br />대이란 "최대 압박" 캠페인 개시</p>
      </div>
    </div>
    <BodyText delay={800} style={{ marginTop: 60, maxWidth: 1400 }}>
      이 두 사건의 동시성은 우연이 아닙니다. 다자 체제(WTO, JCPOA)를 거부하고, <strong>양자적 압박(관세, 2차 제재)</strong>이라는 동일한 수단을 통해 미국의 협상력을 회복하려는 논리의 산물입니다.
    </BodyText>
    <PageNumber n={6} total={TOTAL} />
  </div>
);

/* ─────────────── 7. 25년 포괄적 전략 파트너십 ─────────────── */
const Partnership: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>제도화된 분기점</Eyebrow>
    <SectionTitle>2021년 이란-중국 25년 협정</SectionTitle>
    <div className="l-fadeup" style={{ animationDelay: '300ms', background: palette.surface, padding: 60, borderRadius: 16, border: "1px solid " + palette.line }}>
      <ul style={{ margin: 0, padding: '0 0 0 30px', fontSize: 32, lineHeight: 1.8, color: palette.text }}>
        <li><strong>경제:</strong> 25년간 4,000억 달러 규모 투자 (인프라·통신)</li>
        <li><strong>에너지:</strong> 이란이 중국에 원유 장기 공급 및 할인</li>
        <li><strong>금융:</strong> 양국 공동 은행 설립으로 서방 금융 시스템 우회</li>
        <li><strong>지정학:</strong> 이란을 '일대일로'의 핵심 노드로 편입</li>
      </ul>
    </div>
    <BodyText delay={600} style={{ marginTop: 50 }}>
      본문 내 <strong>"제3국으로부터의 압력에 직면하여"</strong>라는 표현은 양국의 협력이 명백히 미국의 제재를 겨냥한 외교적 연대임을 보여줍니다.
    </BodyText>
    <PageNumber n={7} total={TOTAL} />
  </div>
);

/* ─────────────── 8. 에너지 차원: 통계적 현실 ─────────────── */
const EnergyStats: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>에너지 차원 1</Eyebrow>
    <SectionTitle>숫자가 말해주는 비대칭성</SectionTitle>
    <div style={{ display: 'flex', gap: 40, marginTop: 60, flex: 1 }}>
      <div className="l-fadeup" style={{ animationDelay: '300ms', flex: 1 }}>
        <h3 style={{ fontSize: 40, color: palette.accent, margin: '0 0 40px', borderBottom: "2px solid " + palette.accent, paddingBottom: 20 }}>이란 측 통계 (수출)</h3>
        <div style={{ fontSize: 90, fontFamily: fonts.serif, fontWeight: 700, margin: '0 0 10px', color: palette.text }}>90%+</div>
        <p style={{ fontSize: 28, color: palette.muted }}>이란 원유 수출량 중 중국행 비율</p>
        <div style={{ marginTop: 40, fontSize: 70, fontFamily: fonts.serif, fontWeight: 700, margin: '40px 0 10px', color: palette.text }}>70~80%</div>
        <p style={{ fontSize: 28, color: palette.muted }}>이란 정부 외화 수입 중 원유의 비중</p>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '500ms', flex: 1 }}>
        <h3 style={{ fontSize: 40, color: palette.blue, margin: '0 0 40px', borderBottom: "2px solid " + palette.blue, paddingBottom: 20 }}>중국 측 통계 (수입)</h3>
        <div style={{ fontSize: 90, fontFamily: fonts.serif, fontWeight: 700, margin: '0 0 10px', color: palette.text }}>~12%</div>
        <p style={{ fontSize: 28, color: palette.muted }}>중국 총 원유 수입 중 이란산 비중</p>
        <div style={{ marginTop: 40, fontSize: 70, fontFamily: fonts.serif, fontWeight: 700, margin: '40px 0 10px', color: palette.text }}>150만 bpd</div>
        <p style={{ fontSize: 28, color: palette.muted }}>산둥성·다롄 등 항구로 유입되는 양</p>
      </div>
    </div>
    <PageNumber n={8} total={TOTAL} />
  </div>
);

/* ─────────────── 9. "Teapot" 정유사 ─────────────── */
const Teapot: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>에너지 차원 2</Eyebrow>
    <SectionTitle>그림자 선단과 "찻주전자(Teapot)" 정유사</SectionTitle>
    <BodyText delay={300} style={{ marginBottom: 40 }}>
      중국의 <strong>독립 민간 정유사(Teapot)</strong>들은 글로벌 금융 노출도가 낮아 미국의 2차 제재 위험을 감수할 수 있는 완충 지대 역할을 해왔습니다. 이란산 원유는 '말레이시아 블렌드' 등으로 위장되어 산둥성으로 유입됩니다.
    </BodyText>
    <div className="l-fadeup" style={{ animationDelay: '600ms', display: 'flex', background: palette.surface, borderRadius: 16, border: "1px solid " + palette.line, overflow: 'hidden' }}>
      <div style={{ padding: 50, flex: 1, borderRight: "1px solid " + palette.line }}>
        <h4 style={{ fontSize: 30, color: palette.text, margin: '0 0 20px' }}>트럼프 1기 (1차 제재 중심)</h4>
        <p style={{ fontSize: 26, color: palette.muted, margin: 0 }}>이란 내부 기관 및 직접 수출 제재에 집중.</p>
      </div>
      <div style={{ padding: 50, flex: 1, background: palette.accentSoft }}>
        <h4 style={{ fontSize: 30, color: palette.accent, margin: '0 0 20px' }}>트럼프 2기 (2차 제재 본격화)</h4>
        <p style={{ fontSize: 26, color: palette.accent, margin: 0 }}>중국 <strong>산둥성 기반 정유사와 해운사를 직접 SDN 리스트에 추가</strong>. 중국 인프라를 직접 거명.</p>
      </div>
    </div>
    <PageNumber n={9} total={TOTAL} />
  </div>
);

/* ─────────────── 10. 금융 차원: 페트로달러 ─────────────── */
const Financial: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>금융 차원 1</Eyebrow>
    <SectionTitle>페트로달러 체제의 무기화</SectionTitle>
    <BodyText delay={200} style={{ maxWidth: 1400, marginBottom: 50 }}>
      1974년 사우디와 확립한 페트로달러 체제에서 달러는 단순한 통화가 아닌 글로벌 패권 도구입니다. 2012년 이란의 SWIFT 차단은 이 금융 시스템의 <em style={{ fontStyle: 'normal', color: palette.accent }}>무기화(Weaponization)</em>를 알리는 역사적 실험이었습니다.
    </BodyText>
    <div style={{ display: 'flex', gap: 40, alignItems: 'stretch' }}>
      <div className="l-fadeup" style={{ animationDelay: '400ms', flex: 1, background: palette.surface, padding: 50, borderRadius: 16, border: "1px solid " + palette.line }}>
        <div style={{ fontSize: 48, fontWeight: 700, color: palette.text, marginBottom: 20 }}>SWIFT 차단 충격</div>
        <p style={{ fontSize: 26, lineHeight: 1.6, color: palette.muted }}>"이란이 당했다면, 언젠가 우리도 당할 수 있다."<br/>이 충격은 미국과 갈등할 수 있는 모든 국가들에게 구조적 공포를 심어주었습니다.</p>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '600ms', flex: 1, background: palette.surface, padding: 50, borderRadius: 16, border: "1px solid " + palette.accentSoft }}>
        <div style={{ fontSize: 48, fontWeight: 700, color: palette.accent, marginBottom: 20 }}>대안 인프라의 촉발</div>
        <p style={{ fontSize: 26, lineHeight: 1.6, color: palette.muted }}>중국의 <strong>CIPS</strong> (위안화 국경간 결제시스템) 가속화<br/>러시아의 SPFS 개발<br/>유럽연합의 INSTEX 출범</p>
      </div>
    </div>
    <PageNumber n={10} total={TOTAL} />
  </div>
);

/* ─────────────── 11. 금융 차원: 페트로위안 ─────────────── */
const Petroyuan: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>금융 차원 2</Eyebrow>
    <SectionTitle>페트로위안: 작동한다는 사실의 위협</SectionTitle>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, marginTop: 40 }}>
      <BodyText delay={300}>위안화 결제(CIPS)의 절대적인 거래량은 아직 SWIFT의 3~5% 수준에 불과하며, 완전한 태환성도 확보되지 않았습니다.</BodyText>
      <BodyText delay={500} style={{ color: palette.accent, fontWeight: 600 }}>
        그러나 핵심은 양이 아니라 "가능성의 증명"입니다.
      </BodyText>
      <div className="l-fadeup" style={{ animationDelay: '700ms', background: palette.surface, padding: 40, borderRadius: 16, border: "1px solid " + palette.line, marginTop: 20 }}>
        <ul style={{ margin: 0, padding: '0 0 0 30px', fontSize: 30, lineHeight: 1.6, color: palette.text }}>
          <li>미국과 갈등하는 국가들에게 언제든 사용 가능한 대안 존재</li>
          <li>이란-중국 결제 모델이 사우디, 러시아, 브라질 등으로 복사될 선례 효과</li>
          <li>제재라는 미국의 도구가 오히려 대안 체제(BRICS Pay, CIPS) 발전을 가속화하는 역설</li>
        </ul>
      </div>
    </div>
    <PageNumber n={11} total={TOTAL} />
  </div>
);

/* ─────────────── 12. 호르무즈와 위안화 ─────────────── */
const HormuzDiagram: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <Style />
    <div style={{ flex: 1.2, paddingRight: 60 }}>
      <Eyebrow>금융 + 지정학</Eyebrow>
      <SectionTitle size={70}>호르무즈 위안화 통항료</SectionTitle>
      <BodyText delay={300} style={{ marginBottom: 40, fontSize: 30 }}>
        2026년 4월, 이란은 세계 원유 20~25%가 지나는 호르무즈 해협의 통항료를 <em style={{ color: palette.accent, fontStyle: 'normal' }}>위안화로 부과</em>하는 조치를 단행합니다.
      </BodyText>
      <div className="l-fadeup" style={{ animationDelay: '600ms', fontSize: 26, lineHeight: 1.6, color: palette.muted, background: palette.surface, padding: 40, borderRadius: 16, border: "1px solid " + palette.line }}>
        이 조치는 단순한 탈달러화가 아닙니다.<br /><br />
        미국이 이를 '중국의 지원'으로 해석해 중국을 압박하면, 중국은 본의 아니게 이란과 구조적으로 연대하게 됩니다. <strong>물리적 초크포인트를 통해 미중 마찰을 가속화시키는 이란의 고도의 지정학적 기동</strong>입니다.
      </div>
    </div>
    <div className="l-fadeup" style={{ flex: 0.8, animationDelay: '800ms', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={hormuzDiagram} style={{ width: '100%', borderRadius: 16, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} alt="Hormuz Diagram" />
    </div>
    <PageNumber n={12} total={TOTAL} />
  </div>
);

/* ─────────────── 13. 지정학 차원: 일대일로 육상 회랑 ─────────────── */
const Geopolitics: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>지정학 차원 1</Eyebrow>
    <SectionTitle>유라시아 자물쇠: 이란이라는 노드</SectionTitle>
    <div style={{ display: 'flex', gap: 60, marginTop: 40 }}>
      <div className="l-fadeup" style={{ animationDelay: '300ms', flex: 1 }}>
        <h3 style={{ fontSize: 36, color: palette.text, margin: '0 0 20px' }}>중국의 "말라카 딜레마"</h3>
        <p style={{ fontSize: 28, lineHeight: 1.6, color: palette.muted }}>원유 수입의 80%가 미 해군 통제하의 말라카 해협을 통과. 해상 봉쇄에 대한 근본적 취약성.</p>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '500ms', flex: 1 }}>
        <h3 style={{ fontSize: 36, color: palette.accent, margin: '0 0 20px' }}>일대일로 육상 회랑</h3>
        <p style={{ fontSize: 28, lineHeight: 1.6, color: palette.muted }}>해상 초크포인트를 우회하는 육상 수송로 확보가 필수. 이 거대한 <strong>유라시아 회랑의 핵심 연결 고리(Lock)가 바로 이란</strong>.</p>
      </div>
    </div>
    <div className="l-fadeup" style={{ animationDelay: '700ms', marginTop: 60, background: palette.surface, padding: 40, borderRadius: 16, border: "1px solid " + palette.line }}>
      <p style={{ margin: 0, fontSize: 32, fontWeight: 500, color: palette.text }}>
        주요 인프라: <span style={{ color: palette.accent }}>사라크스-라지 철도</span> (최단 육상 노선), <span style={{ color: palette.accent }}>자스크 항만</span> (해협 봉쇄 우회 외해 접근성)
      </p>
    </div>
    <PageNumber n={13} total={TOTAL} />
  </div>
);

/* ─────────────── 14. 아르메니아 협정과 미국의 대응 ─────────────── */
const ArmeniaTripp: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>지정학 차원 2</Eyebrow>
    <SectionTitle>미국의 대응: 회랑 통제와 우회로 차단</SectionTitle>
    <BodyText delay={300} style={{ marginBottom: 50 }}>
      이란을 제재하는 동시에, 이란을 우회하는 또 다른 연결망마저 미국이 선제적으로 통제합니다.
    </BodyText>
    <div style={{ display: 'flex', gap: 40 }}>
      <div className="l-fadeup" style={{ animationDelay: '500ms', flex: 1, padding: 40, background: palette.surface, borderRadius: 16, borderTop: "4px solid " + palette.accent }}>
        <h3 style={{ fontSize: 32, margin: '0 0 20px' }}>아르메니아 TRIPP 협정 (2025)</h3>
        <p style={{ fontSize: 26, lineHeight: 1.6, color: palette.muted }}>미국이 74% 지분을 가진 아제르바이잔-나흐체반 49년 회랑 운영권 확보. 이란 국경 100m 앞의 통제선을 통해 <strong>중국의 코카서스 우회 시도를 원천 감시</strong>.</p>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '700ms', flex: 1, padding: 40, background: palette.surface, borderRadius: 16, borderTop: "4px solid " + palette.blue }}>
        <h3 style={{ fontSize: 32, margin: '0 0 20px' }}>IMEC 구상 (2023)</h3>
        <p style={{ fontSize: 26, lineHeight: 1.6, color: palette.muted }}>인도-사우디-유럽을 잇는 미국 주도의 경제 회랑. <strong>이란을 의도적으로 배제</strong>한 인프라로 이란의 지정학적 노드 가치를 깎아내리는 대안망.</p>
      </div>
    </div>
    <PageNumber n={14} total={TOTAL} />
  </div>
);

/* ─────────────── 15. "협력적 이란" 전략 ─────────────── */
const StrategicEvolution: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>전략의 진화 1</Eyebrow>
    <SectionTitle>정권 교체가 아닌 "협력적 이란"</SectionTitle>
    <BodyText delay={300}>
      트럼프 2기 정책의 궁극적 목표는 이란 이슬람 공화국의 완전한 붕괴가 아닙니다.<br/>
      무정부 상태는 거대한 공백을 만들어 미국에게도 막대한 비용을 초래합니다.
    </BodyText>
    <div className="l-fadeup" style={{ animationDelay: '600ms', marginTop: 60, padding: 50, background: palette.accentSoft, borderRadius: 16 }}>
      <h3 style={{ margin: '0 0 20px', fontSize: 36, color: palette.accent }}>목표: 전략적 길들이기 (Strategic Taming)</h3>
      <p style={{ fontSize: 32, lineHeight: 1.6, color: palette.text, margin: 0 }}>
        경제 압박과 위협을 통해 현 정권의 생존이 <strong>베이징과의 단절</strong>에 달려있도록 강제하는 것.<br/>
        중국과의 끈을 끊어내고 서방의 협력 파트너로 편입시키는 <em>'분리 전략(Strategy of Separation)'</em>이 핵심입니다.
      </p>
    </div>
    <PageNumber n={15} total={TOTAL} />
  </div>
);

/* ─────────────── 16. 인도-태평양 서쪽 측면 ─────────────── */
const IndoPacific: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>전략의 진화 2</Eyebrow>
    <SectionTitle>중동은 인도-태평양의 '서쪽 측면'</SectionTitle>
    <BodyText delay={300}>
      미국 안보 전략가들은 이란을 중국의 <strong>'주의 분산 자석(Diversionary Magnet)'</strong>으로 규정합니다. 중동의 불안정이 지속될수록 미국이 대중국 압박에 집중할 수 없기 때문입니다.
    </BodyText>
    <div className="l-fadeup" style={{ animationDelay: '600ms', marginTop: 60, padding: 50, background: palette.surface, border: "1px solid " + palette.line, borderRadius: 16 }}>
      <p style={{ fontSize: 38, fontFamily: fonts.serif, fontStyle: 'italic', color: palette.text, margin: 0, textAlign: 'center' }}>
        "중동은 더 이상 별도의 전구가 아니다. 그것은 인도-태평양 투쟁의 서쪽 측면이다."
      </p>
    </div>
    <BodyText delay={900} style={{ marginTop: 60, fontSize: 30, textAlign: 'center' }}>
      따라서 이란을 무력화하는 것은 <strong>인도-태평양에서 중국에 집중하기 위한 최우선 전제 조건</strong>이 됩니다.
    </BodyText>
    <PageNumber n={16} total={TOTAL} />
  </div>
);

/* ─────────────── 17. 중국의 대응과 한계 ─────────────── */
const ChinasDilemma: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>중국의 딜레마</Eyebrow>
    <SectionTitle>전략적 욕망 vs 글로벌 통합의 한계</SectionTitle>
    <div style={{ display: 'flex', gap: 50, marginTop: 40 }}>
      <div className="l-fadeup" style={{ animationDelay: '300ms', flex: 1, padding: 50, background: palette.surface, borderRadius: 16, border: "1px solid " + palette.line }}>
        <h3 style={{ fontSize: 36, color: palette.text, margin: '0 0 30px' }}>전략적 욕망</h3>
        <ul style={{ margin: 0, paddingLeft: 20, fontSize: 28, lineHeight: 1.8, color: palette.muted }}>
          <li>미국 통제 밖의 에너지 및 회랑 확보</li>
          <li>미국의 주의 분산 (중동 묶어두기)</li>
          <li>페트로달러 우회망 실험장</li>
        </ul>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '500ms', flex: 1, padding: 50, background: palette.surface, borderRadius: 16, border: "1px solid " + palette.accentSoft }}>
        <h3 style={{ fontSize: 36, color: palette.accent, margin: '0 0 30px' }}>위험 회피 한계</h3>
        <ul style={{ margin: 0, paddingLeft: 20, fontSize: 28, lineHeight: 1.8, color: palette.muted }}>
          <li>2차 제재 노출 (글로벌 시장 접근권 위협)</li>
          <li>걸프 국가(사우디 등)와의 핵심 무역 보호</li>
          <li>이란 전쟁 시 군사력 투사 능력 부재</li>
        </ul>
      </div>
    </div>
    <BodyText delay={800} style={{ marginTop: 50 }}>
      중국은 기존 미국 헤게모니 경제 질서의 수혜자이기도 합니다. 이란을 구하기 위해 자신의 서방 시장 접근권을 전면 포기할 수는 없다는 <strong>구조적 비대칭성</strong>이 드러납니다.
    </BodyText>
    <PageNumber n={17} total={TOTAL} />
  </div>
);

/* ─────────────── 18. 이란의 행위주체성 ─────────────── */
const IransAgency: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>이란의 전략</Eyebrow>
    <SectionTitle>객체가 아닌 주체: 마찰의 "양식(Farming)"</SectionTitle>
    <BodyText delay={300} style={{ marginBottom: 40 }}>
      이란은 강대국의 단순한 체스 말이 아닙니다. 스스로 미중 갈등이라는 토양에 씨를 뿌리고 그 마찰력을 수확합니다.
    </BodyText>
    <div className="l-fadeup" style={{ animationDelay: '600ms', padding: 50, background: palette.surface, borderRadius: 16, border: "1px solid " + palette.line }}>
      <h3 style={{ margin: '0 0 20px', fontSize: 32, color: palette.accent }}>도구적 양극화 활용 메커니즘</h3>
      <p style={{ margin: 0, fontSize: 28, lineHeight: 1.7, color: palette.text }}>
        1. 이란이 도발적 정책(예: 위안화 결제 강제)을 던진다.<br/>
        2. 미국은 중국에게 책임을 물으며 압박한다.<br/>
        3. 중국은 원치 않아도 이란과 암묵적 연대 진영으로 내몰린다.<br/>
        <strong style={{ color: palette.accent }}>결과: 이란은 베이징과 공식 동맹을 맺을 필요도 없이, 미중 라이벌리 구조 속에서 스스로의 전략적 가치를 지속적으로 극대화한다.</strong>
      </p>
    </div>
    <PageNumber n={18} total={TOTAL} />
  </div>
);

/* ─────────────── 19. 비판적 시각 ─────────────── */
const CriticalViews: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>비판적 시각</Eyebrow>
    <SectionTitle>환원주의의 위험: 모든 것이 미중 경쟁은 아니다</SectionTitle>
    <BodyText delay={300} style={{ marginBottom: 50 }}>
      모든 현상을 '미중 패권 다툼'으로만 해석하는 것은 오류를 낳습니다. 독립적인 핵심 변수들이 존재합니다.
    </BodyText>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
      <div className="l-fadeup" style={{ animationDelay: '500ms', padding: 40, background: palette.surface, borderRadius: 12 }}>
        <h4 style={{ fontSize: 28, color: palette.text, margin: '0 0 16px' }}>이란 정책의 자율적 경로</h4>
        <p style={{ fontSize: 24, color: palette.muted, margin: 0, lineHeight: 1.5 }}>1979년 인질 사태부터 이어진 역사적 적대와 중동 테러 네트워크 등 중국 변수 없이도 제재의 동인은 충분합니다.</p>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '600ms', padding: 40, background: palette.surface, borderRadius: 12 }}>
        <h4 style={{ fontSize: 28, color: palette.text, margin: '0 0 16px' }}>이스라엘 변수</h4>
        <p style={{ fontSize: 24, color: palette.muted, margin: 0, lineHeight: 1.5 }}>미국 내 강력한 로비와 이스라엘 안보 지지, 아브라함 협정 추진은 그 자체로 거대한 정책 동력입니다.</p>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '700ms', padding: 40, background: palette.surface, borderRadius: 12 }}>
        <h4 style={{ fontSize: 28, color: palette.text, margin: '0 0 16px' }}>핵 비확산 체제의 가치</h4>
        <p style={{ fontSize: 24, color: palette.muted, margin: 0, lineHeight: 1.5 }}>NPT 체제 수호는 글로벌 안보의 상수로, 패권 경쟁 이전에 지켜야 할 질서입니다.</p>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '800ms', padding: 40, background: palette.surface, borderRadius: 12 }}>
        <h4 style={{ fontSize: 28, color: palette.text, margin: '0 0 16px' }}>중국의 국내적 동인</h4>
        <p style={{ fontSize: 24, color: palette.muted, margin: 0, lineHeight: 1.5 }}>일대일로는 반미 노선이 아니라, 중국 내륙의 안정과 경제 발전이라는 철저한 국내 수요에서 기인합니다.</p>
      </div>
    </div>
    <PageNumber n={19} total={TOTAL} />
  </div>
);

/* ─────────────── 20. 시나리오 분석 ─────────────── */
const Scenarios: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>미래 전망</Eyebrow>
    <SectionTitle>향후 3~5년 시나리오</SectionTitle>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginTop: 30 }}>
      <div className="l-fadeup" style={{ animationDelay: '300ms', padding: 40, background: palette.surface, borderLeft: "4px solid " + palette.accent }}>
        <h4 style={{ fontSize: 30, color: palette.text, margin: '0 0 10px' }}>A. "협력적 이란" 실현 (25%)</h4>
        <p style={{ fontSize: 24, color: palette.muted, margin: 0, lineHeight: 1.5 }}>이란이 중국과 거리를 두고 미국과 타협. 중국 일대일로 후퇴, 미국 헤게모니 강화.</p>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '450ms', padding: 40, background: palette.surface, borderLeft: "4px solid " + palette.muted }}>
        <h4 style={{ fontSize: 30, color: palette.text, margin: '0 0 10px' }}>B. 현상 유지 + 점진적 압박 (40%)</h4>
        <p style={{ fontSize: 24, color: palette.muted, margin: 0, lineHeight: 1.5 }}>갈등의 만성화. 제재는 유지되나 회피망 작동. 다극 결제 인프라의 느린 발전.</p>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '600ms', padding: 40, background: palette.surface, borderLeft: "4px solid #b91c1c" }}>
        <h4 style={{ fontSize: 30, color: palette.text, margin: '0 0 10px' }}>C. 전면 충돌과 디커플링 (20%)</h4>
        <p style={{ fontSize: 24, color: palette.muted, margin: 0, lineHeight: 1.5 }}>글로벌 2차 제재 폭발, 시장의 극단적 블록화. 글로벌 오일 쇼크 및 신냉전 고착.</p>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '750ms', padding: 40, background: palette.surface, borderLeft: "4px solid " + palette.blue }}>
        <h4 style={{ fontSize: 30, color: palette.text, margin: '0 0 10px' }}>D. 이란 정권 교체 (15%)</h4>
        <p style={{ fontSize: 24, color: palette.muted, margin: 0, lineHeight: 1.5 }}>압박 한계 초과로 친미/군부 새 정부 등장. 중국의 유라시아 연결망 치명타.</p>
      </div>
    </div>
    <PageNumber n={20} total={TOTAL} />
  </div>
);

/* ─────────────── 21. 한국에 대한 함의 ─────────────── */
const KoreaImplications: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>정책 함의</Eyebrow>
    <SectionTitle>한국의 이중 노출 (Dual Exposure)</SectionTitle>
    <BodyText delay={300} style={{ marginBottom: 50 }}>
      한국은 에너지 안보(중동 의존 70%)와 수출 무역(달러망-중국 시장 동시 의존)에서 세계 어느 나라보다 치명적인 이중 노출 상태에 있습니다.
    </BodyText>
    <div style={{ display: 'flex', gap: 40 }}>
      <div className="l-fadeup" style={{ animationDelay: '500ms', flex: 1, padding: 40, background: palette.surface, borderRadius: 16, border: "1px solid " + palette.line }}>
        <h3 style={{ fontSize: 32, margin: '0 0 20px', color: palette.accent }}>위협 요소</h3>
        <ul style={{ fontSize: 28, lineHeight: 1.6, color: palette.muted, margin: 0, paddingLeft: 20 }}>
          <li>호르무즈 위기 시 유가 충격 1차 타격</li>
          <li>미·중 결제 시스템 분열 시 막대한 전환 비용</li>
        </ul>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '700ms', flex: 1, padding: 40, background: palette.surface, borderRadius: 16, border: "1px solid " + palette.line }}>
        <h3 style={{ fontSize: 32, margin: '0 0 20px', color: palette.blue }}>기회와 대응</h3>
        <ul style={{ fontSize: 28, lineHeight: 1.6, color: palette.muted, margin: 0, paddingLeft: 20 }}>
          <li>미국의 인태 전략 집중으로 인한 안보 자산 강화</li>
          <li>에너지 다변화 (미국, 카타르) 강제 촉진</li>
          <li>정밀한 컨틴전시 플랜과 중간자 외교 공간 창출</li>
        </ul>
      </div>
    </div>
    <PageNumber n={21} total={TOTAL} />
  </div>
);

/* ─────────────── 22. 결론 ─────────────── */
const Conclusion: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <Style />
    <Eyebrow>결론</Eyebrow>
    <SectionTitle size={90} margin="20px 0 60px" maxWidth={1600}>
      "미국의 이란 제재는 단순한 처벌 도구가 아니라,<br />
      헤게몬이 자신의 마지막 게임을 펼치는 거대한 무대다."
    </SectionTitle>
    <BodyText delay={600} style={{ maxWidth: 1400 }}>
      이란은 미국과 중국이 서로를 보는 거울이 되었습니다.<br/>
      이 세 행위자의 마찰은 중동을 넘어 21세기 글로벌 질서의 형태를 결정짓는<br/>단일한 <strong>메타 게임(Meta Game)</strong>으로 수렴하고 있습니다.
    </BodyText>
    <PageNumber n={22} total={TOTAL} />
  </div>
);

export default [
  Cover,
  Intro,
  MaxPressure,
  Framework,
  Timeline,
  Year2018,
  Partnership,
  EnergyStats,
  Teapot,
  Financial,
  Petroyuan,
  HormuzDiagram,
  Geopolitics,
  ArmeniaTripp,
  StrategicEvolution,
  IndoPacific,
  ChinasDilemma,
  IransAgency,
  CriticalViews,
  Scenarios,
  KoreaImplications,
  Conclusion,
];
