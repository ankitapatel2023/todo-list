
$(document).ready(function(){
		let inputData = $("#new-task");
		let taskList = $("#task-list");

		if(localStorage.getItem("tasks")){
				taskList.html(localStorage.getItem("tasks"));
		}
		function addTask(){
				let tasklistText = inputData.val();
				if(tasklistText.trim() === ''){
						return;
				}

				let taskItem = $(`<li class="task-data">`+ tasklistText +`<i class="bi bi-trash-fill delete"></i></li>`);

				taskList.append(taskItem);
				inputData.val(" ");

				localStorage.setItem("tasks", taskList.html());
		}
		$("#add-task-button").on("click", addTask);
		
		taskList.sortable();

		taskList.on('click', 'li .delete', function(){
				$(this).parent().remove();

				localStorage.setItem("tasks", taskList.html());
		});
});

