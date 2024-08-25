import DashboardLayout from "../../page";
import Link from "next/link";
import { fetchAuthenticatedUser, fetchSingleUser } from "@/app/action/user/data";
import UpdateUser from "@/components/updateUser/UpdateUser";
import Profile from "@/components/appReport/Profile";
import ProtectedRoutes from "@/components/protectedRoutes/ProtectedRoutes";

export const dynamic = "force-dynamic";

const page = async ({ params }) => {
    const { id } = params;

    const userInfo = await fetchSingleUser(id) || {};
    const authUser = await fetchAuthenticatedUser() || {};

    return (
        <>
            <DashboardLayout>
                <div className="app-management-wrapper">
                    <div className="app-management-parent">
                        <div className="app-management-childs">
                            <Profile authUser={JSON.parse(JSON.stringify(authUser))} />
                        </div>
                        <div className="app-management-childs">
                            <div className="app-management-operation">
                                <div className="app-management-operation-childs">
                                    <h5 className="form-title">EDIT ACCOUNT</h5>
                                </div>
                                <div className="app-management-operation-childs">
                                    <Link href="/dashboard/allUser">
                                        <button className="btn btn-green"><i className="fa fa-angle-left"></i> Back</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="global-alt-form">
                                <UpdateUser
                                    userInfo={JSON.parse(JSON.stringify(userInfo))}
                                    authUser={JSON.parse(JSON.stringify(authUser))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <ProtectedRoutes
                    authUser={JSON.parse(JSON.stringify(authUser))}
                    userType="allUser"
                />s
            </DashboardLayout>
        </>
    )
}

export default page