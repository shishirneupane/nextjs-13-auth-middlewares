import { Suspense } from 'react';

async function getUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	return res.json();
}

async function getTodos() {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos');
	return res.json();
}

async function Users() {
	const users = await getUsers();
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return (
		<>
			<h1>List of Users</h1>
			<ol>
				{users.map((u: any) => (
					<li key={u.id}>{u.name}</li>
				))}
			</ol>
		</>
	);
}

async function Todos() {
	const todos = await getTodos();
	await new Promise((resolve) => setTimeout(resolve, 4000));
	return (
		<>
			<h1>List of Todos</h1>
			<ol>
				{todos.slice(0, 10).map((t: any) => (
					<li key={t.id}>{t.title}</li>
				))}
			</ol>
		</>
	);
}

export default async function AboutPage() {
	return (
		<>
			<h1>About Page</h1>
			<Suspense fallback={<p>Fetching users...</p>}>
				<Users />
			</Suspense>

			<Suspense fallback={<p>Fetching todos...</p>}>
				<Todos />
			</Suspense>
		</>
	);
}
