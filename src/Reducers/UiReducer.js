const { createSlice } = require('@reduxjs/toolkit');
const UiReducer = createSlice({
	name: 'ui',
	initialState: {
		mobmenu: '',
		menulist: '',
	},
	reducers: {
		setMobMenu(state, action) {
			state.mobmenu = action.payload;
		},
		setMenuList(state, action) {
			state.menulist = action.payload;
		},
	},
});

const { actions } = UiReducer;
export const { setMobMenu, setMenuList } = actions;

export default UiReducer;
