interface IntroducePhaseCallback {
  onNext: (url: string) => void;
}

interface IntroducePhaseButtonCallback {
  onClose: () => void;
}

interface IntroduceButtonItem {
  name: string;
  role: ROLES;
}

type ROLES = 'ROLE_001' | 'ROLE_002' | 'ROLE_003' | 'ROLE_004'


