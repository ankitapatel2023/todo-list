
$(document).ready(function(){
	let taskList = $("#task-list");
	loadTasks();

	function loadTasks() {
		if (localStorage.getItem("tasks")) {
			taskList.html(localStorage.getItem("tasks"));
			makeTasksSortable();
		}
	}

	function saveTasks() {
		localStorage.setItem("tasks", taskList.html());
	}

	function makeTasksSortable() {
		taskList.sortable({
			update: function(event, ui) {
				saveTasks();
			}
		});
	}

	function addTask() {
		let inputData = $("#new-task");
		let tasklistText = inputData.val();
		if (tasklistText.trim() === '') {
			return;
		}

		let taskItem = $(`<li class="task-data"><span>${tasklistText}</span><i class="bi bi-trash-fill delete"></i></i></li>`);
		taskList.append(taskItem);
		inputData.val("");

		makeTasksSortable();
		saveTasks();
	}

	$("#add-task-button").on("click", addTask);

	taskList.on('click', 'li .delete', function() {
		$(this).parent().remove();
		saveTasks();
	});
});

