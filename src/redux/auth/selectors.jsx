export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectError = (state) => state.auth.error;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsSignedIn = (state) => state.auth.isSignedIn;
export const selectForgotPasswordState = (state) => state.forgotPassword;



export const selectLastDate = (state) => state.auth.lastWeightDate;

