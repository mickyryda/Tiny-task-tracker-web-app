import * as React from "react";

type TaskFormProps = {
    className?: string,
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

const TaskForm: React.FC<TaskFormProps> = ({ handleSubmit, children, className = '' }) => {
    return (
        <form onSubmit={handleSubmit} className={className}>
            {children}
        </form>
    );
};

export default TaskForm;