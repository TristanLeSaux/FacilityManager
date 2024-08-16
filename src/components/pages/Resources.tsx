import { resourceListExample } from "@/utils/list";
import '@/styles/Table.css'
import GenericTable from "../tables/GenericTable";
import { ResourcesParameter } from "../tables/TableParameter";

export default function Resources() {

	const dataListe = resourceListExample;

	return (
		<div className="page-content">
			<h1>RESOURCES</h1>

			<GenericTable
				tableParameters={ResourcesParameter()}
				data={dataListe}

			/>
		</div>
	)
}