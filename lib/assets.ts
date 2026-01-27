interface onboardingPlansType {
    id:number,
    title:string,
    totalDays:number,
    startDate:Date
}
export const onboardingPlans:onboardingPlansType[] = [
    {
        id:0,
        title:"Basic Training",
        totalDays:21,
        startDate: new Date(2025,0,5)
    },
    {
        id:1,
        title:"Advanced Training",
        totalDays:21,
        startDate: new Date(2025,0,26)
    }
]