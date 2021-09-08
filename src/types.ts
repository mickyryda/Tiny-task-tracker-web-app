export interface IMember {
	id: number,
	name: string
}

export interface ITask {
	id: number,
	description: string,
	assigned: IMember
}