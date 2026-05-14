import React from 'react';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#09090b', text: '#f8fafc', accent: '#22d3ee' },
  fonts: {
    display: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
    body: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
  },
  typeScale: { hero: 80, body: 32 },
  radius: 12,
};

const muted = '#94a3b8';
const faint = '#1e293b';

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
      <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 60, fontWeight: 800, marginBottom: 56, borderBottom: `2px solid ${faint}`, paddingBottom: 24, color: 'var(--osd-text)' }}>
        {title}
      </h2>
    )}
    <div style={{ flex: 1, fontSize: 'var(--osd-size-body)', lineHeight: 1.6, display: 'flex', flexDirection: 'column' }}>
      {children}
    </div>
  </div>
);

const ImagePlaceholder = ({ prompt }: { prompt: string }) => (
  <div style={{ width: '100%', height: '100%', backgroundColor: faint, border: '2px dashed #334155', borderRadius: 'var(--osd-radius)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, textAlign: 'center' }}>
    <div style={{ color: 'var(--osd-accent)', fontSize: 48, marginBottom: 24 }}>🖼️ Image Placeholder</div>
    <div style={{ color: muted, fontSize: 24, lineHeight: 1.5, maxWidth: '80%' }}>
      <strong>Prompt:</strong><br/>{prompt}
    </div>
    <div style={{ color: '#ef4444', fontSize: 20, marginTop: 24, fontWeight: 600 }}>
      * AI API Quota Exhausted. Run later.
    </div>
  </div>
);

const Cover: Page = () => (
  <div style={{ ...slideStyle, flexDirection: 'row' }}>
    <div style={{ flex: 1.2, padding: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ fontSize: 28, fontWeight: 600, color: 'var(--osd-accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 40 }}>
        AI Engineering Report
      </div>
      <h1 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 800, lineHeight: 1.2, marginBottom: 48, color: 'var(--osd-text)' }}>
        AI 엔지니어링의 진화:<br />개념의 탄생부터<br />자율 에이전트 시대까지
      </h1>
      <p style={{ fontSize: 36, color: muted, lineHeight: 1.6 }}>
        단일 프롬프트에서 메타 엔지니어링으로의<br />8년 간의 패러다임 전환
      </p>
    </div>
    <div style={{ flex: 1, padding: '120px 120px 120px 0' }}>
      <ImagePlaceholder prompt="clean minimalist vector infographic cover showing a linear progression timeline from a single AI node to a complex multi-agent network, neon terminal aesthetic, 16:9" />
    </div>
  </div>
);

const Slide2: Page = () => (
  <div style={slideStyle}>
    <Section title="1. Foundation Model에서 Context Engineering까지">
      <div style={{ display: 'flex', gap: 64, flex: 1 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ marginBottom: 48 }}>
            <h3 style={{ fontSize: 40, fontWeight: 700, color: 'var(--osd-accent)', marginBottom: 24 }}>Prompt Engineering (2020~2023)</h3>
            <p style={{ fontSize: 32, color: muted, lineHeight: 1.6 }}>
              단일 지시문과 예시(Few-shot, CoT)를 통해 모델의 응답을 조율하는 정적인 방식. 모델 자체의 차별화가 줄어들며 점차 한계에 직면함.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 40, fontWeight: 700, color: 'var(--osd-accent)', marginBottom: 24 }}>Context Engineering (2025~)</h3>
            <p style={{ fontSize: 32, color: muted, lineHeight: 1.6 }}>
              다중 턴 상호작용에서 시스템 프롬프트, 작업/의미/에피소딕 메모리, 검색 결과, API 결과를 아우르는 <strong>동적 환경</strong>을 설계하는 기술로 진화.
            </p>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <ImagePlaceholder prompt="clean simple flowchart comparing Prompt Engineering (single input/output node) to Context Engineering (dynamic environment with memory, RAG, and tools), neon terminal style, 16:9" />
        </div>
      </div>
    </Section>
    <PageNumber n={2} total={8} />
  </div>
);

const Slide3: Page = () => (
  <div style={slideStyle}>
    <Section title="2. 정적 한계 극복: RAG & Tool Use">
      <div style={{ display: 'flex', gap: 64, flex: 1 }}>
        <div style={{ flex: 1 }}>
          <ImagePlaceholder prompt="minimalist vector diagram showing an LLM node connecting to external databases (RAG) and external world APIs (Tools) via structured JSON paths, neon terminal style, 16:9" />
        </div>
        <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: 40, fontWeight: 700, marginBottom: 32, color: 'var(--osd-text)' }}>RAG (검색 증강 생성)</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 48 }}>
            <li style={{ marginBottom: 24, fontSize: 32, color: muted, lineHeight: 1.6, display: 'flex' }}>
              <span style={{ color: 'var(--osd-accent)', marginRight: 24 }}>✓</span>
              단순 벡터 검색에서 GraphRAG, Self-RAG 등 <strong>Agentic RAG</strong>로 고도화
            </li>
            <li style={{ fontSize: 32, color: muted, lineHeight: 1.6, display: 'flex' }}>
              <span style={{ color: 'var(--osd-accent)', marginRight: 24 }}>✓</span>
              정보 컷오프 및 환각을 비파라메트릭 메모리 결합으로 해결
            </li>
          </ul>
          <h3 style={{ fontSize: 40, fontWeight: 700, marginBottom: 32, color: 'var(--osd-text)' }}>Tool Use & MCP</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 24, fontSize: 32, color: muted, lineHeight: 1.6, display: 'flex' }}>
              <span style={{ color: 'var(--osd-accent)', marginRight: 24 }}>✓</span>
              ReAct(2022)에서 시작해 Function Calling(2023)으로 API 수준 구현
            </li>
            <li style={{ fontSize: 32, color: muted, lineHeight: 1.6, display: 'flex' }}>
              <span style={{ color: 'var(--osd-accent)', marginRight: 24 }}>✓</span>
              <strong>MCP (Model Context Protocol)</strong> 공개로 생태계 상호운용성 표준화
            </li>
          </ul>
        </div>
      </div>
    </Section>
    <PageNumber n={3} total={8} />
  </div>
);

const Slide4: Page = () => (
  <div style={slideStyle}>
    <Section title="3. Flow Engineering: 다단계 워크플로우">
      <div style={{ display: 'flex', gap: 64, flex: 1 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: 44, fontWeight: 800, color: 'var(--osd-accent)', marginBottom: 32 }}>
            단일 호출의 한계 돌파
          </h3>
          <p style={{ fontSize: 32, color: 'var(--osd-text)', lineHeight: 1.6, marginBottom: 40 }}>
            단일 프롬프트-응답 구조에서 벗어나 <strong>설계, 추론, 생성, 검증, 수정</strong> 단계를 분리하여 파이프라인으로 구성합니다.
          </p>
          <div style={{ background: faint, padding: 40, borderRadius: 'var(--osd-radius)', borderLeft: '4px solid var(--osd-accent)' }}>
            <p style={{ fontSize: 32, color: muted, lineHeight: 1.6 }}>
              AlphaCodium 논문에 따르면 고수준 플로우 엔지니어링만으로 GPT-4의 정확도가 19%에서 <strong>44%</strong>로 대폭 상향되었습니다. 이후 LangGraph 기반의 상태 관리 워크플로우가 업계 표준으로 자리잡았습니다.
            </p>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <ImagePlaceholder prompt="clean flowchart diagram showing 'Single Prompt' node evolving into a complex 'Multi-step Flow' with planning, generation, and verification loop nodes, high tech vector art, 16:9" />
        </div>
      </div>
    </Section>
    <PageNumber n={4} total={8} />
  </div>
);

const Slide5: Page = () => (
  <div style={slideStyle}>
    <Section title="4. Agent Engineering: 자율성의 시대">
      <div style={{ display: 'flex', gap: 64, flex: 1 }}>
        <div style={{ flex: 1 }}>
          <ImagePlaceholder prompt="clean architectural diagram of an Autonomous Agent comprising four pillars: LLM, Memory, Planning, and Tool Use, dark background with glowing connection lines, 16:9" />
        </div>
        <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: 36, fontWeight: 700, marginBottom: 32, color: 'var(--osd-text)' }}>Agent = LLM + Memory + Planning + Tool Use</h3>
          <div style={{ marginBottom: 40 }}>
            <h4 style={{ fontSize: 28, fontWeight: 700, color: 'var(--osd-accent)', marginBottom: 16 }}>캄브리아 폭발 (2023)</h4>
            <p style={{ fontSize: 28, color: muted, lineHeight: 1.6 }}>
              BabyAGI, AutoGPT 등장으로 태스크 자동 생성 및 순환 루프의 가능성 입증.
            </p>
          </div>
          <div style={{ marginBottom: 40 }}>
            <h4 style={{ fontSize: 28, fontWeight: 700, color: 'var(--osd-accent)', marginBottom: 16 }}>프레임워크 성숙 (2024-2025)</h4>
            <p style={{ fontSize: 28, color: muted, lineHeight: 1.6 }}>
              CrewAI, AutoGen 중심의 멀티에이전트 협업 체계 성장. Andrew Ng의 4대 디자인 패턴(Reflection, Tool Use, Planning, Multi-Agent Collaboration) 정립.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: 28, fontWeight: 700, color: 'var(--osd-accent)', marginBottom: 16 }}>산업화 (2026~)</h4>
            <p style={{ fontSize: 28, color: muted, lineHeight: 1.6 }}>
              에이전틱 GPT-3.5가 제로샷 GPT-4를 능가(95.1% vs 48.1%)하며 엔지니어링의 우위 증명. 멀티에이전트 시스템이 지배적 아키텍처로 등극.
            </p>
          </div>
        </div>
      </div>
    </Section>
    <PageNumber n={5} total={8} />
  </div>
);

const Slide6: Page = () => (
  <div style={slideStyle}>
    <Section title="5. Memory, Evaluation, Guardrails & Harness">
      <div style={{ display: 'flex', gap: 64, flex: 1 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: 36, fontWeight: 700, color: 'var(--osd-accent)', marginBottom: 20 }}>Memory Engineering</h3>
          <p style={{ fontSize: 28, color: muted, lineHeight: 1.6, marginBottom: 40 }}>
            세션 간 기억 지속과 긴 대화의 정보 손실을 막기 위해 가상 메모리(코어, 아카이벌, 리콜) 시스템을 구축 (Mem0, Letta 등).
          </p>
          <h3 style={{ fontSize: 36, fontWeight: 700, color: 'var(--osd-accent)', marginBottom: 20 }}>Guardrails & Evaluation</h3>
          <p style={{ fontSize: 28, color: muted, lineHeight: 1.6, marginBottom: 40 }}>
            평가 주도 개발(EDD) 확립 및 런타임 보안·정책 강제. (NVIDIA NeMo Guardrails, NemoClaw OpenShell 등)
          </p>
          <h3 style={{ fontSize: 36, fontWeight: 700, color: '#ef4444', marginBottom: 20 }}>Harness Engineering</h3>
          <p style={{ fontSize: 28, color: muted, lineHeight: 1.6 }}>
            <strong>"Agent = Model + Harness"</strong>. 상태, 도구 오케스트레이션, 오류 복구를 총괄하는 메타 프레임워크로, 모델을 제어하는 인프라스트럭처.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <ImagePlaceholder prompt="structured layered diagram showing the 'Harness Layer' wrapping around Agent, Context, and Guardrails, protecting and guiding the core base model inside, vector style, 16:9" />
        </div>
      </div>
    </Section>
    <PageNumber n={6} total={8} />
  </div>
);

const Slide7: Page = () => (
  <div style={slideStyle}>
    <Section title="6. 실전 시스템 구조: OSINT 멀티에이전트">
      <div style={{ display: 'flex', gap: 64, flex: 1 }}>
        <div style={{ flex: 1 }}>
          <ImagePlaceholder prompt="complex but clean multi-agent architecture diagram showing 5 distinct layers: Collection, Processing, Knowledge, Reasoning, and Guardrails, for OSINT automation, minimalist vector, 16:9" />
        </div>
        <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: 36, fontWeight: 700, marginBottom: 32, color: 'var(--osd-text)' }}>종합 아키텍처 (OSINT 적용 사례)</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 24, fontSize: 28, color: muted, lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--osd-accent)' }}>1. 수집 계층:</strong> Agent + Tool Use + MCP (크롤링, 스크래핑)
            </li>
            <li style={{ marginBottom: 24, fontSize: 28, color: muted, lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--osd-accent)' }}>2. 처리 계층:</strong> RAG + Flow Engineering + Skill (엔티티 추출, GraphRAG)
            </li>
            <li style={{ marginBottom: 24, fontSize: 28, color: muted, lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--osd-accent)' }}>3. 지식 계층:</strong> 하이브리드 RAG + Memory (벡터/그래프 DB, 단기/장기 메모리)
            </li>
            <li style={{ marginBottom: 24, fontSize: 28, color: muted, lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--osd-accent)' }}>4. 추론 계층:</strong> Agent + Evaluation ("법정 토론" 패턴을 통한 다각도 검증)
            </li>
            <li style={{ fontSize: 28, color: muted, lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--osd-accent)' }}>5. 가드레일 계층:</strong> OPSEC, PII 필터링, 데이터 최소화 통제
            </li>
          </ul>
        </div>
      </div>
    </Section>
    <PageNumber n={7} total={8} />
  </div>
);

const Slide8: Page = () => (
  <div style={slideStyle}>
    <Section title="결론: 시스템이 모델을 이긴다 (System beats Model)">
      <div style={{ display: 'flex', gap: 64, flex: 1 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: 48, fontWeight: 800, color: 'var(--osd-text)', marginBottom: 40 }}>
            더 이상 모델 자체가<br />경쟁 우위가 아닙니다.
          </h3>
          <div style={{ background: faint, padding: 48, borderRadius: 'var(--osd-radius)', borderLeft: '4px solid #ef4444' }}>
            <p style={{ fontSize: 32, color: muted, lineHeight: 1.6 }}>
              파운데이션 모델이 대중화(Commoditized)되는 가운데, 진정한 경쟁력은 사전 훈련된 모델을 어떻게 조립하고 설계하느냐, 즉 <strong>어떤 하네스(Harness)를 구축하느냐</strong>에 달려 있습니다.
            </p>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <ImagePlaceholder prompt="clean conceptual diagram showing 'System Architecture (Harness/Flow/Agent)' heavily outweighing 'Base Model' on a scale, symbolizing 'System beats Model', dark tech aesthetic, 16:9" />
        </div>
      </div>
    </Section>
    <PageNumber n={8} total={8} />
  </div>
);

export const meta: SlideMeta = { title: 'AI 엔지니어링의 진화' };
export default [Cover, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8] satisfies Page[];
