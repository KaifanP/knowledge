const KEY = "comp30023-interactive-revision";

export function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {};
  } catch {
    return {};
  }
}

export function saveProgress(progress) {
  localStorage.setItem(KEY, JSON.stringify(progress));
}

export function updateChapterProgress(progress, chapterId, patch) {
  return {
    ...progress,
    [chapterId]: {
      ...(progress[chapterId] || {}),
      ...patch,
      updatedAt: Date.now()
    }
  };
}
