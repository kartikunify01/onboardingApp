import { TaksMeetProps } from "@/lib/types";

const DispTasks = ({ todos }: { todos: TaksMeetProps[] }) => {
  return (
    <div className="flex flex-col w-full">
      <p className="text-lg font-semibold mb-3">Tasks</p>
      <div className="flex flex-col bg-white rounded-xl max-h-[400px] overflow-y-auto">
        {todos.map((x) => (
          <div
            key={x.Task}
            className="flex flex-col px-4 py-3 border-b last:border-none gap-2"
          >
            <div className="flex justify-between items-center gap-3">
              
              {/* Task Name + Type */}
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <p className="font-medium truncate flex-1">
                  {x.Task}
                </p>

                <span
                  className={`text-sm px-2 py-0.5 rounded-md whitespace-nowrap shrink-0
                    ${
                      x.type === "Course"
                        ? "border border-amber-700 bg-amber-50 text-amber-700"
                        : "border border-blue-700 bg-blue-50 text-blue-700"
                    }`}
                >
                  {x.type}
                </span>
              </div>

              {/* Completed Badge */}
              {x.type === "Course" && (
                <span className="shrink-0 text-white bg-green-600 text-xs px-3 py-1 rounded-md">
                  Completed
                </span>
              )}
            </div>

            {/* Progress */}
            {x.type === "Course" && (
              <div className="flex items-center gap-2 text-sm">
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="bg-green-600 h-full w-full" />
                </div>
                <span className="text-xs text-gray-600">100%</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default DispTasks;