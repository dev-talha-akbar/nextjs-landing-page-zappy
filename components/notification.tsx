import { Card, CardHeader } from "@nextui-org/card";

import { HeartIcon } from "./icons";

export const Notification = ({ className, children, ...props }: any) => {
  return (
    <Card className={`${className} w-[300px] rounded-full border-0`} {...props}>
      <CardHeader className="flex gap-3">
        <div className="flex p-4 rounded-full bg-secondary-bg text-secondary">
          <HeartIcon height={40} width={40} />
        </div>
        <div className="flex flex-col text-sm">{children}</div>
      </CardHeader>
    </Card>
  );
};
