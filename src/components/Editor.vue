<template>
	<div id="node-editor">
		<div class="panel panel-default">
			<div class="panel-heading">
				<h4>
					<span class="glyphicon glyphicon-header"></span>
					标题
				</h4>
			</div>
			<div class="panel-body">
				<input type="text" name="title" class="title form-control" v-model="currentNote.title"/>
			</div>
		</div>
		<div class="panel panel-default">
			<div class="panel-heading">
				<h4>
					<span class="glyphicon glyphicon-comment"></span>
					内容
				</h4>
			</div>
			<div class="panel-body">
				<textarea name="content" class="form-control" rows="12" v-model="currentNote.content"></textarea>
			</div>
			<div class="panel-footer">
				<div class="btn-group btn-group-justified">
			  		<div class="btn-group">
			    		<button type="button" class="btn btn-info" @click="updateNote">
			    			<span class="glyphicon glyphicon-ok"></span>
							保存
			    		</button>
			  		</div>
			  		<div class="btn-group">
			    		<button type="button" class="btn btn-warning" @click="cancelSave">
			    			<span class="glyphicon glyphicon-remove"></span>
							取消
			    		</button>
			  		</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed:{
			currentNote () {
				return Object.assign({},this.$store.state.activeNote);
			}
		},
		methods:{
			//保存
			updateNote () {
				this.currentNote.time = new Date().toLocaleString();
				this.$store.dispatch('editNote',this.currentNote);
			},
			//取消保存
			cancelSave () {
				//更新输入框
				this.currentNote.title = this.$store.state.activeNote.title;
				this.currentNote.content = this.$store.state.activeNote.content;
				//更新视图
			    this.$store.dispatch('editNote',this.currentNote);
			}
		}
	}
</script>

<style scoped>
	#note-editor {
		height: 600px;
        width: 500px;
        float: left;
	}
	.glyphicon {
		color:green;
	}
	.panel {
		border-radius: 0;
		width: 500px;
		float: left;
	}
	.panel-heading {
		text-align: center;
		border-radius: 0;
	}
	.panel-heading {
	  border:0px solid gray;	
	}
	.panel.panel-default {
		margin-bottom: 0;
	}
	
	
</style>