import { TaksMeetProps } from "@/lib/types";

const DispMeets = ({ todos }: { todos: TaksMeetProps[] }) => {
  return (
    <div className="flex flex-col w-full">
      <p className="text-lg font-semibold mb-3">Meetings</p>

      <div className="flex flex-col bg-white rounded-xl max-h-[400px] overflow-y-auto">
        {todos.map((x) => (
          <div
            key={x.Task}
            className="flex flex-col px-4 py-3 border-b last:border-none gap-2"
          >
            <div className="flex justify-between items-center gap-3">
              
              {/* Meeting Title + Type */}
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <p className="font-medium truncate flex-1">
                  {x.Task}
                </p>

                <span className="border border-blue-700 bg-blue-50 text-blue-700 text-sm px-2 py-0.5 rounded-md whitespace-nowrap shrink-0">
                  {x.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DispMeets;