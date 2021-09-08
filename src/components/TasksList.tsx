type TasksListProps = {}
const TasksList: React.FC<TasksListProps> = ({ children }) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5'>
			{children}
		</div>
	);
};

export default TasksList;