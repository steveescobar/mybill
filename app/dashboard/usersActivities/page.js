import DashboardLayout from "../page";
import { fetchAuthenticatedUser, fetchReport, fetchUsersActivities } from "@/app/action/user/data";
import moment from "moment";
import Pagination from "@/components/pagination/Pagination";
import ProtectedRoutes from "@/components/protectedRoutes/ProtectedRoutes";

export const dynamic = "force-dynamic";

const page = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const limit = searchParams?.limit || 10;

  const { usersactivities, count } = await fetchUsersActivities(q, page, limit);
  const { allUsers, activeUser, blockUser } = await fetchReport();

  const authUser = await fetchAuthenticatedUser() || {};

  return (
    <>
      <DashboardLayout>
        <div className="report-wrapper">
          <div className="report-card-wrapper">
            <div className="report-card-parent">
              <div className="report-card-child">
                <div className="report-card-sub-child">
                  <h4>All User</h4>
                  <p>{allUsers}</p>
                </div>
                <div className="report-card-sub-child">
                  <i className="fa fa-users"></i>
                </div>
              </div>
              <div className="report-card-child">
                <div className="report-card-sub-child">
                  <h4>Active User</h4>
                  <p>{activeUser}</p>
                </div>
                <div className="report-card-sub-child">
                  <i className="fa fa-globe"></i>
                </div>
              </div>
              <div className="report-card-child">
                <div className="report-card-sub-child">
                  <h4>Blocked User</h4>
                  <p>{blockUser}</p>
                </div>
                <div className="report-card-sub-child">
                  <i className="fa fa-user-slash"></i>
                </div>
              </div>
              <div className="report-card-child">
                <div className="report-card-sub-child">
                  <h4>Screenshot</h4>
                  <p>22</p>
                </div>
                <div className="report-card-sub-child">
                  <i className="fa fa-copy"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {
          <div className="user-act-container">
            <div className="user-act-parent-container">
              <div className="user-act-child-container">
                <div className="sidebar">
                  <h3>Operations Filter</h3>
                  <ul>
                    <li><button>Logins</button></li>
                    <li><button>Logouts</button></li>
                    <li><button>Registrations</button></li>
                    <li><button>Add Users</button></li>
                    <li><button>Block Users</button></li>
                    <li><button>UnBlock Users</button></li>
                    <li><button>Changed Passwords</button></li>
                  </ul>
                </div>
              </div>
              <div className="user-act-child-container">
                {
                  usersactivities?.length === 0
                    ?
                    <h1>No data!</h1>
                    :
                    <>
                      {
                        usersactivities?.map((data, index) => (
                          <div className="activity-card" key={index}>
                            <div className="activity-text">
                              <p>
                                <i
                                  className={
                                    data.operation === "block"
                                      ?
                                      "fa-solid fa-lock"
                                      :
                                      data.operation === "unblock"
                                        ?
                                        "fa-solid fa-unlock"
                                        :
                                        data.operation === "registration"
                                          ?
                                          "fa-solid fa-user-pen"
                                          :
                                          data.operation === "created_user"
                                            ?
                                            "fa-solid fa-user-plus"
                                            :
                                            data.operation === "login"
                                              ?
                                              "fas fa-sign-in-alt"
                                              :
                                              data.operation === "logout"
                                                ?
                                                "fas fa-sign-out-alt"
                                                :
                                                data.operation === "update_user"
                                                  ?
                                                  "fa-solid fa-pen-to-square"
                                                  :
                                                  data.operation === "change_passcode"
                                                    ?
                                                    "fa-solid fa-key"
                                                    :
                                                    data.operation === "change_password"
                                                      ?
                                                      "fa-solid fa-key"
                                                      :
                                                      data.operation === "change_username"
                                                        ?
                                                        "fa-solid fa-signature"
                                                        :
                                                        <></>
                                  }

                                ></i>
                              </p>
                              <div className="notification-operation">
                                <p>{data.operation}</p>
                              </div>
                            </div>
                            <div className="activity-content ">
                              <p>{data.notification}</p>
                              <p>{moment(data?.createdAt).fromNow()}{" | "}{moment(data?.createdAt).format("YYYY-MM-DD")}</p>
                            </div>
                            <div className="activity-time">
                            </div>
                          </div>
                        ))
                      }
                      <Pagination count={count} />
                    </>
                }
              </div>
            </div>
          </div>
        }

        <ProtectedRoutes
          authUser={JSON.parse(JSON.stringify(authUser))}
          userType="activityTypes"
        />
      </DashboardLayout>
    </>
  )
}

export default page
