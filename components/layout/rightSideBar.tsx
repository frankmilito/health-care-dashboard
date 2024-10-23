import Card from "../Card";
import { DetailCard } from "./DetailCard";
import { LabResults } from "./LabResults";
import { Profile } from "./Profile";

export const RightSideBar = () => {
  return (
    <>
      <Card>
        <Profile />
        <DetailCard />
      </Card>
      <Card className="mt-6">
        <LabResults />
      </Card>
    </>
  );
};
