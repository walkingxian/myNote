<template>
	<div id="toolbar">
		<i class="glyphicon logo">
			<img src="../assets/logo.png" width="30" height="30"></img>
		</i>
		<i @click="newNote" class="glyphicon glyphicon-plus"></i>
		<i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred:activeNote.favorite}"></i>
		<i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
	</div>
</template>

<script>
	export default {
		computed:{
			activeNote () {
				return this.$store.state.activeNote;
			}
		},
		methods:{
			newNote () {
				this.$store.dispatch('newNote')
			},
			deleteNote () {
	     		this.$store.dispatch('deleteNote');
	     	},
	     	toggleFavorite () {
	     		this.$store.dispatch('toggleFavorite');	
	    	}
		}
	}
	
</script>

<style>
    body {
    	background-color: #F5F5F5;
    }
	#toolbar {
		float: left;
		width: 80px;
		height: 100%;
		background-color: #30414D;
		color:#767676;
		padding: 35px 25px 25px 25px;	
	}
	
	#toolbar .starred {
		color:#F7AE4F;
	}
	
	#toolbar i {
		z-index:2;
		font-size: 30px;
		margin-bottom: 35px;
		cursor: pointer;
		opacity: 0.8;
		transition: opacity 0.5s ease;
	}
	
	#toolbar i:hover {
		opacity: 1;
		color:#F7AE4F;
	}
</style>