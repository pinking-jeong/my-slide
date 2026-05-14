import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import paradoxImg from './assets/kingpin_paradox.png';
import casesImg from './assets/decapitation_cases.png';
import chinaNkImg from './assets/implications_nk_china.png';

export const design: DesignSystem = {
  palette: { bg: '#f6f3ec', text: '#0a0a0a', accent: '#ff4f1a' },
  fonts: {
    display: "'Inter', 'Pretendard', system-ui, sans-serif",
    body: "'Inter', 'Pretendard', system-ui, sans-serif",
  },
  typeScale: { hero: 140, body: 36 },
  radius: 0,
};

const tokens = {
  ink: '#0a0a0a',
  paper: '#f6f3ec',
  accent: '#ff4f1a',
  cream: '#fffdf6',
  blue: '#3b82f6',
  mono: "'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace",
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
  padding: '110px 140px',
  display: 'flex',
  flexDirection: 'column',
} as const;

const brutalBox = {
  background: tokens.cream,
  border: `4px solid ${tokens.ink}`,
  boxShadow: `8px 8px 0 ${tokens.ink}`,
  padding: 40,
};

const TOTAL = 20;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontFamily: tokens.mono, fontSize: 24, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: tokens.accent, marginBottom: 32, display: 'inline-block', borderBottom: `4px solid ${tokens.ink}`, paddingBottom: 8 }}>
    {children}
  </div>
);

const PageNumber = ({ n }: { n: number }) => (
  <div style={{ position: 'absolute', right: 60, bottom: 60, fontFamily: tokens.mono, fontSize: 32, fontWeight: 800, color: tokens.paper, background: tokens.ink, padding: '8px 24px', border: `4px solid ${tokens.ink}` }}>
    {String(n).padStart(2, '0')} / {TOTAL}
  </div>
);

const Title = ({ children, size = 88, margin = '0 0 48px' }: { children: React.ReactNode; size?: number; margin?: string }) => (
  <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: size, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', margin, color: 'var(--osd-text)', textTransform: 'uppercase' }}>
    {children}
  </h2>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: 'var(--osd-size-body)', lineHeight: 1.6, fontWeight: 500, margin: '0 0 32px', maxWidth: 1400, color: tokens.ink }}>
    {children}
  </p>
);

/* ─────────────────────── Pages ─────────────────────── */

const Slide1: Page = () => (
  <div style={{ ...fill, justifyContent: 'center', background: tokens.accent, color: tokens.paper }}>
    <div style={{ ...brutalBox, background: tokens.paper, color: tokens.ink, transform: 'rotate(-1deg)' }}>
      <div style={{ fontFamily: tokens.mono, fontSize: 28, fontWeight: 700, marginBottom: 24, color: tokens.accent }}>POLICY REPORT // MARCH 2026</div>
      <h1 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 130, fontWeight: 900, lineHeight: 1, margin: '0 0 32px', letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
        Trump <br/>'Kingpin Strategy'
      </h1>
      <div style={{ fontSize: 40, fontWeight: 700, maxWidth: 1200, lineHeight: 1.4 }}>
        참수 작전, 전략적 근거, 그리고 중국 및 북한에 미치는 파급 효과
      </div>
    </div>
    <PageNumber n={1} />
  </div>
);

const Slide2: Page = () => (
  <div style={fill}>
    <Eyebrow>Executive Summary</Eyebrow>
    <Title>참수 작전의 귀환</Title>
    <div style={{ ...brutalBox, marginTop: 24 }}>
      <Body>
        트럼프 행정부(2025-2026)는 적대 정권과 범죄 조직의 <strong>최고지도자(Apex Leader)</strong>를 
        직접 타격하여 조직을 붕괴시키는 '킹핀 전략(Kingpin Strategy)'을 강력하게 부활시켰습니다.
      </Body>
      <Body>
        오바마 행정부의 제한적이고 은밀한 표적 살해와 달리, 현재의 작전은 경제 제재, 외교적 고립,
        그리고 <strong>물리적 리더십 제거</strong>를 결합한 '최대 압박 플러스(Maximum Pressure Plus)' 
        독트린으로 명시적이고 공개적으로 실행되고 있습니다.
      </Body>
    </div>
    <PageNumber n={2} />
  </div>
);

const Slide3: Page = () => (
  <div style={fill}>
    <Eyebrow>2026 Operations</Eyebrow>
    <Title>3대 주요 참수 작전</Title>
    <div style={{ display: 'flex', gap: 40, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <ul style={{ fontSize: 36, fontWeight: 700, lineHeight: 2, paddingLeft: 40 }}>
          <li><span style={{ color: tokens.accent }}>니콜라스 마두로</span> (베네수엘라 대통령)</li>
          <li><span style={{ color: tokens.blue }}>엘 멘초</span> (CJNG 카르텔 수장)</li>
          <li><span style={{ color: tokens.ink }}>알리 하메네이</span> (이란 최고지도자)</li>
        </ul>
      </div>
      <div style={{ flex: 1, ...brutalBox, padding: 0, height: 500 }}>
        <img src={casesImg} alt="Decapitation Cases" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
    </div>
    <PageNumber n={3} />
  </div>
);

const Slide4: Page = () => (
  <div style={fill}>
    <Eyebrow>Case Study 1</Eyebrow>
    <Title>니콜라스 마두로 체포</Title>
    <div style={{ ...brutalBox, borderLeft: `16px solid ${tokens.blue}` }}>
      <div style={{ fontFamily: tokens.mono, fontSize: 24, marginBottom: 16 }}>OPERATION SOUTHERN SPEAR (Jan 3, 2026)</div>
      <Body>
        미 특수부대와 DEA, 콜롬비아 정보국의 합동 작전으로 마두로 베네수엘라 대통령이 체포되었습니다. 
        (2020년 마약 테러 혐의 기소 및 1,500만 달러 현상금 수배의 결과)
      </Body>
      <Body>
        18개월간의 통신 감청 및 동선 추적 끝에 국경 인근의 비밀 회동 장소에서 작전이 성공적으로 수행되었습니다.
      </Body>
    </div>
    <PageNumber n={4} />
  </div>
);

const Slide5: Page = () => (
  <div style={fill}>
    <Eyebrow>Case 1 Outcome</Eyebrow>
    <Title>권력 공백과 인도주의적 위기</Title>
    <div style={{ ...brutalBox, background: tokens.ink, color: tokens.paper, boxShadow: `8px 8px 0 ${tokens.accent}` }}>
      <Body>
        <span style={{ color: tokens.cream }}>체포 직후 베네수엘라는 극심한 권력 투쟁에 돌입했습니다.</span>
      </Body>
      <ul style={{ fontSize: 32, lineHeight: 1.6, paddingLeft: 40 }}>
        <li style={{ marginBottom: 16 }}>델시 로드리게스 부통령의 대통령 대행 선언</li>
        <li style={{ marginBottom: 16 }}>군부 파벌 및 콜렉티보(무장 단체)들의 독자 행동</li>
        <li style={{ marginBottom: 16 }}>미국은 야당 지도자 에드문도 곤살레스를 인정했으나, 실질적 통제력 부재</li>
      </ul>
      <Body>
        <span style={{ color: tokens.accent, fontWeight: 700 }}>결과:</span> 치안 붕괴와 석유 생산의 추가 하락으로 50만 명 이상의 추가 난민이 발생했습니다.
      </Body>
    </div>
    <PageNumber n={5} />
  </div>
);

const Slide6: Page = () => (
  <div style={fill}>
    <Eyebrow>Case Study 2</Eyebrow>
    <Title>엘 멘초 사살</Title>
    <div style={{ ...brutalBox, borderLeft: `16px solid ${tokens.accent}` }}>
      <div style={{ fontFamily: tokens.mono, fontSize: 24, marginBottom: 16 }}>JALISCO STATE RAID (Feb 22, 2026)</div>
      <Body>
        멕시코 최고 세력인 할리스코 신세대 카르텔(CJNG)의 수장 '엘 멘초'가 
        미 DEA 고문단과 멕시코 연방군의 급습으로 사살되었습니다.
      </Body>
      <Body>
        이 작전은 2025년 개정된 메리다 프레임워크(Mérida Framework)에 따른 양국 안보 협력 강화와 
        통신 감청 정보 공유를 통해 가능했습니다.
      </Body>
    </div>
    <PageNumber n={6} />
  </div>
);

const Slide7: Page = () => (
  <div style={fill}>
    <Eyebrow>Case 2 Outcome</Eyebrow>
    <Title>'엘 차포 효과'의 재현</Title>
    <div style={{ ...brutalBox }}>
      <Body>
        조직의 수장이 사라지자, CJNG 내부 파벌(아들 '엘 멘치토' 세력 vs 지역 보스들) 간의 
        주도권 다툼이 폭발했습니다.
      </Body>
      <Body>
        <strong>폭력의 급증:</strong> 72시간 내에 5개 주에서 보복 공격이 발생하여 40명 이상의 법집행관 및 
        정부 관료가 사망했습니다. 이는 과거 시날로아 카르텔의 '엘 차포' 체포 당시 발생했던 
        유혈 사태와 정확히 일치하는 패턴입니다.
      </Body>
    </div>
    <PageNumber n={7} />
  </div>
);

const Slide8: Page = () => (
  <div style={fill}>
    <Eyebrow>Case Study 3</Eyebrow>
    <Title>알리 하메네이 정밀 타격</Title>
    <div style={{ ...brutalBox, borderLeft: `16px solid ${tokens.ink}` }}>
      <div style={{ fontFamily: tokens.mono, fontSize: 24, marginBottom: 16 }}>JOINT U.S.-ISRAELI OPERATION (Feb 28, 2026)</div>
      <Body>
        1989년부터 이란을 철권통치해 온 알리 하메네이 최고지도자가 미-이스라엘 
        합동 정밀 타격으로 사망했습니다.
      </Body>
      <Body>
        테헤란의 지도부 관저를 겨냥한 이 작전은 하메네이의 위치를 높은 신뢰도로 확보한 
        인텔리전스를 바탕으로 장거리 정밀 탄약을 사용해 실행되었습니다.
      </Body>
    </div>
    <PageNumber n={8} />
  </div>
);

const Slide9: Page = () => (
  <div style={fill}>
    <Eyebrow>Case 3 Outcome</Eyebrow>
    <Title>계승 투쟁과 전략적 파장</Title>
    <div style={{ ...brutalBox, background: tokens.ink, color: tokens.paper, boxShadow: `8px 8px 0 ${tokens.accent}` }}>
      <Body>
        <span style={{ color: tokens.cream }}>근대 역사상 가장 중대한 참수 작전으로, 이란 내부에 4개의 파벌이 대립 중입니다:</span>
      </Body>
      <ul style={{ fontSize: 32, lineHeight: 1.6, paddingLeft: 40, marginBottom: 32 }}>
        <li>강경파 혁명수비대 (IRGC) 지휘관들</li>
        <li>실용주의 보수 성직자 그룹</li>
        <li>개혁파 세력</li>
        <li>해외 무장 프록시 (쿠드스군, 헤즈볼라 등)</li>
      </ul>
      <Body>
        핵 프로그램의 지휘 통제권은 일시적으로 혼란에 빠졌으나 완전히 해체되지는 않았습니다.
      </Body>
    </div>
    <PageNumber n={9} />
  </div>
);

const Slide10: Page = () => (
  <div style={fill}>
    <Eyebrow>Theoretical Foundations</Eyebrow>
    <Title>전략의 논리적 배경</Title>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
      <div style={brutalBox}>
        <div style={{ fontSize: 32, fontWeight: 900, marginBottom: 16 }}>조직 참수 이론</div>
        <p style={{ fontSize: 24, lineHeight: 1.6 }}>
          최고 지도부 제거는 수직적 적대 조직에 치명적인 조정 비용(Coordination costs)을 강제하여, 
          외부 작전보다 내부 후계 구도 정리에 자원을 소모하게 만듭니다.
        </p>
      </div>
      <div style={brutalBox}>
        <div style={{ fontSize: 32, fontWeight: 900, marginBottom: 16 }}>강압 외교 (Coercive Diplomacy)</div>
        <p style={{ fontSize: 24, lineHeight: 1.6 }}>
          가장 보호받는 리더조차 제거할 수 있다는 의지를 보여줌으로써, 잠재적 적국들의 
          안보 자신감을 붕괴시키고 미국에 대항할 의지를 꺾습니다.
        </p>
      </div>
    </div>
    <PageNumber n={10} />
  </div>
);

const Slide11: Page = () => (
  <div style={fill}>
    <Eyebrow>The Concentration Hypothesis</Eyebrow>
    <Title>권력 집중의 취약점</Title>
    <div style={{ ...brutalBox, padding: 60, textAlign: 'center' }}>
      <h3 style={{ fontSize: 48, fontWeight: 900, marginBottom: 24, textTransform: 'uppercase' }}>Single Point of Failure</h3>
      <Body>
        행정부의 판단: 개인주의적 독재 체제(Personalist Dictatorships)에서는 
        권력이 한 사람에게 비정상적으로 집중되어 있어, 
        해당 인물의 물리적 제거가 곧 시스템 전체의 마비를 의미한다.
      </Body>
    </div>
    <PageNumber n={11} />
  </div>
);

const Slide12: Page = () => (
  <div style={fill}>
    <Eyebrow>The Kingpin Paradox</Eyebrow>
    <Title>킹핀의 역설</Title>
    <div style={{ display: 'flex', gap: 40, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1, ...brutalBox }}>
        <Body>
          참수 작전은 조직의 구조적 갈등을 해결하는 것이 아니라, 
          오히려 <strong>하나의 통제 가능한 적을 통제 불가능한 다수의 폭력 집단으로 분산</strong>시키는 
          위험성을 내포하고 있습니다.
        </Body>
        <Body>
          체계적인 후계 절차가 없는 권력 공백은 필연적으로 치명적인 파벌 간 내전을 야기합니다.
        </Body>
      </div>
      <div style={{ flex: 1, ...brutalBox, padding: 0, height: 400 }}>
        <img src={paradoxImg} alt="Kingpin Paradox" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
    </div>
    <PageNumber n={12} />
  </div>
);

const Slide13: Page = () => (
  <div style={fill}>
    <Eyebrow>Empirical Record</Eyebrow>
    <Title>경험적 한계의 역사</Title>
    <div style={{ ...brutalBox, background: tokens.ink, color: tokens.paper, boxShadow: `8px 8px 0 ${tokens.accent}` }}>
      <Body>
        <span style={{ color: tokens.cream }}>과거의 참수 작전들이 보여준 교훈:</span>
      </Body>
      <ul style={{ fontSize: 32, lineHeight: 1.6, paddingLeft: 40 }}>
        <li style={{ marginBottom: 16 }}><strong>사담 후세인 (이라크):</strong> 체포 및 처형이 반란을 끝내지 못했고, 오히려 ISIS 잉태의 토양이 됨</li>
        <li style={{ marginBottom: 16 }}><strong>무아마르 카다피 (리비아):</strong> 2011년 사살 이후 10년이 넘는 대리전 및 내전의 늪에 빠짐</li>
        <li style={{ marginBottom: 16 }}><strong>마약 카르텔:</strong> 랜드연구소 조사 결과, 킹핀 제거 후 60%의 사례에서 카르텔 폭력 및 살인율이 상승함</li>
      </ul>
    </div>
    <PageNumber n={13} />
  </div>
);

const Slide14: Page = () => (
  <div style={fill}>
    <Eyebrow>Implications</Eyebrow>
    <Title>강대국으로의 전략적 신호</Title>
    <div style={{ ...brutalBox, borderLeft: `24px solid ${tokens.accent}`, padding: '40px 60px' }}>
      <Body>
        2026년 초의 일련의 참수 작전들은 단순히 당사국에 머물지 않고, 
        세계의 두 거대 권위주의 정권인 <strong>중국과 북한</strong>에 명확하고 
        강력한 전략적 신호를 발신했습니다.
      </Body>
      <Body>
        이 두 국가는 자신들의 체제 특성(제도적 vs 개인주의적)에 따라 
        전혀 다른 방식으로 이 위협을 인식하고 반응하고 있습니다.
      </Body>
    </div>
    <PageNumber n={14} />
  </div>
);

const Slide15: Page = () => (
  <div style={fill}>
    <Eyebrow>North Korea 1</Eyebrow>
    <Title>북한: 극단적 취약성</Title>
    <div style={{ ...brutalBox }}>
      <Body>
        김정은 체제는 '개인주의적 권위주의'의 극단에 있으며, 당과 군대는 오직 
        최고지도자의 의지를 집행하는 도구로 존재합니다.
      </Body>
      <Body>
        <strong>반응:</strong> 하메네이 사살 직후 김정은의 공개 행보가 극도로 제한되었으며, 
        안전한 지하 시설 중심의 은둔 지도로 전환되었습니다. 동시에 김주애(10세 추정)의 
        군사 행보 노출을 늘리며 불안한 후계 구도를 안정시키려 시도 중입니다.
      </Body>
    </div>
    <PageNumber n={15} />
  </div>
);

const Slide16: Page = () => (
  <div style={fill}>
    <Eyebrow>North Korea 2</Eyebrow>
    <Title>치명적 역설: 핵 통제 위험</Title>
    <div style={{ ...brutalBox, background: tokens.accent, color: tokens.ink, boxShadow: `8px 8px 0 ${tokens.ink}` }}>
      <Body>
        북한의 개인주의적 성향은 참수 작전의 효과를 이론적으로 극대화시키지만, 
        핵무기의 존재가 이를 재앙적 도박으로 만듭니다.
      </Body>
      <Body>
        <strong>"김정은이 사라진다면 누가 핵 스위치를 통제하는가?"</strong><br/>
        지도자 부재로 인한 극도의 혼란 속에서 승인되지 않은 핵무기 사용이나 
        핵물질의 비국가 행위자 유출 위험이 폭발적으로 상승합니다.
      </Body>
    </div>
    <PageNumber n={16} />
  </div>
);

const Slide17: Page = () => (
  <div style={fill}>
    <Eyebrow>China 1</Eyebrow>
    <Title>중국: 제도적 회복력</Title>
    <div style={{ display: 'flex', gap: 40, flex: 1, alignItems: 'center' }}>
      <div style={{ flex: 1, ...brutalBox }}>
        <Body>
          중국 공산당(CCP)은 북한과 달리 최고지도자의 생존 여부와 무관하게 
          기능할 수 있는 방대한 조직적 인프라와 <strong>제도적 깊이(Institutional Depth)</strong>를 갖추고 있습니다.
        </Body>
        <Body>
          따라서 중국에 킹핀 전략을 적용하는 것은 체제 붕괴 효과는 미미한 반면, 
          파국적 전쟁만을 촉발할 위험이 큽니다.
        </Body>
      </div>
      <div style={{ flex: 1, ...brutalBox, padding: 0, height: 400 }}>
        <img src={chinaNkImg} alt="NK vs China" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
    </div>
    <PageNumber n={17} />
  </div>
);

const Slide18: Page = () => (
  <div style={fill}>
    <Eyebrow>China 2</Eyebrow>
    <Title>중국의 대응: 전략적 경보</Title>
    <div style={{ ...brutalBox }}>
      <ul style={{ fontSize: 32, lineHeight: 1.6, paddingLeft: 40 }}>
        <li style={{ marginBottom: 16 }}>중난하이(지도부 관저)의 대중 지도 앱 검색 차단 및 시진핑 개인 경호 인력 대폭 증원</li>
        <li style={{ marginBottom: 16 }}>미국의 도발 명분을 주지 않기 위해 대만 해협 인근의 군사 활동을 일시적으로 축소</li>
        <li style={{ marginBottom: 16 }}>상하이협력기구(SCO)를 통한 참수 규탄 외교 연대 구축 및 <strong>지하 지휘소 및 핵무기 현대화 가속</strong></li>
      </ul>
    </div>
    <PageNumber n={18} />
  </div>
);

const Slide19: Page = () => (
  <div style={fill}>
    <Eyebrow>Policy Recommendations</Eyebrow>
    <Title>정책적 제언</Title>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
      <div style={brutalBox}>
        <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>거버넌스 전이 계획 수립</div>
        <p style={{ fontSize: 22, lineHeight: 1.6 }}>
          목표 제거 자체를 최종 상태로 보지 말고, 포스트 참수 시대의 권력 공백을 
          메울 수 있는 명확한 거버넌스와 안정화 리소스를 반드시 사전 배치해야 합니다.
        </p>
      </div>
      <div style={brutalBox}>
        <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>핵 지휘 통제 레드라인</div>
        <p style={{ fontSize: 22, lineHeight: 1.6 }}>
          핵무장 국가에 대한 참수 작전은 우발적 핵전쟁 발발 가능성을 내포합니다. 
          따라서, 핵무장국의 리더 타격에 대해서는 작전 시 핵 자산을 확보하기 위한 구체적 프로토콜이 필수적입니다.
        </p>
      </div>
    </div>
    <PageNumber n={19} />
  </div>
);

const Slide20: Page = () => (
  <div style={{ ...fill, justifyContent: 'center', background: tokens.ink, color: tokens.paper }}>
    <Eyebrow>Conclusion</Eyebrow>
    <Title size={80} margin="0 0 60px">
      킹핀 전략의 궁극적 시험대
    </Title>
    <div style={{ ...brutalBox, background: tokens.accent, color: tokens.ink, boxShadow: `8px 8px 0 ${tokens.paper}` }}>
      <Body>
        킹핀 전략의 성공 여부는 '지정된 리더를 제거할 수 있는가'가 아니라, 
        <strong>'제거 이후의 환경이 이전보다 더 안정적이고 민주적이며 위협이 적은가'</strong>에 달려 있습니다.
      </Body>
      <Body>
        현재 베네수엘라, 멕시코, 이란의 상황이 증명하듯, 참수 작전이 남기는 
        통제 불가능한 파편화의 부작용은 작전의 원래 목적을 훼손할 만큼 파괴적입니다.
      </Body>
    </div>
    <PageNumber n={20} />
  </div>
);

export const meta: SlideMeta = { title: 'Trump Kingpin Strategy' };

export default [
  Slide1, Slide2, Slide3, Slide4, Slide5, 
  Slide6, Slide7, Slide8, Slide9, Slide10, 
  Slide11, Slide12, Slide13, Slide14, Slide15, 
  Slide16, Slide17, Slide18, Slide19, Slide20
] satisfies Page[];
