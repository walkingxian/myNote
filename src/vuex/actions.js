//传入初始化数据(可以自己从后台获取，这里使用的是模拟数据)
export const initStore = ({commit},initData) => {
	commit('INIT_STORE',initData);
}

//更新当前的activeNote对象
export const updateActiveNote = ({commit},activeNote) => {
	commit('SET_ACTIVE_NOTE',activeNote);
}

//添加一个note对象
export const newNote = ({commit}) => {
	commit('NEW_NOTE');
}

//删除一个note对象
export	const deleteNote = ({commit}) => {
	commit('DELETE_NOTE');
}

//更行列表显示
export	const updateShow = ({commit},show) => {
	commit('SET_SHOW_ALL',show);
}

//切换星标
export const toggleFavorite = ({commit}) => {
	commit('TOGGLE_FAVORITE');
}

//编辑笔记
export const editNote = ({commit},currentNote) => {
	commit('EDIT_NOTE',currentNote)
}
