# 신규입사자 전사 업무흐름도 개선 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 신규입사자가 고객·차량·금액 흐름과 부서별 책임, 승인·인계·예외 처리 및 차량 라이프사이클을 한 화면에서 이해하도록 교육용 페이지를 보완한다.

**Architecture:** 기존 단일 `index.html` 구조와 색상·코믹 학습 레이어를 유지한다. 콘텐츠 보강은 의미 있는 HTML 섹션과 기존 CSS 컴포넌트 확장으로 처리하고, 별도 프레임워크나 의존성은 추가하지 않는다.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, GitHub Pages

**Spec:** 승인된 채팅 설계와 사용자 수정 지시사항

## Global Constraints

- 기존 디자인 톤과 단일 페이지 구조를 유지한다.
- 신규 콘텐츠는 모바일 반응형과 A4 가로 인쇄/PDF 저장에서 읽을 수 있어야 한다.
- 법무·연체·차령연한은 고정 규칙처럼 단정하지 않고 계약·약정·지역별 요건 및 내부 승인 확인을 명시한다.
- 실제 동작이 없는 기능을 시스템 기능처럼 표현하지 않고 교육용 운영 원칙으로 구분한다.

---

### Task 1: 업무 책임·승인·인계 콘텐츠 정비

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: existing role table, swimlane and manual cards.
- Produces: unambiguous department ownership, approval matrix, delivery handoff checklist, system/recording principles.

- [x] **Step 1: Replace duplicated contract ownership copy**
  - Make sales the owner of quotation, contract drafting and final condition negotiation.
  - Make customer management the owner of contract verification, registration and post-signing administration.

- [x] **Step 2: Add approval matrix**
  - Add a responsive table covering discounts, vehicle purchases, payment exceptions, engine control, termination, forced recovery, penalty reduction and debt reduction.

- [x] **Step 3: Add system and history rules**
  - Add a panel defining contract number, customer, vehicle number and amount as linked keys.
  - State that consultation history includes request, owner, next action, due date and result.

- [x] **Step 4: Update delivery handoff**
  - Show sales, management and customer management responsibilities in sequence from contract completion to delivery confirmation.

### Task 2: 차량 라이프사이클·차량 상태값 보완

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: existing vehicle information panel and `.status-track` component.
- Produces: full 12-state vehicle lifecycle, hold metadata and explicit reconditioning/sale branches.

- [x] **Step 1: Expand lifecycle status markup**
  - Use `상품화중 → 출고가능 → 홀딩 → 상담중 → 계약진행 → 계약완료 → 출고완료 → 대여중 → 반납예정 → 반납완료 → 재상품화 또는 매각대기 → 매각완료`.

- [x] **Step 2: Add hold and photo rules**
  - Define hold requester, agent, customer, start/end time and owner.
  - Keep actual photo checklist and add capture date/status freshness.

- [x] **Step 3: Add lifecycle visual**
  - Add a compact vehicle lifecycle strip that connects intake, rental, return, reconditioning and sale.

### Task 3: Verification and deployment readiness

**Files:**
- Modify: `index.html`

- [x] **Step 1: Validate document structure and required labels**
- [x] **Step 2: Run a local static server and inspect page response**
- [x] **Step 3: Verify mobile/print media rules and GitHub Pages source state**
