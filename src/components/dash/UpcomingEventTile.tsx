import React from "react";
import Image from "next/image";
import moment from "moment";
import { CiBookmark, CiImageOff, CiSaveUp2 } from "react-icons/ci";
import type { SingleUpcomingEventType } from "schemas";
import IconTooltip from "../IconTooltip";

interface UpcomingEventTileProps {
  data: SingleUpcomingEventType;
  handleOnClickDetails: (eventId: string) => void;
  handleOnClickBookmark: (eventId: string) => void;
}

const UpcomingEventTile = ({
  data,
  handleOnClickDetails,
  handleOnClickBookmark,
}: UpcomingEventTileProps) => {
  let location;

  if (!data.city && !data.state) {
    location = "Online";
  } else {
    location = `${data.city}, ${data.state}`;
  }

  return (
    <div className="flex flex-row p-2">
      <div className="container flex basis-1/5">
        {data.image ? (
          <Image
            className="w-full rounded-lg"
            width={150}
            height={150}
            src={data.image}
            alt="Event Image"
          />
        ) : (
          <CiImageOff
            className="flex grow place-self-center text-gray-400"
            size={40}
          />
        )}
      </div>
      <div className="ml-16 flex basis-4/5 flex-col justify-between">
        <p className="font-slate-100 text-xl">
          {moment(data.startDateTime)
            .format("ddd, MMMM D [\u2022] h:mm a")
            .toUpperCase()}
        </p>
        <p className="text-xl font-bold">{data.name}</p>
        <p className="text-l">
          {data.description} &bull; {location}
        </p>
        <div className="flex flex-row justify-between">
          {data.isPrivate ? (
            <div className="max-h-7 rounded-lg bg-es-secondary-light-100 px-8">
              <span className="text-xl font-bold text-es-secondary">
                Private
              </span>
            </div>
          ) : (
            <div className="max-h-7 rounded-lg bg-es-warning-light-100 px-6">
              <span className="text-xl font-bold text-es-warning">Public</span>
            </div>
          )}
          <div className="mr-10 flex flex-row gap-4">
            <IconTooltip tooltip="Details">
              <CiSaveUp2
                className="cursor-pointer hover:shadow-lg"
                size={40}
                onClick={() => handleOnClickDetails(data.id)}
              />
            </IconTooltip>
            <IconTooltip tooltip="Bookmark">
              <CiBookmark
                className="cursor-pointer hover:shadow-lg"
                size={40}
                onClick={() => handleOnClickBookmark(data.id)}
              />
            </IconTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventTile;
