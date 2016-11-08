<template>
	<div id="notes-list">
		<div id="list-header">
			<h2>
				<span class="glyphicon glyphicon-pencil"></span>
				笔记本
			</h2>
			<div class="btn-group btn-group-justified" role="group">
				<!--全部笔记-->
				<div class="btn-group" role="group">
					<button type="button" class="btn btn-default" @click="toggleShow('all')" :class="{active:show==='all'}">
						<span class="glyphicon glyphicon-book"></span>
						全部笔记
					</button>
				</div>
				<!--我的收藏-->
				<div class="btn-group" role="group">
					<button type="button" class="btn btn-default" @click="toggleShow('favorite')" :class="{active:show==='favorite'}">
						<span class="glyphicon glyphicon-bookmark"></span>
						我的收藏
					</button>
				</div>	
			</div>
		</div>
		
		<!--笔记列表-->
		<div class="container">
			<div class="list-group">
				<span v-for="note in filteredNote" class="list-group-item" :class="{activeNote:activeNote === note}" @click="updateActiveNote(note)">
					<h4 class="list-group-item-heading">
						<span class="glyphicon" :class="{'glyphicon-star':note.favorite}"></span>
						{{ note.title.trim().substring(0,6) }} 
						<span id="time">| {{ note.time }}</span>
					</h4>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data:function() {
			return {
				show:'all'
			}
		},
		computed:{
			activeNote () {
				return this.$store.state.activeNote;
			},
			filteredNote () {
				return this.$store.getters.filteredNote;
			}
		},
		methods:{
			toggleShow (show) {
				this.show = show;
				this.$store.dispatch('updateShow',this.show);
			},
			updateActiveNote (node) {
				this.$store.dispatch('updateActiveNote',node);
			}
		}
	}
</script>

<style scoped>
	button{
	    	outline:none !important;
	}
    .btn-default:hover {
    	background-color: lightskyblue;
    }
    .btn-default:focus {
    	background-color: lightskyblue;
    }
	.active {
		background-color: lightskyblue;
	}
	.activeNote {
		background-color: lightskyblue;
	}
	.activeNote:hover {
		background-color: lightskyblue;
	}
	.list-group-item:hover {
		background-color: lightgray;
		cursor: pointer;
	}
	.list-group .glyphicon {
		width:15px;
		height: 15px;
	}
	.glyphicon {
		color:green;
	}
	.glyphicon-star {
		color:#F7AE4F;	
	}
	#notes-list {
		float: left;
		width: 300px;
		height: 100%;
		background-color: #F5F5F5;
		font-family: 'Raleway', sans-serif;
		font-weight: 400;
	}
	#list-header {
		padding: 5px 25px 25px 25px;
	}
	#list-header h2 {
		font-weight: 300;
        text-transform: uppercase;
        text-align: center;
        font-size: 22px;
        padding-bottom: 8px;
	}
	#list-header .search {
		margin-top: 20px;
	}
	#notes-list .container {
		height: calc(100% - 137px);
		max-height: calc(100% - 137px);
		overflow: auto;
		width: 100%;
		padding: 0;
	}
	#notes-list .container .list-group-item {
		border:0;
		border-radius: 0;
	}
	#notes-list .container .list-group-item-heading {
		font-weight: 300;
		font-size:15px;
	}
	#time {
		float: right;
	}
</style>

