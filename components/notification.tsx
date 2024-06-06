import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export const Notification = ({ className, children, ...props }: any) => {
  return (
    <Card className={`${className} w-[300px]`} {...props}>
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={60}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={60}
        />
        <div className="flex flex-col">{children}</div>
      </CardHeader>
    </Card>
  );
};
