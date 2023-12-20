export const selectIsSignedIn = state => state.auth.isSignedIn;

export const selectUser = state => state.auth.user;

export const selectError = state => state.auth.error;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectWeight = state.auth.weight;

export const selectGoal = state.auth.goal

export const selectIsLoading = state => state.auth.isLoading;