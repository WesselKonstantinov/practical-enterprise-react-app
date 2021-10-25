/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';

const injectedReducers = {
	// reducers here to be added one by one.
};

const rootReducer = combineReducers({
	...injectedReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
export const createReducer = () => rootReducer;
