const { createSlice } = require('@reduxjs/toolkit');
const UiReducer = createSlice({
	name: 'ui',
	initialState: {
		mobmenu: '',
		menulist: '',
		mainId: null,
		sixuser: null,
		position: null,
		userdata: null,
		allusercount: null,
		availableloan: null,
	},
	reducers: {
		setMobMenu(state, action) {
			state.mobmenu = action.payload;
		},
		setAvailableLoan(state, action) {
			state.availableloan = action.payload;
		},
		setAllUserCount(state, action) {
			state.allusercount = action.payload;
		},
		setPosition(state, action) {
			state.position = action.payload;
		},
		setUserData(state, action) {
			state.userdata = action.payload;
		},
		setSixUser(state, action) {
			state.sixuser = action.payload;
		},
		setMainId(state, action) {
			state.mainId = action.payload;
		},
		setMenuList(state, action) {
			state.menulist = action.payload;
		},
	},
});

const { actions } = UiReducer;
export const {
	setMobMenu,
	setMenuList,
	setMainId,
	setSixUser,
	setPosition,
	setUserData,
	setAvailableLoan,
} = actions;

export default UiReducer;
