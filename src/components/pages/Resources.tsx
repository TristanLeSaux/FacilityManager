import { resourceListExample } from "@/utils/list";

export default function Resources() {
	const resourcesParameter = [
		"Name",
		"Emote",
		"Temps",
		"Category",
	];

	const dataListe = resourceListExample;

	return (
		<div className="page-content">
			<h1>RESOURCES</h1>

			<table className="table-display">
				<thead>
					<tr>
						{resourcesParameter.map((string, index) => (
							<th key={index}>{string}</th>
						))}
					</tr>
				</thead>
				<tbody>

					{dataListe && dataListe.map((resource) => (
						<tr>
							<td>{resource.name}</td>
							<td>{resource.emote}</td>
							<td>{resource.temps}</td>
							<td>{resource.category.name}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}