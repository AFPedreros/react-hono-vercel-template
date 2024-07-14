import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { api } from "@/client-api";
import { useEffect, useState } from "react";

async function getHello() {
	const response = await api.hello.$get();

	if (!response.ok) {
		throw new Error("Server error");
	}

	const data = await response.json();

	return data;
}

function App() {
	const [hello, setHello] = useState("");

	useEffect(() => {
		getHello().then((response) => {
			setHello(response.message);
		});
	}, []);
	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React + Hono</h1>
			<div className="card">
				<code>{hello}</code>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
