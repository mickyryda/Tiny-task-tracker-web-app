import useTasks from './hooks/useTasks'
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";
import { useState } from 'react';

const App = () => {

    const { message, members, createTask } = useTasks()
    const [task, setTask] = useState({
        memberId: '',
        description: '',
    })

    const onChangeTask = (e: any) => {
        setTask(task => ({
            ...task, [e.target.name]: e.target.value
        }))
    }

    const onSubmitTaskForm = async (e: any) => {
        e.preventDefault()
        await createTask(task)
    }

    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <div className='flex-1 overflow-y-auto'>
                <div className='mx-auto md:max-w-2xl px-5 md:px-0'>
                    <TaskCard className='mt-5 md:mt-12'>
                        <TaskForm handleSubmit={onSubmitTaskForm} className='p-0 md:p-8'>
                            <h3 className='text-xl font-medium text-gray-900'>Tiny Task Tracker</h3>
                            <div className='flex flex-col space-y-1 mt-6'>
                                <label htmlFor='input-description' className='text-sm text-gray-900'>Task Description:</label>
                                <input value={task.description} onChange={onChangeTask} name='description' id='input-description' className='text-gray-600 border border-gray-300 h-10 py-1 px-3 rounded text-base' />
                            </div>

                            <div className='flex flex-col space-y-1 mt-4'>
                                <label htmlFor='input-member' className='text-sm text-gray-900'>Assign task to...</label>
                                <select value={task.memberId} onChange={onChangeTask} name='memberId' id='input-member' className=' text-gray-600 border border-gray-300 px-3 h-10 rounded text-base'>
                                    <option value=''>Select...</option>
                                    {members.map(member => (
                                        <option
                                            key={member.id}
                                            value={member.id}
                                        >
                                            {member.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button type='submit' className='mt-4 rounded bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white text-xs font-medium uppercase tracking-wide h-10 px-5'>
                                Submit
                            </button>

                            {message && (
                                <div className='px-4 py-2 border bg-green-50 border-green-500 rounded mt-4'>{message}</div>
                            )}

                        </TaskForm>
                    </TaskCard>
                </div>

            </div>
        </div>
    );
};

export default App;