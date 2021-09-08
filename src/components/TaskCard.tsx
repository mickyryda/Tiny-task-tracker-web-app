import * as React from "react";

type TaskCardProps = {
	className?: string
}
const TaskCard: React.FC<TaskCardProps> = ({ children, className = '' }) => {
	return (
		<div className={className + ' bg-gray-50 border border-gray-300 rounded p-5 relative'}>
			{children}
		</div>
	);
};

export default TaskCard;