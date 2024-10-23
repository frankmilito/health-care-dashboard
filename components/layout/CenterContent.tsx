import Card from "../Card";
import { Charts } from "../Charts";
import { Header } from "../Header";

export const CenterContent = () => {
  return (
    <Card>
      <Header title="Diagnosis History" />
      <Charts />
    </Card>
  );
};
