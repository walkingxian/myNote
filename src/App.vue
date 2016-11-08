<template>
  <div id="app" class="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import NotesList from './components/NotesList.vue';
import Editor from './components/Editor.vue';

const initNote = {
	id: +new Date(),
	time:new Date().toLocaleString(),
	title:'新笔记',
	content:'新的笔记，新的心情',
	favorite:false
}
//模拟初始化数据
const initData = {
	show:'all',
	notes:[initNote],
	activeNote:initNote
};

export default {
	  name: 'app',
	  components: {
		    Toolbar,
		    NotesList,
		    Editor
	  },
	  methods:{
		   initStore () {
		    	 this.$store.dispatch('initStore',initData);
	    }
	  },
	  created () {
	    	this.initStore();
	  }

}
</script>

<style>
	html,#app {
	  height:100%;
	}
	
	body {
		margin: 0;
		padding: 0;
		border:0;
		height: 100%;
		max-height: 100%;
		position: relative;
	}
</style>
