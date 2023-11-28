/**
 * This function renders the content of the summary 
 */
function renderSummary() {

    let content = document.getElementById('content');
    content.innerHTML = tempRenderSummary();
    setActiveNavItem("summary");
    renderGreetingMessage();
    updateSummaryNumbers();
    renderInitials();
}

/**
 * This function is utilized to display the amount of different tasks in their category
 */
function updateSummaryNumbers() {
    const toDoNumber = allTasks.filter(item => item.status === 'todo').length;
    const doneNumber = allTasks.filter(item => item.status === 'done').length;
    const urgentNumber = allTasks.filter(item => item.prio === 'Urgent').length;
    const TasksInBoardNumber = allTasks.length;
    const TasksInProgressNumber = allTasks.filter(item => item.status === 'inProgress').length;
    const awaitingFeedbackNumber = allTasks.filter(item => item.status === 'awaitFeedback').length;
    const urgentTasksWithDueDates = allTasks.filter(item => item.prio === 'Urgent' && item.dueDate !== '');
    let closestDate = '';
    let upcomingDeadline = '';

    if (urgentTasksWithDueDates.length > 0) {
        const dates = urgentTasksWithDueDates.map(item => new Date(item.dueDate));
        closestDate = new Date(Math.min.apply(null, dates));
        upcomingDeadline = closestDate.toISOString().split('T')[0];
    }
    const formattedDate = upcomingDeadline.replace(/(\d{4})-(\d{2})-(\d{2})/, function (match, year, month, day) {
        const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
        return months[parseInt(month, 10) - 1] + ' ' + parseInt(day, 10) + ', ' + year;
    });

    document.getElementById('toDoNumber').innerText = toDoNumber;
    document.getElementById('doneNumber').innerText = doneNumber;
    document.getElementById('urgentNumber').innerText = urgentNumber;
    document.getElementById('TasksInBoardNumber').innerText = TasksInBoardNumber;
    document.getElementById('TasksInProgressNumber').innerText = TasksInProgressNumber;
    document.getElementById('awaitingFeedbackNumber').innerText = awaitingFeedbackNumber;
    document.getElementById('calendarDate').innerText = formattedDate;
}
