import Loader from '@/components/loader/Loader';
import React from 'react';
import { Suspense } from 'react';
import { fetchAuthenticatedUser, fetchedLoggedInUser } from '../action/user/data';
import Welcome from '@/components/welcome/Welcome';
import CheckSecurity from '@/components/checkSecurity/CheckSecurity';
import TopNavigation from '@/components/topNavigation/TopNavigation';

export const dynamic = "force-dynamic";

const page = async ({ children }) => {

    const user = await fetchAuthenticatedUser() || {};
    const loggedInUser = await fetchedLoggedInUser() || {};

    return (
        <>
            <Suspense fallback={<Loader />}>
                <CheckSecurity 
                user={JSON.parse(JSON.stringify(user))} 
                loggedInUser={JSON.parse(JSON.stringify(loggedInUser))} 
                />
                <TopNavigation user={JSON.parse(JSON.stringify(user))} />
                <div className="app-wrapper">
                    <div className="app-wrapper-childs">
                        {children}
                        <Welcome />
                    </div>
                </div>
            </Suspense>
        </>
    )
}

export default page