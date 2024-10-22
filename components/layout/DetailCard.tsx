import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../Button";

export function DetailCard() {
  return (
    <div className="space-y-8 mt-4">
      <div className="flex">
        <Avatar className="mr-3">
          <AvatarImage src="/BirthIcon.svg" />
        </Avatar>
        <div className="pr-2">
          <h1 className="text-sm text-[#707070] ">Date of Birth</h1>
          <p className="font-semibold text-sm">August 23, 1996</p>
        </div>
      </div>
      <div className="flex">
        <Avatar className="mr-3">
          <AvatarImage src="/FemaleIcon.svg" />
        </Avatar>
        <div className="pr-2">
          <h1 className="text-sm text-[#707070] ">Gender</h1>
          <p className="font-semibold text-sm">Female</p>
        </div>
      </div>
      <div className="flex">
        <Avatar className="mr-3">
          <AvatarImage src="/PhoneIcon.svg" />
        </Avatar>
        <div className="pr-2">
          <h1 className="text-sm text-[#707070] ">Contact Info</h1>
          <p className="font-semibold text-sm">(415) 555-1234</p>
        </div>
      </div>
      <div className="flex">
        <Avatar className="mr-3">
          <AvatarImage src="/PhoneIcon.svg" />
        </Avatar>
        <div className="pr-2">
          <h1 className="text-sm text-[#707070] ">Emergency Contact</h1>
          <p className="font-semibold text-sm">(415) 555-5678</p>
        </div>
      </div>
      <div className="flex">
        <Avatar className="mr-3">
          <AvatarImage src="/InsuranceIcon.svg" />
        </Avatar>
        <div className="pr-2">
          <h1 className="text-sm text-[#707070] ">Insurance Provider</h1>
          <p className="font-semibold text-sm">Sunrise Health Assurance</p>
        </div>
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
}
