import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Card from '../Card';
import Btn from '../Ui/Btn';
import Preloader from '../Ui/Preloader';

import './Users.scss';

const Users = ({ getUsers, users, setUsers, nextPage, setNextPage, isDisabled, setIsDisabled }) => {
    const [loading, setLoading] = useState(false);

    const showMore = async () => {
        try {
            setLoading(true);
            const usersData = await axios.get(nextPage);
            const users = usersData.data.users;
            const totalPages = usersData.data.total_pages;
            const curentPage = usersData.data.page;

            if(curentPage === totalPages) {
                setIsDisabled(true);
            }

            setNextPage(usersData.data.links.next_url);
            if(nextPage === null) {
                setIsDisabled(true);
            }
            setUsers(prev => [...prev, ...users]);
            setLoading(false);
        } catch {
            console.log('no pages left');
            setIsDisabled(true);
        }
    }

    useEffect(() => {
        setLoading(true);
        getUsers();
        setLoading(false);
    }, [])

    return (
        <section className='users' id='users'>
            <div className="container">
                <h2 className="title">Working with GET request</h2>
                <ul className="users__list">
                    {users.length > 0 
                        && users.map(user => (
                            <Card
                                key={user.id}
                                photo={user.photo}
                                name={user.name}
                                position={user.position}
                                email={user.email}
                                phone={user.phone} 
                            />
                        ))
                    }
                </ul>
                {loading && <Preloader />}
                <Btn text='Show more' disabled={isDisabled} handleClick={showMore} />
            </div>
        </section>
    )
}

Users.propTypes = {
    text: PropTypes.string
}

export default Users;
