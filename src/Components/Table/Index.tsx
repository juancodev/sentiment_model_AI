import { Table } from "flowbite-react";
import { tableProps } from "../../Types";
import { Progress } from "flowbite-react";

export function TableData({
  records,
  filteredRecords,
  responseData,
}: tableProps) {
  console.log(filteredRecords);

  return (
    <div className="overflow-x-auto">
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>{records ? records[0][1] : "Texto"}</Table.HeadCell>
          <Table.HeadCell>
            {records ? records[0][2] : "Me Gusta"}
          </Table.HeadCell>
          <Table.HeadCell>
            {records ? records[0][3] : "Comentarios"}
          </Table.HeadCell>
          <Table.HeadCell>
            {records ? records[0][4] : "Compartidos"}
          </Table.HeadCell>
          <Table.HeadCell>
            {records ? records[0][5] : "reacciones"}
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {filteredRecords?.map((data) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {'Apple MacBook Pro 17"'}
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      {/* Respuesta de la api */}

      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>Etiqueta de Sentimiento</Table.HeadCell>
          <Table.HeadCell>Nivel</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {responseData?.map((data) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {data?.label}
              </Table.Cell>
              <Table.Cell>
                {data.length != 0 && (
                  <Progress
                    progress={Math.round(data?.score)}
                    size="sm"
                    color="lime"
                  />
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
