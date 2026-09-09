import StackCard from "./StackCard";
import TaskCard from "./TaskCard";
function Dashboard() {
    const tasks = [{title: "Learn React", description: "Understanding Components", status: "In Progress"}, 
        {title: "learn JavaScript", description: "Understanding Variables and Functions", status: "Not Started"},
         {title: "learn Python", description: "Understanding Basics", status: "In Progress"}];
    return (
        <main>
            <div className="stats-container">
                <StackCard title="Total Tasks" value="10" />
                <StackCard title="completed" value="6" />
                <StackCard title="Pending" value="4" />
                <StackCard title="time remaining" value="2h 30m" />
                <StackCard title=" Name" value="Unknown" />

            </div>
            <h2>Recent Tasks</h2>
            <div className="task-container">
                <TaskCard  title="Learn React" description="Understanding Components" status="In Progress" />
                <TaskCard title="learn JavaScript" description="Understanding Variables and Functions" status="Not Started" />
                <TaskCard title="learn Python" description="Understanding Basics" status="In Progress" />
            </div>


        </main>
    );
}
export default Dashboard;