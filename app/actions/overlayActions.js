export const SHOW_OVERLAY = 'SHOW_OVERLAY';
export const HIDE_OVERLAY = 'HIDE_OVERLAY';

export const showOverlay = (content) => ({
	type: SHOW_OVERLAY,
	content
});

export const hideOverlay = () => ({
	type: HIDE_OVERLAY
});
