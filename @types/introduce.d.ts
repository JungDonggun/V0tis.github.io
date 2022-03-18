interface IntroducePhaseCallback {
  onNext: (url: string) => void;
}

interface IntroducePhaseButtonCallback {
  onClose: () => void;
}

interface IntroduceButtonItem {
  name: string;
  role: string;
}

