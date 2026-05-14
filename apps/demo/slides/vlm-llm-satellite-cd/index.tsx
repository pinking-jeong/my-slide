import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import coverImg from './assets/cover.png';
import archImg from './assets/arch.png';

export const design: DesignSystem = {
  palette: { bg: '#09090b', text: '#fafafa', accent: '#f87171' },
  fonts: {
    display: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
    body: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
  },
  typeScale: { hero: 130, body: 36 },
  radius: 12,
};

const fill = {
  width: '100%',
  height: '100%',
  fontFamily: 'var(--osd-font-body)',
  wordBreak: 'keep-all',
  overflowWrap: 'anywhere',
} as const;

const Cover: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', display: 'flex', flexDirection: 'row', padding: 120 }}>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: 80 }}>
      <div style={{ fontSize: 28, color: 'var(--osd-accent)', fontWeight: 700, marginBottom: 24, letterSpacing: '0.1em' }}>TECHNICAL REPORT</div>
      <h1 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 'var(--osd-size-hero)', fontWeight: 800, margin: 0, lineHeight: 1.15 }}>
        VLM·LLM 기반<br/>위성영상 변화탐지
      </h1>
      <p style={{ fontSize: 'var(--osd-size-body)', color: '#a1a1aa', marginTop: 40, lineHeight: 1.6, maxWidth: 800 }}>
        단순 마스크 생성을 넘어 자연어 질의·응답과 추론으로 진화하는 위성영상 분석 패러다임 리뷰
      </p>
    </div>
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={coverImg} style={{ width: 600, height: 600, objectFit: 'cover', borderRadius: 'var(--osd-radius)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }} alt="Satellite Cover" />
    </div>
  </div>
);

const Page2: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: '120px 160px', display: 'flex', flexDirection: 'column' }}>
    <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 800, margin: 0, color: 'var(--osd-accent)' }}>패러다임의 전환</h2>
    <div style={{ marginTop: 80, flex: 1 }}>
      <ul style={{ fontSize: 'var(--osd-size-body)', lineHeight: 1.7, paddingLeft: 40, margin: 0, color: '#e4e4e7' }}>
        <li style={{ marginBottom: 48 }}><strong>기존 방식의 한계:</strong><br/>사전 정의된 클래스의 이진 마스크 출력만 가능하며, 대규모 픽셀 단위 라벨링이 필수적입니다.</li>
        <li style={{ marginBottom: 48 }}><strong>VLM / LLM의 도입:</strong><br/>자연어 설명, 질의응답, 추론 가능한 분할 마스크 형태로 출력이 다변화되었습니다.</li>
        <li><strong>의의:</strong><br/>의미적 해석을 가능하게 하며, 운영자에게 직접 분석 보고서를 생성할 수 있는 수준으로 발전했습니다.</li>
      </ul>
    </div>
  </div>
);

const Page3: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: '120px 160px', display: 'flex', flexDirection: 'column' }}>
    <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 800, margin: 0, color: 'var(--osd-accent)' }}>5대 접근 패러다임</h2>
    <div style={{ marginTop: 60, flex: 1 }}>
      <ul style={{ fontSize: 32, lineHeight: 1.6, paddingLeft: 40, margin: 0, color: '#e4e4e7' }}>
        <li style={{ marginBottom: 32 }}><strong>지식 주입형 분할 (ChangeCLIP):</strong> 토지피복 텍스트 prompt로 변화 특징의 의미 강화</li>
        <li style={{ marginBottom: 32 }}><strong>변화 캡셔닝 (RSICCformer):</strong> 두 시점의 변화를 자연어 문장으로 기술</li>
        <li style={{ marginBottom: 32 }}><strong>변화 VQA (Qwen-VL):</strong> 사용자의 자연어 질문에 답하는 시각질의응답</li>
        <li style={{ marginBottom: 32 }}><strong>추론 분할 (LISAt):</strong> 복잡한 질의("새로 지어진 건물만 표시")로부터 마스크 직접 생성</li>
        <li><strong>멀티모달 에이전트 (GeoChat):</strong> 대화형 인터페이스에 여러 RS 작업을 통합</li>
      </ul>
    </div>
  </div>
);

const Page4: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: '120px 160px', display: 'flex', flexDirection: 'column' }}>
    <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 800, margin: 0, color: 'var(--osd-accent)' }}>핵심 모델 분석</h2>
    <div style={{ marginTop: 80, flex: 1, display: 'flex', gap: 60 }}>
      <div style={{ flex: 1, background: '#18181b', padding: 48, borderRadius: 'var(--osd-radius)', border: '1px solid #27272a' }}>
        <h3 style={{ fontSize: 44, margin: '0 0 24px 0' }}>ChangeCLIP</h3>
        <p style={{ fontSize: 28, color: '#a1a1aa', lineHeight: 1.6 }}>
          CLIP ViT-B/16 인코더를 활용. 56개 클래스 명칭을 텍스트 prompt로 사용하여 차분 특징의 의미를 추출. VIRCD에서 IoU 75.20% 달성.
        </p>
      </div>
      <div style={{ flex: 1, background: '#18181b', padding: 48, borderRadius: 'var(--osd-radius)', border: '1px solid #27272a' }}>
        <h3 style={{ fontSize: 44, margin: '0 0 24px 0' }}>RSICCformer</h3>
        <p style={{ fontSize: 28, color: '#a1a1aa', lineHeight: 1.6 }}>
          변화 캡셔닝의 표준 모델. 듀얼 브랜치 트랜스포머를 통해 변화 영역을 강조하고, 자연어 캡션을 생성 (LEVIR-CC 벤치마크).
        </p>
      </div>
    </div>
  </div>
);

const Page5: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: '120px 160px', display: 'flex', flexDirection: 'column' }}>
    <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 800, margin: 0, color: 'var(--osd-accent)' }}>추론 분할 (Reasoning Seg)</h2>
    <div style={{ marginTop: 80, flex: 1 }}>
      <h3 style={{ fontSize: 48, margin: '0 0 32px 0' }}>LISAt</h3>
      <ul style={{ fontSize: 'var(--osd-size-body)', lineHeight: 1.7, paddingLeft: 40, margin: 0, color: '#e4e4e7' }}>
        <li style={{ marginBottom: 32 }}>GRES, PreGRES 데이터셋으로 학습된 모델입니다.</li>
        <li style={{ marginBottom: 32 }}>단순 객체 검출을 넘어 "큰 강 옆에 새로 지어진 건물만 표시하라" 같은 다단계 추론 질의를 수행합니다.</li>
        <li>RS-GPT4V 대비 BLEU-4 +10.04%, gIoU +143.36%의 압도적인 성능을 보고합니다.</li>
      </ul>
    </div>
  </div>
);

const Page6: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: '100px 140px', display: 'flex', flexDirection: 'column' }}>
    <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 800, margin: 0, color: 'var(--osd-accent)' }}>SAM + LLaVA 파이프라인</h2>
    <div style={{ marginTop: 40, flex: 1, display: 'flex', gap: 60, alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <ul style={{ fontSize: 28, lineHeight: 1.6, paddingLeft: 32, margin: 0, color: '#e4e4e7' }}>
          <li style={{ marginBottom: 24 }}><strong>1단계 (LLaVA):</strong> 변화 영역 좌표 후보를 자연어로 제안합니다.</li>
          <li style={{ marginBottom: 24 }}><strong>2단계 (SAM):</strong> 제안된 좌표를 prompt로 전달해 정밀 마스크를 생성합니다.</li>
          <li>단일 모델(LISAt)을 두 가지 파운데이션 모델로 분리 구현한 실전적인 아키텍처입니다.</li>
        </ul>
      </div>
      <div style={{ flex: 1, height: 480, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <img src={archImg} style={{ width: 480, height: 480, objectFit: 'contain' }} alt="Architecture" />
      </div>
    </div>
  </div>
);

const Page7: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: '120px 160px', display: 'flex', flexDirection: 'column' }}>
    <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 800, margin: 0, color: 'var(--osd-accent)' }}>한계 및 향후 과제</h2>
    <div style={{ marginTop: 80, flex: 1 }}>
      <ul style={{ fontSize: 'var(--osd-size-body)', lineHeight: 1.7, paddingLeft: 40, margin: 0, color: '#e4e4e7' }}>
        <li style={{ marginBottom: 40 }}><strong>환각 (Hallucination):</strong> 저해상도 위성영상에서 존재하지 않는 객체를 생성할 위험이 크며, 자기 검증 메커니즘이 필요합니다.</li>
        <li style={{ marginBottom: 40 }}><strong>지리적 편향:</strong> 학습 데이터가 특정 대륙에 편중되어 있어, 글로벌 도메인 적응이 요구됩니다.</li>
        <li><strong>시계열 처리:</strong> 연속적인 SITS(위성 비디오 등)를 다루는 모델은 아직 미성숙하며, 향후 주요 연구 방향입니다.</li>
      </ul>
    </div>
  </div>
);

const Page8: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: '120px 160px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 88, fontWeight: 800, margin: 0, color: 'var(--osd-accent)', textAlign: 'center' }}>결론</h2>
    <div style={{ marginTop: 80, maxWidth: 1200, marginInline: 'auto' }}>
      <p style={{ fontSize: 44, lineHeight: 1.6, color: '#e4e4e7', textAlign: 'center', fontWeight: 600 }}>
        VLM과 LLM은 변화탐지의 패러다임을<br/>
        단순 마스크 출력에서 "대화형 추론"으로 격상시켰습니다.
      </p>
      <div style={{ marginTop: 64, textAlign: 'center', fontSize: 32, color: '#71717a' }}>
        위성 비디오와의 결합이 다음 10년의 혁신을 이끌 것입니다.
      </div>
    </div>
  </div>
);

export const meta: SlideMeta = { title: 'VLM·LLM 기반 위성영상 변화탐지 기술보고서' };
export default [Cover, Page2, Page3, Page4, Page5, Page6, Page7, Page8] satisfies Page[];
