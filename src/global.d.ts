export {};

declare global {
  interface Window {
    watsonAssistantInstance?: {
      openWindow: () => void;
      closeWindow?: () => void;
      
    };
  }
}
