export interface UiStateStructure {
  isLoading?: boolean;
  showFeedback?: boolean;
  isError?: boolean;
  message?: string;
}

export interface FeedbackPayloadStructure {
  message: string;
  isError: boolean;
}
