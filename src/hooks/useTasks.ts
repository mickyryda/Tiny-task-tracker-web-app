import axios from 'axios'

import { useEffect, useState } from "react"
import { IMember, ITask } from '../types'

const tasksApi = axios.create({
	baseURL: 'https://my-json-server.typicode.com/tri-ad-fed/task-api'
})

const handle = async (request: Promise<any>) => {
	try { return [null, (await request).data] }
	catch (error) { return [error] }
}

const uniqueItems = (source: any[], target: any[]) => {
	const ids = source.map(item => item.id)
	return target.filter((item: any) => !ids.includes(item.id))
}

const useTasks = () => {
	const [message, setMessage] = useState('')
	const [tasks, setTasks] = useState<ITask[]>(
		JSON.parse(localStorage.getItem('__tasks__') || '[]')
	)
	const [members, setMembers] = useState<IMember[]>(
		JSON.parse(localStorage.getItem('__members__') || '[]')
	)

	const deleteTask = (id: any) => {
		setTasks(tasks => tasks.filter(task => +task.id !== +id))
	}

	const createTask = async (task: any) => {
		let [err] = await handle(tasksApi.post('/tasks', task))
		if (!err) {
			let id = tasks.map(t => t.id).sort().pop() || tasks.length + 1
			const newTask = {
				id: id + 1,
				description: task.description,
				assigned: members.find(
					member => member.id === +task.memberId
				) || { id: members.length + 1, name: 'Random Name' }
			}
			setTasks(tasks => [newTask, ...tasks])
			setMessage(`Task #${newTask.id}: "${newTask.description}" has been assigned to ${newTask.assigned.name}`)
		}
	}

	const getDatabase = async () => {
		let [err, res] = await handle(tasksApi.get('/db'))
		if (!err) {
			setTasks(tasks => {
				let uTasks = uniqueItems(tasks, res.tasks)
				return [...uTasks, ...tasks]
			})
			setMembers(members => {
				let uMembers = uniqueItems(members, res.devs)
				return [...uMembers, ...members]
			})
		}
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => { getDatabase() }, [])

	useEffect(() => {
		localStorage.setItem(
			'__tasks__', JSON.stringify(tasks)
		)
	}, [tasks])

	useEffect(() => {
		localStorage.setItem(
			'__members__', JSON.stringify(members)
		)
	}, [members])

	return {
		tasks,
		message,
		members,
		createTask,
		deleteTask
	}
}

export default useTasks