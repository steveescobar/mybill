"use client";

const Analytics = () => {
    return (
        <div className="analytic-wrapper">
            <div className="report-card-wrapper">
                <div className="nav-breadcrumb">
                    <div className="breadcrumb-parent">
                        <div className="breadcrumb-child">
                            <h3>Dashboard</h3>
                        </div>
                        <div className="breadcrumb-child">
                            <i className="fa fa-angle-right"></i>
                        </div>
                        <div className="breadcrumb-child">
                            <h3>Home</h3>
                        </div>
                        <div className="breadcrumb-child">
                            <i className="fa fa-angle-right"></i>
                        </div>
                    </div>
                    <div className="breadcrumb-parent">
                        <div className="breadcrumb-child">
                            <i className="fa fa-return"></i>
                            <button>Back</button>
                        </div>
                    </div>
                </div>
                <div className="report-card-parent">
                    <div className="report-card-child">
                        <i className="fa fa-users"></i>
                        <h2>All User</h2>

                    </div>
                    <div className="report-card-child">
                        <i className="fa fa-copy"></i>
                        <h2>Screenshot</h2>
                    </div>
                    <div className="report-card-child">
                        <i className="fa fa-globe"></i>
                        <h2>Active User</h2>
                    </div>
                    <div className="report-card-child">
                        <i className="fa fa-user-slash"></i>
                        <h2>Blocked User</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics