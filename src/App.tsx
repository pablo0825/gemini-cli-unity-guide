import { useEffect, useState } from "react";
import {
  chapters,
  getChapterById,
  getStepById,
  guideMeta,
  stepIndexById,
  steps,
  totalSteps,
} from "./data/guide";
import { GuideStepView } from "./components/GuideStepView";
import { OverviewPage } from "./components/OverviewPage";

function getRouteStepIdFromHash(hash: string): string | null {
  const cleaned = hash.replace(/^#/, "");

  if (!cleaned) {
    return null;
  }

  const match = cleaned.match(/^\/guide\/([a-z0-9-]+)$/);
  return match ? match[1] : null;
}

function setHashForStep(stepId: string) {
  window.location.hash = `/guide/${stepId}`;
}

function clearHash() {
  history.replaceState(null, "", window.location.pathname + window.location.search);
}

export default function App() {
  const [activeStepId, setActiveStepId] = useState<string | null>(() => {
    const routeStepId = getRouteStepIdFromHash(window.location.hash);
    return routeStepId && getStepById(routeStepId) ? routeStepId : null;
  });

  useEffect(() => {
    function handleHashChange() {
      const routeStepId = getRouteStepIdFromHash(window.location.hash);
      setActiveStepId(routeStepId && getStepById(routeStepId) ? routeStepId : null);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  function openStep(stepId: string) {
    setHashForStep(stepId);
  }

  function openOverview() {
    setActiveStepId(null);
    clearHash();
  }

  if (!activeStepId) {
    return (
      <div className="app-shell">
        <header className="app-topbar">
          <button className="brand-button" type="button" onClick={openOverview}>
            <span className="brand-button__badge">★</span>
            <span>{guideMeta.title}</span>
          </button>
        </header>

        <OverviewPage
          title={guideMeta.title}
          subtitle={guideMeta.subtitle}
          audience={guideMeta.audience}
          prerequisites={guideMeta.prerequisites}
          outcomes={guideMeta.outcomes}
          chapters={chapters}
          onStart={() => openStep(steps[0].id)}
          onJumpToChapter={openStep}
        />
      </div>
    );
  }

  const activeStep = getStepById(activeStepId);

  if (!activeStep) {
    return null;
  }

  const stepNumber = (stepIndexById.get(activeStep.id) ?? 0) + 1;
  const activeChapter = getChapterById(activeStep.chapterId);

  if (!activeChapter) {
    return null;
  }

  const previousStep = steps[stepNumber - 2];
  const nextStep = steps[stepNumber];

  return (
    <div className="app-shell app-shell--guide">
      <header className="app-topbar">
        <button className="brand-button" type="button" onClick={openOverview}>
          <span className="brand-button__badge">
            <img src="/icons/star.svg" alt="" width="24" height="24" aria-hidden="true" />
          </span>
          <span>{guideMeta.title}</span>
        </button>
      </header>

      <main>
        <GuideStepView
          chapter={activeChapter}
          step={activeStep}
          currentStepNumber={stepNumber}
          totalSteps={totalSteps}
          hasPrevious={Boolean(previousStep)}
          hasNext={Boolean(nextStep)}
          onPrevious={() => previousStep && openStep(previousStep.id)}
          onNext={() => nextStep && openStep(nextStep.id)}
          onComplete={openOverview}
        />
      </main>
    </div>
  );
}
