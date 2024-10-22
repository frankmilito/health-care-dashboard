import Card from "../Card";
import { DetailCard } from "./DetailCard";
import { Profile } from "./Profile";

export const RightSideBar = () => {
  return (
    <Card>
      <Profile />
      <DetailCard />
    </Card>
  );
};
