"use client"
import { languageOptions } from "@/lib/uses";
import { useActionState, useState } from "react";
import { addCheckIn } from "@/app/actions/checkin";
import GradingIcon from '@mui/icons-material/Grading';
import TipTap from "./TipTap";

export default function CheckInForm() {
  const [taskCompleted, setTaskCompleted] = useState("");
  const [issues, setIssues] = useState("");
  const [, formAction, ] = useActionState(addCheckIn, {
      success: false,
    });
  return (
    <div className="w-xl m-auto bg-white rounded-2xl shadow-md">
      <div className="flex border-b p-4 justify-between">
          <div className="flex gap-2">
              <div className="bg-[#f4f1fe] flex justify-center h-10 w-10 items-center rounded-lg">
                <GradingIcon className="w-full" sx={{
                  height:"100%",
                  color:"#5c37eb"
                }}/>
              </div>
              <p className="text-xl font-semibold flex items-center">Add Today's Check-In</p>
          </div>
        </div>

      <form action={formAction} className="space-y-4">
        <div className="flex-col flex p-4 gap-4">
          <div className="flex gap-4">

            <div className="flex flex-col flex-1">
              <label className="flex text-sm font-medium">Check-In for Date *</label>
              <input
                type="date"
                name="date"
                className="w-full border rounded-lg p-2 focus:border-green-500 focus:outline-none"
                required
                />
            </div>
            <div className="flex flex-col flex-1">
              <label className="flex text-sm font-medium">Select Language *</label>
              <select
                name="language"
                className="w-full border rounded-lg p-2 focus:border-green-500"
                required
              >
                <option value="">Select a language</option>
                {
                  languageOptions.map((item)=>{
                    return <option value={item} key={item}>{item}</option>
                  })
                }
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">What did you complete today?</label>
            <TipTap
              value={taskCompleted}
              onChange={setTaskCompleted}
              // name="taskCompleted"
              // className="w-full border rounded-lg p-2 focus:border-green-500"
              // placeholder="Sumarize your completed tasks for today"
              // required
              // rows={3}
            />
            <input type="hidden" name="taskCompleted" value={taskCompleted} />
          </div>

          <div>
            <label className="text-sm font-medium">Issues or problem Faced *</label>
            <TipTap
              value={issues}
              onChange={setIssues}
              // className="w-full border rounded-lg p-2 focus:border-green-500"
              // placeholder="Specify your issues faced"
              // rows={3}
            />
            <input type="hidden" name="issues" value={issues} />
            <input
              type="hidden"
              name="taskCompleted"
              value={taskCompleted}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Related Links *</label>
            <input
              type="text"
              name="links"
              className="w-full border rounded-lg p-2 focus:border-green-500"
              placeholder="Add your application, automation or AI agents links"
            />
          </div>
        </div>
        <div className="flex gap-2 justify-end border-t p-4">
          <button
            type="reset"
            className="p-2 px-3"
            >
            Reset
          </button>
          <button
            type="submit"
            className="bg-[#5C37EB] text-white text-sm p-2 px-3 rounded-md hover:opacity-90"
            >
            Submit
          </button>
          </div>
      </form>      
    </div>
  );
}



