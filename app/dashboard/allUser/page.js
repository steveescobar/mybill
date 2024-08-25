import Link from "next/link";
import DashboardLayout from "../page";
import { fetchAuthenticatedUser, fetchUsers, } from "@/app/action/user/data";
import moment from "moment";
import LogoutAllUser from "@/components/logoutAllUser/LogoutAllUser";
import BlockUser from "@/components/blockuser/BlockUser";
import Pagination from "@/components/pagination/Pagination";
import Search from "@/components/search/Search";
import Profile from "@/components/appReport/Profile";
import ProtectedRoutes from "@/components/protectedRoutes/ProtectedRoutes";

export const dynamic = "force-dynamic";

const page = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const limit = searchParams?.limit || 10;

  const { users, count } = await fetchUsers(q, page, limit);
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
                  <Search />
                </div>
                <div className="app-management-operation-childs">
                  <Link href="/dashboard/addUser">
                    <button className="btn btn-green mr">Create Account <i className="fa fa-plus"></i></button>
                  </Link>
                  {
                    authUser?.role === "superAdmin"
                      ?
                      <LogoutAllUser />
                      :
                      <>
                      </>
                  }
                </div>
              </div>
              <div className="global-table">
                <table>
                  <thead>
                    <tr>
                      <th>S.N</th>
                      <th>Profile</th>
                      <th>Username</th>
                      <th>User Role</th>
                      <th>Parent User</th>
                      <th>Invitation Code</th>
                      {
                        authUser?.role === "superAdmin"
                          ?
                          <th>Admin Passcode</th>
                          :
                          <></>
                      }
                      <th>Account Status</th>
                      <th>Created At</th>
                      <th>Updated At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      users?.map((data, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td className="table-profile">
                            <div className="table-profile-inner">
                              {data?.username.charAt(0).toUpperCase() ?? ""}
                            </div>
                          </td>
                          <td>{data?.username}</td>
                          <td><p className={data?.role === "user" ? "roleBased roleUser" : data?.role === "admin" ? "roleBased roleAdmin" : "roleBased roleSuperAdmin"}>{data?.role}</p></td>
                          <td>{data?.parentUser}</td>
                          {
                            authUser?.role === "superAdmin"
                              ?
                              <td>{data?.invitationCode}</td>
                              :
                              <td>{data?.role === "superAdmin" || data?.role === "admin" ? data?.invitationCode : "No Data"}</td>
                          }
                          {
                            authUser?.role === "superAdmin"
                              ?
                              <td>{data?.adminPasscode}</td>
                              :
                              <></>
                          }
                          <td>
                            <BlockUser
                              data={JSON.parse(JSON.stringify(data))}
                              authUser={JSON.parse(JSON.stringify(authUser))}
                            />
                          </td>
                          <td>{moment(data?.createdAt).format('MMM Do YYYY, h:mm a')}</td>
                          <td>{moment(data?.updatedAt).format('MMM Do YYYY, h:mm a')}</td>
                          <td className="action-option">
                            <Link href={`/dashboard/editUser/${data?._id}`}>
                              <button className="btn-sm btn-green">Edit</button>
                            </Link>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
                <Pagination count={count} />
              </div>
            </div>
          </div>
        </div>
        <ProtectedRoutes
          authUser={JSON.parse(JSON.stringify(authUser))}
          userType="allUser"
        />
      </DashboardLayout>
    </>
  )
}

export default page