import React from 'react';
import type { DesignSystem, Page } from '@open-slide/core';
import coverImg from './assets/cover.png';
import trisoImg from './assets/triso.png';
import networkImg from './assets/network.png';

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
  teal: '#0d9488',
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
const TOTAL = 31;

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
  size = 72,
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
      lineHeight: 1.25,
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
      fontSize: 32,
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

const Highlight = ({ children, color = palette.accent }: { children: React.ReactNode; color?: string }) => (
  <em style={{ color, fontStyle: 'normal', fontWeight: 600 }}>{children}</em>
);

const Box = ({ children, delay = 0, type = 'default' }: { children: React.ReactNode; delay?: number; type?: 'default' | 'accent' | 'blue' }) => {
  const bg = type === 'accent' ? palette.accentSoft : type === 'blue' ? palette.blueSoft : palette.surface;
  const border = type === 'accent' ? palette.accent : type === 'blue' ? palette.blue : palette.line;
  return (
    <div
      className="l-fadeup"
      style={{
        animationDelay: delay + "ms",
        background: bg,
        padding: 40,
        borderRadius: 16,
        border: "1px solid " + border,
        borderTop: type !== 'default' ? "4px solid " + border : "1px solid " + border,
      }}
    >
      {children}
    </div>
  );
};

/* ─────────────── 1. Cover ─────────────── */
const P01_Cover: Page = () => (
  <div style={{ ...fill, display: 'flex' }}>
    <Style />
    <div style={{ flex: 1.1, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center', background: palette.surface }}>
      <Eyebrow delay={0}>심층 분석 보고서</Eyebrow>
      <h1 className="l-fadeup" style={{ animationDelay: '180ms', fontFamily: fonts.serif, fontSize: 80, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em', margin: '0 0 32px', wordBreak: 'keep-all' }}>
        소형모듈원자로(SMR)의<br />핵비확산 및 IAEA 세이프가드 이슈
      </h1>
      <div className="l-line" style={{ animationDelay: '400ms', height: 2, width: 200, background: palette.accent, margin: '20px 0 40px' }} />
      <p className="l-fadeup" style={{ animationDelay: '600ms', fontSize: 30, lineHeight: 1.6, color: palette.muted, fontWeight: 400, wordBreak: 'keep-all' }}>
        노형별 리스크, 검증 기술의 한계, 그리고<br />글로벌 정책 대응에 관한 체계적 고찰
      </p>
    </div>
    <div style={{ flex: 0.9, position: 'relative' }}>
      <img src={coverImg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="SMR Safeguards Cover" />
    </div>
    <PageNumber n={1} total={TOTAL} />
  </div>
);

/* ─────────────── 2. 서론 (패러다임의 변화) ─────────────── */
const P02_Intro: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>도입부</Eyebrow>
    <SectionTitle size={80}>탈탄소 전환과 SMR 르네상스</SectionTitle>
    <BodyText delay={300} style={{ marginBottom: 40 }}>
      2020년대 중반, 70여 종 이상의 SMR(소형모듈원자로)이 개발되며 글로벌 상용화를 앞두고 있습니다. 한국의 i-SMR, 미국의 NuScale, 중국의 HTR-PM 등은 차세대 에너지 믹스의 핵심입니다.
    </BodyText>
    <Box delay={500} type="accent">
      <p style={{ margin: 0, fontSize: 32, lineHeight: 1.6, color: palette.text }}>
        그러나 광범위한 SMR 보급은 **핵비확산(non-proliferation) 체제**에 전례 없는 복합적 도전을 제기합니다.<br/><br/>
        <Highlight>새로운 연료, 분산된 배치, 변모하는 지정학이 세이프가드(Safeguards)의 근간을 시험하고 있습니다.</Highlight>
      </p>
    </Box>
    <PageNumber n={2} total={TOTAL} />
  </div>
);

/* ─────────────── 3. 문제 제기 (기존 프레임워크의 한계) ─────────────── */
const P03_Problem: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>문제 제기</Eyebrow>
    <SectionTitle>레거시 프레임워크의 한계</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 50 }}>
      현재의 IAEA 세이프가드 체제는 지난 60년간 철저히 <Highlight color={palette.blue}>대형 경수로(LWR)</Highlight> 중심으로 정교화되었습니다. 그러나 첨단 SMR은 이 가정들에 부합하지 않습니다.
    </BodyText>
    <div style={{ display: 'flex', gap: 40 }}>
      <div className="l-fadeup" style={{ animationDelay: '400ms', flex: 1 }}>
        <h3 style={{ fontSize: 32, margin: '0 0 20px', color: palette.text }}>전통적 세이프가드의 가정</h3>
        <ul style={{ fontSize: 26, lineHeight: 1.8, color: palette.muted, margin: 0, paddingLeft: 20 }}>
          <li>소수의 대규모 시설에 집중</li>
          <li>저농축우라늄(LEU, &lt;5%) 중심</li>
          <li>연료 집합체의 항목 계량(Item Accountancy)</li>
          <li>주기적 가동 중단(Outage) 시 사찰 접근</li>
        </ul>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '600ms', flex: 1, paddingLeft: 40, borderLeft: "2px solid " + palette.line }}>
        <h3 style={{ fontSize: 32, margin: '0 0 20px', color: palette.accent }}>SMR의 새로운 현실</h3>
        <ul style={{ fontSize: 26, lineHeight: 1.8, color: palette.accent, margin: 0, paddingLeft: 20 }}>
          <li>수백 개의 분산형 소형 및 마이크로 시설</li>
          <li>HALEU (5~20%) 고순도 연료 사용</li>
          <li>액체 연료 및 연속 재충전 (항목 계량 불가)</li>
          <li>20~40년 밀봉된 장수명 노심 (접근 불가)</li>
        </ul>
      </div>
    </div>
    <PageNumber n={3} total={TOTAL} />
  </div>
);

/* ─────────────── 4. 연구 질문 ─────────────── */
const P04_Questions: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>분석 프레임워크</Eyebrow>
    <SectionTitle>핵심 연구 질문 (Research Questions)</SectionTitle>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, marginTop: 40 }}>
      {[
        { t: "노형별 리스크", d: "각 SMR 노형(PWR, HTGR, SFR, MSR)은 어떤 고유한 세이프가드 도전을 제기하는가?" },
        { t: "연료주기 이슈", d: "HALEU, TRISO, 온라인 재처리 등이 비확산 환경에 미치는 영향은 무엇인가?" },
        { t: "IAEA의 대응", d: "IAEA는 어떤 정책적, 기술적 도구로 이 변화에 대응하고 있으며, 한계는 무엇인가?" },
        { t: "정책 함의", d: "신규 진입국과 공급국(특히 한국)에 요구되는 지정학적 및 수출 통제 전략은?" },
      ].map((q, i) => (
        <Box key={i} delay={300 + i * 150} type={i === 0 || i === 2 ? 'blue' : 'default'}>
          <h4 style={{ fontSize: 30, color: palette.text, margin: '0 0 16px' }}>Q{i + 1}. {q.t}</h4>
          <p style={{ fontSize: 24, color: palette.muted, lineHeight: 1.5, margin: 0 }}>{q.d}</p>
        </Box>
      ))}
    </div>
    <PageNumber n={4} total={TOTAL} />
  </div>
);

/* ─────────────── 5. SMR 분류 ─────────────── */
const P05_SMR_Types: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>기초 정의</Eyebrow>
    <SectionTitle>SMR의 정의와 주요 노형</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 30 }}>전기출력 300 MWe 이하, 모듈식 조립, 확장성을 특징으로 하며 4세대 노형 전체를 포괄합니다.</BodyText>
    <div className="l-fadeup" style={{ animationDelay: '400ms', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[
        { c: '일체형 경수로', r: 'NuScale, i-SMR, SMART', e: 'LEU (<5%)', type: 'UO2 펠릿' },
        { c: '고온가스로 (HTGR)', r: 'HTR-PM, Xe-100, MMR', e: 'HALEU (8~15%)', type: 'TRISO (페블/컴팩트)' },
        { c: '나트륨 고속로 (SFR)', r: 'Natrium, ARC-100', e: 'HALEU (~20%)', type: '금속 연료 (U-Zr)' },
        { c: '용융염로 (MSR)', r: 'Terrestrial IMSR', e: 'HALEU', type: '액체 염 (FLiBe + U)' },
        { c: '마이크로로 / 군용', r: 'eVinci, Project Pele', e: 'HALEU', type: 'TRISO / 고체' },
      ].map((row, i) => (
        <div key={i} style={{ display: 'flex', padding: '20px 30px', background: palette.surface, border: "1px solid " + palette.line, borderRadius: 8, alignItems: 'center' }}>
          <div style={{ width: 220, fontSize: 26, fontWeight: 700, color: palette.text }}>{row.c}</div>
          <div style={{ flex: 1, fontSize: 24, color: palette.muted }}>{row.r}</div>
          <div style={{ width: 200, fontSize: 22, color: palette.blue }}>{row.e}</div>
          <div style={{ width: 200, fontSize: 22, color: palette.accent }}>{row.type}</div>
        </div>
      ))}
    </div>
    <PageNumber n={5} total={TOTAL} />
  </div>
);

/* ─────────────── 6. 5대 구조적 도전 ─────────────── */
const P06_Structural: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>거시적 조망</Eyebrow>
    <SectionTitle>다섯 가지 구조적 도전</SectionTitle>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>
      {[
        "1. 시설 수의 폭증과 IAEA 검증 자원의 한계",
        "2. 신형 연료(HALEU)의 핵물질 매력도 증가",
        "3. 장수명·밀봉 노심에 대한 접근성 차단",
        "4. 다수 모듈 배치로 인한 계량 구역의 모호성",
        "5. 비전통적 연료주기(온라인 처리)의 재처리 잠재력",
      ].map((item, i) => (
        <li key={i} className="l-fadeup" style={{ animationDelay: (300 + i * 150) + "ms", fontSize: 34, color: palette.text, padding: '20px 30px', background: palette.surface, borderRadius: 12, borderLeft: "4px solid " + (i % 2 === 0 ? palette.accent : palette.blue) }}>
          {item}
        </li>
      ))}
    </ul>
    <PageNumber n={6} total={TOTAL} />
  </div>
);

/* ─────────────── 7. 도전 1: 시설 폭증 ─────────────── */
const P07_FacilityNumber: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>구조적 도전 1</Eyebrow>
    <SectionTitle>시설 수의 폭증과 사찰 부담</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 40 }}>
      대형 원전 1기(1,000 MWe)를 대체하기 위해 마이크로로(10 MWe)를 설치한다면, <Highlight>검사해야 할 시설의 수는 100배 증가</Highlight>합니다.
    </BodyText>
    <div style={{ display: 'flex', gap: 40 }}>
      <div className="l-fadeup" style={{ animationDelay: '400ms', flex: 1 }}>
        <Box type="blue">
          <h3 style={{ margin: '0 0 16px', fontSize: 30, color: palette.blue }}>검증 인력의 물리적 한계</h3>
          <p style={{ margin: 0, fontSize: 26, color: palette.muted, lineHeight: 1.6 }}>IAEA 세이프가드 예산은 연간 약 1.5억 유로 수준으로 고정되어 있습니다. 인스펙터의 현장 방문을 곱절로 늘리는 것은 불가능하므로, 무인 모니터링(Unattended Monitoring)과 AI 분석이 필수가 됩니다.</p>
        </Box>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '600ms', flex: 1 }}>
        <Box type="accent">
          <h3 style={{ margin: '0 0 16px', fontSize: 30, color: palette.accent }}>근본 리스크는 농축·재처리</h3>
          <p style={{ margin: 0, fontSize: 26, color: palette.muted, lineHeight: 1.6 }}>시설 수 증가 자체보다 심각한 것은 <b>연료 공급망의 확산</b>입니다. 다수 SMR 운영을 위해 도입국이 독자적인 우라늄 농축 시설(E&R)을 보유하려 할 때 확산 위험이 급증합니다.</p>
        </Box>
      </div>
    </div>
    <PageNumber n={7} total={TOTAL} />
  </div>
);

/* ─────────────── 8. 도전 2: HALEU ─────────────── */
const P08_HALEU: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>구조적 도전 2</Eyebrow>
    <SectionTitle>HALEU의 양면성 (핵물질 매력도)</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 40 }}>
      차세대 SMR의 70% 이상이 요구하는 <b>고순도 저농축우라늄(HALEU, 5~20%)</b>은 물리적 보호와 비확산 관점에서 새로운 과제를 던집니다.
    </BodyText>
    <div className="l-fadeup" style={{ animationDelay: '400ms', background: palette.surface, padding: 40, borderRadius: 16, border: "1px solid " + palette.line }}>
      <h3 style={{ margin: '0 0 20px', fontSize: 32, color: palette.text }}>농축의 시간 단축 효과</h3>
      <p style={{ margin: '0 0 30px', fontSize: 26, color: palette.muted, lineHeight: 1.6 }}>
        HALEU 신선 연료(특히 UF6 가스 형태)를 확보한 국가는, 무기급 고농축우라늄(HEU, 90%+)을 생산하기 위한 <b>분리작업량(SWU)의 약 80%를 이미 단축</b>한 상태가 됩니다.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ padding: '15px 30px', background: palette.line, borderRadius: 8, fontSize: 24 }}>천연 우라늄 → HEU: <b>~227 SWU</b></div>
        <div style={{ fontSize: 30, color: palette.faint }}>➔</div>
        <div style={{ padding: '15px 30px', background: palette.accentSoft, color: palette.accent, borderRadius: 8, fontSize: 24, fontWeight: 600 }}>HALEU(20%) → HEU: <b>단 5 SWU</b></div>
      </div>
    </div>
    <PageNumber n={8} total={TOTAL} />
  </div>
);

/* ─────────────── 9. 도전 3: 장수명 밀봉 ─────────────── */
const P09_SealedCore: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>구조적 도전 3</Eyebrow>
    <SectionTitle>장수명 밀봉 노심 (Sealed Long-Life Core)</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 50 }}>
      20~40년 동안 노심을 개방하지 않고 운영하는 설계는 전용 기회를 줄이지만, 사찰관의 "직접 눈으로 보는 검증" 또한 불가능하게 만듭니다.
    </BodyText>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
      <Box delay={400} type="blue">
        <h4 style={{ fontSize: 28, margin: '0 0 10px', color: palette.blue }}>신뢰의 기반 이동</h4>
        <p style={{ fontSize: 24, color: palette.muted, margin: 0, lineHeight: 1.6 }}>현장 실측 대신 설계 시점의 <b>설계 정보 검증(DIV)</b>과 장기 모니터링 시스템의 신뢰성에 전적으로 의존해야 합니다.</p>
      </Box>
      <Box delay={500} type="accent">
        <h4 style={{ fontSize: 28, margin: '0 0 10px', color: palette.accent }}>기술적 한계 노출</h4>
        <p style={{ fontSize: 24, color: palette.muted, margin: 0, lineHeight: 1.6 }}>현재의 IAEA 봉인(Seal) 기술과 감시 카메라가 25년간 유지보수 없이 노심 내부 또는 척박한 환경에서 작동할 수 있을까요? 현재 기술로는 초과 수준입니다.</p>
      </Box>
    </div>
    <PageNumber n={9} total={TOTAL} />
  </div>
);

/* ─────────────── 10. 도전 4: 다수 모듈 ─────────────── */
const P10_MultiModule: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>구조적 도전 4</Eyebrow>
    <SectionTitle>다수 모듈과 물질평형구역(MBA)</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 50 }}>
      NuScale과 같이 한 부지에 최대 12개의 모듈이 제어실, 연료 풀, 폐기물 처리 시설을 <Highlight>공유</Highlight>하는 구조입니다.
    </BodyText>
    <Box delay={400}>
      <ul style={{ margin: 0, paddingLeft: 20, fontSize: 30, lineHeight: 1.8, color: palette.text }}>
        <li><b>경계의 모호성:</b> 어디서부터 어디까지를 개별 모듈의 측정 구역(MBA)으로 잡을 것인가?</li>
        <li><b>빈번한 재충전:</b> 모듈별로 교체 주기가 달라 연중 내내 핵연료가 공통 풀을 오갑니다.</li>
        <li><b>사용후핵연료 추적:</b> 다수 모듈에서 배출된 연소도가 다른 연료들이 한 풀에 섞여 통계적 식별을 복잡하게 만듭니다.</li>
      </ul>
    </Box>
    <PageNumber n={10} total={TOTAL} />
  </div>
);

/* ─────────────── 11. 평가 방법론 (PR&PP, INPRO) ─────────────── */
const P11_Methodology: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>평가 체계</Eyebrow>
    <SectionTitle>비확산 저항성 평가 (PR&PP / INPRO)</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 50 }}>
      새로운 SMR 설계를 정량적으로 평가하기 위해 국제 사회는 두 가지 주요 방법론을 사용합니다.
    </BodyText>
    <div style={{ display: 'flex', gap: 40 }}>
      <div className="l-fadeup" style={{ animationDelay: '400ms', flex: 1, padding: 40, border: "1px solid " + palette.line, borderRadius: 16 }}>
        <h4 style={{ fontSize: 32, margin: '0 0 20px', color: palette.blue }}>GIF PR&PP (4세대 포럼)</h4>
        <p style={{ fontSize: 24, lineHeight: 1.6, color: palette.muted }}>
          - <b>기술적 난이도 (TR)</b><br/>
          - <b>확산 소요 시간 (PT)</b><br/>
          - <b>물질 유형 (ME)</b><br/>
          - <b>탐지 확률/효율 (DP/DE)</b>
        </p>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '600ms', flex: 1, padding: 40, border: "1px solid " + palette.line, borderRadius: 16 }}>
        <h4 style={{ fontSize: 32, margin: '0 0 20px', color: palette.accent }}>IAEA INPRO 원칙</h4>
        <p style={{ fontSize: 24, lineHeight: 1.6, color: palette.muted }}>
          - 국제 비확산 레짐 철저 준수<br/>
          - <b>핵물질 매력도 최소화</b><br/>
          - IAEA 세이프가드 촉진 (설계 반영)<br/>
          - 전용 억제를 위한 <b>다중 방벽 체계</b>
        </p>
      </div>
    </div>
    <PageNumber n={11} total={TOTAL} />
  </div>
);

/* ─────────────── 12. 경수로형 SMR 리스크 ─────────────── */
const P12_PWR_SMR: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>노형별 리스크 분석 1</Eyebrow>
    <SectionTitle>일체형 가압/비등 경수로 (iPWR, BWR)</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 40 }}>
      NuScale, i-SMR, BWRX-300 등. 기존 기술의 연장선에 있어 <Highlight color={palette.blue}>가장 관리하기 쉬운 비확산 환경</Highlight>을 가집니다.
    </BodyText>
    <div style={{ display: 'flex', gap: 30 }}>
      <Box delay={400} type="blue">
        <h4 style={{ fontSize: 26, margin: '0 0 16px', color: palette.text }}>강점 (저위험)</h4>
        <ul style={{ fontSize: 22, lineHeight: 1.6, color: palette.muted, margin: 0, paddingLeft: 20 }}>
          <li>표준 저농축우라늄(LEU &lt;5%) 사용</li>
          <li>전통적인 펠릿-연료봉 구조로 항목 계량 완벽 호환</li>
          <li>재처리 동기가 없음</li>
        </ul>
      </Box>
      <Box delay={600} type="accent">
        <h4 style={{ fontSize: 26, margin: '0 0 16px', color: palette.text }}>한계 (주의점)</h4>
        <ul style={{ fontSize: 22, lineHeight: 1.6, color: palette.muted, margin: 0, paddingLeft: 20 }}>
          <li>다수 모듈 배치에 따른 MBA 혼선</li>
          <li>일부 설계의 낮은 연소도가 무기급 Pu 조성을 만들 잠재력</li>
          <li>kW당 폐기물 발생량 상대적 증가</li>
        </ul>
      </Box>
    </div>
    <PageNumber n={12} total={TOTAL} />
  </div>
);

/* ─────────────── 13. 고온가스로(HTGR) 리스크 ─────────────── */
const P13_HTGR: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>노형별 리스크 분석 2</Eyebrow>
    <SectionTitle>고온가스로 (HTGR) 및 페블베드</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 40 }}>
      중국 HTR-PM, 미국 Xe-100 등. HALEU를 포함한 공 모양의 <b>TRISO 페블</b>을 연속적으로 순환시키는 구조입니다.
    </BodyText>
    <div className="l-fadeup" style={{ animationDelay: '400ms', padding: 40, background: palette.surface, borderRadius: 16, borderLeft: "4px solid " + palette.accent }}>
      <h3 style={{ fontSize: 32, margin: '0 0 20px', color: palette.accent }}>연속 순환과 항목 계량의 붕괴</h3>
      <p style={{ fontSize: 28, lineHeight: 1.6, color: palette.text, margin: 0 }}>
        노심 내부에 수십만 개의 페블이 순환합니다. 1개 페블당 우라늄 함량은 미미(~9g)하지만, 이를 개별 식별하는 것은 불가능합니다. 따라서 개수 확인이 아닌 <Highlight>통계적 모니터링</Highlight>이라는 새로운 검증 패러다임이 필요합니다.
      </p>
    </div>
    <PageNumber n={13} total={TOTAL} />
  </div>
);

/* ─────────────── 14. TRISO 연료 집중 분석 ─────────────── */
const P14_TRISO: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', alignItems: 'center', gap: 60 }}>
    <Style />
    <div style={{ flex: 1 }}>
      <Eyebrow>심층 분석</Eyebrow>
      <SectionTitle size={60}>TRISO: 궁극의 비확산 방벽?</SectionTitle>
      <ul style={{ fontSize: 26, lineHeight: 1.8, color: palette.muted, marginTop: 30, paddingLeft: 20 }}>
        <li className="l-fadeup" style={{ animationDelay: '200ms' }}><b>강력한 화학적 저항성:</b> SiC 코팅층 파괴 후 우라늄 추출에는 10단계 이상의 복잡한 공정이 필요합니다. 비국가 단체에게는 비현실적입니다.</li>
        <li className="l-fadeup" style={{ animationDelay: '400ms' }}><b>고연소도(150k MWd/t):</b> 플루토늄 동위원소가 심각하게 훼손되어 무기용으로 부적합합니다.</li>
        <li className="l-fadeup" style={{ animationDelay: '600ms' }}><b>체적의 비효율성:</b> 1개의 핵무기를 위해 무려 15만 개의 페블을 절도해야 합니다.</li>
      </ul>
      <BodyText delay={800} style={{ marginTop: 30, fontSize: 24, color: palette.accent }}>
        * 단, 제조 전 가스 형태(UF6)의 HALEU는 여전히 매우 매력적인 목표입니다.
      </BodyText>
    </div>
    <div className="l-fadeup" style={{ flex: 0.8, animationDelay: '400ms', height: '100%', display: 'flex', alignItems: 'center' }}>
      <img src={trisoImg} style={{ width: '100%', borderRadius: 16, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} alt="TRISO Diagram" />
    </div>
    <PageNumber n={14} total={TOTAL} />
  </div>
);

/* ─────────────── 15. 고속로(SFR) 리스크 ─────────────── */
const P15_SFR: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>노형별 리스크 분석 3</Eyebrow>
    <SectionTitle>나트륨 고속로 (SFR)의 딜레마</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 40 }}>
      Natrium, ARC-100 등. HALEU(~20%)와 고속 중성자를 사용하는 <b>비확산 관점의 최대 논쟁 대상</b>입니다.
    </BodyText>
    <Box delay={400} type="accent">
      <h3 style={{ fontSize: 32, margin: '0 0 20px', color: palette.accent }}>왜 우려하는가? (무기급 플루토늄 잠재력)</h3>
      <ul style={{ fontSize: 26, lineHeight: 1.8, color: palette.text, margin: 0, paddingLeft: 20 }}>
        <li>고속 스펙트럼 환경은 238U를 매우 효율적으로 239Pu(무기급 플루토늄)로 변환시킵니다.</li>
        <li>설계를 우회하여 천연우라늄 <b>'변환 담요(Blanket)'</b>를 몰래 추가할 경우, 군사적 전용이 극도로 용이해집니다.</li>
        <li>파이로프로세싱(건식 재처리) 기술이 수반될 경우 핵분열 물질 분리의 장벽이 낮아집니다.</li>
      </ul>
    </Box>
    <PageNumber n={15} total={TOTAL} />
  </div>
);

/* ─────────────── 16. 용융염로(MSR) 리스크 ─────────────── */
const P16_MSR: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>노형별 리스크 분석 4</Eyebrow>
    <SectionTitle>용융염로 (MSR): 세이프가드의 최종 보스</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 40 }}>
      연료가 고체가 아닌 액체 염(Salt) 형태로 원자로 전체를 순환하는 MSR은 기존 IAEA 검증 체제를 무력화합니다.
    </BodyText>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30 }}>
      <Box delay={400}><h4 style={{ fontSize: 24, margin: '0 0 10px' }}>항목 계량 전면 불가</h4><p style={{ fontSize: 20, margin: 0, color: palette.muted }}>셀 수 있는 연료봉이 없음. 오직 벌크 계량에 의존.</p></Box>
      <Box delay={500}><h4 style={{ fontSize: 24, margin: '0 0 10px' }}>온라인 화학 처리</h4><p style={{ fontSize: 20, margin: 0, color: palette.muted }}>가동 중 지속적으로 원소를 걸러냄 (우라늄/플루토늄 탈취 틈새 발생).</p></Box>
      <Box delay={600}><h4 style={{ fontSize: 24, margin: '0 0 10px' }}>거대한 핵분열성 재고</h4><p style={{ fontSize: 20, margin: 0, color: palette.muted }}>측정 오차 0.5%만으로도 1 SQ(유의량) 유출을 통계적으로 은폐 가능.</p></Box>
      <Box delay={700}><h4 style={{ fontSize: 24, margin: '0 0 10px' }}>복합 동위원소 혼재</h4><p style={{ fontSize: 20, margin: 0, color: palette.muted }}>일부 설계는 LWR 사용후핵연료를 장전하여 U-233과 Pu가 동시에 섞여 탐지 불능.</p></Box>
    </div>
    <PageNumber n={16} total={TOTAL} />
  </div>
);

/* ─────────────── 17. 마이크로로와 군용 SMR ─────────────── */
const P17_Microreactor: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>노형별 리스크 분석 5</Eyebrow>
    <SectionTitle>마이크로로와 이동성의 역설</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 40 }}>
      출력 10 MWe 미만으로 트럭에 실어 나를 수 있는 모바일 원자로(예: Project Pele)는 공간의 제약을 없앴습니다.
    </BodyText>
    <div className="l-fadeup" style={{ animationDelay: '400ms', padding: 40, background: palette.surface, borderRadius: 16, borderTop: "4px solid " + palette.accent }}>
      <h3 style={{ fontSize: 32, margin: '0 0 20px', color: palette.accent }}>운송 중 검증 공백 (Transportation Gap)</h3>
      <ul style={{ fontSize: 28, lineHeight: 1.8, color: palette.text, margin: 0, paddingLeft: 20 }}>
        <li>원자로가 고속도로나 바다 위에 있을 때, 누구의 측정 구역(MBA)인가?</li>
        <li>도서 산간, 광산 등 사찰관 접근이 불가능한 지역 배치 문제.</li>
        <li><b>군용 마이크로로:</b> 미 국방부의 이동형 원자로는 IAEA 관할권 밖입니다. <i>"군사 시설의 마이크로로가 민간 전력망에 연결된다면 어떻게 취급할 것인가?"</i></li>
      </ul>
    </div>
    <PageNumber n={17} total={TOTAL} />
  </div>
);

/* ─────────────── 18. 해상 부유식 원전 (FNPP) ─────────────── */
const P18_FNPP: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>노형별 리스크 분석 6</Eyebrow>
    <SectionTitle>부유식 원전(FNPP)과 영토 관할권</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 50 }}>
      바다에 띄우는 원자로(예: 러시아 Akademik Lomonosov)는 해양 규범과 핵 규범이 충돌하는 영역입니다.
    </BodyText>
    <Box delay={400} type="blue">
      <ul style={{ margin: 0, paddingLeft: 20, fontSize: 30, lineHeight: 1.8, color: palette.text }}>
        <li><b>사찰 회피 기동:</b> 공해상으로 이동하여 의도적으로 IAEA 사찰단 접근을 차단할 가능성.</li>
        <li><b>규제 중복:</b> 선박 규정(SOLAS)과 원자력 안전 협약 간의 마찰.</li>
        <li><b>지정학적 무기화:</b> 분쟁 중인 인공섬(남중국해 등)에 전력을 공급하며 실효 지배를 강화하는 알박기 전략.</li>
      </ul>
    </Box>
    <PageNumber n={18} total={TOTAL} />
  </div>
);

/* ─────────────── 19. HALEU 공급망의 지정학 ─────────────── */
const P19_SupplyChain: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>핵연료 주기 이슈 1</Eyebrow>
    <SectionTitle>HALEU 공급망의 전략적 재편</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 40 }}>
      현재 전 세계 상업용 HALEU 농축의 지배자는 러시아(TENEX)입니다. SMR 르네상스는 서방 세계에 안보적 발등의 불을 떨어뜨렸습니다.
    </BodyText>
    <div style={{ display: 'flex', gap: 40, marginTop: 20 }}>
      <div className="l-fadeup" style={{ animationDelay: '400ms', flex: 1, padding: 30, background: palette.surface, border: "1px solid " + palette.line, borderRadius: 12 }}>
        <h4 style={{ fontSize: 26, color: palette.text, margin: '0 0 16px' }}>서방의 다급한 자립</h4>
        <p style={{ fontSize: 22, color: palette.muted, lineHeight: 1.6, margin: 0 }}>미국(Centrus)과 유럽 연합이 천문학적 보조금을 투입하여 러시아 탈피 독자 공급망 구축 중.</p>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '550ms', flex: 1, padding: 30, background: palette.surface, border: "1px solid " + palette.line, borderRadius: 12 }}>
        <h4 style={{ fontSize: 26, color: palette.text, margin: '0 0 16px' }}>비핵국의 독자 농축 압력</h4>
        <p style={{ fontSize: 22, color: palette.muted, lineHeight: 1.6, margin: 0 }}>SMR 도입국이 외부 의존을 피하기 위해 자국 내 농축 인프라를 지으려 할 때 확산 위험 극대화.</p>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '700ms', flex: 1, padding: 30, background: palette.accentSoft, border: "1px solid " + palette.accent, borderRadius: 12 }}>
        <h4 style={{ fontSize: 26, color: palette.accent, margin: '0 0 16px' }}>수출 통제의 도구화</h4>
        <p style={{ fontSize: 22, color: palette.text, lineHeight: 1.6, margin: 0 }}>결국 핵연료(특히 TRISO 가공 역량) 독점국이 지정학적 우위와 협상력을 행사하는 구조 형성.</p>
      </div>
    </div>
    <PageNumber n={19} total={TOTAL} />
  </div>
);

/* ─────────────── 20. 사용후핵연료 반환 전략 ─────────────── */
const P20_SNF_Retrieval: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>핵연료 주기 이슈 2</Eyebrow>
    <SectionTitle>해결책: 사용후핵연료 반환 (Take-Back) 모델</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 40 }}>
      최고의 비확산 전략은 신규 원전 진입국(NEN)이 위험 물질을 아예 보유하지 않도록 만드는 것입니다.
    </BodyText>
    <Box delay={400} type="blue">
      <h3 style={{ fontSize: 30, margin: '0 0 20px', color: palette.blue }}>연료 임대 및 회수 (Lease and Retrieval)</h3>
      <p style={{ fontSize: 26, lineHeight: 1.8, color: palette.text, margin: 0 }}>
        공급국이 SMR과 핵연료를 함께 공급하고, <Highlight>다 쓴 연료(SNF)는 다시 본국으로 회수</Highlight>해 가는 모델입니다. NEN 국가가 농축과 재처리에 손댈 <b>명분과 인센티브를 원천 차단</b>합니다.<br/><br/>
        <span style={{ color: palette.muted, fontSize: 22 }}>* 이는 미국이 UAE와 체결한 '123 협정(농축·재처리 포기 각서)'을 SMR 시대에 맞춰 물리적 모델로 진화시킨 개념입니다.</span>
      </p>
    </Box>
    <PageNumber n={20} total={TOTAL} />
  </div>
);

/* ─────────────── 21. IAEA SMR Platform ─────────────── */
const P21_IAEA_Platform: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>IAEA의 능동적 대응 1</Eyebrow>
    <SectionTitle>IAEA SMR Platform 및 NHSI</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 40 }}>
      IAEA는 이 거대한 도전에 맞서 2022년부터 플랫폼과 규제 조화 이니셔티브(NHSI)를 출범했습니다.
    </BodyText>
    <div style={{ display: 'flex', gap: 40 }}>
      <div className="l-fadeup" style={{ animationDelay: '400ms', flex: 1, padding: 40, border: "1px solid " + palette.line, borderRadius: 16 }}>
        <h4 style={{ fontSize: 30, color: palette.text, margin: '0 0 20px' }}>원스톱 지원 플랫폼</h4>
        <ul style={{ fontSize: 24, lineHeight: 1.6, color: palette.muted, margin: 0, paddingLeft: 20 }}>
          <li>개발자와 회원국의 SMR 관련 안전/보안/세이프가드 문의 단일 창구</li>
          <li>도입국 맞춤형 인프라 검토 (INIR) 특화 지원</li>
        </ul>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '600ms', flex: 1, padding: 40, background: palette.blueSoft, border: "1px solid " + palette.blue, borderRadius: 16 }}>
        <h4 style={{ fontSize: 30, color: palette.blue, margin: '0 0 20px' }}>NHSI (규제 조화 이니셔티브)</h4>
        <ul style={{ fontSize: 24, lineHeight: 1.6, color: palette.text, margin: 0, paddingLeft: 20 }}>
          <li>국가별로 다른 SMR 인증 기준을 공통 프레임워크로 조율</li>
          <li>개별 국가의 주권을 침해하지 않으면서 <b>글로벌 SMR 시장의 단일화 가속</b> 목표</li>
        </ul>
      </div>
    </div>
    <PageNumber n={21} total={TOTAL} />
  </div>
);

/* ─────────────── 22. Safeguards by Design ─────────────── */
const P22_SBD: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>IAEA의 능동적 대응 2</Eyebrow>
    <SectionTitle>Safeguards by Design (SBD)</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 40 }}>
      다 지어진 원전에 카메라를 다는 사후 방식은 실패합니다. <Highlight>설계도를 그리는 단계부터 세이프가드 인스펙터를 참여시키는 것(SBD)</Highlight>이 핵심 전략입니다.
    </BodyText>
    <Box delay={400}>
      <h3 style={{ margin: '0 0 20px', fontSize: 32, color: palette.accent }}>SBD의 6대 파급 효과</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, fontSize: 24, color: palette.text }}>
        <div>1. 사찰 최적화로 운영자 부담 대폭 감소</div>
        <div>4. 무인 기기/센서 사전 설치 공간 확보</div>
        <div>2. 천문학적 비용의 사후 시설 개조(Retrofit) 방지</div>
        <div>5. 건설 범위 및 공기 지연 리스크 해소</div>
        <div>3. 최신 원격 데이터 전송망 맞춤 설계</div>
        <div>6. 국제 수출 인증 프리패스 효과</div>
      </div>
    </Box>
    <PageNumber n={22} total={TOTAL} />
  </div>
);

/* ─────────────── 23. SMR Regulators Forum ─────────────── */
const P23_RegulatorsForum: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>IAEA의 능동적 대응 3</Eyebrow>
    <SectionTitle>SMR 규제자 포럼: 3S 통합</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 50 }}>
      Phase 3 보고서(2024)의 핵심 권고는 원자력의 3대 규제를 통합하는 <b>3S (Safety, Security, Safeguards)</b> 접근입니다.
    </BodyText>
    <div style={{ display: 'flex', gap: 40 }}>
      <div className="l-fadeup" style={{ animationDelay: '400ms', flex: 1, padding: 40, border: "2px solid " + palette.line, borderRadius: '50% 0 0 50%', textAlign: 'center' }}>
        <h4 style={{ fontSize: 30, color: palette.text }}>안전 (Safety)</h4>
        <p style={{ fontSize: 22, color: palette.muted }}>사고 예방과 대응<br/>(두꺼운 차폐벽, 폐쇄 공간)</p>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '600ms', flex: 1, padding: 40, background: palette.line, textAlign: 'center' }}>
        <h4 style={{ fontSize: 30, color: palette.text }}>보안 (Security)</h4>
        <p style={{ fontSize: 22, color: palette.muted }}>물리적 파괴/테러 방지<br/>(출입 통제, 암호화)</p>
      </div>
      <div className="l-fadeup" style={{ animationDelay: '800ms', flex: 1, padding: 40, background: palette.accentSoft, border: "2px solid " + palette.accent, borderRadius: '0 50% 50% 0', textAlign: 'center' }}>
        <h4 style={{ fontSize: 30, color: palette.accent }}>세이프가드</h4>
        <p style={{ fontSize: 22, color: palette.accent }}>핵물질 평화적 사용 검증<br/>(자유로운 시야 확보 및 사찰관 접근 필요)</p>
      </div>
    </div>
    <BodyText delay={1000} style={{ marginTop: 40, textAlign: 'center', fontWeight: 600, color: palette.text }}>
      * 이 세 가지는 종종 물리적으로 <b>상충</b>합니다 (안전을 위해 닫으면 사찰을 못 함). <br/>초기 설계 단계의 통합 튜닝만이 유일한 해법입니다.
    </BodyText>
    <PageNumber n={23} total={TOTAL} />
  </div>
);

/* ─────────────── 24. 기술적 진화 (DPA) ─────────────── */
const P24_TechEvolution: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>검증 패러다임의 전환</Eyebrow>
    <SectionTitle>다이버전 경로 분석 (Diversion Path Analysis)</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 40 }}>
      항목 계량이 불가능한 MSR 등에서 도입되는 미국의 차세대 세이프가드 평가 기법입니다.
    </BodyText>
    <Box delay={400} type="blue">
      <h3 style={{ fontSize: 28, color: palette.blue, margin: '0 0 20px' }}>리스크 기반(Risk-based) 자원 집중</h3>
      <p style={{ fontSize: 26, lineHeight: 1.8, color: palette.text, margin: 0 }}>
        무작정 모든 밸브를 검사하는 대신, 핵물질을 몰래 빼돌릴 수 있는 <b>잠재적 경로를 수학적으로 모델링</b>합니다. 각 경로의 탐지 확률을 구하고 가장 취약한 '블라인드 스팟'에만 첨단 감시 센서를 집중 배치하여 효율성을 극대화합니다.
      </p>
    </Box>
    <PageNumber n={24} total={TOTAL} />
  </div>
);

/* ─────────────── 25. 첨단 측정 기술 네트워크 ─────────────── */
const P25_VerificationTech: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', alignItems: 'center', gap: 60 }}>
    <Style />
    <div style={{ flex: 1.2 }}>
      <Eyebrow>첨단 검증 기술</Eyebrow>
      <SectionTitle size={60}>원격 무인 모니터링의 진화</SectionTitle>
      <ul style={{ fontSize: 24, lineHeight: 1.8, color: palette.muted, marginTop: 30, paddingLeft: 20 }}>
        <li className="l-fadeup" style={{ animationDelay: '200ms' }}><b>Off-gas 모니터링:</b> 기체 배출물의 Kr/Xe 비율 측정으로 내부 노심 간접 투시</li>
        <li className="l-fadeup" style={{ animationDelay: '400ms' }}><b>자기유도 X선 형광(SI-XRF):</b> 자체 방사선을 이용해 1차 액체 염의 Pu:U 비율 추적</li>
        <li className="l-fadeup" style={{ animationDelay: '600ms' }}><b>반중성미자(Antineutrino) 탐지:</b> 원자로 밖에서 반응도와 핵종 비율 비침습 검증</li>
        <li className="l-fadeup" style={{ animationDelay: '800ms' }}><b>AI 이상 탐지:</b> 위성+센서 빅데이터 통합 분석으로 비정상 운영 패턴 식별</li>
      </ul>
    </div>
    <div className="l-fadeup" style={{ flex: 0.8, animationDelay: '400ms', height: '100%', display: 'flex', alignItems: 'center' }}>
      <img src={networkImg} style={{ width: '100%', borderRadius: 16, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} alt="IAEA Monitoring Network" />
    </div>
    <PageNumber n={25} total={TOTAL} />
  </div>
);

/* ─────────────── 26. 수출 통제 프레임워크 ─────────────── */
const P26_ExportControl: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>규범과 정책</Eyebrow>
    <SectionTitle>비확산 수출 통제의 재정립</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 40 }}>
      원자력 수출의 글로벌 룰(Rule)이 SMR 스펙에 맞춰 재조정되고 있습니다.
    </BodyText>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
      <Box delay={400}>
        <h4 style={{ fontSize: 26, color: palette.text, margin: '0 0 16px' }}>미국 NRC 10 CFR Part 110</h4>
        <p style={{ fontSize: 22, color: palette.muted, lineHeight: 1.6, margin: 0 }}>첨단 원자로 수출이 '정상화'될 때까지 대통령 행정부와 위원회의 이중 게이트키핑 강력 유지.</p>
      </Box>
      <Box delay={500}>
        <h4 style={{ fontSize: 26, color: palette.text, margin: '0 0 16px' }}>NSG 트리거 리스트</h4>
        <p style={{ fontSize: 22, color: palette.muted, lineHeight: 1.6, margin: 0 }}>모바일 원자로라는 새로운 카테고리 설정 및 HALEU 제조 기기들의 이중용도 통제 강화 논의.</p>
      </Box>
      <Box delay={600} type="accent">
        <h4 style={{ fontSize: 26, color: palette.accent, margin: '0 0 16px' }}>123 협정 (양자 간)</h4>
        <p style={{ fontSize: 22, color: palette.muted, lineHeight: 1.6, margin: 0 }}>미국 기술을 도입하려는 국가는 IAEA 추가의정서(AP) 가입과 농축·재처리 포기를 압박받음.</p>
      </Box>
    </div>
    <PageNumber n={26} total={TOTAL} />
  </div>
);

/* ─────────────── 27. 지정학적 경쟁 ─────────────── */
const P27_Geopolitics: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>지정학적 차원</Eyebrow>
    <SectionTitle>SMR 수출 = 60년 장기 동맹의 구축</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 40 }}>
      SMR 판매는 단순한 발전소 납품이 아니라, <Highlight>최대 80년간 이어지는 핵연료 종속과 기술 표준의 연결</Highlight>을 의미합니다.
    </BodyText>
    <div className="l-fadeup" style={{ animationDelay: '500ms', padding: 40, background: palette.surface, borderRadius: 16, border: "1px solid " + palette.line }}>
      <table style={{ width: '100%', fontSize: 24, textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: "2px solid " + palette.line }}>
            <th style={{ padding: '15px 0', color: palette.blue }}>공급국 진영</th>
            <th style={{ padding: '15px 0' }}>수출 조건 (비확산 장벽)</th>
            <th style={{ padding: '15px 0' }}>주요 타깃</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid " + palette.line }}>
            <td style={{ padding: '20px 0', fontWeight: 600 }}>미국, 한국, 유럽</td>
            <td style={{ padding: '20px 0', color: palette.muted }}>매우 강함 (AP 강제, 123협정 준수)</td>
            <td style={{ padding: '20px 0', color: palette.muted }}>동맹국 및 신뢰 가능 NEN</td>
          </tr>
          <tr>
            <td style={{ padding: '20px 0', fontWeight: 600, color: palette.accent }}>중국, 러시아</td>
            <td style={{ padding: '20px 0', color: palette.muted }}>약함~중간 (정치적 제약 최소화)</td>
            <td style={{ padding: '20px 0', color: palette.muted }}>남반구(Global South), 독자 행보국</td>
          </tr>
        </tbody>
      </table>
    </div>
    <BodyText delay={800} style={{ marginTop: 30, fontSize: 24 }}>
      비확산 조건이 허술한 국가가 시장을 선점하면 글로벌 NPT 체제 근간이 약화됩니다. <b>미·중 패권 경쟁의 또 다른 최전선</b>입니다.
    </BodyText>
    <PageNumber n={27} total={TOTAL} />
  </div>
);

/* ─────────────── 28. 한국적 맥락 (위상) ─────────────── */
const P28_KoreanContext: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column' }}>
    <Style />
    <Eyebrow>정책 함의 1</Eyebrow>
    <SectionTitle>대한민국 SMR의 현주소와 비확산 자산</SectionTitle>
    <BodyText delay={200} style={{ marginBottom: 40 }}>
      한국(i-SMR, SMART)은 글로벌 시장에서 <b>'가장 신뢰할 수 있는 원자력 동맹'</b>으로 차별화됩니다.
    </BodyText>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
      <Box delay={400} type="blue">
        <h4 style={{ fontSize: 26, margin: '0 0 16px', color: palette.blue }}>글로벌 비확산 모범 자산</h4>
        <ul style={{ fontSize: 22, lineHeight: 1.6, color: palette.text, margin: 0, paddingLeft: 20 }}>
          <li>IAEA 추가의정서(AP) 완벽 준수 국가</li>
          <li>최고 수준의 국가계량통제(SSAC) 인프라</li>
          <li>NSG 정회원 및 한미 원자력협정 우수 모델</li>
          <li>IAEA의 SBD 개발 6개 핵심 파트너국 중 하나</li>
        </ul>
      </Box>
      <Box delay={600} type="accent">
        <h4 style={{ fontSize: 26, margin: '0 0 16px', color: palette.accent }}>구조적 결핍 (도전 과제)</h4>
        <ul style={{ fontSize: 22, lineHeight: 1.6, color: palette.text, margin: 0, paddingLeft: 20 }}>
          <li>독자적인 우라늄 농축 시설 부재</li>
          <li>HALEU 연료 공급망의 절대적 해외 의존</li>
          <li>사용후핵연료(SNF) 영구 처분 및 수출 회수 정책 미비</li>
        </ul>
      </Box>
    </div>
    <PageNumber n={28} total={TOTAL} />
  </div>
);

/* ─────────────── 29. 한국 정책 권고 ─────────────── */
const P29_KoreanPolicy: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>정책 함의 2</Eyebrow>
    <SectionTitle>한국 수출 전략을 위한 3대 제언</SectionTitle>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 30 }}>
      {[
        { t: "i-SMR 설계에 SBD 선제 통합", d: "도면 단계부터 IAEA 세이프가드를 완벽히 반영하여 '가장 수출하기 편한 규제 프리패스' 상품으로 포지셔닝." },
        { t: "HALEU 다변화 연대", d: "단기적으로 미국·유럽 중심의 HALEU 우방국 동맹체에 선제 편입하고, 장기 농축 자립의 정치적 명분 축적." },
        { t: "K-비확산 패키지 수출", d: "원전만 파는 것이 아니라, 도입국의 SSAC 체계 구축 지원과 사용후핵연료 관리를 결합한 턴키 안보 솔루션 제공." }
      ].map((item, i) => (
        <div key={i} className="l-fadeup" style={{ animationDelay: (300 + i * 200) + "ms", padding: '24px 30px', background: palette.surface, borderLeft: "4px solid " + palette.teal, borderRadius: 8 }}>
          <div style={{ fontSize: 26, fontWeight: 700, color: palette.text, marginBottom: 8 }}>{i + 1}. {item.t}</div>
          <div style={{ fontSize: 22, color: palette.muted, lineHeight: 1.6 }}>{item.d}</div>
        </div>
      ))}
    </div>
    <PageNumber n={29} total={TOTAL} />
  </div>
);

/* ─────────────── 30. 결론 ─────────────── */
const P30_Conclusion: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <Style />
    <Eyebrow>결론</Eyebrow>
    <SectionTitle size={80} margin="20px 0 60px" maxWidth={1600}>
      "SMR 시대의 핵비확산은 단순한 기술 스펙이 아니라<br/>
      <Highlight>3S+E 통합</Highlight>이라는 글로벌 정책 게임이다."
    </SectionTitle>
    <BodyText delay={600} style={{ maxWidth: 1400, fontSize: 36 }}>
      안전(Safety), 보안(Security), 세이프가드(Safeguards) 그리고 수출통제(Export Control).<br/><br/>
      이 4개의 수레바퀴가 설계 도면에서부터 완벽히 통합되지 않는 한,<br/>SMR의 기후위기 구원 르네상스는 신기루에 불과할 것입니다.
    </BodyText>
    <PageNumber n={30} total={TOTAL} />
  </div>
);

/* ─────────────── 31. 핵심 변수 (향후 5년) ─────────────── */
const P31_Future: Page = () => (
  <div style={{ ...fill, padding: PAD_Y + "px " + PAD_X + "px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <Eyebrow>관전 포인트</Eyebrow>
    <SectionTitle>2026~2031 향후 5년의 핵심 마일스톤</SectionTitle>
    <div className="l-fadeup" style={{ animationDelay: '400ms', background: palette.surface, padding: 50, borderRadius: 16, border: "1px solid " + palette.line }}>
      <ul style={{ margin: 0, paddingLeft: 20, fontSize: 30, lineHeight: 2.0, color: palette.text }}>
        <li><b>중국 HTR-PM 운영 실증:</b> 페블베드 통계적 모니터링 성공 여부</li>
        <li><b>미 국방부 Project Pele:</b> 군용 모바일 원자로의 IAEA 규제 선례</li>
        <li><b>서방 HALEU 공급망:</b> 미국 Centrus/Urenco 기반의 러시아 의존 탈피 시점</li>
        <li><b>NSG 합의 개정:</b> 이중용도 트리거 리스트에 마이크로로 포함 여부</li>
      </ul>
    </div>
    <PageNumber n={31} total={TOTAL} />
  </div>
);

export default [
  P01_Cover,
  P02_Intro,
  P03_Problem,
  P04_Questions,
  P05_SMR_Types,
  P06_Structural,
  P07_FacilityNumber,
  P08_HALEU,
  P09_SealedCore,
  P10_MultiModule,
  P11_Methodology,
  P12_PWR_SMR,
  P13_HTGR,
  P14_TRISO,
  P15_SFR,
  P16_MSR,
  P17_Microreactor,
  P18_FNPP,
  P19_SupplyChain,
  P20_SNF_Retrieval,
  P21_IAEA_Platform,
  P22_SBD,
  P23_RegulatorsForum,
  P24_TechEvolution,
  P25_VerificationTech,
  P26_ExportControl,
  P27_Geopolitics,
  P28_KoreanContext,
  P29_KoreanPolicy,
  P30_Conclusion,
  P31_Future,
];
