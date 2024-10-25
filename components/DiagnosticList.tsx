import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Card from "./Card";
import { patientRecords } from "@/lib/data";

export const DiagnosticList = () => {
  return (
    <div className="mt-6">
      <Card>
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow className="grid grid-cols-3 font-semibold">
              <TableHead className="font-semibold text-black">
                Problems/Diagnosis
              </TableHead>
              <TableHead className="font-semibold text-black">
                Description
              </TableHead>
              <TableHead className="font-semibold text-black">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patientRecords.map(({ status, description, problem }) => (
              <TableRow className="grid grid-cols-3" key={problem}>
                <TableCell>{problem}</TableCell>
                <TableCell>{description}</TableCell>
                <TableCell>{status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
