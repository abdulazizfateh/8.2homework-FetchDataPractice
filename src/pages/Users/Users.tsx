import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserCard from '../../components/UserCard/UserCard';
import type { IUser } from '../../types/types';

const Users = () => {
    // Axios - try/catch
    const [usersData, setUsersData] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/users?limit=30`);
                setUsersData(response.data.users);
            } catch (e) {
                const err = e instanceof Error ? e : new Error('Unknown Error');
                console.log(err);
                setError(err);
            } finally {
                setIsLoading(false);
            }
        }
        setIsLoading(true);
        setError(null);
        getData();
    }, [])
    console.log({ usersData, isLoading, error });

    return (
        <section className='section_users'>
            <div className="container">
                <div className="users_wrapper">
                    <h1 className='text-xl md:text-2xl font-semibold mb-3.5'>Users</h1>
                    <UserCard usersData={usersData} isLoading={isLoading} />
                </div>
            </div>
        </section>
    )
}

export default React.memo(Users);