import { TaksMeetProps } from "@/lib/types";
import Image from "next/image";

const DispMeets = ({ todos }: { todos: TaksMeetProps[] }) => {
  return (
    <div className="flex flex-col w-full">
      <p className="text-lg font-semibold mb-3">Meetings</p>

      <div className="flex flex-col bg-white rounded-xl max-h-[400px] overflow-y-auto shadow-md">
        {todos.map((x) => (
          <div
            key={x.Task}
            className="flex px-4 py-3 border-b last:border-none gap-4"
          >
            <div className="flex border rounded-lg w-10 items-center h-10 justify-center">
              <Image src={'/images/gMeet.svg'} height={30} width={30} alt="Meet" className="h-7.5 w-7.5 object-cover"/>
            </div>
            <div className="flex flex-col items-start flex-1 min-w-0">
              <p className="font-medium truncate flex-1 text-md">
                {x.Task}
              </p>
              <p className="text-xs ">{x.Topic}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DispMeets;