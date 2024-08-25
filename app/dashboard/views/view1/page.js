import Preview from "@/components/preview/Preview";
import DashboardLayout from "../../page";
import ViewMaster from "@/components/viewMaster/ViewMaster";

export const dynamic = "force-dynamic";

const page = () => {
    return (
        <DashboardLayout>
            <div className="bill-view-wrapper">
                <div className="bill-view-childs">
                    <Preview />
                </div>
                <div className="bill-view-childs">
                    <ViewMaster />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default page