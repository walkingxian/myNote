import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';

Vue.use(Vuex);

//需要维护的状态
const state = {
	notes:[],
	activeNote:{},
	show:''
}

const mutations =  {
	//初始化state
	INIT_STORE (state,data) {
		state.notes = data.notes;
		state.show = data.show;
		state.activeNote = data.activeNote;
	},
	//设置当前激活的笔记
	SET_ACTIVE_NOTE(state,note) {
		state.activeNote = note;
	},
	//新增笔记
	NEW_NOTE (state) {
		var newNote = {
			id:+new Date(),
			time:new Date().toLocaleString(),
			title:'新的笔记',
			content:'开始你的新征程吧',
			favorite:false
		}
		//新笔记加入笔记数组，并将当前笔记设为激活
		state.notes.push(newNote);
		state.activeNote = newNote;
	},
	//修改笔记(修改后储存)
	EDIT_NOTE (state,currentNote) {
		//将当前的activeNote替换为修改后的currentNote
		state.activeNote = currentNote;
		//修改原始数据
		//找到currentNote相同id的note在state.notes中的索引,并将note替换为currentNote
		var index = state.notes.map(note => note.id).indexOf(currentNote.id);
		state.notes.splice(index,1,currentNote);
	},
	
	//删除笔记
	DELETE_NOTE(state) {
		state.notes.splice(state.notes.indexOf(state.activeNote),1);
		state.activeNote = state.notes[0] || {}
	},
	//切换笔记的收藏与取消收藏
	TOGGLE_FAVORITE(state) {
		//切换activeNote同时，也会改变notes数组里那个note（同一个引用）
		state.activeNote.favorite = !state.activeNote.favorite;
	},
	//切换显示数据列表类型:全部/收藏
	SET_SHOW_ALL(state,show) {
		state.show = show;
		//切换数据显示，需要同步更行activeNote
		if(show = 'favorite') {
			//获取第一个星标的note，没有就空
			state.activeNote = state.notes.filter(note => note.favorite)[0] || {};
		}else {
			state.activeNote = state.notes[0] || {};
		}
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
