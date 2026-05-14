import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import postureImg from './assets/nuclear_posture_theory.png';
import clustersImg from './assets/strategic_clusters.png';
import challengesImg from './assets/emerging_challenges.png';

export const design: DesignSystem = {
  palette: { bg: '#f7f5f0', text: '#1a1814', accent: '#6d4cff' },
  fonts: {
    display: '"Times New Roman", "Georgia", "Pretendard", serif',
    body: '"Pretendard", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif',
  },
  typeScale: { hero: 130, body: 36 },
  radius: 16,
};

const palette = {
  bg: '#f7f5f0',
  surface: '#ffffff',
  text: '#1a1814',
  muted: '#6b6660',
  faint: '#a8a29a',
  line: '#e4e0d8',
  accent: '#6d4cff',
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

const PAD_X = 140;
const PAD_Y = 110;
const TOTAL = 20;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontFamily: 'var(--osd-font-body)', fontSize: 24, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 24 }}>
    {children}
  </div>
);

const PageNumber = ({ n, total }: { n: number; total: number }) => (
  <div style={{ position: 'absolute', left: PAD_X, bottom: 60, fontFamily: 'var(--osd-font-body)', fontSize: 20, letterSpacing: '0.1em', color: palette.faint }}>
    Nuclear Strategy Review · {String(n).padStart(2, '0')} / {String(total).padStart(2, '0')}
  </div>
);

const SectionTitle = ({ children, size = 72, margin = '0 0 40px' }: { children: React.ReactNode; size?: number; margin?: string }) => (
  <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: size, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', margin, color: 'var(--osd-text)' }}>
    {children}
  </h2>
);

const BodyText = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: 'var(--osd-size-body)', lineHeight: 1.6, color: palette.muted, fontWeight: 400, margin: '0 0 32px', maxWidth: 1400 }}>
    {children}
  </p>
);

const BulletList = ({ items }: { items: React.ReactNode[] }) => (
  <ul style={{ fontSize: 'var(--osd-size-body)', lineHeight: 1.6, color: 'var(--osd-text)', margin: 0, paddingLeft: 40 }}>
    {items.map((item, i) => <li key={i} style={{ marginBottom: 24 }}>{item}</li>)}
  </ul>
);

/* ─────────────── 1. Cover ─────────────── */
const Slide1: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Eyebrow>RESEARCH BRIEF</Eyebrow>
    <h1 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 'var(--osd-size-hero)', fontWeight: 700, lineHeight: 1.05, margin: '24px 0 48px', color: 'var(--osd-text)' }}>
      Nuclear Strategy Review
    </h1>
    <div style={{ height: 2, width: 200, background: 'var(--osd-accent)', marginBottom: 48 }} />
    <BodyText>
      9개 핵보유국의 공통된 전략적 프레임워크, 차별화된 태세,<br/>그리고 새롭게 부상하는 위협에 대한 체계적 리뷰
    </BodyText>
    <PageNumber n={1} total={TOTAL} />
  </div>
);

/* ─────────────── 2. Abstract ─────────────── */
const Slide2: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Eyebrow>Abstract</Eyebrow>
    <SectionTitle>리뷰의 목적 및 개요</SectionTitle>
    <BodyText>
      이 프레젠테이션은 냉전 시대부터 현재의 다극화된 핵 시대에 이르기까지 9개 핵보유국의 
      핵 전략을 체계적으로 분석합니다.
    </BodyText>
    <BulletList items={[
      '공통점: 모든 국가가 "억제(Deterrence)"를 일차적 목표로 삼으며, 2차 타격 생존성을 우선시함.',
      '차이점: 선제사용 교리, 무기고 규모 및 구성, 투명성, 전술핵 강조 여부 등에서 크게 분화됨.',
      '발견: 현대 핵 전략은 단일 스펙트럼이 아닌, 4개의 질적으로 다른 논리 체계(클러스터)로 구분됨.',
    ]} />
    <PageNumber n={2} total={TOTAL} />
  </div>
);

/* ─────────────── 3. Core Concept ─────────────── */
const Slide3: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Eyebrow>Core Principle</Eyebrow>
    <SectionTitle size={96} margin="0 0 60px">
      모든 핵 전략의 근간:<br/>
      <span style={{ color: 'var(--osd-accent)' }}>억제 (Deterrence)</span>
    </SectionTitle>
    <BodyText>
      국가의 규모, 안보 환경, 정치 체제에 관계없이 모든 핵보유국은 적의 주요 공격을 
      보복의 위협으로 예방하는 "억제"를 핵무기 보유의 핵심 명분으로 삼고 있습니다.
    </BodyText>
    <PageNumber n={3} total={TOTAL} />
  </div>
);

/* ─────────────── 4. Theories ─────────────── */
const Slide4: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Eyebrow>Theoretical Foundations</Eyebrow>
    <SectionTitle>핵심 전략 이론가들</SectionTitle>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginTop: 40 }}>
      {[
        { name: 'Bernard Brodie', desc: '군대의 목적은 전쟁에서 이기는 것이 아니라 전쟁을 예방하는 것' },
        { name: 'Thomas Schelling', desc: '강압 외교(Coercive Diplomacy)와 통제 불능의 위험을 활용하는 전략' },
        { name: 'Herman Kahn', desc: '확전 사다리(Escalation Ladder)와 제한적 핵 전쟁 수행 가능성 제시' },
        { name: 'Kenneth Waltz', desc: '핵 확산이 상호 확증 파괴(MAD)의 확장을 통해 안정을 가져온다는 낙관론' }
      ].map(t => (
        <div key={t.name} style={{ background: palette.surface, padding: 32, borderRadius: 12, border: `1px solid ${palette.line}` }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--osd-accent)', marginBottom: 16 }}>{t.name}</div>
          <div style={{ fontSize: 24, lineHeight: 1.5, color: palette.muted }}>{t.desc}</div>
        </div>
      ))}
    </div>
    <PageNumber n={4} total={TOTAL} />
  </div>
);

/* ─────────────── 5. Narang's Posture Theory ─────────────── */
const Slide5: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Eyebrow>Frameworks</Eyebrow>
    <SectionTitle>나랑(Narang)의 지역 핵 태세 이론</SectionTitle>
    <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 60 }}>
      <div style={{ flex: 1 }}>
        <BulletList items={[
          <><strong style={{ color: 'var(--osd-accent)' }}>확실한 보복 (Assured Retaliation):</strong> 생존 가능한 2차 타격 능력 확보 (예: 중국, 인도)</>,
          <><strong style={{ color: 'var(--osd-accent)' }}>비대칭 확전 (Asymmetric Escalation):</strong> 재래식 공격 방어를 위한 선제적 전술핵 사용 태세 (예: 파키스탄)</>,
          <><strong style={{ color: 'var(--osd-accent)' }}>촉매적 억제 (Catalytic Deterrence):</strong> 강대국의 개입을 유도하기 위한 모호성 활용 (예: 초기 이스라엘)</>
        ]} />
      </div>
      <div style={{ flex: 1, height: 400, borderRadius: 12, overflow: 'hidden', border: `1px solid ${palette.line}` }}>
        <img src={postureImg} style={{ width: '100%', height: '100%', objectFit: 'contain', background: 'white' }} alt="Nuclear Posture Theory" />
      </div>
    </div>
    <PageNumber n={5} total={TOTAL} />
  </div>
);

/* ─────────────── 6. Case 1: USA ─────────────── */
const Slide6: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Eyebrow>Case Study 1</Eyebrow>
    <SectionTitle>미국: 패권적 억제와 확장 억제</SectionTitle>
    <BodyText>
      가장 오랫동안 강력한 핵 억제력을 유지해온 국가는 상호확증파괴(MAD)와 유연반응 전략을 병행합니다.
    </BodyText>
    <BulletList items={[
      '전 세계 동맹국(NATO, 한국, 일본 등)을 보호하기 위한 확장 억제(Extended Deterrence) 제공',
      '동맹국을 안심시키면서도 명시적인 핵 사용 조건을 피하기 위해 "계산된 모호성(Calculated Ambiguity)" 유지',
      '선제불사용(NFU) 선언을 거부하며, 극단적인 비핵 WMD 공격에도 핵 사용 가능성 열어둠'
    ]} />
    <PageNumber n={6} total={TOTAL} />
  </div>
);

/* ─────────────── 7. Case 2: Russia ─────────────── */
const Slide7: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Eyebrow>Case Study 2</Eyebrow>
    <SectionTitle>러시아: 전쟁 수행과 전략적 균형</SectionTitle>
    <BodyText>
      단순한 억제를 넘어 전장에서 실제로 승리하기 위한 군사적 수단으로 핵을 바라보는 전통을 유지합니다.
    </BodyText>
    <BulletList items={[
      'NATO의 재래식 전력 우위에 대응하여 "확전 관리를 위한 긴장 고조(Escalate to De-escalate)" 교리 채택',
      '재래식 분쟁에서 불리할 때 제한적인 전술핵 공격을 가하여 적의 작전 중단을 강제하려는 전략',
      '최근 New START 조약 참여 중단으로 미국과의 양자 군비 통제 제약이 해제된 상태'
    ]} />
    <PageNumber n={7} total={TOTAL} />
  </div>
);

/* ─────────────── 8. Case 3: China ─────────────── */
const Slide8: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Eyebrow>Case Study 3</Eyebrow>
    <SectionTitle>중국: 최소 억제와 현대화 가속</SectionTitle>
    <BodyText>
      초기부터 엄격한 선제불사용(NFU)과 방어적 최소 억제를 고수해왔으나, 최근 급격한 태세 변화를 보입니다.
    </BodyText>
    <BulletList items={[
      '역사적으로 소규모의 생존 가능한 핵전력만으로도 충분하다는 "최소 억제(Minimum Deterrence)" 철학 유지',
      '최근 ICBM 사일로 네트워크 건설, 도로 이동형 미사일 배치 등 핵 무기고를 유례없이 빠른 속도로 확장 중',
      '단순 보복 능력을 넘어 미국과의 전략적 경쟁을 의식한 실질적 전쟁 억제력(Warfighting options) 확보 우려'
    ]} />
    <PageNumber n={8} total={TOTAL} />
  </div>
);

/* ─────────────── 9. Case 4: France & UK ─────────────── */
const Slide9: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Eyebrow>Case Study 4</Eyebrow>
    <SectionTitle>영국 & 프랑스: 주권적 억제</SectionTitle>
    <BodyText>
      미국의 확장 억제 신뢰성에 대한 우려로 출발하여, 국가 생존을 위한 독자적인 억제력을 구축했습니다.
    </BodyText>
    <BulletList items={[
      '영국: 상시 해상 억제(CASD)를 통해 적의 주요 거점에 용인할 수 없는 피해를 준다는 "최소 신뢰 억제" 전략',
      '프랑스: 전방위 억제(Deterrence tous azimuts)라는 독자 교리를 통해 동맹의 보호 없이도 스스로를 방어',
      '두 국가 모두 핵 투사 수단을 수백 기 수준으로 제한하며 "충분성(Sufficiency)"의 논리를 따름'
    ]} />
    <PageNumber n={9} total={TOTAL} />
  </div>
);

/* ─────────────── 10. Case 5: India ─────────────── */
const Slide10: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Eyebrow>Case Study 5</Eyebrow>
    <SectionTitle>인도: NFU와 신뢰성 딜레마</SectionTitle>
    <BodyText>
      정치문화적 배경과 비대칭적 재래식 우위를 바탕으로 선제불사용(NFU) 원칙을 고수하고 있습니다.
    </BodyText>
    <BulletList items={[
      'NFU와 함께 상대의 어떠한 핵 공격에 대해서도 "대규모 보복(Massive Retaliation)"을 가한다는 교리',
      '문제점: 파키스탄이 전장에서 소규모 전술핵을 사용할 경우, 전면적인 대규모 핵 보복을 가하는 것이 현실적으로 가능한가에 대한 신뢰성(Credibility) 논란',
      '최근 선제적 대중 핵타격 옵션 등 유연성을 확보하려는 내부 논의가 진행 중'
    ]} />
    <PageNumber n={10} total={TOTAL} />
  </div>
);

/* ─────────────── 11. Case 6: Pakistan ─────────────── */
const Slide11: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Eyebrow>Case Study 6</Eyebrow>
    <SectionTitle>파키스탄: 비대칭 확전과 전술핵</SectionTitle>
    <BodyText>
      인도의 압도적인 재래식 군사력을 상쇄하기 위해 극단적인 확전 위험을 감수하는 전략을 택했습니다.
    </BodyText>
    <BulletList items={[
      '선제불사용(NFU)을 명시적으로 거부하며, 인도의 재래식 공격 성공 시 핵우산을 펼침',
      '전방 배치된 단거리 전술핵(Nasr)을 통해 "전 영역 억제(Full-Spectrum Deterrence)" 구축',
      '안정-불안정 역설: 상호 핵 억제로 전면전은 막았지만, 재래식 및 전술 수준에서의 군사적 긴장과 오판 위험은 극도로 높아짐'
    ]} />
    <PageNumber n={11} total={TOTAL} />
  </div>
);

/* ─────────────── 12. Case 7: Israel ─────────────── */
const Slide12: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Eyebrow>Case Study 7</Eyebrow>
    <SectionTitle>이스라엘: 전략적 모호성</SectionTitle>
    <BodyText>
      핵무기 보유 자체를 인정하지 않는 "오파시티(Opacity)" 모델을 유지하는 독특한 사례입니다.
    </BodyText>
    <BulletList items={[
      '주변 아랍 국가들의 핵무장 도미노를 자극하지 않으면서도, 재래식 존망 위협에 대한 실질적인 억제력 확보',
      '미국의 비확산 정책적 요구사항을 충족시키면서 외교적 유연성을 보존하는 전략적 타협',
      '한계: 명시적인 교리나 신호가 없기 때문에 적이 억제 신호를 제대로 내재화했는지 확인하기 어려움'
    ]} />
    <PageNumber n={12} total={TOTAL} />
  </div>
);

/* ─────────────── 13. Case 8: North Korea ─────────────── */
const Slide13: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Eyebrow>Case Study 8</Eyebrow>
    <SectionTitle>북한: 정권 생존과 강압적 억제</SectionTitle>
    <BodyText>
      비현상유지 국가로서 국가 영토 방어보다는 "정권 생존 보장"을 일차적 목적으로 핵을 고도화했습니다.
    </BodyText>
    <BulletList items={[
      '2022년 핵무력 정책법을 통해 선제타격 조건을 명문화하고 "자동 보복(Dead hand)" 메커니즘을 도입',
      '전통적인 억제를 넘어 작전 통제권 상실 시에도 반격이 가능하도록 설계된 명시적인 "전쟁 수행 교리"',
      '최근 전술핵 탑재 600mm 초대형 방사포와 AI 통합 무인 플랫폼 개발 등 비대칭/전쟁수행 하이브리드 태세 구축'
    ]} />
    <PageNumber n={13} total={TOTAL} />
  </div>
);

/* ─────────────── 14. Commonalities ─────────────── */
const Slide14: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Eyebrow>Analysis</Eyebrow>
    <SectionTitle>전략의 공통 요소</SectionTitle>
    <BodyText>
      상이한 조건 속에서도 9개 국가의 핵 전략을 관통하는 보편적인 특성들이 존재합니다.
    </BodyText>
    <BulletList items={[
      <><strong style={{ color: 'var(--osd-accent)' }}>억제 우선주의:</strong> 어떤 나라도 억제 외의 공격적인 영토 확장용으로 핵을 표방하지 않음</>,
      <><strong style={{ color: 'var(--osd-accent)' }}>2차 타격 생존성 (Second-Strike Survivability):</strong> 지리적 분산, 3축 체계(Triad), 사일로 강화 등을 통해 선제타격을 견디고 보복할 수 있는 능력에 집중</>,
      <><strong style={{ color: 'var(--osd-accent)' }}>신뢰성 신호 (Signaling):</strong> 미사일 실험, 훈련 공개, 독트린 발표 등을 통해 억제력이 블러핑이 아님을 증명</>,
      <><strong style={{ color: 'var(--osd-accent)' }}>문민 통제 구조:</strong> 정치 지도자의 허가 없이는 핵을 사용할 수 없는 공식적인 명령 체계 유지 (북한의 경우 예외적 자동화 조항 포함)</>
    ]} />
    <PageNumber n={14} total={TOTAL} />
  </div>
);

/* ─────────────── 15. Divergences ─────────────── */
const Slide15: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Eyebrow>Analysis</Eyebrow>
    <SectionTitle>전략의 주요 차이점</SectionTitle>
    <BodyText>
      단일한 "억제 이론"으로는 설명되지 않는 결정적이고 구조적인 차이점들이 존재합니다.
    </BodyText>
    <BulletList items={[
      <><strong style={{ color: 'var(--osd-accent)' }}>선제사용 (First-Use) 여부:</strong> 확전 관리나 방어를 위해 선제 핵타격을 허용할 것인가 (미·러·파·북 등) vs 방어적 보복용으로만 쓸 것인가 (중·인)</>,
      <><strong style={{ color: 'var(--osd-accent)' }}>무기고의 규모 (Scale):</strong> 초강대국의 수천 기 단위의 무기고 vs 최소 억제 국가들의 100~300기 수준 무기고</>,
      <><strong style={{ color: 'var(--osd-accent)' }}>확장 억제 (Extended Deterrence):</strong> 미국처럼 타국을 위한 핵우산을 제공하는가, 영/프/북처럼 자가 방어에만 집중하는가</>
    ]} />
    <PageNumber n={15} total={TOTAL} />
  </div>
);

/* ─────────────── 16. Tactical vs Strategic ─────────────── */
const Slide16: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Eyebrow>Key Divergence</Eyebrow>
    <SectionTitle>전술핵과 전략핵의 시각 차이</SectionTitle>
    <BodyText>
      핵무기를 일차적으로 정치적 억제 수단으로 볼 것인가, 아니면 군사적 승리의 도구로 볼 것인가.
    </BodyText>
    <BulletList items={[
      <><strong style={{ color: 'var(--osd-accent)' }}>전술핵 의존 국가 (러시아, 파키스탄, 북한):</strong> 전방 배치된 단거리 시스템을 통해 "전쟁 수행(Warfighting)" 교리를 명시적으로 채택. 이는 사용 임계치를 낮추고 오판의 위험을 크게 높임.</>,
      <><strong style={{ color: 'var(--osd-accent)' }}>순수 전략핵 국가 (영국, 인도):</strong> 핵무기를 전장에서 쓰기 위한 도구가 아닌, 국가 생존을 지키는 최후의 수단으로 간주하여 순수 전략 병기만을 유지.</>
    ]} />
    <PageNumber n={16} total={TOTAL} />
  </div>
);

/* ─────────────── 17. 4 Strategic Clusters ─────────────── */
const Slide17: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Eyebrow>Synthesis</Eyebrow>
    <SectionTitle>4대 전략 클러스터</SectionTitle>
    <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 60 }}>
      <div style={{ flex: 1 }}>
        <BodyText>
          전 세계 핵 전략은 단순한 크기 차이가 아닌 4개의 질적으로 다른 시스템으로 분류됩니다.
        </BodyText>
        <BulletList items={[
          '초대강국 억제 안정성 (미국, 러시아)',
          '최소 억제 충분성 (중국, 프랑스, 영국)',
          '비대칭 확전 우위 (인도, 파키스탄)',
          '전략적 모호성 및 정권 생존 (이스라엘, 북한)'
        ]} />
      </div>
      <div style={{ flex: 1, height: 400, borderRadius: 12, overflow: 'hidden', border: `1px solid ${palette.line}` }}>
        <img src={clustersImg} style={{ width: '100%', height: '100%', objectFit: 'contain', background: 'white' }} alt="Strategic Clusters" />
      </div>
    </div>
    <PageNumber n={17} total={TOTAL} />
  </div>
);

/* ─────────────── 18. Cluster Focus ─────────────── */
const Slide18: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Eyebrow>Cluster Analysis</Eyebrow>
    <SectionTitle>초대강국 안정성 vs 최소 억제 충분성</SectionTitle>
    <div style={{ display: 'flex', gap: 40, marginTop: 40 }}>
      <div style={{ flex: 1, padding: 40, background: palette.surface, borderRadius: 12, border: `1px solid ${palette.line}` }}>
        <div style={{ fontSize: 32, fontWeight: 700, color: 'var(--osd-text)', marginBottom: 24 }}>초대강국 (미·러)</div>
        <ul style={{ fontSize: 'var(--osd-size-body)', lineHeight: 1.6, color: palette.muted, paddingLeft: 32 }}>
          <li style={{ marginBottom: 16 }}>MAD 체제를 기반으로 한 방대한 무기고 유지</li>
          <li style={{ marginBottom: 16 }}>수십 년간의 양자 군비 통제 조약(New START 등)으로 투명성 관리</li>
          <li style={{ marginBottom: 16 }}>전 세계 동맹국 보호를 위한 확장 억제 부담</li>
        </ul>
      </div>
      <div style={{ flex: 1, padding: 40, background: palette.surface, borderRadius: 12, border: `1px solid ${palette.line}` }}>
        <div style={{ fontSize: 32, fontWeight: 700, color: 'var(--osd-text)', marginBottom: 24 }}>최소 억제 (중·프·영)</div>
        <ul style={{ fontSize: 'var(--osd-size-body)', lineHeight: 1.6, color: palette.muted, paddingLeft: 32 }}>
          <li style={{ marginBottom: 16 }}>적의 선제 타격을 견딜 수 있는 수백 기 수준의 병력에 만족</li>
          <li style={{ marginBottom: 16 }}>핵 우위(Superiority)보다는 충분성(Sufficiency)에 집중</li>
          <li style={{ marginBottom: 16 }}>최근 중국의 급격한 무기고 확장으로 인해 이 클러스터의 경계가 모호해지는 중</li>
        </ul>
      </div>
    </div>
    <PageNumber n={18} total={TOTAL} />
  </div>
);

/* ─────────────── 19. Emerging Challenges ─────────────── */
const Slide19: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column' }}>
    <Eyebrow>Future Outlook</Eyebrow>
    <SectionTitle>핵 안정성의 새로운 위협</SectionTitle>
    <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 60 }}>
      <div style={{ flex: 1 }}>
        <BodyText>
          기술적 발전이 기존의 억제 프레임워크와 의사결정 시간을 급격히 압축하고 있습니다.
        </BodyText>
        <BulletList items={[
          <><strong style={{ color: 'var(--osd-accent)' }}>극초음속 활공체 (Hypersonics):</strong> 요격을 어렵게 하고 비행 시간을 단축시켜 적의 의사결정 체계를 마비시킴</>,
          <><strong style={{ color: 'var(--osd-accent)' }}>AI 통합 (AI Integration):</strong> 북한과 러시아를 중심으로 조기 경보 및 지휘 통제에 자율 시스템이 도입되며 전통적인 "문민 통제"의 한계가 시험됨</>,
          <><strong style={{ color: 'var(--osd-accent)' }}>군비 통제 붕괴:</strong> 2026년 양자 군비 조약 만료로 인한 투명성 기제의 상실</>
        ]} />
      </div>
      <div style={{ flex: 1, height: 400, borderRadius: 12, overflow: 'hidden', border: `1px solid ${palette.line}` }}>
        <img src={challengesImg} style={{ width: '100%', height: '100%', objectFit: 'contain', background: 'white' }} alt="Emerging Challenges" />
      </div>
    </div>
    <PageNumber n={19} total={TOTAL} />
  </div>
);

/* ─────────────── 20. Conclusion ─────────────── */
const Slide20: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Eyebrow>Conclusion</Eyebrow>
    <SectionTitle size={88} margin="0 0 60px">
      다극화 시대의 전략 재고
    </SectionTitle>
    <BodyText>
      초강대국 간의 냉전적 안정성에 기반한 전통적 억제 이론은 현대의 복잡한 핵 역학을 
      설명하기에 부족합니다. 비대칭 확전 태세, 전술핵의 확산, 그리고 파괴적인 신기술이 
      결합된 다극화 환경은 전략의 근본적인 재설계를 요구하고 있습니다.
    </BodyText>
    <PageNumber n={20} total={TOTAL} />
  </div>
);

export const meta: SlideMeta = { title: 'Nuclear Strategy Review' };

export default [
  Slide1, Slide2, Slide3, Slide4, Slide5, 
  Slide6, Slide7, Slide8, Slide9, Slide10, 
  Slide11, Slide12, Slide13, Slide14, Slide15, 
  Slide16, Slide17, Slide18, Slide19, Slide20
] satisfies Page[];
