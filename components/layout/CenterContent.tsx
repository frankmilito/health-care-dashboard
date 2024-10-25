import Card from "../Card";
import { Charts } from "../Charts";
import { DiagnosisCard } from "../DiagnosisCard";
import { DiagnosticList } from "../DiagnosticList";
import { Header } from "../Header";

export const CenterContent = () => {
  return (
    <>
      <Card>
        <Header title="Diagnosis History" />
        <Charts />
        <DiagnosisCard />
      </Card>
      <DiagnosticList />
    </>
  );
};
